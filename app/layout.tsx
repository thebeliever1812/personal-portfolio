import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Basir Ahmad | Frontend Developer",
    template: "%s | Basir Ahmad"
  },
  description: "Basir Ahmad is a frontend developer from Delhi, India, building responsive and user-friendly web applications using Next.js, React, TypeScript and Tailwind CSS.",
  keywords: [
    'Basir Ahmad',
    'Frontend Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
    'Tailwind CSS Developer',
    'JavaScript Developer',
    'Web Developer Portfolio',
    'Frontend Projects',
    'Web Development',
    'Delhi Developer',
    'Open Source Developer',
    'Responsive Web Design',
    'Modern Web Technologies',
  ],
  authors: [{ name: "Basir Ahmad", url: "" }],    // Add your portfolio link
  creator: "Basir Ahmad",
  // metadataBase: new URL(''),       // Add your portfolio link
  openGraph: {
    title: 'Basir Ahmad | Frontend Developer',
    description:
      'Basir Ahmad is a frontend developer from Delhi, India, building responsive and user-friendly web applications using Next.js, React, TypeScript and Tailwind CSS.',
    url: '',     // Add your portfolio link
    siteName: 'Basir Ahmad Portfolio',
    locale: 'en_IN',
    type: 'website',
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
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-linear-to-tr from-[#0a001a] via-[#140033] to-[#1f005a]`}
      >
        <header>
          <Header />
        </header>
        <main className="grow pt-16">
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
