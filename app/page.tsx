import { Metadata } from "next";
import { HeroSection, AboutMeSection, ProjectSpotlight, CoreTechnologies, ContactSection } from "./components/HomePageSections";

export const metadata: Metadata = {
  title: 'Basir Ahmad | Full-stack Developer Portfolio',
  description:
    'Welcome to the portfolio of Basir Ahmad, a full-stack developer skilled in MERN and Next.js, crafting scalable apps with modern UI and clean code.',
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
