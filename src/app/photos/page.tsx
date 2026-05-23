import Image from "@/components/Img";

const photos = [
  "IMG_0033.png",
  "IMG_0055.jpeg",
  "IMG_0072.png",
  "IMG_1280.jpg",
  "IMG_1286.jpg",
  "IMG_1303.jpg",
  "IMG_1370 (1).jpg",
  "IMG_1370.jpg",
  "IMG_2892.jpg",
  "IMG_3237.jpg",
  "IMG_3240.jpg",
  "IMG_3241.jpg",
  "IMG_3242.jpg",
  "IMG_6585.jpg",
  "IMG_6586.jpg",
];

export default function PhotosPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
      <PageHeader title="Photos" sub="film & digital photography" />

      <div
        style={{
          columns: "3 220px",
          columnGap: 20,
        }}
      >
        {photos.map((filename) => (
          <div
            key={filename}
            style={{
              marginBottom: 20,
              breakInside: "avoid",
              border: "2px solid #1a1a1a",
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <Image
              src={`/assets/${filename}`}
              alt={filename}
              width={600}
              height={800}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}
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
