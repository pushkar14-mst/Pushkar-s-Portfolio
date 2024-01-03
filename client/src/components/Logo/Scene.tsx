import { useRef, useState, useEffect } from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/SxOQXoPF8OMQL3sa/scene.splinecode"
  );
  const scene: any = useRef();
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position);
  };
  useFrame(() => {
    scene.current.rotation.y += 0.004;
    // scene.current.position.y += -scrollPos * 0.0009;
    // scene.current.rotation.x += 0.04;
    // scene.current.rotation.z += 0.04;
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <color attach="background" args={["#060C21"]} /> */}
      <group {...props} dispose={null}>
        <scene name="Scene">
          <mesh
            name="Text"
            geometry={nodes.Text.geometry}
            material={materials["Text Material"]}
            castShadow
            receiveShadow
            ref={scene}
            position={[660, 1800, 0]}
            rotation={[0, 0, 0]}
          />
          <directionalLight
            name="Light Main"
            castShadow
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-500}
            shadow-camera-right={500}
            shadow-camera-top={500}
            shadow-camera-bottom={-500}
            position={[-129.8, 169.47, 157.37]}
          />
          <directionalLight
            name="Key Light"
            castShadow
            intensity={0.2}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-500}
            shadow-camera-right={500}
            shadow-camera-top={500}
            shadow-camera-bottom={-500}
            position={[138.73, 169.47, -75.64]}
          />

          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  );
}
