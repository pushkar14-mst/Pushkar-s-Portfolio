import { useEffect } from "react";
import "./HeroSection.css";
const HeroSection = () => {
  useEffect(() => {
    const mainName = document.getElementById("main-name");
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
      </section>
    </>
  );
};
export default HeroSection;
