import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Basir Ahmad | Frontend Developer",
    template: "%s | Basir Ahmad"
  },
  description: "Basir Ahmad is a frontend developer from Delhi, India, building responsive and user-friendly web applications using Next.js, React, TypeScript and Tailwind CSS.",
  keywords: [
    'Basir Ahmad',
    'Frontend Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript',
    'Web Developer',
    'Frontend Projects',
    'Web Development',
    'Delhi',
    'Responsive UI',
    'Modern Web Technologies',
    'User-friendly',
    'BCA',
    'Appwrite',
  ],
  authors: [{ name: "Basir Ahmad", url: "https://basir-ahmad-portfolio.vercel.app" }],    // Add your portfolio link
  creator: "Basir Ahmad",
  metadataBase: new URL('https://basir-ahmad-portfolio.vercel.app'),       // Add your portfolio link
  openGraph: {
    title: 'Basir Ahmad | Frontend Developer',
    description:
      'Basir Ahmad is a frontend developer from Delhi, India, building responsive and user-friendly web applications using Next.js, React, TypeScript and Tailwind CSS.',
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
    title: 'Basir Ahmad | Frontend Developer',
    description:
      'Basir Ahmad is a frontend developer from Delhi, India, building responsive and user-friendly web applications using Next.js, React, TypeScript and Tailwind CSS.',
    creator: '@BasirAhmad1812',
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
        <main className="grow pt-16">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
