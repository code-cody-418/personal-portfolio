import React, { Suspense, useEffect, useState } from "react";
import { TitleText } from "./3d-text/TitleText";
import { SkillsTitleText } from "./3d-text/SkillsTitleText";
import { StacksTitleText } from "./3d-text/StacksTitleText";
import { StacksListText } from "./3d-text/StacksListText";
import { SkillsListText } from "./3d-text/SkillsListText";
import { TitleProfessionText } from "./3d-text/TitleProfessionText";
import { ContactFormText } from "./3d-text/ContactFormText";
import { EmployersTitleText } from "./3d-text/EmployersTitleText";
import { EmployersListText } from "./3d-text/EmployersListText";
import { Canvas } from "@react-three/fiber";
import { MyModal } from "../modal/MyModal";
import { AboutMeText } from "./3d-text/AboutMeText";
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

  // manual controls store
  const enableManualControls = useStore((state) => state.enableManualControls);
  const disableManualControls = useStore(
    (state) => state.disableManualControls
  );
  const setManualControlDirectionForward = useStore(
    (state) => state.setManualControlDirectionForward
  );
  const setManualControlDirectionBackward = useStore(
    (state) => state.setManualControlDirectionBackward
  );

  // analytics store
  const setSessionClicks = useStore((state) => state.setSessionClicks);

  // A timer that helps control the mouse wheel camera controller
  useEffect(() => {
    const timer = setInterval(() => {
      if (moveDistance > 0) {
        setMoveDistance(moveDistance - 1);
      } else if (moveDistance === 0 && enableMouseScroll === true) {
        disableManualControls();
        setEnableMouseScroll(false);
      }
    }, 200);
    return () => clearInterval(timer);
  });

  const handleBackwards = () => {
    enableManualControls();
    setManualControlDirectionBackward();
    setEnableMouseScroll(true);
  };

  const handleForwards = () => {
    enableManualControls();
    setManualControlDirectionForward();
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
            if (moveDistance < 4) {
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

            <StacksTitleText />
            <StacksListText />

            <SkillsTitleText />
            <SkillsListText />

            <EmployersTitleText />
            <EmployersListText />
          </group>

          <CodeLogo />
          <Planet01 />
        </Canvas>
      </Suspense>
    </>
  );
};
