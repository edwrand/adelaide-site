import Image from "@/components/Img";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center px-6 pt-10 pb-16">
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: "0.02em",
            maxWidth: 480,
            lineHeight: 1.3,
            marginBottom: 48,
            fontFamily: "var(--font-caveat), cursive",
          }}
        >
          Art, illustration &amp; photography
          <br />
          <span style={{ fontWeight: 400, fontSize: "1.6rem", opacity: 0.6 }}>
            made with strange love
          </span>
        </p>

        <div
          className="hero-images"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 32,
          }}
        >
          <Image
            src="/assets/mushroom_art.png"
            alt="Mushroom character illustration"
            width={260}
            height={300}
            className="hero-img"
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/assets/sad_girl.png"
            alt="Ink portrait"
            width={190}
            height={270}
            className="hero-img"
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/assets/i_am_art.png"
            alt="I Am Art"
            width={200}
            height={200}
            className="hero-img"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "center",
          }}
        >
          <CtaLink href="/studio" label="See the Studio →" />
          <CtaLink href="/photos" label="Browse Photos →" />
          <CtaLink href="/shop" label="Visit the Shop →" />
        </div>
      </section>

      <Squiggle />

      {/* Recent Work */}
      <section className="px-6 py-14 flex flex-col items-center">
        <SectionTitle>Recent Work</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(210px, 44%), 1fr))",
            gap: 24,
            maxWidth: 820,
            width: "100%",
            marginTop: 32,
          }}
        >
          <PreviewCard
            href="/studio"
            imgSrc="/assets/mushroom_art.png"
            label="Mushroom Guy"
            sub="illustration"
          />
          <PreviewCard
            href="/studio"
            imgSrc="/assets/sad_girl.png"
            label="Portrait Study"
            sub="ink drawing"
          />
          <ExternalPreviewCard
            href="https://apps.apple.com/us/app/valor%C3%A9/id6760678152"
            label="Valoré"
            sub="design & branding"
          />
          <PlaceholderCard href="/studio" label="More in the Studio →" />
        </div>
      </section>

      <Squiggle />

      {/* About blurb */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "56px 24px",
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        <SectionTitle>Hello!</SectionTitle>
        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: 1.55,
            textAlign: "center",
            marginTop: 16,
            opacity: 0.75,
            fontFamily: "var(--font-caveat), cursive",
          }}
        >
          I&apos;m Adelaide — I make drawings, take photos, and sometimes sell
          things. Welcome to my little corner of the internet.
        </p>
        <Link href="/about" style={{ marginTop: 28 }}>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              borderBottom: "2.5px solid currentColor",
              paddingBottom: 2,
              fontFamily: "var(--font-caveat), cursive",
            }}
          >
            More about me →
          </span>
        </Link>
      </section>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "2.2rem",
        fontWeight: 700,
        letterSpacing: "0.02em",
        fontFamily: "var(--font-caveat), cursive",
      }}
    >
      {children}
    </h2>
  );
}

function CtaLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <span
        style={{
          fontSize: "1.3rem",
          fontWeight: 600,
          fontFamily: "var(--font-caveat), cursive",
          borderBottom: "2.5px solid currentColor",
          paddingBottom: 2,
          letterSpacing: "0.03em",
        }}
        className="hover:opacity-60 transition-opacity duration-150"
      >
        {label}
      </span>
    </Link>
  );
}

function PreviewCard({
  href,
  imgSrc,
  label,
  sub,
}: {
  href: string;
  imgSrc: string;
  label: string;
  sub: string;
}) {
  return (
    <Link href={href} className="hover:opacity-80 transition-opacity duration-200">
      <div
        style={{
          border: "2px solid #1a1a1a",
          borderRadius: 4,
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/5" }}>
          <Image
            src={imgSrc}
            alt={label}
            fill
            style={{ objectFit: "contain", padding: 12 }}
          />
        </div>
        <div
          style={{
            padding: "10px 14px",
            borderTop: "2px solid #1a1a1a",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              fontFamily: "var(--font-caveat), cursive",
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontSize: "1rem",
              opacity: 0.5,
              fontFamily: "var(--font-caveat), cursive",
            }}
          >
            {sub}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ExternalPreviewCard({ href, label, sub }: { href: string; label: string; sub: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
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
            aspectRatio: "4/5",
            background: "#f5f0eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "2.2rem",
              fontFamily: "var(--font-caveat), cursive",
              fontWeight: 700,
              letterSpacing: "0.04em",
              opacity: 0.7,
            }}
          >
            Valoré
          </span>
        </div>
        <div
          style={{
            padding: "10px 14px",
            borderTop: "2px solid #1a1a1a",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "var(--font-caveat), cursive" }}>
              {label}
            </p>
            <p style={{ fontSize: "1rem", opacity: 0.5, fontFamily: "var(--font-caveat), cursive" }}>
              {sub}
            </p>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.3, flexShrink: 0, marginTop: 4 }}
          >
            <path d="M4 12L12 4M12 4H6M12 4V10" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function PlaceholderCard({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:opacity-60 transition-opacity duration-200">
      <div
        style={{
          border: "2px dashed #1a1a1a",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "4/5",
          padding: 16,
        }}
      >
        <span
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            textAlign: "center",
            fontFamily: "var(--font-caveat), cursive",
            opacity: 0.55,
          }}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

function Squiggle() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "0 24px" }}>
      <svg
        viewBox="0 0 600 20"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ width: "100%", maxWidth: 600, opacity: 0.14 }}
      >
        <path d="M0,10 C30,3 60,17 90,10 C120,3 150,17 180,10 C210,3 240,17 270,10 C300,3 330,17 360,10 C390,3 420,17 450,10 C480,3 510,17 540,10 C560,5 580,14 600,10" />
      </svg>
    </div>
  );
}
