import React from "react";
import { Link } from "react-router-dom";
import { btn } from "../styles/classes";

export default function NotFound() {
  return (
    <div className="pt-[calc(62px+4rem)] min-h-screen">
      <div className="w-full max-w-shell mx-auto px-6 min-h-[70vh] flex flex-col items-center justify-center text-center gap-4">
        <div className="notfound-code" aria-hidden="true">
          404
        </div>
        <h1>Page not found</h1>
        <p className="text-muted">
          The page you're looking for doesn't exist — but my projects do.
        </p>
        <Link to="/" className={`${btn.base} ${btn.primary}`}>
          Back home
        </Link>
      </div>
    </div>
  );
}
