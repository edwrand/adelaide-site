import Image from "next/image";
import Link from "next/link";

const products = [
  {
    src: "/assets/mushroom_art.png",
    title: "Mushroom Guy Print",
    desc: "5×7 archival print on cotton rag",
    price: "$18",
    available: true,
  },
  {
    src: "/assets/sad_girl.png",
    title: "Portrait Study Print",
    desc: "4×6 archival print",
    price: "$14",
    available: true,
  },
];

const comingSoon = [
  "Original drawings",
  "Sticker sheets",
  "Zines",
  "Custom commissions",
];

export default function ShopPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
      <PageHeader title="The Shop" sub="prints, originals & more" />

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
        Take a little piece of the studio home with you. All prints are made to
        order and shipped with care.
      </p>

      {/* Available */}
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          fontFamily: "var(--font-caveat), cursive",
          marginBottom: 24,
        }}
      >
        Available Now
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 28,
          marginBottom: 56,
        }}
      >
        {products.map((p) => (
          <div
            key={p.title}
            style={{
              border: "2px solid #1a1a1a",
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
              <Image
                src={p.src}
                alt={p.title}
                fill
                style={{ objectFit: "contain", padding: 20 }}
              />
            </div>
            <div
              style={{
                padding: "14px 16px",
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
                {p.title}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  opacity: 0.55,
                  fontFamily: "var(--font-caveat), cursive",
                  marginTop: 4,
                }}
              >
                {p.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 14,
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-caveat), cursive",
                  }}
                >
                  {p.price}
                </span>
                <Link href="/contact">
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-caveat), cursive",
                      background: "#1a1a1a",
                      color: "#fafaf8",
                      padding: "6px 16px",
                      borderRadius: 3,
                    }}
                    className="hover:opacity-75 transition-opacity"
                  >
                    Order →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon */}
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          fontFamily: "var(--font-caveat), cursive",
          marginBottom: 20,
        }}
      >
        Coming Soon
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap: 20,
        }}
      >
        {comingSoon.map((name) => (
          <div
            key={name}
            style={{
              border: "2px dashed #1a1a1a",
              borderRadius: 4,
              padding: "28px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              opacity: 0.38,
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4,8 L16,4 L28,8 L28,18 C28,24 22,28 16,30 C10,28 4,24 4,18 Z" />
              <path d="M11,16 L15,20 L21,12" />
            </svg>
            <span
              style={{
                fontSize: "1.1rem",
                fontFamily: "var(--font-caveat), cursive",
                textAlign: "center",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 56 }}>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.6,
            fontFamily: "var(--font-caveat), cursive",
            marginBottom: 16,
          }}
        >
          Want something custom? Send me a message!
        </p>
        <Link href="/contact">
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
            Get in touch →
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
