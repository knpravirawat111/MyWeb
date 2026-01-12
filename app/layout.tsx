import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravi Rawat | Mendix Developer & AI Enthusiast",
  description:
    "Portfolio of Ravi Rawat - A Mendix Developer with 1.5+ years of experience building enterprise applications, expanding into AI-powered backend development with Python and FastAPI.",
  keywords: [
    "Ravi Rawat",
    "Mendix Developer",
    "Backend Developer",
    "AI Enthusiast",
    "FastAPI",
    "Python",
    "Portfolio",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Ravi Rawat" }],
  creator: "Ravi Rawat",
  openGraph: {
    title: "Ravi Rawat | Mendix Developer & AI Enthusiast",
    description:
      "Building scalable enterprise apps & AI-powered solutions. 1.5+ years of Mendix development experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Rawat | Mendix Developer & AI Enthusiast",
    description:
      "Building scalable enterprise apps & AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
