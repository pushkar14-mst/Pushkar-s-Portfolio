import { useEffect, useRef } from "react";
import "./SkillsSection.css";
import skills from "./skills";
const SkillsSection: React.FC = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;

  const speedWheel = 0.02;
  const speedDrag = -0.1;

  const getZindex = (array: HTMLDivElement[], index: number) =>
    array.map((_, i) =>
      index === i ? array.length : array.length - Math.abs(index - i)
    );

  const displayItems = (
    item: HTMLDivElement,
    index: number,
    active: number
  ) => {
    const zIndex = getZindex(itemsRef.current, active)[index];
    item.style.setProperty("--zIndex", `${zIndex}`);
    item.style.setProperty(
      "--active",
      `${(index - active) / itemsRef.current.length}`
    );
  };

  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor((progress / 100) * (itemsRef.current.length - 1));

    itemsRef.current.forEach((item, index) =>
      displayItems(item, index, active)
    );
  };

  useEffect(() => {
    const handleWheel = (e: any) => {
      const wheelProgress = e.deltaY * speedWheel;
      progress = progress + wheelProgress;
      animate();
    };

    const handleMouseMove = (e: any) => {
      if (!isDown) return;
      const x = e.clientX;
      const mouseProgress = (x - startX) * speedDrag;
      progress = progress + mouseProgress;
      startX = x;
      animate();
    };

    const handleMouseDown = (e: any) => {
      isDown = true;
      startX = e.clientX;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    document.addEventListener("wheel", handleWheel);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-section-container">
        <div className="carousel">
          <h1 id="skills-h1">Skills</h1>
          {skills.map((city, index) => (
            <div
              key={index}
              className="carousel-item"
              ref={(el) => (itemsRef.current[index] = el!)}
              onClick={() => {
                progress = (index / itemsRef.current.length) * 100 + 10;
                animate();
              }}
            >
              <div className="carousel-box">
                {/* <div className="title">{city}</div>
                  <div className="num">{`0${index + 1}`}</div> */}
                <img src={city.image} alt={city.skillName} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
