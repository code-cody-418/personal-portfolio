import React, { Suspense } from "react";
import "../../styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Goku01 from "../../../3D-Models/Goku01";
import Naruto from "../../../3D-Models/Naruto";
import Kakashi from "../../../3D-Models/Kakashi";
import Korra from "../../../3D-Models/Korra";
import backgroundHDR from "../../../images/black-hdri.HDR";
import ChristmasTree from "../../../3D-Models/event-models/Christmas-tree";
import ChristmasRedBall from "../../../3D-Models/event-models/Christmas-red-ball";

import SnowFlakes02 from "../../../3D-Models/event-models/Snow-flakes-02";
import Coins from "../../../3D-Models/Coins";

export default function AnimationScene({
  name,
  kakashiAction,
  gokuAction,
  narutoAction,
  korraAction,
}) {
  return (
    <>
      <Suspense fallback={<h1 className="canvasSize loading">Loading...</h1>}>
        <Canvas
          shadows
          camera={{ position: [0, 15, 25], fov: 55 }}
          resize={0.5}
          onCreated={({ camera }) => camera.lookAt(0, 0, -35)}
        >
          {/*<OrbitControls />*/}
          {/*<ambientLight intensity={1} />*/}
          <directionalLight
            castShadow
            position={[0, 15, 25]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={100}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, 0, 0]} intensity={1.5} />

          <Environment files={backgroundHDR} background={true} />
          <group>
            <Goku01 gokuAction={gokuAction} name={name} />
            <Naruto narutoAction={narutoAction} name={name} />
            <Kakashi kakashiAction={kakashiAction} name={name} />
            <Korra korraAction={korraAction} name={name} />

            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
              receiveShadow
            >
              <planeBufferGeometry attach="geometry" args={[20, 90]} />
              {/*<shadowMaterial attach='material' opacity={0.3} />*/}
              <meshStandardMaterial attach="material" color={"#add4e3"} />

              {/* christamas event */}
              {/* <group position={[-10, 10, 0]}>
                        <ChristmasTree />
                        </group> */}
              {/*<ChristmasRedBall position = {[10, 10, 0]} />*/}
              {/* <SnowFlakes02 snow={"snowFallingSeven"}/>
                        <SnowFlakes02 snow={"snowFallingEight"}/>
                        <SnowFlakes02 snow={"snowFallingNine"}/> */}
            </mesh>
          </group>
        </Canvas>
      </Suspense>
    </>
  );
}
