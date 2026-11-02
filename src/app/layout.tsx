import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanush | Software Developer | Full-Stack Developer",
  description:
    "Personal portfolio of Dhanush, a Software Developer seeking entry-level and Software Development Engineer (SDE) roles. Specializing in Python, JavaScript, RAG pipelines, cloud database integrations, and practical software solutions.",
  keywords: [
    "Dhanush",
    "Software Developer",
    "Full-Stack Developer",
    "SDE",
    "Python",
    "JavaScript",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Dhanush" }],
  creator: "Dhanush",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhanush-portfolio.vercel.app",
    title: "Dhanush | Software Developer",
    description:
      "Software Developer building AI-powered web applications and practical software solutions.",
    siteName: "Dhanush Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush | Software Developer",
    description: "Software Developer Portfolio."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fafafa] text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
