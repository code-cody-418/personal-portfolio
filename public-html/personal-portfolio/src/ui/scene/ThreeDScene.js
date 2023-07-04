import React, { Suspense } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { TitleText } from "./3d-text/TitleText";
import { SkillsTitleText } from "./3d-text/SkillsTitleText";
import { StacksTitleText } from "./3d-text/StacksTitleText";
import { StacksListText } from "./3d-text/StacksListText";
import { SkillsListText } from "./3d-text/SkillsListText";
import { TitleProfessionText } from "./3d-text/TitleProfessionText";
import { ContactFormText } from "./3d-text/ContactFormText";
import Mouse01 from "../tutorial/Mouse01";
import HandModel from "../tutorial/Hand-model";
import Headset from "../tutorial/Headset01";
import "../../ui/scene/sceneStyle.css";
import { EmployersTitleText } from "./3d-text/EmployersTitleText";
import { EmployersListText } from "./3d-text/EmployersListText";
import { Canvas } from "@react-three/fiber";
import { XR } from "@react-three/xr";
import { Perf } from "r3f-perf";
import { MyModal } from "../modal/MyModal";

export const ThreeDScene = () => {
  return (
    <>
      <MyModal />

      <Suspense fallback={<h1 className="loading">Loading...</h1>}>
        <Canvas>

          <Perf />

          <XR>
            {/* <DefaultXRControllers />
          <Hands /> */}

            <OrbitControls
              enablePan={true}
              enableZoom={false}
              // distance of camera creation
              minDistance={0}
              maxDistance={3}
              rotateSpeed={0.3}
              // vertical angle limit
              minPolarAngle={1.5708}
              maxPolarAngle={1.5708}
            // horizontal angle limit
            // minAzimuthAngle={-1.57}
            // maxAzimuthAngle={1.57}
            />

            <ambientLight intensity={0.5} />
            {/* <directionalLight color={"0xffffff"} intensity={100} /> */}

            <TitleText />
            <TitleProfessionText />

            <Mouse01
              position={[3, -8, -15]}
              rotation={[0.4, -1.3, 0.2]}
              scale={0.05}
            />
            <HandModel
              position={[-0.5, -6.5, -15]}
              rotation={[0.4, 0, 0]}
              scale={3}
            />
            <Headset
              position={[2, -15, -15]}
              // rotation={[-1.5708, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
            />

            <ContactFormText />

            <StacksTitleText />
            <StacksListText />

            <SkillsTitleText />
            <SkillsListText />

            <EmployersTitleText />
            <EmployersListText />

            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
            />
          </XR>
        </Canvas>
      </Suspense>
    </>
  );
};
