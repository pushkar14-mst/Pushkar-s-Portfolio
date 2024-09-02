import { useRef } from "react";
import "./AboutSection.css";
import v2 from "../../assets/v_2.png";
import v3 from "../../assets/v_3.png";
import v4 from "../../assets/v_4.png";
import v5 from "../../assets/v_5.png";
const AboutSection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="about-section" ref={sectionRef}>
      <h1
        style={{
          textAlign: "left",
        }}
      >
        About Me.
      </h1>

      <div
        style={{
          zIndex: -10,
          right: "5vw",
          top: "3vh",
          position: "absolute",
          maxWidth: "100px",
          maxHeight: "100px",
        }}
      >
        {" "}
        <img
          src={v2}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          zIndex: -10,
          right: "5vw",
          bottom: "5vh",
          position: "absolute",
          maxWidth: "100px",
          maxHeight: "100px",
        }}
      >
        {" "}
        <img
          src={v2}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          zIndex: -10,
          right: "3vw",
          top: "32vh",
          position: "absolute",
          maxWidth: "285px",
          maxHeight: "45px",
        }}
      >
        {" "}
        <img
          src={v3}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </div>
      <div
        style={{
          zIndex: -10,
          right: "3vw",
          top: "37vh",
          position: "absolute",
          maxWidth: "285px",
          maxHeight: "45px",
        }}
      >
        {" "}
        <img
          src={v3}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </div>
      <div
        style={{
          zIndex: -10,
          left: "5vw",
          bottom: "5vh",
          position: "absolute",
          maxWidth: "220px",
          maxHeight: "78px",
        }}
      >
        {" "}
        <img
          src={v4}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          zIndex: -10,
          left: "5vw",
          top: "29vh",
          position: "absolute",
          maxWidth: "120px",
          maxHeight: "120px",
        }}
      >
        {" "}
        <img
          src={v5}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          zIndex: -10,
          left: "20vw",
          bottom: "5vh",
          position: "absolute",
          maxWidth: "220px",
          maxHeight: "78px",
        }}
      >
        {" "}
        <img
          src={v4}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="about-section-container">
        <div className="name">
          <h2>Pushkar Patil</h2>
          <h3>Software Developer</h3>
        </div>
        <ul className="about-list">
          <li>
            <a>My Journey</a>
            <p>
              I am a software developer with a passion for creating innovative
              solutions. I have experience in full-stack web development and
              mobile app development. I am proficient in JavaScript, TypeScript,
              React, Node.js, Express, MongoDB, and React Native. I am always
              eager to learn new technologies and improve my skills.
            </p>
          </li>
          <li>
            <a>Education</a>
            <p>
              Master of Science in Computer Science, Indiana University
              <br />
              Bachelor of Engineering in Computer Engineering, University Of
              Mumbai
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
