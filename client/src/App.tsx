import { Suspense } from "react";
import AboutSection from "./components/AboutSection/AboutSection";

import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import LightSpeed from "./components/LightSpeed/LightSpeed";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";

const App = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
    </>
  );
};

export default App;
