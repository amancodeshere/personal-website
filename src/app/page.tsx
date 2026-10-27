import { Hero } from "../components/sections/Hero";
import { AboutSection } from "../components/sections/AboutSection";
import { SelectedWork } from "../components/sections/SelectedWork";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ContactSection } from "../components/sections/ContactSection";
import { OceanSurface } from "../components/visual/OceanSurface";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OceanSurface mode="home">
        <AboutSection />
        <SelectedWork />
        <ExperienceSection />
        <ContactSection />
      </OceanSurface>
    </>
  );
}
