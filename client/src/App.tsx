import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import "./App.css";
import { useEffect } from "react";
import ContactSection from "./components/ContactSection/ContactSection";
const App = () => {
  useEffect(() => {
    let circle: any = document.getElementById("home-hero-glow");

    const onMouseMove = (e: any) => {
      // Calculate the center coordinates of the circle
      let centerX = e.pageX - circle.offsetWidth / 2;
      let centerY = e.pageY - circle.offsetHeight / 2;

      circle.style.left = centerX + "px";
      circle.style.top = centerY + "px";
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      <>
        <div className="main-mouse" id="home-hero-glow" />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </>
    </>
  );
};

export default App;
