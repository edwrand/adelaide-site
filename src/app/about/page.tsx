import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <PageHeader title="About" sub="the person behind smooth witch" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 48,
          alignItems: "flex-start",
          marginTop: 40,
        }}
      >
        {/* Portrait + signature */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            flex: "0 0 auto",
          }}
        >
          <div
            style={{
              border: "2px solid #1a1a1a",
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
              width: 220,
            }}
          >
            <div style={{ position: "relative", width: 220, aspectRatio: "3/4" }}>
              <Image
                src="/assets/sad_girl.png"
                alt="Self portrait by Adelaide"
                fill
                style={{ objectFit: "contain", padding: 12 }}
              />
            </div>
          </div>
          <Image
            src="/assets/by_adelaide.png"
            alt="By Adelaide"
            width={180}
            height={55}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Bio text */}
        <div style={{ flex: "1 1 280px" }}>
          <p
            style={{
              fontSize: "1.4rem",
              lineHeight: 1.7,
              fontFamily: "var(--font-caveat), cursive",
              marginBottom: 20,
            }}
          >
            Hi, I&apos;m Adelaide — also known as Smooth Witch online. I&apos;m
            an artist, illustrator, and photographer based wherever my sketchbook
            is.
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              lineHeight: 1.7,
              fontFamily: "var(--font-caveat), cursive",
              marginBottom: 20,
              opacity: 0.8,
            }}
          >
            I draw mostly in ink and crayon. I shoot mostly on film. I make
            things that feel a little strange and hopefully a lot honest.
          </p>
          <p
            style={{
              fontSize: "1.4rem",
              lineHeight: 1.7,
              fontFamily: "var(--font-caveat), cursive",
              opacity: 0.8,
            }}
          >
            This site is a home for everything I make — a little studio, a
            little gallery, a little shop. Come in, look around, stay a while.
          </p>

          <div style={{ marginTop: 36, display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link href="/studio">
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-caveat), cursive",
                  borderBottom: "2.5px solid currentColor",
                  paddingBottom: 2,
                }}
                className="hover:opacity-60 transition-opacity"
              >
                See my work →
              </span>
            </Link>
            <Link href="/contact">
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-caveat), cursive",
                  borderBottom: "2.5px solid currentColor",
                  paddingBottom: 2,
                }}
                className="hover:opacity-60 transition-opacity"
              >
                Say hello →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Fun facts */}
      <div
        style={{
          marginTop: 64,
          border: "2px solid #1a1a1a",
          borderRadius: 4,
          padding: "28px 32px",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            fontFamily: "var(--font-caveat), cursive",
            marginBottom: 20,
          }}
        >
          Quick Facts
        </h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            listStyle: "none",
            padding: 0,
          }}
        >
          {[
            "✏️  Drawing since I could hold a pencil",
            "📷  Currently shooting on 35mm film",
            "🍄  Mushrooms are a recurring motif — make of that what you will",
            "📬  Always open for commissions & collaborations",
            "🌙  The witch part is metaphorical. Mostly.",
          ].map((fact) => (
            <li
              key={fact}
              style={{
                fontSize: "1.25rem",
                fontFamily: "var(--font-caveat), cursive",
                lineHeight: 1.4,
              }}
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 16 }}>
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
