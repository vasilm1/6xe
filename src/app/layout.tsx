import type { Metadata } from "next";
import { Rubik_Glitch, Orbitron } from "next/font/google";
import "./globals.css";

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  variable: "--font-rubik-glitch",
  weight: "400",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "6XE",
  description: "6XE Official Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubikGlitch.variable} ${orbitron.variable}`}>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
