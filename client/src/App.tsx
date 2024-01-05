import { useEffect, useState } from "react";
// import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectMobileSection from "./components/ProjectsSection/ProjectMobileSection";
import HeroMobileSection from "./components/HeroSection/HeroMobileSection";
import ExperienceMobileSection from "./components/ExperienceSection/ExperienceMobileSection";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Logo/Scene";
import AboutSection from "./components/AboutSection/AboutSection";
const App = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <>
      {windowSize[0] > 1258 ? <HeroSection /> : <HeroMobileSection />}
      {windowSize[0] > 1258 && <AboutSection />}
      <Canvas
        shadows
        flat
        linear
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "450vh",
          width: "100%",
          zIndex: 3,
          overflow: "hidden",
        }}
      >
        <Scene />
        <OrbitControls enableZoom={false} />
      </Canvas>
      {windowSize[0] > 1258 ? <ProjectsSection /> : <ProjectMobileSection />}
      <SkillsSection />
      {windowSize[0] > 1258 ? (
        <ExperienceSection />
      ) : (
        <ExperienceMobileSection />
      )}
    </>
  );
};

export default App;
