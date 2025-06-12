import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        color: "var(--text-color)",
      }}
    >
      <h1 style={{ fontSize: "6rem", color: "var(--accent-blue)", margin: 0 }}>
        404
      </h1>
      <h2 style={{ fontSize: "2rem", margin: "1rem 0" }}>Page Not Found</h2>
      <p style={{ color: "var(--accent-blue-light)", fontSize: "1.2rem" }}>
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          color: "var(--accent-blue)",
          textDecoration: "underline",
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
      >
        Go Home
      </a>
    </div>
  );
}
