import "./ProjectsSection.css";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import itemData from "./projects";
import { useState } from "react";
import { Modal, Fade, Backdrop } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";

interface ISideBarProps {
  title: string;
  shortDescription: string;
  description: string;
  coverImg: string;
  technologies: string[];
  github: string;
  setIsOpen: (isOpen: boolean) => void;
}

const ProjectsSection = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [project, setProject] = useState<any>();

  const sideBarHandler = (isOpen: boolean) => {
    setSideBarOpen(isOpen);
  };

  return (
    <section className="project-section">
      <div className="projects-header">
        <div className="section-label">Work</div>
        <h1>All Projects</h1>
      </div>

      <div className="project-section-container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          <Masonry
            columns={window.innerWidth > 768 ? 2 : 1}
            spacing={3}
            sx={{
              width: "100%",
            }}
          >
            {itemData.map((item, index) => (
              <div
                key={index}
                className="masonry-card"
                onClick={() => {
                  setSideBarOpen(true);
                  setProject(item);
                }}
              >
                <div className="masonry-overlay">
                  <h2>{item.title}</h2>
                </div>
                <img src={item.coverImg} alt={item.title} loading="lazy" />
              </div>
            ))}
          </Masonry>
        </Box>

        <Modal
          open={sideBarOpen}
          onClose={() => sideBarHandler(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(8px)",
              },
            },
          }}
        >
          <Fade in={sideBarOpen} timeout={400}>
            <div>
              <SideBar
                title={project?.title}
                shortDescription={project?.shortDescription}
                description={project?.description}
                coverImg={project?.coverImg}
                technologies={project?.technologies}
                github={project?.github}
                setIsOpen={sideBarHandler}
              />
            </div>
          </Fade>
        </Modal>
      </div>
    </section>
  );
};

const SideBar: React.FC<ISideBarProps> = (props) => {
  return (
    <div className="sidebar-container">
      <div className="main-sidebar">
        <div className="project-sidebar-nav">
          <div className="nav-left">
            <KeyboardBackspaceIcon />
            <button onClick={() => props.setIsOpen(false)}>
              Back to Projects
            </button>
          </div>
          <button className="close-btn" onClick={() => props.setIsOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="sidebar-content">
          <h2>{props.title}</h2>
          <p className="short-desc">{props.shortDescription}</p>

          <div className="project-cover-img">
            <img src={props.coverImg} alt={props.title} />
          </div>

          <h4>About</h4>
          <p>{props.description}</p>

          <h4>Technologies</h4>
          <ul className="sidebar-technologies">
            {props.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <button
          className="github-btn"
          onClick={() => window.open(props.github, "_blank")}
        >
          Go to Project <OpenInNewIcon />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
