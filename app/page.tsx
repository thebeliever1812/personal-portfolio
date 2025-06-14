import { Metadata } from "next";
import { HeroSection, AboutMeSection, ProjectSpotlight, CoreTechnologies, ContactSection } from "./components/HomePageSections";

export const metadata: Metadata = {
  title: 'Home | Basir Ahmad',
  description:
    'Welcome to the portfolio of Basir Ahmad, a frontend developer crafting responsive web apps using React, Next.js, Tailwind CSS, and TypeScript.',
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutMeSection />
      <ProjectSpotlight />
      <CoreTechnologies />
      <ContactSection />
    </div>
  );
}
