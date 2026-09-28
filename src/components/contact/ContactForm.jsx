import { useState } from "react";
import { FiCheckCircle, FiSend, FiXCircle } from "react-icons/fi";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form with client-side validation and idle/sending/success/error
 * states. Submitting is wired to Formspree — set your form ID in
 * src/config.js (see ASSETS-README.txt). Without a form ID the form
 * simulates a successful submit so the UI is fully testable.
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
    const endpoint = process.env.REACT_APP_FORMSPREE_ID
      ? `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_ID}`
      : null;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
        });
        if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
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
    <form className="form-grid" onSubmit={onSubmit} noValidate>
      <div className="form-field">
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
        {errors.name ? <p className="form-error">{errors.name}</p> : null}
      </div>

      <div className="form-field">
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
        {errors.email ? <p className="form-error">{errors.email}</p> : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Hi Sakthi — I'd like to talk about…"
          value={values.message}
          onChange={setField("message")}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="form-error">{errors.message}</p> : null}
      </div>

      {status === "success" ? (
        <p className="form-status success" role="status">
          <FiCheckCircle aria-hidden="true" /> Thanks! Your message has been sent — I'll get back
          to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="form-status error" role="alert">
          <FiXCircle aria-hidden="true" /> Something went wrong. Please try again, or email me
          directly.
        </p>
      ) : null}

      <div>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <span className="spinner" aria-hidden="true" /> Sending…
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
