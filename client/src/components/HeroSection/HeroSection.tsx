import { useEffect } from "react";
import "./HeroSection.css";
import mountainsBehind from "../../assets/hero-assets/mountains_behind.png";
import mountainsFront from "../../assets/hero-assets/mountains_front.png";
import moon from "../../assets/hero-assets/moon.png";
import StarrySky from "../StarrySky/StarrySky";
const HeroSection = () => {
  useEffect(() => {
    const typeItInstance = new TypeIt("#role", {
      speed: 50,
      startDelay: 700,
    })
      .type("Wb", { delay: 100 })
      .move(-1, { delay: 200 })
      .type("e", { delay: 300 })
      .move(2, { delay: 400 })
      .type("-Dev.", { delay: 500 })
      .delete(1)
      .type("eloper.", { delay: 600 })
      .go();
    return () => {
      typeItInstance.destroy();
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let distance = window.scrollY;
      let heroSection: any = document.querySelector("#hero-section");
      let heroName: any = document.querySelector("#main-name");
      let role: any = document.querySelector("#role");
      let arrows: any = document.querySelector(".arrows");
      let moon: any = document.querySelector(".moon");
      let mountains_behind: any = document.querySelector(".mountains-behind");
      let mountains_front: any = document.querySelector(".mountains-front");
      let airBalloon: any = document.querySelector(".balloon-container1");
      moon.style.top = distance * 1.05 + "px";
      airBalloon.style.top = distance * 0.7 + "px";
      mountains_behind.style.transform = `translateY(${distance * -1}px)`;
      mountains_front.style.transform = `translateY(${distance * -0.5}px)`;
      heroSection.style.transform = `translateY(${distance * 1}px)`;
      heroName.style.transform = `translateX(${distance * 2}px)`;
      role.style.transform = `translateX(-${distance * 2}px)`;
      arrows.style.transform = `translateY(${distance * 0.7}px)`;
    });
  }, []);

  return (
    <>
      <section id="hero-section">
        <StarrySky>
          <div className="balloon-container1">
            <div className="balloon1">
              <span id="span1"></span>
              <span id="span2"></span>

              {/* <a
                className="fa-brands fa-github"
                href="https://github.com/pushkar14-mst"
                style={{
                  fontSize: "3rem",
                  rotate: "-135deg",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <i
                className="fa-brands fa-linkedin"
                style={{
                  fontSize: "3rem",
                  rotate: "-135deg",
                  transform: "translate(-220%, -170%)",
                }}
              /> */}
              <span id="span3"></span>
            </div>
          </div>
          <img
            src={moon}
            alt="moon"
            className="moon"
            id="moon"
            style={{
              height: "250px",
              width: "250px",
              left: "50%",
              position: "absolute",
            }}
          />
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
    </>
  );
};
export default HeroSection;
