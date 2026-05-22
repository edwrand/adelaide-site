import Image from "@/components/Img";
import Link from "next/link";

const artworks = [
  {
    src: "/assets/mushroom_art.png",
    title: "Mushroom Guy",
    medium: "crayon on paper",
    year: "2025",
  },
  {
    src: "/assets/sad_girl.png",
    title: "Portrait Study",
    medium: "ink on paper",
    year: "2025",
  },
];

const placeholders = [
  "Oil pastel study",
  "Figure drawing",
  "Still life",
  "Botanical sketch",
];

export default function StudioPage() {
  return (
    <div className="page-wrap" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
      <PageHeader title="The Studio" sub="original drawings & illustrations" />

      <p
        style={{
          fontSize: "1.3rem",
          lineHeight: 1.6,
          opacity: 0.7,
          maxWidth: 520,
          margin: "0 auto 48px",
          textAlign: "center",
          fontFamily: "var(--font-caveat), cursive",
        }}
      >
        A collection of drawings, illustrations, and experiments from the
        sketchbook.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(230px, 44%), 1fr))",
          gap: 28,
        }}
      >
        {artworks.map((art) => (
          <div
            key={art.title}
            style={{
              border: "2px solid #1a1a1a",
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
              <Image
                src={art.src}
                alt={art.title}
                fill
                style={{ objectFit: "contain", padding: 16 }}
              />
            </div>
            <div
              style={{
                padding: "12px 16px",
                borderTop: "2px solid #1a1a1a",
              }}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-caveat), cursive",
                }}
              >
                {art.title}
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  opacity: 0.5,
                  fontFamily: "var(--font-caveat), cursive",
                }}
              >
                {art.medium} — {art.year}
              </p>
            </div>
          </div>
        ))}

        {placeholders.map((name) => (
          <div
            key={name}
            style={{
              border: "2px dashed #1a1a1a",
              borderRadius: 4,
              aspectRatio: "3/4",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              opacity: 0.35,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="4" y="4" width="32" height="32" rx="2" />
              <line x1="14" y1="20" x2="26" y2="20" />
              <line x1="20" y1="14" x2="20" y2="26" />
            </svg>
            <span
              style={{
                fontSize: "1.05rem",
                fontFamily: "var(--font-caveat), cursive",
                textAlign: "center",
                padding: "0 12px",
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontSize: "0.9rem",
                fontFamily: "var(--font-caveat), cursive",
                opacity: 0.7,
              }}
            >
              coming soon
            </span>
          </div>
        ))}
      </div>

      {/* Design & Branding */}
      <div style={{ marginTop: 72 }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "var(--font-caveat), cursive",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Design &amp; Branding
        </h2>
        <p
          style={{
            fontSize: "1.15rem",
            opacity: 0.5,
            fontFamily: "var(--font-caveat), cursive",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          client work &amp; visual identity
        </p>

        <a
          href="https://apps.apple.com/us/app/valor%C3%A9/id6760678152"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block", maxWidth: 340, margin: "0 auto" }}
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <div
            style={{
              border: "2px solid #1a1a1a",
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <div
              style={{
                aspectRatio: "4/3",
                background: "#f5f0eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "4rem",
                  fontFamily: "var(--font-caveat), cursive",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  opacity: 0.75,
                }}
              >
                Valoré
              </span>
            </div>
            <div
              style={{
                padding: "12px 16px",
                borderTop: "2px solid #1a1a1a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-caveat), cursive",
                  }}
                >
                  Valoré
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    opacity: 0.5,
                    fontFamily: "var(--font-caveat), cursive",
                  }}
                >
                  design &amp; branding — 2025
                </p>
              </div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.35, flexShrink: 0, marginTop: 4 }}
              >
                <path d="M5 13L13 5M13 5H7M13 5V11" />
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div style={{ textAlign: "center", marginTop: 56 }}>
        <Link href="/shop">
          <span
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              fontFamily: "var(--font-caveat), cursive",
              borderBottom: "2.5px solid currentColor",
              paddingBottom: 2,
            }}
            className="hover:opacity-60 transition-opacity"
          >
            Buy prints in the Shop →
          </span>
        </Link>
      </div>
    </div>
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
