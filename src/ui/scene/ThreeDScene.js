import React, { Suspense, useEffect, useState } from "react";
import { TitleText } from "./3d-text/TitleText";
import { SkillsTitleText } from "./3d-text/SkillsTitleText";
import { StacksTitleText } from "./3d-text/StacksTitleText";
import { StacksListText } from "./3d-text/StacksListText";
import { SkillsListText } from "./3d-text/SkillsListText";
import { TitleProfessionText } from "./3d-text/TitleProfessionText";
import { EmployersTitleText } from "./3d-text/EmployersTitleText";
import { EmployersListText } from "./3d-text/EmployersListText";
import { Canvas } from "@react-three/fiber";
import { MyModal } from "../modal/MyModal";
import { Planet01 } from "./planets/Planet-01";
import { CodeLogo } from "./skills-icons/Code_logo";
import { DynamicCamera } from "./camera/DynamicCamera";
import { ManualCameraControls } from "./camera/ManualCameraControls";
import { useStore } from "../utils/store";
import { Analytics } from "../analytics/Analytics";
import { Perf } from "r3f-perf";

export const ThreeDScene = () => {
  const [moveDistance, setMoveDistance] = useState(0);
  const [watchClicks, setWatchClicks] = useState(1);
  const [enableMouseScroll, setEnableMouseScroll] = useState(false);
  
  const setCameraHeightUp = useStore((state) => state.setCameraHeightUp);
  const setCameraHeightDown = useStore((state) => state.setCameraHeightDown);
  const cameraHeight = useStore((state) => state.cameraHeight);

  const setCameraRotationLeft = useStore((state) => state.setCameraRotationLeft);
  const setCameraRotationRight = useStore((state) => state.setCameraRotationRight);
  const cameraRotation = useStore((state) => state.cameraRotation);

  // analytics store
  const setSessionClicks = useStore((state) => state.setSessionClicks);

  // A timer that helps control the mouse wheel camera controller
  useEffect(() => {
    const timer = setInterval(() => {
      if (moveDistance > 0) {
        setMoveDistance(moveDistance - 1);
      } else if (moveDistance === 0 && enableMouseScroll === true) {
        setEnableMouseScroll(false);
      }
    }, 200);
    return () => clearInterval(timer);
  });

  const handleBackwards = () => {
    setCameraHeightDown(cameraHeight);
    setCameraRotationLeft(cameraRotation)
    setEnableMouseScroll(true);
  };

  const handleForwards = () => {
    setCameraHeightUp(cameraHeight);
    setCameraRotationRight(cameraRotation)
    setEnableMouseScroll(true);
  };

  const handleAnalytics = () => {
    setWatchClicks((watchClicks) => watchClicks + 1);
    setSessionClicks(watchClicks);
  };

  return (
    <>
      <MyModal />
      <ManualCameraControls />
      <Analytics />

      <Suspense>
        <Canvas
          onWheel={(event) => {
            if (moveDistance < 1) {
              setMoveDistance(moveDistance + 1);
            }
            if (event.deltaY > 0) {
              handleForwards();
            } else if (event.deltaY < 0) {
              handleBackwards();
            }
          }}
        >
          <Perf />

          <DynamicCamera />

          <ambientLight intensity={0.1} />
          <directionalLight position={[0, -10, 0]} intensity={1} />

          <group onClick={handleAnalytics}>
            <TitleText />
            <TitleProfessionText />

            {/* <ContactFormText />
            <AboutMeText /> */}

            <group position={[0, -25, 0]}>
              <EmployersTitleText />
              <EmployersListText />
            </group>

            <group position={[0, -50, 0]}>
              <SkillsTitleText />
              <SkillsListText />
            </group>

            <group position={[0, -75, 0]}>
              <StacksTitleText />
              <StacksListText />
            </group>
          </group>

          <CodeLogo />
          <Planet01 />
        </Canvas>
      </Suspense>
    </>
  );
};
