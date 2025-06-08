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
  icons: {
    icon: [
      { url: '/6xe.jpg' }
    ],
    shortcut: '/6xe.jpg',
    apple: [
      { url: '/6xe.jpg' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubikGlitch.variable} ${orbitron.variable}`}>
      <head>
        <link rel="shortcut icon" href="/6xe.jpg" type="image/jpeg" />
        <link rel="icon" href="/6xe.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/6xe.jpg" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
