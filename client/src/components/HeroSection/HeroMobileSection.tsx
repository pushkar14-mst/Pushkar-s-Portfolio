import mountainsBehind from "../../assets/hero-assets/mountains_behind.png";
import mountainsFront from "../../assets/hero-assets/mountains_front.png";
import moon from "../../assets/hero-assets/moon.png";
import "./HeroMobileSection.css";
import StarrySky from "../StarrySky/StarrySky";
const HeroMobileSection = () => {
  return (
    <section id="hero-mobile-section">
      <StarrySky>
        <img
          src={moon}
          alt="moon"
          style={{
            height: "100px",
            width: "100px",
            left: "50%",
            position: "absolute",
          }}
        />
        <div className="hero-mb">
          <h1 id="main-name-mb">
            Pushkar <span id="last-name">Patil</span>
          </h1>
          <h2 id="role-mb">Web-Developer</h2>
        </div>
        <img
          src={mountainsBehind}
          alt="mountains-behind"
          className="mountains-behind"
        />
        <img
          src={mountainsFront}
          alt="mountains-front"
          className="mountains-front"
        />
      </StarrySky>
    </section>
  );
};
export default HeroMobileSection;
