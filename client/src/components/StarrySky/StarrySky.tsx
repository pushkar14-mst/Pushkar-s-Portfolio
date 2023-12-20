import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./StarrySky.css";
interface StarrySkyProps {
  children?: React.ReactNode;
}

const StarrySky: React.FC<StarrySkyProps> = ({ children }) => {
  const [num] = useState<number>(60);
  const [vw, setVw] = useState<number>(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  );
  const [vh, setVh] = useState<number>(
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  );

  const starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0",
        },
        {
          duration: 700,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (_, i) => 50 * i,
    });
  };

  const shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (_, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1",
        },
      ],
      width: [
        {
          value: "150px",
        },
        {
          value: "0px",
        },
      ],
      translateX: 350,
    });
  };

  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };

  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString();
  };

  useEffect(() => {
    starryNight();
    shootingStars();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVw(
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      );
      setVh(
        Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="starry">
      <svg id="sky">
        {[...Array(num)].map((_, y) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={y}
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(60)].map((_, y) => (
          <div
            key={y}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default StarrySky;
