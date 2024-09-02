// import { useEffect } from "react";
import "./HeroSection.css";
import macImg from "../../assets/hero-assets/MacBook Pro 15.png";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div id="hero-section-container">
        {/* <span className="gradient-1" />
        <span className="gradient-2" /> */}
        <div className="hero-text">
          <p>Hi, I'm</p>
          <h1 id="hero-text-1">Pushkar</h1>
          <h1 id="hero-text-2">Patil</h1>

          <ScrollLink
            className="nav-link"
            to="about-section"
            smooth={true}
            duration={1000}
          >
            About
          </ScrollLink>
          <ScrollLink
            className="nav-link"
            to="project-section"
            smooth={true}
            duration={1000}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className="nav-link"
            to="skills-section"
            smooth={true}
            duration={1000}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            className="nav-link"
            to="contact-section"
            smooth={true}
            duration={1000}
          >
            Contact
          </ScrollLink>
        </div>
        <div className="macbook-image">
          <img src={macImg} alt="MacBook Pro" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
