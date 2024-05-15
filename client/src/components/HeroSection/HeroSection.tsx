import "./HeroSection.css";
import macImg from "../../assets/hero-assets/MacBook Pro 15.png";
const HeroSection = () => {
  return (
    <>
      <section id="hero-section">
        <div id="hero-section-container">
          <span className="gradient-1" />
          <span className="gradient-2" />
          <div className="hero-text">
            <p>Hi, I'm</p>
            <h1 id="hero-text-1">Pushkar</h1>
            <h1 id="hero-text-2">Patil</h1>
          </div>
          <div className="macbook-image">
            <img src={macImg} alt="MacBook Pro" />
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
