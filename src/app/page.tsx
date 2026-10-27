import { Hero } from "../components/sections/Hero";
import { AboutSection } from "../components/sections/AboutSection";
import { SelectedWork } from "../components/sections/SelectedWork";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SelectedWork />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
