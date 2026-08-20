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

export const metadata: Metadata = {
  title: "Jonah Eastin | Senior Diagnostic Engineer & AI-Augmented Architect",
  description:
    "Senior Diagnostic Engineer & AI-Augmented Software Architect in St. Peters, MO. I architect and ship high-velocity cloud systems using Flutter, Dart, Supabase, and AI-driven workflows. Available in St. Louis metro — 60-mile radius.",
  keywords: [
    "AI-Augmented Engineer St. Louis",
    "Full Stack Developer St. Peters",
    "Senior Diagnostic Engineer Missouri",
    "Flutter Developer St. Louis",
    "Contract Software Engineer St. Charles",
    "Supabase Developer St. Louis",
  ],
  openGraph: {
    title: "Jonah Eastin | Senior Diagnostic Engineer & AI-Augmented Architect",
    description:
      "I architect and ship high-velocity cloud systems using Flutter, Dart, Supabase, and AI-driven workflows. Based in St. Peters, MO.",
    type: "website",
    url: "https://portfolio-site.vercel.app",
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
