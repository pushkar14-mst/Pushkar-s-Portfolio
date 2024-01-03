// import { useEffect } from "react";
import "./AboutSection.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ForestScene from "./ForestScene/ForestScene";

// import "./AboutSection.sass";
const AboutSection = () => {
  return (
    <section id="about-section">
      <div className="about-section-container">
        <Canvas
          shadows
          flat
          linear
          style={{
            height: "100vh",
            width: "100%",
            zIndex: 9,
          }}
        >
          <ForestScene />
          <OrbitControls zoom0={0} />
        </Canvas>
      </div>
    </section>
  );
};

export default AboutSection;
