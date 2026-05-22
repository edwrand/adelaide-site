import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Smooth Witch — by Adelaide",
  description: "Art, illustration, and photography by Adelaide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className="min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-caveat), cursive" }}>
        <Header />
        <main className="flex-1 page-enter">{children}</main>
        <footer className="text-center py-8 text-lg opacity-40 tracking-wide">
          © 2026 Smooth Witch by Adelaide
        </footer>
      </body>
    </html>
  );
}
