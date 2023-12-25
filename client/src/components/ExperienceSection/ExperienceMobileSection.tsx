import "./ExperienceMobileSection.css";
import { experiences } from "./experiences";
const ExperienceMobileSection = () => {
  return (
    <section id="experience-section-mobile">
      <h1
        style={{
          textAlign: "center",
          margin: "3rem",
        }}
      >
        Experience
      </h1>
      <div className="experience-mobile-container">
        {experiences.map((experience) => {
          return (
            <div className="experience-job-card">
              <h2
                style={{
                  fontSize: "2rem",
                }}
              >
                {experience.title}
              </h2>
              <h3>{experience.company}</h3>
              <h4>{experience.duration}</h4>
              <p id="description-mb">{experience.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ExperienceMobileSection;
