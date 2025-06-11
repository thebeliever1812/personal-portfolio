import { HeroSection, AboutMeSection } from "./components/HomePageSections";

export const metadata = {
  title: 'Home | Basir Ahmad',
  description:
    '',
};

export default function Home() {
  return (
    <div className="w-full p-4 md:p-8 space-y-15">
      <HeroSection />
      <AboutMeSection />
    </div>
  );
}
