// import { useEffect } from "react";
import "./AboutSection.css";
// import Starry from "react-starry-sky";
import Pushkar from "../../assets/pushkar-star-wars.png";
// import "./AboutSection.sass";
const AboutSection = () => {
  return (
    <section id="about-section">
      {/* <Starry className="wrapper"> */}
      <div className="intro">
        A long time ago, in a galaxy not so,
        <br /> far away....
      </div>
      <div className="thanks"></div>

      <div className="prologue">
        <div className="text">
          <p>
            In a vast digital universe, Pushkar, a web developer, embarks on a
            journey fueled by passion for pixels and algorithms.
          </p>
          <p>
            With HTML, CSS, JavaScript, Typescript and Web Frameworks mastery,
            Pushkar crafts stunning websites, echoing his innovation across
            galaxies.
          </p>

          <p>
            Like a Jedi, he embraces challenges, seeking continuous growth and
            uncharted territories in the digital realm.
          </p>

          <p>
            Explore this portfolio to learn more about Pushkar's journey and a
            few of his projects. May the Force be with you!
          </p>
        </div>
      </div>
      <div className="logo">
        <img src={Pushkar} alt="" />
      </div>
      {/* </Starry> */}
    </section>
  );
};

export default AboutSection;
/*
<div className="accordian">
          <ul>
            <li>
              <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg" />
            </li>
            <li>
              <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" />
            </li>
            <li>
              <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg" />
            </li>
            <li>
              <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" />
            </li>
            <li>
              <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" />
            </li>
          </ul>
        </div>
*/
