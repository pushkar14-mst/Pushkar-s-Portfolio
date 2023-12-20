import { useEffect, useRef } from "react";
import "./ExperienceSection.css";
import { experiences } from "./experiences";
const ExperienceSection = () => {
  const bb8Ref: React.Ref<any> = useRef(null);
  const myPosRef = useRef(window.innerWidth - window.innerWidth / 5);

  useEffect(() => {
    let dPos = 0;
    let dSpeed = 1;
    let dMinSpeed = 1;
    let dMaxSpeed = 5;
    let dAccel = 1.05;
    let dRot = 0;
    let slowOffset = 120;
    let movingRight = true;

    const roll = () => {
      if (myPosRef.current > dPos + bb8Ref.current.offsetWidth / 4) {
        // moving right
        if (!movingRight) {
          movingRight = true;
          toggleClass("antennaes", "left", false);
          toggleClass("outer-eye", "left", false);
          toggleClass("bulls-eye", "left", false);
        }
        if (myPosRef.current - dPos > slowOffset) {
          if (dSpeed < dMaxSpeed) {
            // speed up
            dSpeed *= dAccel;
          }
        } else if (myPosRef.current - dPos < slowOffset) {
          if (dSpeed > dMinSpeed) {
            // slow down
            dSpeed /= dAccel;
          }
        }
        dPos += dSpeed;
        dRot += dSpeed;
      } else if (myPosRef.current < dPos - bb8Ref.current.offsetWidth / 4) {
        // moving left
        if (movingRight) {
          movingRight = false;
          toggleClass("antennaes", "left", true);
          toggleClass("outer-eye", "left", true);
          toggleClass("bulls-eye", "left", true);
        }
        if (dPos - myPosRef.current > slowOffset) {
          if (dSpeed < dMaxSpeed) {
            // speed up
            dSpeed *= dAccel;
          }
        } else if (dPos - myPosRef.current < slowOffset) {
          if (dSpeed > dMinSpeed) {
            // slow down
            dSpeed /= dAccel;
          }
        }
        dPos -= dSpeed;
        dRot -= dSpeed;
      }
      bb8Ref.current.style.left = dPos + "px";
      bb8Ref.current.querySelector(
        ".body"
      ).style.transform = `rotate(${dRot}deg)`;
      requestAnimationFrame(roll);
    };

    requestAnimationFrame(roll);

    const handleMouseMove = (event: any) => {
      myPosRef.current = event.pageX;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleClass = (selector: any, className: any, add: any) => {
    document.querySelectorAll(`.${selector}`).forEach((elem) => {
      if (add) {
        elem.classList.add(className);
      } else {
        elem.classList.remove(className);
      }
    });
  };
  return (
    <section id="experience-section">
      <h1>Experience</h1>
      <div className="experience-section-container">
        <div className="experience-container">
          {experiences.map((experience) => {
            return (
              <>
                <div className="experience">
                  <h1 id="title">{experience.title}</h1>
                  <h2 id="company">{experience.company}</h2>
                  <h2 id="duration">{experience.duration}</h2>
                  <p id="description">{experience.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div id="bb8" ref={bb8Ref}>
        <div className="antennaes">
          <div className="antennae-1"></div>
          <div className="antennae-2"></div>
        </div>
        <div className="head">
          <div className="grey-line"></div>
          <div className="orange-line"></div>

          <div className="outer-eye">
            <div className="glimmer-1"></div>
            <div className="glimmer-2"></div>
            <div className="inner-eye"></div>
          </div>

          <div className="bulls-eye">
            <div className="bulls-eye-inner"></div>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="body">
          <div className="orange-ring-1"></div>
          <div className="orange-ring-2"></div>
          <div className="orange-ring-3"></div>
          <div className="orange-ring-4"></div>
          <div className="grey-ring-1"></div>
          <div className="grey-ring-2"></div>
          <div className="grey-ring-3"></div>
          <div className="rivet-1"></div>
          <div className="rivet-2"></div>
          <div className="rivet-3"></div>
          <div className="rivet-4"></div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
