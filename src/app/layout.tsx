import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://jonaheastin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jonah Eastin | Software Engineer · Full-Stack & Mobile",
    template: "%s | Jonah Eastin",
  },
  description:
    "Software engineer, remote. I build and deploy production mobile and web apps with Flutter, TypeScript, Supabase, and Vertex AI. Open to full-time, contract, and hybrid roles.",
  keywords: [
    "Software Engineer Remote",
    "Flutter Developer Remote",
    "Full Stack Developer Remote",
    "TypeScript Developer Remote",
    "Mobile App Developer Remote",
    "Contract Software Engineer Remote",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jonah Eastin | Software Engineer · Full-Stack & Mobile",
    description:
      "Production mobile and web applications — Flutter, TypeScript, Supabase, Vertex AI. Remote.",
    type: "website",
    url: siteUrl,
    siteName: "Jonah Eastin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonah Eastin | Software Engineer",
    description:
      "Production mobile and web applications — Flutter, TypeScript, Supabase, Vertex AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
