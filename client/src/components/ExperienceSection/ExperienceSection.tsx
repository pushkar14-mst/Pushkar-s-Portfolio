import { useState } from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Engineer",
      company: "StudyFetch",
      location: "Beverly Hills, CA",
      type: "Full-time",
      period: "Sep 2025 - Jan 2026",
      description:
        "Founding engineer for AI-driven K-12 learning platform developed in partnership with NVIDIA",
      impact: [
        "Delivered pilot platform in 1 month with Next.js, TypeScript, MongoDB",
        "Reduced token costs by 60% with TOON optimization",
        "Cut load times by 80% using RedisKV caching",
        "Built workers handling 500+ concurrent AI jobs, reducing timeouts by 95%",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Redis",
        "Pinecone",
        "WebAssembly",
        "Express",
        "GCP",
      ],
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Radical Squares",
      location: "Remote, CA",
      type: "Internship",
      period: "Jun 2025 - Sep 2025",
      description:
        "Led frontend development of company MVP, making key architectural decisions for scalability",
      impact: [
        "Solely led frontend architecture using React, TypeScript, Tailwind CSS",
        "Optimized performance with polling strategies and debounce patterns",
        "Implemented Redux for seamless state management at scale",
        "Integrated backend APIs ensuring smooth user experience",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      id: 3,
      role: "AI Intern",
      company: "Reva Technologies",
      location: "Navi Mumbai, MH",
      type: "Internship",
      period: "Mar 2022 - Mar 2023",
      description:
        "Developed software defect prediction pipeline using ML and deployed models to production",
      impact: [
        "Built CNN-based Genetic Algorithm boosting accuracy by 10%",
        "Achieved 90% final model accuracy",
        "Designed AST-based code evaluation algorithm",
        "Deployed ML models to production with backend integration",
      ],
      tech: ["Python", "CNN", "Genetic Algorithms", "AST"],
    },
  ];

  return (
    <section id="experience-section">
      <div className="experience-header">
        <div className="section-label">Work</div>
        <h1>Experience</h1>
      </div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`exp-item ${hoveredId === exp.id ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredId(exp.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="exp-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="exp-content">
              <div className="exp-header">
                <div className="exp-title-group">
                  <h2>{exp.role}</h2>
                  <div className="exp-meta">
                    <h3>{exp.company}</h3>
                    <span className="exp-separator">•</span>
                    <span className="exp-location">{exp.location}</span>
                    <span className="exp-separator">•</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
                <span
                  className={`exp-badge ${exp.type.toLowerCase().replace("-", "")}`}
                >
                  {exp.type}
                </span>
              </div>

              <p className="exp-description">{exp.description}</p>

              <div className="exp-impact">
                {exp.impact.map((item, i) => (
                  <div key={i} className="impact-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 0L10.5 5L16 6L12 10L13 16L8 13L3 16L4 10L0 6L5.5 5L8 0Z"
                        fill="currentColor"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="exp-tech">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="exp-hover-line" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
