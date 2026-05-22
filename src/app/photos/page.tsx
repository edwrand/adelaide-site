const photoPlaceholders = [
  { label: "Golden hour", size: "tall" },
  { label: "Still life", size: "wide" },
  { label: "Texture study", size: "tall" },
  { label: "Street scene", size: "square" },
  { label: "Self portrait", size: "tall" },
  { label: "Window light", size: "wide" },
  { label: "Close up", size: "square" },
  { label: "Landscape", size: "wide" },
];

export default function PhotosPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
      <PageHeader title="Photos" sub="film & digital photography" />

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
        Moments caught on film and digital — mostly light, texture, and things
        that made me stop walking.
      </p>

      {/* Masonry-style grid */}
      <div
        style={{
          columns: "3 220px",
          columnGap: 20,
        }}
      >
        {photoPlaceholders.map((photo, i) => (
          <div
            key={i}
            style={{
              marginBottom: 20,
              breakInside: "avoid",
              border: "2px dashed #1a1a1a",
              borderRadius: 4,
              overflow: "hidden",
              aspectRatio:
                photo.size === "tall"
                  ? "3/4"
                  : photo.size === "wide"
                  ? "4/3"
                  : "1/1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: 0.38,
              background: "#f5f5f2",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <rect x="2" y="6" width="32" height="24" rx="3" />
              <circle cx="18" cy="18" r="7" />
              <circle cx="28" cy="10" r="2" fill="currentColor" />
            </svg>
            <span
              style={{
                fontSize: "1.05rem",
                fontFamily: "var(--font-caveat), cursive",
              }}
            >
              {photo.label}
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

      <div
        style={{
          textAlign: "center",
          marginTop: 48,
          fontSize: "1.15rem",
          opacity: 0.5,
          fontFamily: "var(--font-caveat), cursive",
        }}
      >
        Photos uploading soon — check back!
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
