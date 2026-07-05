import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noman-vadsariya.dev"),
  title: {
    default: `${profile.shortName} — Software Engineer, Data Engineer and ML Researcher`,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.tagline,
  openGraph: {
    title: profile.shortName,
    description: profile.tagline,
    url: "https://noman-vadsariya.dev",
    siteName: profile.shortName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.shortName,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
