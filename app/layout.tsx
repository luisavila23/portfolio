import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Luis Avila",
  description:
    "Portfolio of Luis Eduardo Ávila, Full-Stack Developer focused on React, TypeScript, Next.js, Node.js and modern web applications.",
  keywords: [
    "Luis Eduardo Ávila",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Angular Developer",
    "Software Developer Colombia",
  ],
  authors: [
    {
      name: "Luis Eduardo Avila",
    },
  ],
  openGraph: {
    title: "Portfolio | Luis Avila",
    description:
      "Full-Stack Developer building modern, scalable and user-focused web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}