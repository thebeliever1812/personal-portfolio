import { Metadata } from "next";
import { HeroSection, AboutMeSection, ProjectSpotlight, CoreTechnologies, ContactSection } from "./components/HomePageSections";

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to the portfolio of Basir Ahmad, showcasing featured projects, skills, and contact information for frontend development roles.',
  keywords:
    'Basir Ahmad, frontend developer, web developer, portfolio, web development, projects, skills, contact',
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
