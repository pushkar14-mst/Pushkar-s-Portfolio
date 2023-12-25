import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import "./ProjectMobileSection.css";
import rythmic1 from "../../assets/rythmic_1.png";
import mern_chat from "../../assets/mern_chat.png";
import bookTheBest1 from "../../assets/bookTheBest_1.png";
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
];
const to = (i: number) => ({
  x: 0,
  y: i * -100,
  scale: 1,
  rot: -10 + Math.random() * 20,
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
          <h1
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "1.5rem",
            }}
          >
            {projectDescriptions[i].title}
          </h1>
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
