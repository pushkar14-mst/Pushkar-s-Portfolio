import { useEffect, useState } from "react";
import "./ProjectsSection.css";
import { useSelector } from "react-redux";
import prevIcon from "../../assets/icons8-prev-50.png";
import nextIcon from "../../assets/icons8-next-50.png";
const ProjectsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [checkHovered, setCheckHovered] = useState(false);

  const checkScrollActive: boolean = useSelector(
    (state: any) => state.portfolioCommonStore.scrollEnabled
  );

  console.log(checkScrollActive);

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

  useEffect(() => {
    const projectCards: any = document.querySelectorAll(".project-card");
    const handleMouseOver = (index: number) => {
      projectCards.forEach((card: any, i: any) => {
        if (i === index) {
          card.classList.add("project-card-active");
        } else {
          card.classList.remove("project-card-active");
        }
      });
    };

    projectCards.forEach((projectCard: any, index: number) => {
      // if (index === mid) {
      //   projectCard.classList.add("project-card-active");
      // }
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

  return (
    <section id="project-section">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
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
            onMouseLeave={() => {
              setCheckHovered(false);
            }}
          >
            <img
              src="https://camo.githubusercontent.com/b3707f8d0a81f5f40fc3efa572cadf8c803e2a8b5e8ddbc5fbaff4e34c399e12/68747470733a2f2f692e6962622e636f2f437453767a76642f696d6167652e706e67"
              alt="project1"
            />
            <h2>Rythmic</h2>
          </div>
          <div className="project-card">
            <img
              src="https://i.ytimg.com/vi/HggSXt1Hzfk/maxresdefault.jpg"
              alt="project2"
            />
            <h2>Chat App</h2>
          </div>
          <div className="project-card">
            <img
              src="https://nativebase.io/img/notion/online-ticket-booking-universal-app.jpg"
              alt="project3"
            />
            <h2>BookTheBest</h2>
          </div>
        </div>
        <button onClick={() => handleCarouselScroll("next")} id="next-btn">
          <img src={nextIcon} alt="next--v1" />
        </button>
      </div>

      <div className="project-explained">
        <div className="project-preview">
          <img
            src="https://nativebase.io/img/notion/online-ticket-booking-universal-app.jpg"
            alt=""
          />
        </div>
        <div className="project-description">
          <p>
            BookTheBest: Your Ultimate Flight Fare Solution Welcome to
            BookTheBest, your go-to online platform for effortless flight fare
            searches and bookings.
            <br />
            This project is a masterpiece, crafted meticulously on the robust
            MERN stack with TypeScript at its core. At BookTheBest, we put the
            power in your hands. Users can seamlessly search, compare, and book
            flights to a myriad of destination cities, with a plethora of
            airlines and exclusive offers at your fingertips. Our mission? To
            make affordable flight fares accessible to all travelers.
            <br />
            Join us on your journey and experience travel booking like never
            before!
          </p>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
