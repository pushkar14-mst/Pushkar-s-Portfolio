// import { useEffect, useRef } from "react";

import "./ContactSection.css";
import contactSectionImg from "../../assets/contact-section-graphic.png";
const ContactSection = () => {
  return (
    <section id="contact-section">
      <h1 id="contact-h1">Let's get connected.</h1>

      <p id="contact-p">
        I'm always looking for new opportunities and collaborations. Feel free
        to reach out to me. Contact me at{" "}
        <a href="mailto:pushkar14.patil@gmail.com">
          pushkar14.patil@gmail.com.
        </a>
      </p>
      <div className="contact-section-container">
        <img
          className="contact-section-container-img"
          src={contactSectionImg}
        />
      </div>
    </section>
  );
};
export default ContactSection;
