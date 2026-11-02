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
  title: "Dhanush | Aspiring Software Engineer | AI Application Developer",
  description:
    "Engineering student passionate about software development and AI-powered applications. I work with Python, JavaScript, HTML, CSS, and SQL to build practical applications that solve real-world problems. I enjoy exploring Generative AI, integrating AI capabilities into applications, and continuously improving my programming skills.",
  keywords: [
    "Dhanush",
    "Aspiring Software Engineer",
    "AI Application Developer",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Portfolio"
  ],
  authors: [{ name: "Dhanush" }],
  creator: "Dhanush",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhanush-portfolio.vercel.app",
    title: "Dhanush | Aspiring Software Engineer | AI Application Developer",
    description:
      "I build AI-powered web apps that people can actually use.",
    siteName: "Dhanush Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush | Aspiring Software Engineer",
    description: "I build AI-powered web apps that people can actually use."
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
