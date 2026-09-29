import { useState } from "react";
import { FiCheckCircle, FiSend, FiXCircle } from "react-icons/fi";
import { btn, formField } from "../../styles/classes";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form with client-side validation and idle/sending/success/error
 * states. Submits to Formspree when REACT_APP_FORMSPREE_ID is set (add it
 * in Vercel → Settings → Environment Variables, then redeploy). Without
 * the ID the form simulates a successful submit so the UI stays testable.
 */
export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const setField = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    // Clear the field's error as soon as the user starts fixing it
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please tell me your name.";
    if (!values.email.trim()) next.email = "An email address is required.";
    else if (!EMAIL_RE.test(values.email)) next.email = "That email doesn't look right.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    if (values.message.trim() && values.message.trim().length < 10) {
      next.message = "A little more detail helps — at least 10 characters.";
    }
    return next;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    const formspreeId = process.env.REACT_APP_FORMSPREE_ID;
    const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: values.name,
            email: values.email, // Formspree uses this as the reply-to address
            message: values.message,
            _subject: `Portfolio message from ${values.name}`,
          }),
        });

        if (!res.ok) {
          // Surface Formspree's per-field errors when it returns them
          let fieldErrors = {};
          try {
            const data = await res.json();
            (data.errors || []).forEach((e) => {
              if (e.field === "email") fieldErrors.email = "Formspree rejected this email address.";
              else if (e.field === "message") fieldErrors.message = e.message || "Message was rejected.";
            });
          } catch {
            // non-JSON error response — fall through to the generic error state
          }
          if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            setStatus("idle");
            return;
          }
          throw new Error(`Formspree responded ${res.status}`);
        }
      } else {
        // No endpoint configured yet: simulate a network round-trip so the
        // success state can be demoed without a backend.
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="grid gap-6" onSubmit={onSubmit} noValidate>
      <div className={formField}>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={setField("name")}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="text-[#e5484d] text-[0.82rem] mt-1 mb-0">{errors.name}</p>
        ) : null}
      </div>

      <div className={formField}>
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={setField("email")}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p className="text-[#e5484d] text-[0.82rem] mt-1 mb-0">{errors.email}</p>
        ) : null}
      </div>

      <div className={formField}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Hi Sakthi — I'd like to talk about…"
          value={values.message}
          onChange={setField("message")}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="text-[#e5484d] text-[0.82rem] mt-1 mb-0">{errors.message}</p>
        ) : null}
      </div>

      {status === "success" ? (
        <p
          className="px-3.5 py-3 rounded text-[0.92rem] mb-0 bg-[rgba(46,160,67,0.12)] text-[#2ea043] border border-[rgba(46,160,67,0.4)]"
          role="status"
        >
          <FiCheckCircle aria-hidden="true" /> Thanks! Your message has been sent — I'll get back
          to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          className="px-3.5 py-3 rounded text-[0.92rem] mb-0 bg-[rgba(229,72,77,0.1)] text-[#e5484d] border border-[rgba(229,72,77,0.4)]"
          role="alert"
        >
          <FiXCircle aria-hidden="true" /> Something went wrong. Please try again, or email me
          directly.
        </p>
      ) : null}

      <div>
        <button className={`${btn.base} ${btn.primary}`} type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <span
                className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                aria-hidden="true"
              />{" "}
              Sending…
            </>
          ) : (
            <>
              <FiSend aria-hidden="true" /> Send message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
