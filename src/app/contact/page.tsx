import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px 80px" }}>
      <PageHeader title="Contact" sub="let's talk" />

      <p
        style={{
          fontSize: "1.35rem",
          lineHeight: 1.65,
          opacity: 0.7,
          marginBottom: 40,
          fontFamily: "var(--font-caveat), cursive",
        }}
      >
        Whether you want a print, a commission, just want to say hello, or want
        to talk about mushrooms — my inbox is open.
      </p>

      <ContactForm />

      {/* Social / other links */}
      <div
        style={{
          marginTop: 56,
          paddingTop: 32,
          borderTop: "2px solid #1a1a1a",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <SocialLink href="#" label="Instagram" icon="📸" />
        <SocialLink href="#" label="TikTok" icon="🎵" />
        <SocialLink href="mailto:hello@smoothwitch.com" label="Email" icon="✉️" />
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: "1.25rem",
        fontWeight: 600,
        fontFamily: "var(--font-caveat), cursive",
        borderBottom: "2px solid currentColor",
        paddingBottom: 2,
        textDecoration: "none",
        color: "inherit",
      }}
      className="hover:opacity-60 transition-opacity"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          fontFamily: "var(--font-caveat), cursive",
          letterSpacing: "0.02em",
        }}
      >
        {title}
      </h1>
      {sub && (
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.5,
            fontFamily: "var(--font-caveat), cursive",
            marginTop: 4,
          }}
        >
          {sub}
        </p>
      )}
      <svg
        viewBox="0 0 200 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ width: 200, opacity: 0.2, marginTop: 8 }}
      >
        <path d="M4,5 C40,2 80,8 120,4 C155,1 180,7 196,5" />
      </svg>
    </div>
  );
}
