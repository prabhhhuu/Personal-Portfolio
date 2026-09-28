import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <div className="container notfound">
        <div className="notfound-code" aria-hidden="true">
          404
        </div>
        <h1>Page not found</h1>
        <p className="muted">
          The page you're looking for doesn't exist — but my projects do.
        </p>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </div>
  );
}
