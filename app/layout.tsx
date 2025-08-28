import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Basir Ahmad | Full-stack Developer",
    template: "%s | Basir Ahmad"
  },
  description: "Full-stack developer skilled in MERN and Next.js, building scalable web apps with modern UI, clean architecture, and real-world functionality.",
  authors: [{ name: "Basir Ahmad", url: "https://basir-ahmad-portfolio.vercel.app" }],    // Add your portfolio link
  creator: "Basir Ahmad",
  metadataBase: new URL('https://basir-ahmad-portfolio.vercel.app'),       // Add your portfolio link
  openGraph: {
    title: 'Basir Ahmad | Full-stack Developer',
    description:
      'Full-stack developer skilled in MERN and Next.js, building scalable web apps with modern UI, clean architecture, and real-world functionality.',
    url: 'https://basir-ahmad-portfolio.vercel.app',     // Add your portfolio link
    siteName: 'Basir Ahmad Portfolio',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://basir-ahmad-portfolio.vercel.app/og-image.png', // Use full URL for best compatibility
        width: 1200,
        height: 630,
        alt: 'Basir Ahmad Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basir Ahmad | Full-stack Developer',
    description:
      'Full-stack developer skilled in MERN and Next.js, building scalable web apps with modern UI, clean architecture, and real-world functionality.',
    creator: '@BasirAhmad1812',
    images: ["https://basir-ahmad-portfolio.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen bg-linear-to-tr from-[#0a001a] via-[#140033] to-[#1f005a]`}
      >
        <header>
          <Header />
        </header>
        <main className="grow pt-5 md:pt-16">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
