"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    // Simulate submission delay — replace with real API call
    setTimeout(() => setState("sent"), 1200);
  }

  if (state === "sent") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "48px 24px",
          border: "2px solid #1a1a1a",
          borderRadius: 4,
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "var(--font-caveat), cursive",
          }}
        >
          Message sent! ✉️
        </p>
        <p
          style={{
            fontSize: "1.3rem",
            opacity: 0.65,
            fontFamily: "var(--font-caveat), cursive",
            marginTop: 12,
          }}
        >
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Field label="Name">
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          style={inputStyle}
        />
      </Field>

      <Field label="Email">
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          style={inputStyle}
        />
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Say hello, ask about commissions, or just talk about mushrooms..."
          rows={6}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </Field>

      <button
        type="submit"
        disabled={state === "sending"}
        style={{
          alignSelf: "flex-start",
          padding: "10px 28px",
          border: "2.5px solid #1a1a1a",
          borderRadius: 4,
          background: "#1a1a1a",
          color: "#fafaf8",
          fontSize: "1.3rem",
          fontWeight: 600,
          fontFamily: "var(--font-caveat), cursive",
          cursor: state === "sending" ? "wait" : "pointer",
          opacity: state === "sending" ? 0.6 : 1,
          transition: "opacity 0.15s",
          letterSpacing: "0.04em",
        }}
      >
        {state === "sending" ? "Sending..." : "Send it →"}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          fontFamily: "var(--font-caveat), cursive",
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: "2px solid #1a1a1a",
  borderRadius: 4,
  fontSize: "1.2rem",
  fontFamily: "var(--font-caveat), cursive",
  background: "#fff",
  color: "#1a1a1a",
  outline: "none",
};
