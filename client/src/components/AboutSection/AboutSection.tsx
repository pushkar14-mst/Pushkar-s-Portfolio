import { useEffect } from "react";
import "./AboutSection.css";
import Starry from "react-starry-sky";
const AboutSection = () => {
  useEffect(() => {}, []);
  return (
    <section id="about-section">
      <Starry className="wrapper">
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
      </Starry>
    </section>
  );
};

export default AboutSection;
