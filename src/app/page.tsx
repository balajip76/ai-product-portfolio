import { FilterProvider } from '@/context/FilterContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import JourneySection from '@/components/sections/JourneySection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import LearningsSection from '@/components/sections/LearningsSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <FilterProvider>
      <Navbar />
      <main>
        <HeroSection />
        <JourneySection />
        <PortfolioSection />
        <LearningsSection />
        <AboutSection />
      </main>
      <Footer />
    </FilterProvider>
  );
}
