import "./ProjectsPreviewSection.css";
import neuralNetwork from "../../assets/neural-network.png";
import aiLabelling from "../../assets/ai-labelling.png";
import genaiPdfViewer from "../../assets/gen-ai-pdf-viewer.png";

const ProjectsPreviewSection = () => {
  const projects = [
    {
      id: 1,
      title: "3D Neural Network Visualizer",
      subtitle: "Interactive ML Architecture Tool",
      description:
        "Built interactive 3D visualization tool to render and analyze neural network architectures in real-time with dynamic node connections and layer animations.",
      tasks: [
        "Interactive 3D rendering with THREE.js and WebGL",
        "Real-time network visualization using TensorFlow.js",
        "Dynamic layer animations and node connections",
        "Forward propagation visualization through network layers",
      ],
      tech: ["Next.js", "TypeScript", "THREE.js", "TensorFlow.js", "WebGL"],
      image: neuralNetwork,
      github: "https://github.com/pushkar14-mst/3d-neural-network-visualizer",
    },
    {
      id: 2,
      title: "3D Bounding Box Labeling Tool",
      subtitle: "Autonomous Driving Data Annotation",
      description:
        "Web-based 3D labeling tool for autonomous driving data annotation workflows with interactive bounding box controls and multi-view camera system.",
      tasks: [
        "Interactive bounding box placement with drag-to-move",
        "60fps performance using WebGL and Canvas API",
        "Multi-view camera system (perspective, top-down, side)",
        "Keyboard shortcuts for efficient labeling workflows",
      ],
      tech: ["Next.js", "TypeScript", "THREE.js", "WebGL", "Canvas API"],
      image: aiLabelling,
      github: "https://github.com/pushkar14-mst/3d-bounding-box-tool",
    },
    {
      id: 3,
      title: "GenAI PDF Viewer",
      subtitle: "AI-Powered Document Analysis",
      description:
        "AI-powered PDF viewer with intelligent document analysis, Q&A capabilities, and real-time highlighting using Gemini API.",
      tasks: [
        "Canvas API for PDF rendering and annotations",
        "Synchronized streaming AI responses with highlights",
        "Real-time page navigation with zoom controls",
        "Debounced viewport-based rendering for performance",
      ],
      tech: ["Next.js", "TypeScript", "Gemini API", "Canvas API"],
      image: genaiPdfViewer,
      github: "https://github.com/pushkar14-mst/genai-pdf-viewer",
    },
  ];

  return (
    <section id="projects-section">
      <div className="projects-header">
        <div className="section-label">Featured Work</div>
        <h1>Projects</h1>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <div className="featured-badge">FEATURED PROJECT</div>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </div>

            <div className="project-info">
              <div className="project-header">
                <h2>{project.title}</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              <h3>{project.subtitle}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tasks-section">
                <h4>TASKS / ACHIEVEMENTS</h4>
                <ul>
                  {project.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;
