import { useEffect, useState } from "react";
import "./ProjectsSection.css";
import prevIcon from "../../assets/icons8-prev-50.png";
import nextIcon from "../../assets/icons8-next-50.png";
import rythmic1 from "../../assets/rythmic_1.png";
import mern_chat from "../../assets/mern_chat.png";
import bookTheBest1 from "../../assets/bookTheBest_1.png";
import sTu from "../../assets/stu.png";
import explorehub from "../../assets/explorehub.png";
import ProjectsBg from "./ProjectsBG";

const ProjectsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [checkHovered, setCheckHovered] = useState(false);
  const [projectSelected, setProjectSelected] = useState(0);
  const [parallaxScroll, setParallaxScroll] = useState(0);

  const [isProjectSelectionActive, setIsProjectSelectionActive] =
    useState(false);

  interface ProjectDescription {
    id: number;
    description: React.JSX.Element;
    image: string;
  }
  const projectDescriptions: ProjectDescription[] = [
    {
      id: 1,
      description: (
        <p>
          Embark on a musical journey with my creation: an immersive music
          playback web application. Powered by the MERN stack and supercharged
          with TypeScript, this project seamlessly integrates Spotify's API to
          bring you essential music functionalities.
          <br />
          Key Highlights:
          <br />
          <ul>
            <li>
              Personalized Playlist Creation: Curate your musical world by
              crafting and customizing your own playlists.
            </li>
            <li>
              Effortless State Management: Thanks to Redux.js, enjoy smooth
              music playback and a consistent play queue.
            </li>
            <li>
              Uninterrupted Listening: Never miss a beat with the auto-play
              queue, ensuring a seamless transition between tracks. Dive into a
              world of music like never before!
            </li>
          </ul>
        </p>
      ),
      image: rythmic1,
    },
    {
      id: 2,
      description: (
        <p>
          Chat App: A Real-Time Chat Application
          <br />
          Step into the world of instantaneous communication with my MERN Chat
          application. Using MongoDB, Express.js, React, and Node.js, I
          engineered a real-time messaging platform that revolutionizes the way
          we connect online. This project integrates the power of web sockets to
          facilitate instant message delivery, enabling features like message
          broadcasting, room-based conversations, and robust end-to-end
          encryption for secure communication. Overcoming hurdles in chat schema
          design and UI development through thorough research and analysis, I
          crafted a seamless user experience for real-time interactions.
          <br />
          Dive into the realm of rapid communication and experience the fusion
          of cutting-edge technology and user-centric design in this MERN Chat
          application, a testament to the possibilities of modern-day
          communication platforms.
        </p>
      ),
      image: mern_chat,
    },
    {
      id: 3,
      description: (
        <p>
          BookTheBest: Your Ultimate Flight Fare Solution Welcome to
          BookTheBest, your go-to online platform for effortless flight fare
          searches and bookings.
          <br />
          This project is a masterpiece, crafted meticulously on the robust MERN
          stack with TypeScript at its core. At BookTheBest, we put the power in
          your hands. Users can seamlessly search, compare, and book flights to
          a myriad of destination cities, with a plethora of airlines and
          exclusive offers at your fingertips. Our mission? To make affordable
          flight fares accessible to all travelers.
          <br />
          Join us on your journey and experience travel booking like never
          before!
        </p>
      ),
      image: bookTheBest1,
    },
    {
      id: 4,
      description: (
        <p>
          StructureTheUnstructured: A Data Analysis Tool
          <br />
          Unlocking the potential hidden within unstructured data formats—audio,
          image files, and network logs—my data analysis tool stands as a
          testament to structured insight generation. Leveraging the power of
          React and TypeScript on the client-side, this tool empowers users to
          effortlessly upload multiple unstructured files, transforming them
          into downloadable CSV formatted files.
          <br />
          The architecture orchestrates a seamless backend process using Flask.
          Upon file upload, Flask triggers a robust modeling and formatting
          pipeline, culminating in the generation of structured CSV files. These
          files are then served to the user through a RESTful interface,
          providing easily accessible and actionable data insights.
          <br />
          Experience the fusion of user-friendly front-end design with a
          powerful backend pipeline in this data analysis tool. Witness
          firsthand the transformation of unstructured data into valuable,
          structured insights, showcasing the potential for informed
          decision-making in the digital landscape.
        </p>
      ),
      image: sTu,
    },
    {
      id: 5,
      description: (
        <p>
          ExploreHub: Your Gateway to Tailored Travel Experiences
          <br />
          Journey into the realm of curated travel experiences with ExploreHub,
          a bespoke tour packages booking website meticulously crafted using the
          MERN stack. Designed to cater to the wanderlust of globetrotters,
          ExploreHub offers a diverse array of meticulously curated tour
          packages, each expertly crafted to ensure unforgettable adventures.
          <br />
          Users delve into a world of possibilities, exploring diverse tour
          options, each complete with detailed day-wise itineraries, pricing
          information, and trip durations. To ensure top-notch security, I
          implemented DUO 2FA for robust user authentication, enhancing the
          safety of user accounts and sensitive information.
          <br />
          Embark on a seamless travel booking journey with ExploreHub, where
          wanderers find their perfect escapades and embark on adventures
          tailored to their desires. Witness the convergence of cutting-edge
          technology and travel expertise in this platform dedicated to
          delivering tailored and secure travel experiences.
        </p>
      ),
      image: explorehub,
    },
  ];

  let projectCards: any = document.querySelectorAll(".project-card");
  let cardWidth = projectCards[0]?.offsetWidth || 0;
  const handleCarouselScroll = (scrollDirection: string) => {
    if (scrollDirection === "next") {
      setScrollPosition((prevPosition: any) => {
        return Math.min(
          prevPosition + cardWidth,
          cardWidth * (projectCards.length - 1)
        );
      });
    } else if (scrollDirection === "prev") {
      setScrollPosition((prevPosition: any) => {
        return Math.max(prevPosition - cardWidth, 0);
      });
    }
  };

  const projectImageWidth: any = document.querySelector(
    ".project-preview img"
  )?.clientWidth;

  useEffect(() => {
    const projectCards: any = document.querySelectorAll(".project-card");
    const handleMouseOver = (index: number) => {
      setIsProjectSelectionActive(true);
      projectCards.forEach((card: any, i: any) => {
        if (i === index) {
          card.classList.add("project-card-active");
        } else {
          card.classList.remove("project-card-active");
        }
      });
    };

    projectCards.forEach((projectCard: any, index: number) => {
      projectCard.addEventListener("mouseover", () => {
        handleMouseOver(index);
      });
    });

    return () => {
      projectCards.forEach((projectCard: any, index: number) => {
        projectCard.removeEventListener("mouseover", () => {
          handleMouseOver(index);
        });
      });
    };
  }, []);
  useEffect(() => {
    const projectExplained: any = document.querySelector(".project-explained");
    if (isProjectSelectionActive) {
      projectExplained.classList.add("project-explained-active");
    }
  }, []);
  const handleProjectExplainedScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    setParallaxScroll(scrollTop * 0.43);
  };

  return (
    <section className="project-section">
      <h1 style={{ textAlign: "center", margin: "2.5rem" }}>Projects</h1>
      <div className="saber">
        <div id="light"></div>
        <div id="cabo">
          <div id="top"></div>

          <div id="top-mid">
            <div id="little-ball"></div>
          </div>
          <div id="button"></div>
          <div id="mid"></div>
          <div id="mid-bottom">
            <div className="stripes"></div>
            <div id="bottom">
              <div id="inner-bottom"></div>
            </div>
            <div className="stripes"></div>
          </div>
        </div>
      </div>

      <div className="project-section-container">
        <button
          onClick={() => handleCarouselScroll("prev")}
          id="prev-btn"
          style={{
            zIndex: `${checkHovered ? "0" : "10"}`,
          }}
        >
          <img src={prevIcon} alt="forward--v1" />
        </button>
        <div
          className="project-section-inner"
          style={{
            display: "flex",
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.5s",
          }}
        >
          <div
            className="project-card"
            onMouseOver={() => {
              setCheckHovered(true);
            }}
            onMouseOut={() => {
              setCheckHovered(false);
            }}
            onClick={() => {
              setProjectSelected(1);
            }}
          >
            <img src={rythmic1} alt="project1" />
            <h2>Rythmic</h2>
          </div>
          <div
            className="project-card"
            onClick={() => {
              setProjectSelected(2);
            }}
          >
            <img src={mern_chat} alt="project2" />
            <h2>Chat App</h2>
          </div>
          <div
            className="project-card"
            onClick={() => {
              setProjectSelected(3);
            }}
          >
            <img src={bookTheBest1} alt="project3" />
            <h2>BookTheBest</h2>
          </div>
          <div
            className="project-card"
            onClick={() => {
              setProjectSelected(4);
            }}
          >
            <img src={sTu} alt="project4" />
            <h2>StructureTheUnstructured</h2>
          </div>
          <div
            className="project-card"
            onClick={() => {
              setProjectSelected(5);
            }}
          >
            <img src={explorehub} alt="project5" />
            <h2>ExploreHub</h2>
          </div>
        </div>
        <button onClick={() => handleCarouselScroll("next")} id="next-btn">
          <img src={nextIcon} alt="next--v1" />
        </button>
      </div>
      <div className="saber-2">
        <div id="light"></div>
        <div id="cabo">
          <div id="top"></div>

          <div id="top-mid">
            <div id="little-ball"></div>
          </div>
          <div id="button"></div>
          <div id="mid"></div>
          <div id="mid-bottom">
            <div className="stripes"></div>
            <div id="bottom">
              <div id="inner-bottom"></div>
            </div>
            <div className="stripes"></div>
          </div>
        </div>
      </div>

      <ProjectsBg>
        <div
          className="project-explained"
          onScroll={handleProjectExplainedScroll}
        >
          {projectDescriptions
            .filter((project: any) => {
              return project.id === projectSelected;
            })
            .map((projectDescription: ProjectDescription) => {
              return (
                <>
                  <div className="project-preview">
                    <img src={projectDescription.image} alt="" />
                  </div>

                  <div
                    className="project-description"
                    style={{
                      width: `${projectImageWidth}px`,
                      transform: `translateY(-${parallaxScroll}px)`,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#060c21",
                        padding: "1.5rem 2rem",
                      }}
                    >
                      {projectDescription.description}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </ProjectsBg>
    </section>
  );
};
export default ProjectsSection;
