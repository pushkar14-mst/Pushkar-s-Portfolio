import { useRef } from "react";
import "./AboutSection.css";

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

      <div className="about-section-container">
        <div className="name">
          <h2>Pushkar Patil</h2>
          <h3>Software Developer</h3>
        </div>
        <ul className="about-list">
          <li>
            <a>My Journey</a>
            <p>
              Back in 2021, I started building websites and mobile apps, and
              soon found myself captivated by the endless possibilities of
              coding and software development. Fast-forward to today, I've had
              the opportunity to work on everything from AI-driven models and
              real-time chat apps to dynamic music platforms. My passion lies in
              the intersection of technology and creativity—crafting seamless
              user experiences that not only work flawlessly but also engage
              users on a deeper level. These days, I’m pursuing my Master’s in
              Computer Science at Indiana University, pushing the boundaries of
              what I can create with the latest in tech. When I’m not diving
              deep into code, you’ll find me exploring new places, fueling my
              aviation passion, or immersing myself in music—the perfect
              backdrop to a day of coding. And yes, I’m a huge sports enthusiast
              too, always on the lookout for the next big game. Whether it’s in
              the world of tech or beyond, I’m driven by a relentless curiosity
              and a love for what I do.
            </p>
          </li>
          <li>
            <a>Education</a>
            <p>
              <span
                style={{
                  fontSize: "1.2rem",
                }}
              >
                Master of Science in Computer Science, Indiana University
              </span>
              <br />
              <span style={{ fontSize: "1rem" }}>August 2023 - Present</span>
              <br />
              <span style={{ fontSize: "1rem" }}>
                {" "}
                Relevant coursework & skills:
                <ul id="relevant-coursework">
                  {[
                    "Software Engineering",
                    "Analysis Of Algorithms",
                    "Computer Networks",
                    "Pervasive Computing",
                    "Agile Software Development",
                    "React Native",
                    "Web Application Security",
                    "CI/CD",
                  ].map((tech, index) => (
                    <div id="relevant-coursework-li" key={index}>
                      {tech}
                    </div>
                  ))}
                </ul>
              </span>
            </p>
            <br />
            <p>
              <span
                style={{
                  fontSize: "1.2rem",
                }}
              >
                Bachelor of Engineering in Computer Engineering, University Of
                Mumbai
              </span>
              <br />
              <span style={{ fontSize: "1rem" }}>August 2019 - July 2023</span>
              <br />
              <span style={{ fontSize: "1rem" }}>
                {" "}
                Relevant coursework & skills:
                <ul id="relevant-coursework">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Database Management Systems",
                    "Operating Systems",
                    "Computer Security",
                    "Internet Of Things",
                    "Internet Programming",
                    "Machine Learning",
                    "Artificial Intelligence",
                    "Python",
                  ].map((tech, index) => (
                    <div id="relevant-coursework-li" key={index}>
                      {tech}
                    </div>
                  ))}
                </ul>
              </span>
            </p>
          </li>
          <li>
            <a>Experience</a>
            <p>
              <span
                style={{
                  fontSize: "1.2rem",
                }}
              >
                AI Intern at Reva Technologies
              </span>
              <br />
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                March 2022 - August 2023
              </span>
              <br />
              My role as an AI Intern was centered on leading AI model
              development for cross-project defect predictions. I built an
              Abstract Syntax Tree-based code evaluation algorithm, essential
              for dataset formation. A pivotal part of my responsibilities
              involved meticulously gathering, extracting, and processing code
              from diverse GitHub issues to curate the dataset. I engineered a
              robust pipeline that seamlessly integrated the code evaluation
              algorithm with the defect prediction model. A highlight of my
              achievements was the implementation of a CNN-based Genetic
              Algorithm, boosting the model accuracy by an impressive 10%,
              culminating in an overall accuracy milestone of 90%. Additionally,
              I led and mentored a team of 6 interns, overseeing their progress
              through regular meetings, while also providing comprehensive
              guidance and hands-on training to ensure successful implementation
              of project sub-modules.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
