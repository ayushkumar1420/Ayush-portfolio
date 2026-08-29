import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Kumar | Full-Stack Web Developer",
  description:
    "Portfolio of Ayush Kumar — full-stack developer building scalable web products, real-time systems, and AI-powered applications.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
