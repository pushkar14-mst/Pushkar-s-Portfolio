// import { useEffect } from "react";
import "./AboutSection.css";
import moon from "../../assets/hero-assets/moon.png";
import ForestScene from "./ForestScene/ForestScene";
import Spline from "@splinetool/react-spline";

const AboutSection = () => {
  return (
    <section id="about-section">
      <div className="about-section-container">
        <img src={moon} alt="moon" className="moon" id="moon-abt" />
        <div
          style={{
            position: "absolute",
            left: "0%",
            width: "100%",
            top: "2%",
            zIndex: 2,
            height: "75%",
            backgroundColor: "#10615",
          }}
        >
          <Spline scene="https://prod.spline.design/cG56it49431ES61a/scene.splinecode" />
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <ForestScene />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
