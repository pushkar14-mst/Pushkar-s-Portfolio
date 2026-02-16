import { useState } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    Frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "WebGL",
      "Three.js",
    ],
    Backend: ["Node.js", "Prisma", "Supabase", "Redis", "WebAssembly"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="about-section">
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Building</span>
            <span className="title-line gradient-text">Beautiful</span>
            <span className="title-line">Experiences</span>
          </h1>
          <p className="hero-description">
            I'm Pushkar Patil, a software engineer who bridges design and
            development. Currently pursuing my Master's in Computer Science
            while building production-ready applications that users love.
          </p>
        </div>
      </div>

      <div className="about-content">
        {/* Journey Section */}
        <div className="content-block journey-block">
          <div className="block-label">01 / Journey</div>
          <h2>From Code to Impact</h2>
          <div className="journey-grid">
            <div className="journey-text">
              <p>
                Started coding in 2021, building websites and mobile apps.
                Fast-forward to today, I've worked on AI-driven platforms at
                StudyFetch (in partnership with NVIDIA), real-time collaboration
                tools, and scalable web applications.
              </p>
              <p>
                My passion lies in creating seamless user experiences that blend
                performance with beautiful design. I believe great software
                should feel invisible — it just works.
              </p>
              <p>
                When I'm not coding, you'll find me exploring aviation, diving
                into music, or following the latest in sports and automotive
                tech (yes, I'm a Porsche enthusiast 🏎️).
              </p>
            </div>
            <div className="journey-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Building</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Shipped</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">90%</div>
                <div className="stat-label">Model Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="content-block skills-block">
          <div className="block-label">02 / Skills</div>
          <h2>Tech Stack</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-tag ${hoveredSkill === skill ? "active" : ""}`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="content-block education-block">
          <div className="block-label">03 / Education</div>
          <h2>Academic Background</h2>

          <div className="education-grid">
            <div className="education-card">
              <div className="edu-header">
                <div className="edu-icon">🎓</div>
                <span className="edu-year">2023 - {currentYear}</span>
              </div>
              <h3>Master of Science</h3>
              <h4>Computer Science</h4>
              <p className="edu-school">Indiana University</p>
              <div className="edu-courses">
                <span>Software Engineering</span>
                <span>Algorithms</span>
                <span>Computer Networks</span>
                <span>Agile Development</span>
                <span>Web Security</span>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-header">
                <div className="edu-icon">🎓</div>
                <span className="edu-year">2019 - 2023</span>
              </div>
              <h3>Bachelor of Engineering</h3>
              <h4>Computer Engineering</h4>
              <p className="edu-school">University Of Mumbai</p>
              <div className="edu-courses">
                <span>Data Structures</span>
                <span>AI/ML</span>
                <span>Database Systems</span>
                <span>Operating Systems</span>
                <span>IoT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Section */}
        <div className="content-block currently-block">
          <div className="block-label">04 / Currently</div>
          <h2>What I'm Up To</h2>
          <div className="currently-grid">
            <div className="current-item">
              <span className="current-emoji">💼</span>
              <div>
                <h4>Looking for opportunities</h4>
                <p>Frontend/SDE II roles at innovative companies</p>
              </div>
            </div>
            <div className="current-item">
              <span className="current-emoji">🚀</span>
              <div>
                <h4>Building portfolio projects</h4>
                <p>Collaborative code editor, smart bookmarks, and more</p>
              </div>
            </div>
            <div className="current-item">
              <span className="current-emoji">📍</span>
              <div>
                <h4>Based in Santa Monica, CA</h4>
                <p>Open to remote and hybrid opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
