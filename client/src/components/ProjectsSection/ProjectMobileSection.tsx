import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import "./ProjectMobileSection.css";
import rythmic1 from "../../assets/rythmic_1.png";
import mern_chat from "../../assets/mern_chat.png";
import bookTheBest1 from "../../assets/bookTheBest_1.png";
import sTu from "../../assets/sTu.png";
import explorehub from "../../assets/explorehub.png";
import { useState } from "react";
interface ProjectDescription {
  id: number;
  description: React.JSX.Element;
  image: string;
  title: string;
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
            Effortless State Management: Thanks to Redux.js, enjoy smooth music
            playback and a consistent play queue.
          </li>
          <li>
            Uninterrupted Listening: Never miss a beat with the auto-play queue,
            ensuring a seamless transition between tracks. Dive into a world of
            music like never before!
          </li>
        </ul>
      </p>
    ),
    image: rythmic1,
    title: "Rythmic",
  },
  {
    id: 2,
    description: (
      <p>
        Chat App: A Real-Time Chat Application
        <br />
        Step into the world of instantaneous communication with my MERN Chat
        application. Using MongoDB, Express.js, React, and Node.js, I engineered
        a real-time messaging platform that revolutionizes the way we connect
        online. This project integrates the power of web sockets to facilitate
        instant message delivery, enabling features like message broadcasting,
        room-based conversations, and robust end-to-end encryption for secure
        communication. Overcoming hurdles in chat schema design and UI
        development through thorough research and analysis, I crafted a seamless
        user experience for real-time interactions.
        <br />
        Dive into the realm of rapid communication and experience the fusion of
        cutting-edge technology and user-centric design in this MERN Chat
        application, a testament to the possibilities of modern-day
        communication platforms.
      </p>
    ),
    image: mern_chat,
    title: "MERN Chat",
  },
  {
    id: 3,
    description: (
      <p>
        BookTheBest: Your Ultimate Flight Fare Solution Welcome to BookTheBest,
        your go-to online platform for effortless flight fare searches and
        bookings.
        <br />
        This project is a masterpiece, crafted meticulously on the robust MERN
        stack with TypeScript at its core. At BookTheBest, we put the power in
        your hands. Users can seamlessly search, compare, and book flights to a
        myriad of destination cities, with a plethora of airlines and exclusive
        offers at your fingertips. Our mission? To make affordable flight fares
        accessible to all travelers.
        <br />
        Join us on your journey and experience travel booking like never before!
      </p>
    ),
    image: bookTheBest1,
    title: "BookTheBest",
  },
  {
    id: 4,
    title: "StructureTheUnstructured",
    description: (
      <p>
        Unlocking the potential hidden within unstructured data formats—audio,
        image files, and network logs—my data analysis tool stands as a
        testament to structured insight generation. Leveraging the power of
        React and TypeScript on the client-side, this tool empowers users to
        effortlessly upload multiple unstructured files, transforming them into
        downloadable CSV formatted files.
        <br />
        The architecture orchestrates a seamless backend process using Flask.
        Upon file upload, Flask triggers a robust modeling and formatting
        pipeline, culminating in the generation of structured CSV files. These
        files are then served to the user through a RESTful interface, providing
        easily accessible and actionable data insights.
        <br />
        Experience the fusion of user-friendly front-end design with a powerful
        backend pipeline in this data analysis tool. Witness firsthand the
        transformation of unstructured data into valuable, structured insights,
        showcasing the potential for informed decision-making in the digital
        landscape.
      </p>
    ),
    image: sTu,
  },
  {
    id: 5,
    title: "ExploreHub",
    description: (
      <p>
        ExploreHub: Your Gateway to Tailored Travel Experiences
        <br />
        Journey into the realm of curated travel experiences with ExploreHub, a
        bespoke tour packages booking website meticulously crafted using the
        MERN stack. Designed to cater to the wanderlust of globetrotters,
        ExploreHub offers a diverse array of meticulously curated tour packages,
        each expertly crafted to ensure unforgettable adventures.
        <br />
        Users delve into a world of possibilities, exploring diverse tour
        options, each complete with detailed day-wise itineraries, pricing
        information, and trip durations. To ensure top-notch security, I
        implemented DUO 2FA for robust user authentication, enhancing the safety
        of user accounts and sensitive information.
        <br />
        Embark on a seamless travel booking journey with ExploreHub, where
        wanderers find their perfect escapades and embark on adventures tailored
        to their desires. Witness the convergence of cutting-edge technology and
        travel expertise in this platform dedicated to delivering tailored and
        secure travel experiences.
      </p>
    ),
    image: explorehub,
  },
];
const to = (i: number) => ({
  x: 0,
  y: i * -50,
  scale: 1,
  rot: -5 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(projectDescriptions.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === projectDescriptions.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div className="deck" key={i} style={{ x, y }}>
      <animated.div
        {...bind(i)}
        className="project-slide-card"
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <div className="project-slide-card">
          <img src={projectDescriptions[i].image} alt="" />
          {projectDescriptions[i].title.length < 24 ? (
            <h1
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "1.5rem",
              }}
            >
              {projectDescriptions[i].title}
            </h1>
          ) : (
            <h3>{projectDescriptions[i].title}</h3>
          )}
        </div>
      </animated.div>
    </animated.div>
  ));
}
const ProjectMobileSection = () => {
  return (
    <section id="project-mobile-section">
      <h1
        style={{
          margin: "4rem",
          textAlign: "center",
        }}
      >
        Projects
      </h1>
      <div className="project-mobile-container">
        <Deck />
      </div>
    </section>
  );
};
export default ProjectMobileSection;
