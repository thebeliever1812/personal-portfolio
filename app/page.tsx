import { HeroSection, AboutMeSection, ProjectSpotlight, CoreTechnologies, ContactSection } from "./components/HomePageSections";

export const metadata = {
  title: 'Home | Basir Ahmad',
  description:
    '',
};

export default function Home() {
  return (
    <div className="w-full px-2 md:px-6 py-4 md:py-8 space-y-15">
      <HeroSection />
      <AboutMeSection />
      <ProjectSpotlight />
      <CoreTechnologies />
      <ContactSection />
    </div>
  );
}
