import { useEffect } from "react";
import "./HeroSection.css";
const HeroSection = () => {
  useEffect(() => {
    return () => {
      const typeItInstance = new TypeIt("#role", {
        speed: 50,
        startDelay: 900,
      })
        .type("Wb", { delay: 100 })
        .move(-1, { delay: 100 })
        .type("e", { delay: 100 })
        .move(2, { delay: 200 })
        .type("-Dev.", { delay: 100 })
        .delete(1)
        .type("eloper.", { delay: 100 })
        .go();
    };
  }, []);

  return (
    <>
      <section id="hero-section">
        <div className="hero">
          <h1 id="main-name">
            Pushkar <span id="last-name">Patil</span>
          </h1>
          <h2 id="role" />
        </div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </section>
    </>
  );
};
export default HeroSection;
