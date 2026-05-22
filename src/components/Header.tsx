import Image from "@/components/Img";
import Link from "next/link";

const navItems = [
  { href: "/studio",  src: "/assets/new_studio.png",   alt: "Studio",  width: 140, height: 81  },
  { href: "/photos",  src: "/assets/new_photos.png",   alt: "Photos",  width: 140, height: 83  },
  { href: "/shop",    src: "/assets/new_shop.png",     alt: "Shop",    width: 90,  height: 85  },
  { href: "/about",   src: "/assets/new_about.png",    alt: "About",   width: 140, height: 84  },
  { href: "/contact", src: "/assets/new_contact.png",  alt: "Contact", width: 135, height: 87  },
];

export function Header() {
  return (
    <header className="flex flex-col items-center pt-10 pb-6 px-6">
      {/* Clicking the logo returns to home */}
      <Link href="/" className="flex flex-col items-center mb-2 hover:opacity-85 transition-opacity duration-150">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/assets/liquid.png"
            alt="Liquid"
            width={190}
            height={90}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/assets/monday.png"
            alt="Monday"
            width={220}
            height={77}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </Link>

      <nav className="flex flex-wrap items-center justify-center gap-6 mt-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-transform duration-200 hover:scale-105 hover:-rotate-1 active:scale-95"
            style={{ display: "inline-flex" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              style={{ objectFit: "contain" }}
            />
          </Link>
        ))}
      </nav>

      <div
        style={{
          marginTop: 20,
          width: "100%",
          maxWidth: 700,
          height: 2,
          background:
            "repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 8px, transparent 8px, transparent 14px)",
          opacity: 0.15,
        }}
      />
    </header>
  );
}
