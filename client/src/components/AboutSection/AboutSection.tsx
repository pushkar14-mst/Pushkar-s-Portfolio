import { useEffect } from "react";
import "./AboutSection.css";
import { useDispatch } from "react-redux";
import { portfolioActions } from "../../store/portfolio-common-store";

const AboutSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //This is the scroll event handler function. It will be called whenever the user scrolls the page. It iterates through each paragraph with the class .about-intro to check if it's in the visible portion of the viewport.
    const handleScroll = () => {
      const paragraphs = document.querySelectorAll(".about-intro"); //This line selects all elements with the class .about-intro, which are your paragraphs.
      //his loop iterates through each paragraph element.
      paragraphs.forEach((paragraph) => {
        //This line retrieves the position and dimensions of the current paragraph relative to the viewport.
        const rect = paragraph.getBoundingClientRect();

        // This condition checks if the top of the paragraph is at least partially visible (greater than or equal to 0) and if the bottom is within the height of the viewport. If both conditions are true, it means the paragraph is visible in the viewport.
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          paragraph.classList.add("about-intro-highlighted"); // If the paragraph is visible, this line adds the class about-intro-highlighted to the paragraph, which applies the highlighting effect.
        } else {
          //If the paragraph is not visible in the viewport, this line removes the about-intro-highlighted class, reverting the highlighting effect.
          paragraph.classList.remove("about-intro-highlighted"); //
        }
        if (rect.bottom <= window.innerHeight) {
          dispatch(portfolioActions.setScrollEnabled());
        } else {
          dispatch(portfolioActions.unSetScrollEnabled());
        }
      });
    };
    //This line adds the event listener to the window object.
    window.addEventListener("scroll", handleScroll);
    // This is the cleanup function for the useEffect. When the component unmounts, this function removes the event listener to prevent memory leaks.

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about-section">
      <div className="about-section-container">
        <p className="about-intro">
          I specialize in crafting user-friendly websites and applications.
        </p>
        <p className="about-intro">
          With expertise spanning both frontend and backend technologies, I'm
          here to design captivating and seamlessly functional online
          experiences.
        </p>
        <p className="about-intro">
          My goal is to create impressive and highly efficient websites that
          make a lasting impact. Let's collaborate to bring your digital vision
          to life😉!
        </p>
        <p></p>
      </div>
    </section>
  );
};

export default AboutSection;
