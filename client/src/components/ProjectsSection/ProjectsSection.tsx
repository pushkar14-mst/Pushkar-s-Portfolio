import "./ProjectsSection.css";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import itemData from "./projects";
import { useState } from "react";
import { Modal } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
    <>
      <section className="project-section">
        <h1 style={{ textAlign: "left" }}>Projects</h1>
        <div className="project-section-container">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
              flexWrap: "wrap",
              maxWidth: "100%",
            }}
          >
            <Masonry
              columns={window.innerWidth > 768 ? 2 : 1}
              spacing={2}
              sx={{
                minHeight: "100vh",
              }}
            >
              {itemData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    maxWidth: "500px",
                  }}
                  className="project-card"
                >
                  <div
                    className="card-overlay"
                    onClick={() => {
                      setSideBarOpen(true);
                      setProject(item);
                    }}
                  >
                    <h2>{item.title}</h2>
                  </div>

                  <img
                    srcSet={`${item.coverImg}?w=162&auto=format&dpr=2 2x`}
                    src={`${item.coverImg}?w=162&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Masonry>
            <Modal
              open={sideBarOpen}
              onClose={() => sideBarHandler(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <SideBar
                title={project?.title}
                shortDescription={project?.shortDescription}
                description={project?.description}
                coverImg={project?.coverImg}
                technologies={project?.technologies}
                github={project?.github}
                setIsOpen={sideBarHandler}
              />
            </Modal>
          </Box>
        </div>
      </section>
    </>
  );
};

const SideBar: React.FC<ISideBarProps> = (props) => {
  return (
    <div className="sidebar-container">
      <div className="main-sidebar">
        <div className="project-sidebar-nav">
          <KeyboardBackspaceIcon
            style={{
              color: "#00b4d8",
              cursor: "pointer",
              fontSize: "2rem",
            }}
            onClick={() => {
              props.setIsOpen(false);
            }}
          />
          <button
            onClick={() => {
              props.setIsOpen(false);
            }}
            style={{
              color: "#00b4d8",
              backgroundColor: "transparent",
              border: "0",
              fontWeight: "bold",
            }}
          >
            Back to Projects.
          </button>
        </div>
        <div className="sidebar-content">
          <h2>{props.title}</h2>
          <p
            style={{
              margin: "0.7rem 0",
            }}
          >
            {props.shortDescription}
          </p>
          <div className="project-cover-img">
            <img src={props.coverImg} alt="" />
          </div>
          <h4
            style={{
              margin: "0.7rem 0",
            }}
          >
            About
          </h4>
          <p>{props.description}</p>
          <h4
            style={{
              margin: "0.7rem 0",
            }}
          >
            Technologies
          </h4>
          <ul id="sidebar-technologies">
            {props.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <button
          id="github-btn"
          onClick={() => {
            window.location.href = props.github;
          }}
        >
          Go to Project <OpenInNewIcon />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
