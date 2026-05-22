import Link from "next/link";

export type NavVariant = "underline" | "cloud" | "starburst";

interface NavItemProps {
  href: string;
  label: string;
  variant: NavVariant;
}

export function NavItem({ href, label, variant }: NavItemProps) {
  if (variant === "cloud") {
    return (
      <Link
        href={href}
        className="relative inline-flex items-center justify-center transition-transform duration-200 hover:-rotate-2 hover:scale-105 active:scale-95"
        style={{ width: 148, height: 80 }}
      >
        <svg
          viewBox="0 0 148 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path d="M24,56 C10,56 4,44 10,34 C4,22 17,12 30,18 C32,7 46,1 57,8 C65,1 80,3 83,14 C96,10 108,22 103,34 C114,37 114,52 103,56 C107,68 92,74 80,67 C74,76 57,76 51,67 C40,76 20,72 24,56 Z" />
        </svg>
        <span
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "1.35rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            fontFamily: "var(--font-caveat), cursive",
          }}
        >
          {label}
        </span>
      </Link>
    );
  }

  if (variant === "starburst") {
    return (
      <Link
        href={href}
        className="relative inline-flex items-center justify-center transition-transform duration-200 hover:rotate-6 hover:scale-105 active:scale-95"
        style={{ width: 100, height: 100 }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path d="M50,6 L55,24 L70,12 L62,30 L80,28 L66,42 L80,55 L62,50 L60,70 L50,54 L40,70 L38,50 L20,55 L34,42 L20,28 L38,30 L30,12 L45,24 Z" />
        </svg>
        <span
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "1.25rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            fontFamily: "var(--font-caveat), cursive",
          }}
        >
          {label}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex flex-col items-center transition-transform duration-200 hover:-rotate-1 hover:scale-105 active:scale-95"
    >
      <span
        style={{
          fontSize: "1.35rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          fontFamily: "var(--font-caveat), cursive",
        }}
      >
        {label}
      </span>
      <svg
        viewBox="0 0 80 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ width: "100%", marginTop: -3 }}
      >
        <path d="M2,5 C18,2 36,7 52,4 C64,2 73,6 78,4" />
      </svg>
    </Link>
  );
}
