import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    "Software engineer in St. Peters, MO. I build and deploy production mobile and web apps with Flutter, TypeScript, Supabase, and Vertex AI. Open to full-time, contract, and hybrid roles.",
  keywords: [
    "Software Engineer St. Louis",
    "Flutter Developer Missouri",
    "Full Stack Developer St. Peters",
    "TypeScript Developer St. Louis",
    "Supabase Developer",
    "Mobile App Developer St. Louis",
    "Contract Software Engineer St. Charles",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jonah Eastin | Software Engineer · Full-Stack & Mobile",
    description:
      "Production mobile and web applications — Flutter, TypeScript, Supabase, Vertex AI. Based in St. Peters, MO.",
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
      <body className="min-h-full flex flex-col bg-slate-950">{children}</body>
    </html>
  );
}
