import { useEffect, useRef } from "react";

const LightSpeed = () => {
  const canvasRef = useRef(null);
  const STARCOUNT = 256;
  const MAXDEPTH = 64;
  const LINELENGTH = 0.05;
  const MINLENGTH = 1;
  const SPEED = 5;
  const CYCLE = 40;
  let CURRENTSPEED = 10;
  let SPEEDCHANGE = 0;
  let animationRequest = null;
  let isAnimating = true;

  let stars = new Array(STARCOUNT);
  let ctx;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    initStars();
    animationRequest = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRequest);
  }, []);

  function randomRange(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
  }

  function initStars() {
    for (let i = 0; i < stars.length; i++) {
      stars[i] = {
        x: randomRange(-25, 25),
        y: randomRange(-25, 25),
        z: randomRange(1, MAXDEPTH),
        s: randomRange(0, SPEED / 20),
      };
    }
  }

  function degToRad(deg) {
    let radians = (deg * Math.PI) / 180 - Math.PI / 2;
    return radians;
  }

  function animate() {
    const halfWidth = canvasRef.current.width / 2;
    const halfHeight = canvasRef.current.height / 2;

    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    SPEEDCHANGE++;
    CURRENTSPEED = SPEED + Math.sin((SPEEDCHANGE / CYCLE) * 5);

    for (let i = 0; i < stars.length; i++) {
      let star = stars[i];
      star.z -= CURRENTSPEED / 10 - star.s;

      if (star.z <= 0 || star.z >= MAXDEPTH) {
        star.x = randomRange(-25, 25);
        star.y = randomRange(-25, 25);
        if (star.z <= 0) star.z = MAXDEPTH;
        else star.z = 0;
      }

      let k = 255 / star.z;
      let px = star.x * k + halfWidth;
      let py = star.y * k + halfHeight;

      if (
        px >= 0 &&
        px <= window.innerWidth &&
        py >= 0 &&
        py <= window.innerHeight
      ) {
        let size = 1 - (star.z / MAXDEPTH) * 1.5;
        let shade = parseInt(size * 255);
        let ox = (size * (px - halfWidth) * CURRENTSPEED * LINELENGTH) / 2;
        let oy = (size * (py - halfHeight) * CURRENTSPEED * LINELENGTH) / 2;
        ctx.lineWidth = size * 4;
        ctx.strokeStyle = `rgb(${shade},${shade},${shade})`;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + ox, py + oy);
        ctx.stroke();
      }
    }

    if (isAnimating) {
      animationRequest = requestAnimationFrame(animate);
    }
  }

  // Stop animation when component unmounts
  useEffect(() => {
    return () => {
      isAnimating = false;
      cancelAnimationFrame(animationRequest);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default LightSpeed;
