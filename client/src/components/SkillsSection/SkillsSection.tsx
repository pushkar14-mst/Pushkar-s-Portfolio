import { useState } from "react";
import "./SkillsSection.css";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiTensorflow,
  SiGooglecloud,
  SiGit,
  SiWebgl,
  SiExpress,
  SiSupabase,
  SiRedis,
  SiFirebase,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandReactNative, TbBrandThreejs } from "react-icons/tb";

interface Skill {
  name: string;
  icon: any;
  category: string;
  level: number;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skills: Skill[] = [
    // Frontend
    { name: "React", icon: SiReact, category: "frontend", level: 95 },
    { name: "TypeScript", icon: SiTypescript, category: "frontend", level: 90 },
    { name: "Next.js", icon: SiNextdotjs, category: "frontend", level: 90 },
    {
      name: "JavaScript",
      icon: DiJavascript1,
      category: "frontend",
      level: 95,
    },
    {
      name: "React Native",
      icon: TbBrandReactNative,
      category: "frontend",
      level: 85,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "frontend",
      level: 90,
    },
    { name: "Redux", icon: SiRedux, category: "frontend", level: 85 },
    { name: "Three.js", icon: TbBrandThreejs, category: "frontend", level: 80 },
    { name: "WebGL", icon: SiWebgl, category: "frontend", level: 75 },

    // Backend
    { name: "Node.js", icon: SiNodedotjs, category: "backend", level: 85 },
    { name: "Express", icon: SiExpress, category: "backend", level: 85 },
    { name: "Python", icon: SiPython, category: "backend", level: 80 },
    { name: "Prisma", icon: SiPrisma, category: "backend", level: 85 },

    // Database
    { name: "MongoDB", icon: SiMongodb, category: "database", level: 85 },
    { name: "PostgreSQL", icon: SiPostgresql, category: "database", level: 80 },
    { name: "Redis", icon: SiRedis, category: "database", level: 75 },
    { name: "Supabase", icon: SiSupabase, category: "database", level: 80 },
    { name: "Firebase", icon: SiFirebase, category: "database", level: 75 },

    // DevOps & Tools
    { name: "Docker", icon: SiDocker, category: "devops", level: 75 },
    { name: "GCP", icon: SiGooglecloud, category: "devops", level: 75 },
    { name: "Git", icon: SiGit, category: "devops", level: 90 },

    // AI/ML
    { name: "TensorFlow", icon: SiTensorflow, category: "ai", level: 75 },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills-section">
      <div className="skills-header">
        <div className="section-label">Technical Expertise</div>
        <h1>Skills</h1>
        <p className="skills-intro">
          Technologies and tools I use to build exceptional digital experiences
        </p>
      </div>

      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="skill-icon-wrapper">
              <skill.icon className="skill-icon" />
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="skills-stats">
        <div className="stat-item">
          <div className="stat-number">{skills.length}+</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10+</div>
          <div className="stat-label">Projects Built</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
