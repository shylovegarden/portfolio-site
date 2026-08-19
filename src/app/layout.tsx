import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonah Eastin | Senior Diagnostic Engineer & AI-Augmented Architect",
  description: "Senior Diagnostic Engineer & AI-Augmented Software Architect in St. Peters, MO. I architect and ship high-velocity cloud systems using Flutter, Dart, Supabase, and AI-driven workflows.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
