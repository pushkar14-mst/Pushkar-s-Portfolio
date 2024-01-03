import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ForestScene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/KJju1ChQY6-mGGVa/scene.splinecode"
  );
  const s1: any = useRef(null);
  const s2: any = useRef(null);
  const s3: any = useRef(null);
  const s4: any = useRef(null);
  const s5: any = useRef(null);
  const s6: any = useRef(null);
  const s7: any = useRef(null);
  useFrame(() => {
    s1.current.position.y += 0.01;
    s2.current.position.y += 0.02;
    s3.current.position.y += 0.03;
    s4.current.position.y += 0.04;
    s5.current.position.y += 0.05;
    s6.current.position.y += 0.06;
    s7.current.position.y += 0.07;
  });
  return (
    <>
      <color attach="background" args={["#010615"]} />
      <group {...props} dispose={null}>
        <scene name="Scene" rotation={[45, 100, 0]}>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            color="#fef1e4"
            position={[-175.06, 648.16, 345.51]}
            rotation={[0, 0, 0]}
            scale={0.12}
          />
          <group name="trees" position={[-38.77, 121.71, -208.56]} scale={1}>
            <group
              name="tree"
              position={[1067.53, -71.52, -377.13]}
              rotation={[0.07, 0, -0.04]}
              scale={[0.42, 0.48, 0.42]}
            >
              <mesh
                name="Cylinder 4"
                geometry={nodes["Cylinder 4"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -207.57, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 3"
                geometry={nodes["Cylinder 3"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[52.02, 70.54, 0]}
                rotation={[0, 0, -0.21]}
                scale={[1.04, 0.74, 1.04]}
              />
              <mesh
                name="Cylinder 2"
                geometry={nodes["Cylinder 2"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[23.04, -93.02, 0]}
                rotation={[0, 0, -0.13]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[6.46, -272.47, 0]}
                rotation={[0, 0, -0.05]}
                scale={[1.27, 0.89, 1.27]}
              />
            </group>
            <group
              name="tree1"
              position={[-73.77, 51.17, -488.56]}
              rotation={[0.04, 0, 0]}
              scale={[0.6, 0.69, 0.6]}
            >
              <mesh
                name="Cylinder 41"
                geometry={nodes["Cylinder 41"].geometry}
                material={materials.trunk}
                castShadow
                receiveShadow
                position={[-0.91, -207.57, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 31"
                geometry={nodes["Cylinder 31"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[52.02, 70.54, 0]}
                rotation={[0, 0, -0.21]}
                scale={[1.04, 0.74, 1.04]}
              />
              <mesh
                name="Cylinder 21"
                geometry={nodes["Cylinder 21"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[23.04, -93.02, 0]}
                rotation={[0, 0, -0.13]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder1"
                geometry={nodes.Cylinder1.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[6.46, -272.47, 0]}
                rotation={[0, 0, -0.05]}
                scale={[1.27, 0.89, 1.27]}
              />
            </group>
            <group
              name="tree2"
              position={[-880.24, 191.5, -578.24]}
              rotation={[-0.06, 0, 0]}
              scale={[-0.52, 1.01, 0.52]}
            >
              <mesh
                name="Cylinder 42"
                geometry={nodes["Cylinder 42"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -207.57, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 32"
                geometry={nodes["Cylinder 32"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[40.83, 69.72, 0]}
                rotation={[0, 0, -0.13]}
                scale={[1.04, 0.74, 1.04]}
              />
              <mesh
                name="Cylinder 22"
                geometry={nodes["Cylinder 22"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[23.04, -93.02, 0]}
                rotation={[0, 0, -0.13]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder2"
                geometry={nodes.Cylinder2.geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[6.46, -272.47, 0]}
                rotation={[0, 0, -0.05]}
                scale={[1.27, 0.89, 1.27]}
              />
            </group>
            <group
              name="tree3"
              position={[961.48, -15.58, -34.95]}
              rotation={[-0.06, 0, 0.04]}
              scale={[0.62, 0.73, 0.62]}
            >
              <mesh
                name="Cylinder 43"
                geometry={nodes["Cylinder 43"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -207.57, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 33"
                geometry={nodes["Cylinder 33"].geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[-12.23, 47.39, 0]}
                rotation={[0, 0, -0.01]}
                scale={[1.04, 0.74, 1.04]}
              />
              <mesh
                name="Cylinder 23"
                geometry={nodes["Cylinder 23"].geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[-11.83, -116.7, 0]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder3"
                geometry={nodes.Cylinder3.geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[-10.06, -271.33, 0]}
                rotation={[0, 0, 0.04]}
                scale={[1.27, 0.89, 1.27]}
              />
            </group>
            <group
              name="tree4"
              position={[-213.22, -1.99, -108.53]}
              rotation={[0.07, 0, 0.05]}
              scale={[0.68, 0.77, 0.68]}
            >
              <mesh
                name="Cylinder 44"
                geometry={nodes["Cylinder 44"].geometry}
                material={materials.trunk}
                castShadow
                receiveShadow
                position={[-0.91, -207.57, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 34"
                geometry={nodes["Cylinder 34"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-12.23, 47.39, 0]}
                rotation={[0, 0, -0.01]}
                scale={[1.04, 0.74, 1.04]}
              />
              <mesh
                name="Cylinder 24"
                geometry={nodes["Cylinder 24"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-11.83, -116.7, 0]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder4"
                geometry={nodes.Cylinder4.geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-10.06, -271.33, 0]}
                rotation={[0, 0, 0.04]}
                scale={[1.27, 0.89, 1.27]}
              />
            </group>
            <group
              name="tree5"
              position={[-362.87, -89.86, -369.19]}
              scale={[0.44, 0.55, 0.44]}
            >
              <mesh
                name="Cylinder 45"
                geometry={nodes["Cylinder 45"].geometry}
                material={materials.trunk}
                castShadow
                receiveShadow
                position={[-0.91, -207.57, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 35"
                geometry={nodes["Cylinder 35"].geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[-12.23, 47.39, 0]}
                rotation={[0, 0, -0.01]}
                scale={[1.04, 0.74, 1.04]}
              />
              <mesh
                name="Cylinder 25"
                geometry={nodes["Cylinder 25"].geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[-11.83, -116.7, 0]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder5"
                geometry={nodes.Cylinder5.geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[-10.06, -271.33, 0]}
                rotation={[0, 0, 0.04]}
                scale={[1.27, 0.89, 1.27]}
              />
            </group>
            <group
              name="tree6"
              position={[-429.65, -44.49, -519.63]}
              rotation={[-0.07, 0, 0.01]}
              scale={[-0.59, 0.43, 0.59]}
            >
              <mesh
                name="Cylinder 46"
                geometry={nodes["Cylinder 46"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -195.38, 1.19]}
                scale={[0.1, 1.81, 0.1]}
              />
              <mesh
                name="Cylinder 36"
                geometry={nodes["Cylinder 36"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[13.11, 193.33, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.62, 1.16, 0.62]}
              />
              <mesh
                name="Cylinder 26"
                geometry={nodes["Cylinder 26"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[1.12, 4.15, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder6"
                geometry={nodes.Cylinder6.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.64, 1.19, 0.63]}
              />
            </group>
            <group
              name="tree7"
              position={[669.06, 2.58, 111.52]}
              rotation={[-0.03, 0, 0.01]}
              scale={[-0.59, 0.52, 0.59]}
            >
              <mesh
                name="Cylinder 47"
                geometry={nodes["Cylinder 47"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -195.38, 1.19]}
                scale={[0.1, 1.81, 0.1]}
              />
              <mesh
                name="Cylinder 37"
                geometry={nodes["Cylinder 37"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[13.11, 193.33, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.62, 1.16, 0.62]}
              />
              <mesh
                name="Cylinder 27"
                geometry={nodes["Cylinder 27"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[1.12, 4.15, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder7"
                geometry={nodes.Cylinder7.geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.64, 1.19, 0.63]}
              />
            </group>
            <group
              name="tree8"
              position={[-293.61, 43.41, -561.1]}
              rotation={[-0.13, 0, -0.05]}
              scale={[-0.59, 0.56, 0.59]}
            >
              <mesh
                name="Cylinder 48"
                geometry={nodes["Cylinder 48"].geometry}
                material={materials.trunk}
                castShadow
                receiveShadow
                position={[-0.91, -195.38, 1.19]}
                scale={[0.1, 1.81, 0.1]}
              />
              <mesh
                name="Cylinder 38"
                geometry={nodes["Cylinder 38"].geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[13.11, 193.33, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.62, 1.16, 0.62]}
              />
              <mesh
                name="Cylinder 28"
                geometry={nodes["Cylinder 28"].geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[1.12, 4.15, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder8"
                geometry={nodes.Cylinder8.geometry}
                material={materials["tree orange"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.64, 1.19, 0.63]}
              />
            </group>
            <group
              name="tree9"
              position={[-530.84, 4.25, -534.68]}
              rotation={[0.05, -0.01, -0.09]}
              scale={[-0.59, 0.52, 0.59]}
            >
              <mesh
                name="Cylinder 49"
                geometry={nodes["Cylinder 49"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -195.38, 1.19]}
                scale={[0.1, 1.81, 0.1]}
              />
              <mesh
                name="Cylinder 39"
                geometry={nodes["Cylinder 39"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[13.11, 193.33, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.62, 1.16, 0.62]}
              />
              <mesh
                name="Cylinder 29"
                geometry={nodes["Cylinder 29"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[1.12, 4.15, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder9"
                geometry={nodes.Cylinder9.geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.64, 1.19, 0.63]}
              />
            </group>
            <group
              name="tree10"
              position={[-850.29, -34.3, 606.57]}
              rotation={[0.1, -Math.PI / 2, 0]}
              scale={[-0.65, 0.49, 0.58]}
            >
              <mesh
                name="Cylinder 410"
                geometry={nodes["Cylinder 410"].geometry}
                material={materials.trunk}
                castShadow
                receiveShadow
                position={[-0.91, -195.38, 1.19]}
                scale={[0.1, 1.81, 0.1]}
              />
              <mesh
                name="Cylinder 310"
                geometry={nodes["Cylinder 310"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[13.11, 193.33, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.62, 1.16, 0.62]}
              />
              <mesh
                name="Cylinder 210"
                geometry={nodes["Cylinder 210"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[1.12, 4.15, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder10"
                geometry={nodes.Cylinder10.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.64, 1.19, 0.63]}
              />
            </group>
            <group
              name="tree11"
              position={[-974.93, 34.27, 244.38]}
              rotation={[-0.03, 0, 0.04]}
              scale={[-0.59, 0.54, 0.59]}
            >
              <mesh
                name="Cylinder 411"
                geometry={nodes["Cylinder 411"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -195.38, 1.19]}
                scale={[0.1, 1.81, 0.1]}
              />
              <mesh
                name="Cylinder 311"
                geometry={nodes["Cylinder 311"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[13.11, 193.33, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.62, 1.16, 0.62]}
              />
              <mesh
                name="Cylinder 211"
                geometry={nodes["Cylinder 211"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[1.12, 4.15, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder11"
                geometry={nodes.Cylinder11.geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.64, 1.19, 0.63]}
              />
            </group>
            <group
              name="tree12"
              position={[-1079.01, -18.49, -488.52]}
              rotation={[-0.11, -0.01, 0.11]}
              scale={[-0.62, 0.48, 0.59]}
            >
              <mesh
                name="Cylinder 412"
                geometry={nodes["Cylinder 412"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -196.06, 8.9]}
                rotation={[0.07, 0, 0]}
                scale={[0.1, 1.81, 0.1]}
              />
              <mesh
                name="Cylinder 312"
                geometry={nodes["Cylinder 312"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[13.11, 193.33, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.62, 1.16, 0.62]}
              />
              <mesh
                name="Cylinder 212"
                geometry={nodes["Cylinder 212"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[1.12, 4.15, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder12"
                geometry={nodes.Cylinder12.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.64, 1.19, 0.63]}
              />
            </group>
            <group
              name="tree13"
              position={[731.48, 62.65, -521.17]}
              rotation={[-0.04, 0, -0.04]}
              scale={[0.63, 0.65, 0.63]}
            >
              <mesh
                name="Cylinder 413"
                geometry={nodes["Cylinder 413"].geometry}
                material={materials.trunk}
                castShadow
                receiveShadow
                position={[-0.91, -195.38, 1.19]}
                scale={[0.1, 1.59, 0.1]}
              />
              <mesh
                name="Cylinder 313"
                geometry={nodes["Cylinder 313"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[14.29, 191, 0]}
                rotation={[0, 0, -0.07]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder 213"
                geometry={nodes["Cylinder 213"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[1.12, -14.3, 0]}
                rotation={[0, 0, -0.03]}
                scale={[0.56, 1.05, 0.56]}
              />
              <mesh
                name="Cylinder13"
                geometry={nodes.Cylinder13.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-1.71, -237.92, 0]}
                rotation={[0, 0, -0.01]}
                scale={[0.56, 1.05, 0.56]}
              />
            </group>
            <group
              name="tree14"
              position={[529.68, 114.88, -393.51]}
              rotation={[-0.03, 0, 0.05]}
              scale={[0.72, 0.93, 0.72]}
            >
              <mesh
                name="Cylinder 414"
                geometry={nodes["Cylinder 414"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -257.48, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 314"
                geometry={nodes["Cylinder 314"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[10.12, -3.34, 0]}
                rotation={[0, 0, -0.06]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder 214"
                geometry={nodes["Cylinder 214"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[4.34, -139.27, 0]}
                rotation={[0, 0, -0.04]}
                scale={[1.2, 0.84, 1.2]}
              />
              <mesh
                name="Cylinder14"
                geometry={nodes.Cylinder14.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-0.19, -270.61, 0]}
                rotation={[0, 0, 0]}
                scale={[1.2, 0.84, 1.2]}
              />
            </group>
            <group
              name="tree15"
              position={[-1036.64, -204.66, -157.27]}
              rotation={[0.06, 0, -0.08]}
              scale={[0.36, 0.5, 0.36]}
            >
              <mesh
                name="Cylinder 415"
                geometry={nodes["Cylinder 415"].geometry}
                material={materials.trunk}
                castShadow
                receiveShadow
                position={[-0.91, -142.9, 1.19]}
                scale={[0.21, 0.57, 0.21]}
              />
              <mesh
                name="Cylinder 315"
                geometry={nodes["Cylinder 315"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-20.1, 351.92, 0]}
                rotation={[0, 0, 0.04]}
              />
              <mesh
                name="Cylinder 215"
                geometry={nodes["Cylinder 215"].geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-12.63, 156.58, 0]}
                rotation={[0, 0, 0.04]}
              />
              <mesh
                name="Cylinder15"
                geometry={nodes.Cylinder15.geometry}
                material={materials["tree yellow 2"]}
                castShadow
                receiveShadow
                position={[-4.5, -55.58, 0]}
                rotation={[0, 0, 0.04]}
              />
            </group>
            <group
              name="tree16"
              position={[-701.2, -26.72, 597.71]}
              rotation={[0, 0, -0.07]}
              scale={[0.6, 0.63, 0.6]}
            >
              <mesh
                name="Cylinder 416"
                geometry={nodes["Cylinder 416"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -257.48, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 316"
                geometry={nodes["Cylinder 316"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-18.26, 303.85, 0]}
                rotation={[0, 0, 0.04]}
              />
              <mesh
                name="Cylinder 216"
                geometry={nodes["Cylinder 216"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-11.35, 123.16, 0]}
                rotation={[0, 0, 0.04]}
              />
              <mesh
                name="Cylinder16"
                geometry={nodes.Cylinder16.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-4.5, -55.58, 0]}
                rotation={[0, 0, 0.04]}
              />
            </group>
            <group
              name="tree17"
              position={[-506.73, -0.49, -403.48]}
              rotation={[0.02, 0, 0.05]}
              scale={[0.44, 0.71, 0.44]}
            >
              <mesh
                name="Cylinder 417"
                geometry={nodes["Cylinder 417"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.91, -257.48, 1.19]}
                scale={[0.21, 0.85, 0.21]}
              />
              <mesh
                name="Cylinder 317"
                geometry={nodes["Cylinder 317"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-18.26, 303.85, 0]}
                rotation={[0, 0, 0.04]}
              />
              <mesh
                name="Cylinder 217"
                geometry={nodes["Cylinder 217"].geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-11.35, 123.16, 0]}
                rotation={[0, 0, 0.04]}
              />
              <mesh
                name="Cylinder17"
                geometry={nodes.Cylinder17.geometry}
                material={materials["tree red"]}
                castShadow
                receiveShadow
                position={[-4.5, -55.58, 0]}
                rotation={[0, 0, 0.04]}
              />
            </group>
          </group>
          <group name="trees_no_leaf" position={[-43.89, 6.49, -38]} scale={1}>
            <group
              name="trees_no_leaf 1"
              position={[-881.77, 8.17, 515.77]}
              rotation={[0, 0.98, 0]}
              scale={[1.92, 1.73, 1.92]}
            >
              <mesh
                name="Cylinder 218"
                geometry={nodes["Cylinder 218"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[17.74, -4.72, 12.24]}
                scale={[0.39, 9.51, 0.39]}
              />
              <mesh
                name="Cylinder 8"
                geometry={nodes["Cylinder 8"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[21, 20.76, -21.73]}
                rotation={[0.82, 0.64, -2.51]}
                scale={[0.11, 2.74, 0.1]}
              />
              <mesh
                name="Cylinder 9"
                geometry={nodes["Cylinder 9"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[17.35, 110.28, 34.24]}
                rotation={[0.91, 0.22, 0.72]}
                scale={[-0.07, 1.39, 0.07]}
              />
              <mesh
                name="Cylinder 7"
                geometry={nodes["Cylinder 7"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[34.6, 53.21, -3.52]}
                rotation={[0.2, 0.38, -2.06]}
                scale={[0.11, 2.14, 0.1]}
              />
              <mesh
                name="Cylinder 81"
                geometry={nodes["Cylinder 81"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-22.37, 50.69, 17.1]}
                rotation={[0.21, 0.24, 0.93]}
                scale={[0.16, 2.51, 0.13]}
              />
              <mesh
                name="Cylinder 82"
                geometry={nodes["Cylinder 82"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-33.04, -26.41, -0.81]}
                rotation={[0.1, -0.22, 2.04]}
                scale={[-0.19, 2.93, 0.16]}
              />
              <mesh
                name="Cylinder 5"
                geometry={nodes["Cylinder 5"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[42.74, -28.92, 19.13]}
                rotation={[-0.01, -0.22, -1.61]}
                scale={[0.15, 2.77, 0.15]}
              />
            </group>
            <group
              name="trees_no_leaf 2"
              position={[-234.86, -26.74, -637.81]}
              rotation={[-Math.PI, -1.22, -Math.PI]}
              scale={1.37}
            >
              <mesh
                name="Cylinder 91"
                geometry={nodes["Cylinder 91"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[17.35, 110.28, 34.24]}
                rotation={[0.91, 0.22, 0.72]}
                scale={[-0.07, 1.39, 0.07]}
              />
              <mesh
                name="Cylinder 71"
                geometry={nodes["Cylinder 71"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[34.6, 53.21, -3.52]}
                rotation={[0.2, 0.38, -2.06]}
                scale={[0.11, 2.14, 0.1]}
              />
              <mesh
                name="Cylinder 83"
                geometry={nodes["Cylinder 83"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-22.37, 50.69, 17.1]}
                rotation={[0.21, 0.24, 0.93]}
                scale={[0.16, 2.51, 0.13]}
              />
              <mesh
                name="Cylinder 84"
                geometry={nodes["Cylinder 84"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-33.04, -26.41, -0.81]}
                rotation={[0.1, -0.22, 2.04]}
                scale={[-0.19, 2.93, 0.16]}
              />
              <mesh
                name="Cylinder 51"
                geometry={nodes["Cylinder 51"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[42.74, -28.92, 19.13]}
                rotation={[-0.01, -0.22, -1.61]}
                scale={[0.15, 2.77, 0.15]}
              />
              <mesh
                name="Cylinder 219"
                geometry={nodes["Cylinder 219"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[17.74, -4.72, 12.24]}
                scale={[0.39, 9.51, 0.39]}
              />
              <mesh
                name="Cylinder 85"
                geometry={nodes["Cylinder 85"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[21, 20.76, -21.73]}
                rotation={[0.82, 0.64, -2.51]}
                scale={[0.11, 2.74, 0.1]}
              />
            </group>
            <group
              name="trees_no_leaf 3"
              position={[1017, -3.94, 640.45]}
              rotation={[0, 0.41, 0]}
              scale={[1.44, 1.82, 1.62]}
            >
              <mesh
                name="Cylinder 10"
                geometry={nodes["Cylinder 10"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-39.49, 8.5, 23.41]}
                rotation={[0.18, 0.22, 0.89]}
                scale={[-0.2, 3.7, 0.2]}
              />
              <mesh
                name="Cylinder 6"
                geometry={nodes["Cylinder 6"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[40.94, -33.02, 1.67]}
                rotation={[0, 0, -0.91]}
                scale={[0.2, 3.7, 0.2]}
              />
              <mesh
                name="Cylinder 318"
                geometry={nodes["Cylinder 318"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[12.39, -7.4, 0.1]}
                scale={[0.63, 8.48, 0.63]}
              />
              <mesh
                name="Cylinder 92"
                geometry={nodes["Cylinder 92"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-12.84, 75.66, -27.63]}
                rotation={[-0.74, 0.71, -0.63]}
                scale={[0.13, 1.35, 0.1]}
              />
            </group>
            <group
              name="trees_no_leaf 4"
              position={[-1044.15, -64.02, -181.63]}
              rotation={[0, 0.77, 0]}
              scale={1.58}
            >
              <mesh
                name="Cylinder 86"
                geometry={nodes["Cylinder 86"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[8.43, 78.87, 9.77]}
                rotation={[0.24, -0.26, -0.82]}
                scale={[0.08, 1.17, 0.08]}
              />
              <mesh
                name="Cylinder 101"
                geometry={nodes["Cylinder 101"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-19.95, 44.62, -6.85]}
                rotation={[-0.3, -0.32, 0.78]}
                scale={[-0.11, 2.12, 0.11]}
              />
              <mesh
                name="Cylinder 72"
                geometry={nodes["Cylinder 72"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[21.02, 25.57, -9]}
                rotation={[-0.18, 0.4, -1.13]}
                scale={[0.11, 2.12, 0.11]}
              />
              <mesh
                name="Cylinder 11"
                geometry={nodes["Cylinder 11"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[2.97, 33.23, 37.73]}
                rotation={[-2.52, 1.27, -2.35]}
                scale={[0.13, 2.52, 0.13]}
              />
              <mesh
                name="Cylinder 93"
                geometry={nodes["Cylinder 93"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-34.7, -23.6, -8.33]}
                rotation={[0.05, -0.26, 1.76]}
                scale={[0.15, 2.77, 0.15]}
              />
              <mesh
                name="Cylinder 418"
                geometry={nodes["Cylinder 418"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[36.25, -44.64, 0.62]}
                rotation={[0, 0, -1.96]}
                scale={[0.15, 2.77, 0.15]}
              />
              <mesh
                name="Cylinder18"
                geometry={nodes.Cylinder18.geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[1.15, -0.03, 9.71]}
                scale={[0.39, 7.46, 0.39]}
              />
            </group>
          </group>
          <group name="plants" position={[62.13, -181.83, 72.14]} scale={1}>
            <group
              name="plant 5"
              position={[730.14, -3.81, -572.25]}
              rotation={[0.33, -1.53, 0.32]}
              scale={[-0.05, 0.05, 0.07]}
            >
              <mesh
                name="Cube 2"
                geometry={nodes["Cube 2"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 3"
                geometry={nodes["Cube 3"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 4"
                geometry={nodes["Cube 4"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 5"
                geometry={nodes["Cube 5"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant"
              position={[-984.22, -16.46, -149.85]}
              rotation={[Math.PI, 0.87, Math.PI]}
              scale={[-0.05, 0.03, 0.03]}
            >
              <mesh
                name="Cube 21"
                geometry={nodes["Cube 21"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 31"
                geometry={nodes["Cube 31"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 41"
                geometry={nodes["Cube 41"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 51"
                geometry={nodes["Cube 51"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant1"
              position={[-859.12, -11.92, -60.2]}
              rotation={[-Math.PI, 1.06, Math.PI]}
              scale={[-0.08, 0.02, 0.05]}
            >
              <mesh
                name="Cube 22"
                geometry={nodes["Cube 22"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 32"
                geometry={nodes["Cube 32"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 42"
                geometry={nodes["Cube 42"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 52"
                geometry={nodes["Cube 52"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant2"
              position={[-873.08, -12.35, -205.08]}
              rotation={[0, -0.44, 0]}
              scale={[0.05, 0.02, 0.05]}
            >
              <mesh
                name="Cube 23"
                geometry={nodes["Cube 23"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 33"
                geometry={nodes["Cube 33"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 43"
                geometry={nodes["Cube 43"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 53"
                geometry={nodes["Cube 53"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube3"
                geometry={nodes.Cube3.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant 4"
              position={[798.58, 1.61, -605.66]}
              rotation={[-3.12, 0.56, 3.13]}
              scale={[0.08, 0.07, 0.1]}
            >
              <mesh
                name="Cube 24"
                geometry={nodes["Cube 24"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 34"
                geometry={nodes["Cube 34"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 44"
                geometry={nodes["Cube 44"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 54"
                geometry={nodes["Cube 54"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube4"
                geometry={nodes.Cube4.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant 6"
              position={[383.73, -11.06, 564.87]}
              rotation={[Math.PI, -0.98, -Math.PI]}
              scale={[-0.07, 0.04, 0.07]}
            >
              <mesh
                name="Cube 25"
                geometry={nodes["Cube 25"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 35"
                geometry={nodes["Cube 35"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 45"
                geometry={nodes["Cube 45"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 55"
                geometry={nodes["Cube 55"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube5"
                geometry={nodes.Cube5.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant 11"
              position={[-195.28, -9.45, -596.31]}
              rotation={[Math.PI, 0.03, -Math.PI]}
              scale={[0.1, 0.03, 0.09]}
            >
              <mesh
                name="Cube 26"
                geometry={nodes["Cube 26"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 36"
                geometry={nodes["Cube 36"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 46"
                geometry={nodes["Cube 46"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 56"
                geometry={nodes["Cube 56"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube6"
                geometry={nodes.Cube6.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant 7"
              position={[-150.85, 2.5, 610.74]}
              rotation={[Math.PI, 0.09, -Math.PI]}
              scale={[0.15, 0.08, 0.15]}
            >
              <mesh
                name="Cube 27"
                geometry={nodes["Cube 27"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 37"
                geometry={nodes["Cube 37"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 47"
                geometry={nodes["Cube 47"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 57"
                geometry={nodes["Cube 57"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube7"
                geometry={nodes.Cube7.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant 3"
              position={[473.84, -5.66, 593.23]}
              rotation={[Math.PI, 0.43, -Math.PI]}
              scale={[-0.1, 0.09, 0.1]}
            >
              <mesh
                name="Cube 28"
                geometry={nodes["Cube 28"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 38"
                geometry={nodes["Cube 38"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 48"
                geometry={nodes["Cube 48"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 58"
                geometry={nodes["Cube 58"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube8"
                geometry={nodes.Cube8.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant 2"
              position={[972.43, -12.53, 527.19]}
              rotation={[Math.PI, -0.14, -Math.PI]}
              scale={[0.09, 0.06, 0.09]}
            >
              <mesh
                name="Cube 29"
                geometry={nodes["Cube 29"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 39"
                geometry={nodes["Cube 39"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 49"
                geometry={nodes["Cube 49"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 59"
                geometry={nodes["Cube 59"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube9"
                geometry={nodes.Cube9.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
            <group
              name="plant3"
              position={[905.43, -12.53, 576.03]}
              rotation={[Math.PI, 1.35, -Math.PI]}
              scale={[0.09, 0.06, 0.09]}
            >
              <mesh
                name="Cube 210"
                geometry={nodes["Cube 210"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-7.14, 90.95, 96.67]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1}
              />
              <mesh
                name="Cube 310"
                geometry={nodes["Cube 310"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-43.79, 13.1, 134.87]}
                rotation={[-3.05, -Math.PI / 4, -3.05]}
                scale={1.05}
              />
              <mesh
                name="Cube 410"
                geometry={nodes["Cube 410"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[15.1, -65.59, -9.11]}
                rotation={[-0.04, 1.22, -0.22]}
                scale={1}
              />
              <mesh
                name="Cube 510"
                geometry={nodes["Cube 510"].geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-35.36, -31.14, 149.73]}
                rotation={[-3.11, 1.3, -2.91]}
                scale={1.05}
              />
              <mesh
                name="Cube10"
                geometry={nodes.Cube10.geometry}
                material={materials.plants}
                castShadow
                receiveShadow
                position={[-5.02, -42.1, 189.42]}
                rotation={[0, -1.22, -0.17]}
                scale={1}
              />
            </group>
          </group>
          <group name="rocks" position={[-67.84, -254.76, -15.18]} scale={1}>
            <mesh
              name="Cube 311"
              geometry={nodes["Cube 311"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[361.95, -0.18, -508.1]}
              rotation={[-1.72, 0.59, 1.78]}
              scale={[5.15, 4.06, 4.63]}
            />
            <mesh
              name="Cube 312"
              geometry={nodes["Cube 312"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[200.47, 6.66, -194.2]}
              rotation={[-2.78, 1.44, 2.9]}
              scale={[3.94, 3.1, 3.54]}
            />
            <mesh
              name="Cube 313"
              geometry={nodes["Cube 313"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[294.01, -1.51, 598.09]}
              rotation={[-1.74, 0.76, 1.81]}
              scale={[3.94, 3.1, 3.54]}
            />
            <mesh
              name="Cube 331"
              geometry={nodes["Cube 331"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[554.78, 66.91, 673.33]}
              rotation={[3.12, -1.12, 3.13]}
              scale={[3.27, 2.44, 3.62]}
            />
            <mesh
              name="Cube 341"
              geometry={nodes["Cube 341"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[902.79, 103.35, -606.53]}
              rotation={[0, 0.76, -0.1]}
              scale={[4.2, 4.54, 3.73]}
            />
            <mesh
              name="Cube 321"
              geometry={nodes["Cube 321"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-71.24, 82.91, 555.76]}
              rotation={[-0.1, 0.9, -0.03]}
              scale={[6.44, 4.14, 5.78]}
            />
            <mesh
              name="Cube 261"
              geometry={nodes["Cube 261"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-674.04, 110.01, 604.09]}
              rotation={[-0.08, -0.17, -0.16]}
              scale={[8.95, 14.92, 7.4]}
            />
            <mesh
              name="Cube 30"
              geometry={nodes["Cube 30"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[242.02, -20.43, 667.06]}
              rotation={[2.4, 1.34, -2.41]}
              scale={[7.83, 6.18, 7.04]}
            />
            <mesh
              name="Cube 342"
              geometry={nodes["Cube 342"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[935.29, 61.7, -567.77]}
              rotation={[1.6, -0.12, -1.33]}
              scale={[1.83, 1.42, 2.49]}
            />
            <mesh
              name="Cube 322"
              geometry={nodes["Cube 322"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-12.81, 47.42, 612.69]}
              rotation={[1.47, -0.05, -1.35]}
              scale={[2.81, 2.21, 2.26]}
            />
            <mesh
              name="Cube 314"
              geometry={nodes["Cube 314"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-698.49, 31.1, 709.13]}
              rotation={[1.56, -0.1, -0.48]}
              scale={[3.94, 2.81, 3.2]}
            />
            <mesh
              name="Cube 332"
              geometry={nodes["Cube 332"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[558.9, 64.89, 610.71]}
              rotation={[-0.06, -0.17, 0.02]}
              scale={[4.74, 4.48, 3.15]}
            />
            <mesh
              name="Cube 351"
              geometry={nodes["Cube 351"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[483.63, 10.42, -46.39]}
              rotation={[1.66, 0.02, -2.7]}
              scale={[3.48, 5.91, 4.1]}
            />
            <mesh
              name="Cube 343"
              geometry={nodes["Cube 343"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[877.96, 103.33, -547.7]}
              rotation={[3.1, 0.44, -3.11]}
              scale={[3.99, 6.79, 3.23]}
            />
            <mesh
              name="Cube 323"
              geometry={nodes["Cube 323"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-97.52, 86.21, 651.2]}
              rotation={[3.05, 0.31, -3.11]}
              scale={[6.2, 6.16, 4.98]}
            />
            <mesh
              name="Cube 251"
              geometry={nodes["Cube 251"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-816.63, 77.06, 636.15]}
              rotation={[2.4, 1.34, -2.41]}
              scale={[7.83, 6.18, 7.04]}
            />
          </group>
          <group
            name="log"
            position={[-171.79, -185.52, -551.16]}
            rotation={[-Math.PI, -0.63, -Math.PI]}
            scale={5.59}
          >
            <mesh
              name="Cylinder 319"
              geometry={nodes["Cylinder 319"].geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-0.01, 0.43, 0]}
              scale={0.9}
            />
            <mesh
              name="Cylinder 419"
              geometry={nodes["Cylinder 419"].geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[3.88, 1.84, -1.47]}
              rotation={[-0.23, 0.2, -0.71]}
              scale={[0.13, 0.21, 0.13]}
            />
            <mesh
              name="Cylinder19"
              geometry={nodes.Cylinder19.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[0, 0.3, 0]}
            />
          </group>
          <group
            name="log1"
            position={[585.55, -191.98, -422.39]}
            rotation={[Math.PI, -1.46, Math.PI]}
            scale={[3.81, 3.2, 3.81]}
          >
            <mesh
              name="Cylinder 320"
              geometry={nodes["Cylinder 320"].geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-0.01, 0.43, 0]}
              scale={0.9}
            />
            <mesh
              name="Cylinder 420"
              geometry={nodes["Cylinder 420"].geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[3.88, 1.84, -1.47]}
              rotation={[-0.23, 0.2, -0.71]}
              scale={[0.13, 0.21, 0.13]}
            />
            <mesh
              name="Cylinder20"
              geometry={nodes.Cylinder20.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[0, 0.3, 0]}
            />
          </group>
          <group name="log2" position={[-464.37, -185.43, -87.09]} scale={4.68}>
            <mesh
              name="Cylinder 321"
              geometry={nodes["Cylinder 321"].geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-0.01, 0.43, 0]}
              scale={0.9}
            />
            <mesh
              name="Cylinder 421"
              geometry={nodes["Cylinder 421"].geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[3.88, 1.84, -1.47]}
              rotation={[-0.23, 0.2, -0.71]}
              scale={[0.13, 0.21, 0.13]}
            />
            <mesh
              name="Cylinder21"
              geometry={nodes.Cylinder21.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[0, 0.3, 0]}
            />
          </group>
          <group
            name="pathway"
            position={[-140.97, -205.39, 287.17]}
            scale={[-19.23, 19.23, 19.23]}
          >
            <mesh
              name="Cube 252"
              geometry={nodes["Cube 252"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[3.63, 0.06, -1.2]}
              rotation={[-Math.PI / 2, 0, -1.51]}
              scale={[-0.14, 0.1, 0.02]}
            />
            <mesh
              name="Cube 231"
              geometry={nodes["Cube 231"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-1.81, 0.06, -1.22]}
              rotation={[-Math.PI / 2, 0, -1.51]}
              scale={[0.14, 0.1, 0.02]}
            />
            <mesh
              name="Cube 253"
              geometry={nodes["Cube 253"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-0.41, 0.09, -0.34]}
              rotation={[-Math.PI / 2, 0, -2.37]}
              scale={[-0.1, 0.07, 0.01]}
            />
            <mesh
              name="Cube 241"
              geometry={nodes["Cube 241"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-5.34, 0.09, -0.34]}
              rotation={[-Math.PI / 2, 0, -2.37]}
              scale={[0.1, 0.07, 0.01]}
            />
            <mesh
              name="Cube 254"
              geometry={nodes["Cube 254"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-0.06, 0.11, 2.01]}
              rotation={[-Math.PI / 2, 0, -1.14]}
              scale={[-0.14, 0.1, 0.02]}
            />
            <mesh
              name="Cube 20"
              geometry={nodes["Cube 20"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-4.99, 0.11, 2.01]}
              rotation={[-Math.PI / 2, 0, -1.14]}
              scale={[0.14, 0.1, 0.02]}
            />
            <mesh
              name="Cube 255"
              geometry={nodes["Cube 255"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[5.14, 0.04, 0.7]}
              rotation={[-Math.PI / 2, 0, -0.45]}
              scale={[-0.14, 0.14, 0.03]}
            />
            <mesh
              name="Cube 221"
              geometry={nodes["Cube 221"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[0.21, 0.04, 0.7]}
              rotation={[-Math.PI / 2, 0, -0.45]}
              scale={[0.14, 0.14, 0.03]}
            />
            <mesh
              name="Cube 256"
              geometry={nodes["Cube 256"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[2.65, 0.05, 0.75]}
              rotation={[-Math.PI / 2, 0, -0.45]}
              scale={[-0.21, 0.15, 0.03]}
            />
            <mesh
              name="Cube 211"
              geometry={nodes["Cube 211"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-2.28, 0.05, 0.75]}
              rotation={[-Math.PI / 2, 0, -0.45]}
              scale={[0.21, 0.15, 0.03]}
            />
            <mesh
              name="Cube 257"
              geometry={nodes["Cube 257"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[0.89, 0.03, -1.64]}
              rotation={[-Math.PI / 2, 0, 0.38]}
              scale={[-0.26, 0.19, 0.04]}
            />
            <mesh
              name="Cube 19"
              geometry={nodes["Cube 19"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-4.04, 0.03, -1.64]}
              rotation={[-Math.PI / 2, 0, 0.38]}
              scale={[0.26, 0.19, 0.04]}
            />
          </group>
          <group
            name="pathway1"
            position={[562.12, -205.05, 287.17]}
            scale={19.23}
          >
            <mesh
              name="Cube 242"
              geometry={nodes["Cube 242"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[5.93, -0.02, -0.77]}
              rotation={[-1.56, 0.03, 1.09]}
              scale={[0.15, 0.11, 0.02]}
            />
            <mesh
              name="Cube 232"
              geometry={nodes["Cube 232"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-1.14, 0.09, -0.99]}
              rotation={[-Math.PI / 2, 0, -1.51]}
              scale={[0.15, 0.11, 0.02]}
            />
            <mesh
              name="Cube 243"
              geometry={nodes["Cube 243"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[1.46, 0.12, -0.23]}
              rotation={[-1.56, 0.03, 1.45]}
              scale={[0.15, 0.11, 0.02]}
            />
            <mesh
              name="Cube 201"
              geometry={nodes["Cube 201"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-4.69, 0.09, 1.78]}
              rotation={[-Math.PI / 2, 0, -1.14]}
              scale={[0.15, 0.11, 0.02]}
            />
            <mesh
              name="Cube 244"
              geometry={nodes["Cube 244"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[5.8, -0.08, 1.78]}
              rotation={[-1.56, 0.03, 2.15]}
              scale={[0.15, 0.14, 0.03]}
            />
            <mesh
              name="Cube 222"
              geometry={nodes["Cube 222"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[0.07, 0.04, 1.26]}
              rotation={[-Math.PI / 2, 0, -0.45]}
              scale={[0.15, 0.14, 0.03]}
            />
            <mesh
              name="Cube 245"
              geometry={nodes["Cube 245"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[4.01, -0.01, -0.02]}
              rotation={[-1.56, 0.03, 2.15]}
              scale={[0.22, 0.16, 0.03]}
            />
            <mesh
              name="Cube 212"
              geometry={nodes["Cube 212"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-2.4, 0.04, 0.65]}
              rotation={[-Math.PI / 2, 0, -0.45]}
              scale={[0.22, 0.16, 0.03]}
            />
            <mesh
              name="Cube 191"
              geometry={nodes["Cube 191"].geometry}
              material={materials.rocks}
              castShadow
              receiveShadow
              position={[-3.98, 0.02, -1.24]}
              rotation={[-Math.PI / 2, 0, 0.38]}
              scale={[0.27, 0.19, 0.04]}
            />
          </group>
          <group
            name="bridge"
            position={[211.59, -171.85, 285.28]}
            scale={[18.38, 15.53, 16.04]}
          >
            <group
              name="ropes"
              position={[-0.03, 3.81, 0.06]}
              scale={[0.05, 0.06, 0.06]}
            >
              <mesh
                name="Torus 2"
                geometry={nodes["Torus 2"].geometry}
                material={materials.rope}
                castShadow
                receiveShadow
                position={[-105.32, 22.32, -73.12]}
                rotation={[-0.01, 0.01, 1.86]}
                scale={[15.82, 17.53, 16.04]}
              />
              <mesh
                name="Torus 21"
                geometry={nodes["Torus 21"].geometry}
                material={materials.rope}
                castShadow
                receiveShadow
                position={[99.76, 20.21, -72.71]}
                rotation={[-0.01, -0.01, -1.86]}
                scale={[-15.76, 17.92, 16.04]}
              />
              <mesh
                name="Torus 22"
                geometry={nodes["Torus 22"].geometry}
                material={materials.rope}
                castShadow
                receiveShadow
                position={[108.11, 22.32, 73]}
                rotation={[0, 0, -1.86]}
                scale={[-15.76, 17.92, 16.04]}
              />
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials.rope}
                castShadow
                receiveShadow
                position={[-105.28, 22.32, 73.1]}
                rotation={[-0.01, 0.01, 1.86]}
                scale={[15.82, 18.41, 16.04]}
              />
            </group>
            <group
              name="posts"
              position={[0.02, 2.47, 0.03]}
              scale={[0.05, 0.06, 0.06]}
            >
              <mesh
                name="Cylinder 322"
                geometry={nodes["Cylinder 322"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[200.41, -27.63, -73.35]}
                rotation={[0.02, 0, 0.01]}
                scale={[8.99, 73.54, 7.85]}
              />
              <mesh
                name="Cylinder 220"
                geometry={nodes["Cylinder 220"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[204.17, -27.62, 72.87]}
                rotation={[0.03, 0, 0.07]}
                scale={[8.99, 73.6, 7.85]}
              />
              <mesh
                name="Cylinder 422"
                geometry={nodes["Cylinder 422"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-5.04, 36.03, -73.35]}
                rotation={[-0.02, 0, 0.01]}
                scale={[8.99, 62.32, 7.85]}
              />
              <mesh
                name="Cylinder 323"
                geometry={nodes["Cylinder 323"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-200.33, -27.62, -73.35]}
                rotation={[0.02, 0, -0.02]}
                scale={[8.99, 73.54, 7.85]}
              />
              <mesh
                name="Cylinder 423"
                geometry={nodes["Cylinder 423"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[0.47, 36.03, 72.87]}
                rotation={[0, 0, -0.05]}
                scale={[8.99, 62.34, 7.85]}
              />
              <mesh
                name="Cylinder22"
                geometry={nodes.Cylinder22.geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-202.83, -27.62, 72.87]}
                rotation={[0.02, 0, 0.09]}
                scale={[8.99, 73.65, 7.85]}
              />
            </group>
            <group name="floor" position={[0, 0, 0]} scale={[1, 1.3, 1]}>
              <mesh
                name="Cube 258"
                geometry={nodes["Cube 258"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[4.68, 0.94, 0]}
                rotation={[0, 0, -0.26]}
                scale={[-1.45, 0.23, 6.76]}
              />
              <mesh
                name="Cube 246"
                geometry={nodes["Cube 246"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[6.88, 0.17, 0.38]}
                rotation={[0, 0, -0.44]}
                scale={[-1.44, 0.23, 6.45]}
              />
              <mesh
                name="Cube 233"
                geometry={nodes["Cube 233"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[8.95, -0.86, 0]}
                rotation={[0, 0, -0.52]}
                scale={[-1.43, 0.23, 6.45]}
              />
              <mesh
                name="Cube 223"
                geometry={nodes["Cube 223"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[2.39, 1.33, 0.07]}
                rotation={[0, 0, -0.09]}
                scale={[-1.46, 0.23, 6.45]}
              />
              <mesh
                name="Cube 259"
                geometry={nodes["Cube 259"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-4.7, 0.94, 0.16]}
                rotation={[0, 0, 0.26]}
                scale={[1.45, 0.23, 6.64]}
              />
              <mesh
                name="Cube 247"
                geometry={nodes["Cube 247"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-6.9, 0.17, 0]}
                rotation={[0, 0, 0.44]}
                scale={[1.44, 0.23, 6.77]}
              />
              <mesh
                name="Cube 234"
                geometry={nodes["Cube 234"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-8.97, -0.86, 0]}
                rotation={[0, 0, 0.52]}
                scale={[1.43, 0.23, 6.6]}
              />
              <mesh
                name="Cube 224"
                geometry={nodes["Cube 224"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-2.4, 1.33, -0.08]}
                rotation={[0, 0, 0.09]}
                scale={[1.46, 0.23, 6.45]}
              />
              <mesh
                name="Cube 213"
                geometry={nodes["Cube 213"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-0.01, 1.44, -0.12]}
                scale={[1.55, 0.23, 6.7]}
              />
              <mesh
                name="Cube 202"
                geometry={nodes["Cube 202"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[11.07, -1.44, 0]}
                scale={[1.37, 0.23, 7.17]}
              />
              <mesh
                name="Cube 192"
                geometry={nodes["Cube 192"].geometry}
                material={materials.bridge}
                castShadow
                receiveShadow
                position={[-11.07, -1.44, 0]}
                scale={[1.37, 0.23, 7.36]}
              />
            </group>
          </group>
          <group
            name="cabin"
            position={[-784.79, 69.24, -309.39]}
            scale={[2.36, 2.29, 2.29]}
          >
            <group
              name="fence"
              position={[104.92, -113.4, -16.84]}
              rotation={[0, 0.06, 0]}
              scale={[6, 8.29, 5.95]}
            >
              <mesh
                name="Cube 333"
                geometry={nodes["Cube 333"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.13, 0.07, -9.73]}
                rotation={[-Math.PI, 1.52, Math.PI]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 324"
                geometry={nodes["Cube 324"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.17, 0.07, -7.7]}
                rotation={[-Math.PI, 1.35, -Math.PI]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 315"
                geometry={nodes["Cube 315"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.48, 0.07, -5.63]}
                rotation={[-Math.PI, 1.45, -Math.PI]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 301"
                geometry={nodes["Cube 301"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.72, 0.07, -3.7]}
                rotation={[-Math.PI, 1.45, -Math.PI]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 291"
                geometry={nodes["Cube 291"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.87, 0.07, -2.06]}
                rotation={[-Math.PI, 1.53, -Math.PI]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 281"
                geometry={nodes["Cube 281"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.83, 0.07, -0.21]}
                rotation={[0, 1.49, 0]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 271"
                geometry={nodes["Cube 271"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.57, 0.07, 1.72]}
                rotation={[0, 1.39, 0]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 262"
                geometry={nodes["Cube 262"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.15, 0.07, 3.64]}
                rotation={[0, 1.32, 0]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 2510"
                geometry={nodes["Cube 2510"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.39, 0.07, 5.45]}
                rotation={[0, 1.26, 0]}
                scale={[2.7, 0.54, 0.2]}
              />
              <mesh
                name="Cube 334"
                geometry={nodes["Cube 334"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.18, -0.45, -10.66]}
                rotation={[-Math.PI, 1.53, -3.11]}
                scale={[0.32, 1.21, 0.12]}
              />
              <mesh
                name="Cube 325"
                geometry={nodes["Cube 325"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.03, -0.45, -8.61]}
                rotation={[-Math.PI, 1.36, -3.03]}
                scale={[0.32, 1.12, 0.12]}
              />
              <mesh
                name="Cube 225"
                geometry={nodes["Cube 225"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.37, -0.45, -6.55]}
                rotation={[-Math.PI, 1.47, -3.03]}
                scale={[0.32, 1.12, 0.12]}
              />
              <mesh
                name="Cube 214"
                geometry={nodes["Cube 214"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.89, -0.45, -1.11]}
                rotation={[0.09, Math.PI / 2, 0]}
                scale={[0.32, 1.08, 0.12]}
              />
              <mesh
                name="Cube 226"
                geometry={nodes["Cube 226"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.58, -0.45, -4.74]}
                rotation={[2.71, 1.41, -2.72]}
                scale={[0.32, 1.29, 0.12]}
              />
              <mesh
                name="Cube 203"
                geometry={nodes["Cube 203"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.74, -0.45, 0.69]}
                rotation={[0.31, 1.43, -0.31]}
                scale={[0.32, 1.12, 0.12]}
              />
              <mesh
                name="Cube 227"
                geometry={nodes["Cube 227"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.82, -0.45, -2.93]}
                rotation={[-2.77, 1.46, 2.72]}
                scale={[0.32, 1.12, 0.12]}
              />
              <mesh
                name="Cube 248"
                geometry={nodes["Cube 248"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.78, -0.45, 6.54]}
                rotation={[-0.05, 1.18, 0.17]}
                scale={[0.32, 1.12, 0.12]}
              />
              <mesh
                name="Cube 235"
                geometry={nodes["Cube 235"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-0.1, -0.45, 4.52]}
                rotation={[0.12, 1.3, -0.21]}
                scale={[0.32, 1.12, 0.12]}
              />
              <mesh
                name="Cube 193"
                geometry={nodes["Cube 193"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[0.4, -0.4, 2.57]}
                rotation={[0, 1.4, 0]}
                scale={[0.32, 1.25, 0.12]}
              />
            </group>
            <group name="smoke" position={[9.6, 85.51, -58.73]} scale={0.85}>
              <mesh
                name="Cube 215"
                geometry={nodes["Cube 215"].geometry}
                material={materials.smoke}
                castShadow
                receiveShadow
                position={[12.47, -21.19, 1.56]}
                rotation={[-0.25, -0.11, 0.41]}
                scale={[0.13, 0.14, 0.13]}
                ref={s1}
              />
              <mesh
                name="Cube 272"
                geometry={nodes["Cube 272"].geometry}
                material={materials.smoke}
                castShadow
                receiveShadow
                position={[8.34, 17.19, -1.24]}
                rotation={[0.65, 1.15, -1.47]}
                scale={[0.14, 0.13, 0.14]}
                ref={s2}
              />
              <mesh
                name="Cube 263"
                geometry={nodes["Cube 263"].geometry}
                material={materials.smoke}
                castShadow
                receiveShadow
                position={[-4.41, 35.39, 8.1]}
                rotation={[-0.47, 0.64, -0.54]}
                scale={[0.14, 0.13, 0.14]}
                ref={s3}
              />
              <mesh
                name="Cube 2511"
                geometry={nodes["Cube 2511"].geometry}
                material={materials.smoke}
                castShadow
                receiveShadow
                position={[-11.17, 7.12, 8.55]}
                rotation={[-0.12, 0.65, -1.64]}
                scale={[0.25, 0.23, 0.25]}
                ref={s4}
              />
              <mesh
                name="Cube 249"
                geometry={nodes["Cube 249"].geometry}
                material={materials.smoke}
                castShadow
                receiveShadow
                position={[6.57, -7.12, -9.78]}
                rotation={[-0.4, 0.56, -1.11]}
                scale={[0.33, 0.31, 0.33]}
                ref={s5}
              />
              <mesh
                name="Cube 204"
                geometry={nodes["Cube 204"].geometry}
                material={materials.smoke}
                castShadow
                receiveShadow
                position={[8.12, -28.25, 9.17]}
                rotation={[-0.07, -0.03, 0.42]}
                scale={[0.2, 0.22, 0.21]}
                ref={s6}
              />
              <mesh
                name="Cube 194"
                geometry={nodes["Cube 194"].geometry}
                material={materials.smoke}
                castShadow
                receiveShadow
                position={[12.02, -35.74, 16.66]}
                scale={0.22}
                ref={s7}
              />
            </group>
            <group
              name="house"
              position={[-0.1, -32.81, -20.82]}
              scale={[0.73, 0.73, 0.78]}
            >
              <mesh
                name="Rectangle"
                geometry={nodes.Rectangle.geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[-102.69, -105.86, -15.8]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.13, 9.23, 0.54]}
              />
              <mesh
                name="Cylinder 61"
                geometry={nodes["Cylinder 61"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[-76.46, 38.16, -29.39]}
                rotation={[-0.01, -1.56, -1.58]}
                scale={[0.06, 0.11, 0.06]}
              />
              <mesh
                name="Cylinder 52"
                geometry={nodes["Cylinder 52"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[97.82, -67.84, -31.55]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.06, 2.33, 0.06]}
              />
              <mesh
                name="Cylinder 324"
                geometry={nodes["Cylinder 324"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[-97.87, -67.84, -31.55]}
                rotation={[Math.PI / 2, -1.57, 0]}
                scale={[0.06, 2.33, 0.06]}
              />
              <mesh
                name="Cylinder 424"
                geometry={nodes["Cylinder 424"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[0.14, -67.84, -130.57]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.06, 2.36, 0.06]}
              />
              <mesh
                name="Cylinder 87"
                geometry={nodes["Cylinder 87"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[0.01, 85.83, -130.15]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.08, 0.2, 0.08]}
              />
              <mesh
                name="Cylinder 73"
                geometry={nodes["Cylinder 73"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[0.01, 85.83, 66.96]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.08, 0.2, 0.08]}
              />
              <mesh
                name="Cylinder23"
                geometry={nodes.Cylinder23.geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[0.14, -67.56, 66.96]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.08, 2.35, 0.08]}
              />
              <mesh
                name="Rectangle 11"
                geometry={nodes["Rectangle 11"].geometry}
                material={materials.roof}
                castShadow
                receiveShadow
                position={[-43.65, -65.71, 70.4]}
                rotation={[0, 0, 0.05]}
                scale={[1.24, 6.83, 1.27]}
              />
              <mesh
                name="Rectangle 9"
                geometry={nodes["Rectangle 9"].geometry}
                material={materials.windows}
                castShadow
                receiveShadow
                position={[-44.33, -62.84, 70.61]}
                rotation={[0, 0, 0.05]}
                scale={[0.4, 1.94, 1.27]}
              />
              <mesh
                name="Rectangle 8"
                geometry={nodes["Rectangle 8"].geometry}
                material={materials.windows}
                castShadow
                receiveShadow
                position={[32.78, -68.31, 70.4]}
                rotation={[0, 0, 0.05]}
                scale={[1.39, 2.1, 1.27]}
              />
              <mesh
                name="Rectangle 10"
                geometry={nodes["Rectangle 10"].geometry}
                material={materials.windows}
                castShadow
                receiveShadow
                position={[-79.29, -2.3, -29.71]}
                rotation={[Math.PI / 2, -1.57, Math.PI / 2]}
                scale={[1.3, 2.1, 1.36]}
              />
              <mesh
                name="Rectangle 7"
                geometry={nodes["Rectangle 7"].geometry}
                material={materials.windows}
                castShadow
                receiveShadow
                position={[-0.09, 15.21, 70.4]}
                rotation={[0, 0, 0.05]}
                scale={[1.39, 2.1, 1.27]}
              />
              <mesh
                name="Cube 292"
                geometry={nodes["Cube 292"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-64.09, -107.68, 120.8]}
                rotation={[-1.09, 0, 0.02]}
                scale={[0.14, 2.92, 0.29]}
              />
              <mesh
                name="Cube 282"
                geometry={nodes["Cube 282"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-64.09, -95.08, 120.8]}
                rotation={[-1.1, 0, 0.02]}
                scale={[0.14, 2.93, 0.3]}
              />
              <mesh
                name="Cube 293"
                geometry={nodes["Cube 293"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-23.9, -107.8, 121.15]}
                rotation={[-1.09, 0.09, 0.03]}
                scale={[0.14, 2.95, 0.29]}
              />
              <mesh
                name="Cube 273"
                geometry={nodes["Cube 273"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-23.58, -95.24, 121.13]}
                rotation={[-1.1, 0.09, 0.03]}
                scale={[0.14, 2.97, 0.3]}
              />
              <mesh
                name="Cube 264"
                geometry={nodes["Cube 264"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-23.29, -107.94, 133.86]}
                rotation={[0, 0.01, -0.01]}
                scale={[0.31, 2.31, 0.31]}
              />
              <mesh
                name="Cube 236"
                geometry={nodes["Cube 236"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-24.37, -95.41, 109.29]}
                rotation={[0, 0.09, -0.05]}
                scale={[0.35, 2.31, 0.35]}
              />
              <mesh
                name="Cube 228"
                geometry={nodes["Cube 228"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[98.97, -95.44, 108.24]}
                rotation={[0.01, 0.16, -0.06]}
                scale={[0.35, 2.37, 0.35]}
              />
              <mesh
                name="Cube 265"
                geometry={nodes["Cube 265"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-63.87, -107.92, 133.02]}
                rotation={[0, -0.05, 0]}
                scale={[0.31, 2.31, 0.31]}
              />
              <mesh
                name="Cube 216"
                geometry={nodes["Cube 216"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-64.36, -95.41, 108.24]}
                rotation={[0, -0.07, 0]}
                scale={[0.35, 2.31, 0.35]}
              />
              <mesh
                name="Cube 205"
                geometry={nodes["Cube 205"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-98.8, -95.43, 108.24]}
                rotation={[0, 0, 0.05]}
                scale={[0.35, 2.31, 0.35]}
              />
              <mesh
                name="Cube 195"
                geometry={nodes["Cube 195"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[0.13, -112.85, -14.66]}
                scale={[8.87, 1.75, 11.05]}
              />
              <mesh
                name="Cube 13"
                geometry={nodes["Cube 13"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-44.87, -80.54, 56.3]}
                scale={[0.73, 1.26, 0.73]}
              />
              <mesh
                name="Cube 12"
                geometry={nodes["Cube 12"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-65.43, -2.89, -29.3]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.42, 0.58, 0.56]}
              />
              <mesh
                name="Cube 14"
                geometry={nodes["Cube 14"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-45, -64.66, 64.36]}
                scale={[-0.18, 0.27, 0.24]}
              />
              <mesh
                name="Cube 15"
                geometry={nodes["Cube 15"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[23.01, -69.46, 55.42]}
                scale={[0.44, 0.59, 0.61]}
              />
              <mesh
                name="Cube 11"
                geometry={nodes["Cube 11"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[0.28, 16.58, 55.42]}
                scale={[0.45, 0.59, 0.61]}
              />
              <mesh
                name="Cube 2512"
                geometry={nodes["Cube 2512"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-81.83, -84.72, 108.27]}
                rotation={[1.57, 1.54, -1.57]}
                scale={[0.71, 0.1, 2.07]}
              />
              <mesh
                name="Cube 326"
                geometry={nodes["Cube 326"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-43.87, -105.32, 114.61]}
                rotation={[0.15, 1.57, -0.15]}
                scale={[0.56, 0.06, 1.99]}
              />
              <mesh
                name="Cube 316"
                geometry={nodes["Cube 316"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-43.73, -109.16, 122.58]}
                rotation={[-1.94, 1.56, 2.03]}
                scale={[0.54, 0.06, 1.99]}
              />
              <mesh
                name="Cube 302"
                geometry={nodes["Cube 302"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[-43.56, -113.94, 131.68]}
                rotation={[-2.3, 1.55, 2.3]}
                scale={[0.56, 0.06, 2.04]}
              />
              <mesh
                name="Cube 2410"
                geometry={nodes["Cube 2410"].geometry}
                material={materials.wood}
                castShadow
                receiveShadow
                position={[38.28, -84.59, 108.76]}
                rotation={[-2.3, 1.55, 2.3]}
                scale={[0.82, 0.1, 6.55]}
              />
              <mesh
                name="Cube 16"
                geometry={nodes["Cube 16"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[35.25, -85.63, 70.41]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.82, 0.1, 2.51]}
              />
              <mesh
                name="Cube 9"
                geometry={nodes["Cube 9"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[0.36, 0.05, 70.95]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.82, 0.1, 1.44]}
              />
              <mesh
                name="Cube 8"
                geometry={nodes["Cube 8"].geometry}
                material={materials.logs}
                castShadow
                receiveShadow
                position={[-79.05, -18.21, -28.88]}
                scale={[1, 0.11, 1.43]}
              />
              <mesh
                name="Cube 7"
                geometry={nodes["Cube 7"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[27.02, 115.56, -26.72]}
                scale={[0.45, 1.04, 0.7]}
              />
              <mesh
                name="Cube 10"
                geometry={nodes["Cube 10"].geometry}
                material={materials.roof}
                castShadow
                receiveShadow
                position={[-32.69, 42.32, -29.23]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.45, 0.14, 0.5]}
              />
              <mesh
                name="Cube 6"
                geometry={nodes["Cube 6"].geometry}
                material={materials.roof}
                castShadow
                receiveShadow
                position={[0.3, 89.64, -102.12]}
                scale={[1.08, 0.33, 1.16]}
              />
              <mesh
                name="Cube 511"
                geometry={nodes["Cube 511"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[-52.48, 7.95, -29.3]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.43, 0.43, 0.44]}
              />
              <mesh
                name="Cube 411"
                geometry={nodes["Cube 411"].geometry}
                material={materials.cabin}
                castShadow
                receiveShadow
                position={[0.02, 7.95, -22.35]}
                scale={[1.02, 1, 1.15]}
              />
            </group>
          </group>
          <group
            name="pathway2"
            position={[-860.67, -201.52, -57.93]}
            rotation={[-0.03, 0, -0.03]}
            scale={0.91}
          >
            <mesh
              name="Rectangle 4"
              geometry={nodes["Rectangle 4"].geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[1.4, -2.75, 8.43]}
              rotation={[-1.64, -0.08, -1.49]}
              scale={[6.17, 28.43, 39.86]}
            />
            <mesh
              name="Rectangle 6"
              geometry={nodes["Rectangle 6"].geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[2.96, -2.48, 46.83]}
              rotation={[-1.55, -0.08, -1.52]}
              scale={[6.33, 25.46, 39.87]}
            />
            <mesh
              name="Rectangle 5"
              geometry={nodes["Rectangle 5"].geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[0.62, -2.26, 28.11]}
              rotation={[-1.54, -0.08, -1.54]}
              scale={[5.85, 27.53, 39.85]}
            />
            <mesh
              name="Rectangle 3"
              geometry={nodes["Rectangle 3"].geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[0.12, -2.17, -10.12]}
              rotation={[-1.6, -0.07, -1.56]}
              scale={[6.33, 30.24, 39.88]}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes["Rectangle 2"].geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[-0.61, -2.6, -28.96]}
              rotation={[-1.59, -0.08, -1.56]}
              scale={[6.32, 32.04, 39.82]}
            />
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials[""]}
              castShadow
              receiveShadow
              position={[0.14, -2.93, -48.4]}
              rotation={[-1.57, -0.07, -1.57]}
              scale={[6.32, 33.78, 39.84]}
            />
          </group>
          <mesh
            name="river"
            geometry={nodes.river.geometry}
            material={materials[""]}
            castShadow
            receiveShadow
            position={[141.05, -280.86, -12.38]}
            scale={[5.63, 1.81, 15.88]}
          />
          <mesh
            name="grass"
            geometry={nodes.grass.geometry}
            material={materials.floor}
            castShadow
            receiveShadow
            position={[905.37, -271.98, -10.35]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[2.23, 0.83, 9.74]}
          />
          <mesh
            name="grass1"
            geometry={nodes.grass1.geometry}
            material={materials.floor}
            castShadow
            receiveShadow
            position={[-570.96, -273.66, -10.35]}
            scale={[2.23, 0.83, 9.74]}
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
