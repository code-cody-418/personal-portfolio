import React, { Suspense, useEffect, useState } from "react";
import { Stars } from "@react-three/drei";
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
import { Perf } from "r3f-perf";
import { MyModal } from "../modal/MyModal";
import { AboutMeText } from "./3d-text/AboutMeText";
import { Planet01 } from "./planets/Planet-01";
import { Loading } from "../loading/Loading";
import { CodeLogo } from "./skills-icons/Code_logo";
import { DynamicCamera } from "./camera/DynamicCamera";
import { ManualCameraControls } from "./camera/ManualCameraControls";
import { useModalStore } from "../utils/store";

export const ThreeDScene = () => {
  const [moveDistance, setMoveDistance] = useState(0);
  const [enableMouseScroll, setEnableMouseScroll] = useState(false);

  const enableManualControls = useModalStore(
    (state) => state.enableManualControls
  );

  const disableManualControls = useModalStore(
    (state) => state.disableManualControls
  );

  const setManualControlDirectionForward = useModalStore(
    (state) => state.setManualControlDirectionForward
  );

  const setManualControlDirectionBackward = useModalStore(
    (state) => state.setManualControlDirectionBackward
  );

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

  return (
    <>
      <MyModal />
      <ManualCameraControls />

      <Suspense fallback={<Loading />}>
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

          <TitleText />
          <TitleProfessionText />

          <ContactFormText />
          <AboutMeText />

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

          <CodeLogo />
          <Planet01 />
        </Canvas>
      </Suspense>
    </>
  );
};
