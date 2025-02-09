import React, { Suspense, useState } from "react";
import { TitleText } from "./3d-text/title/TitleText";
import { SkillsTitleText } from "./3d-text/SkillsTitleText";
import { StacksTitleText } from "./3d-text/StacksTitleText";
import { StacksListText } from "./3d-text/StacksListText";
import { SkillsListText } from "./3d-text/SkillsListText";
import { TitleProfessionText } from "./3d-text/title/TitleProfessionText";
import { TitleDescriptionText } from "./3d-text/title/TitleDescriptionText";
import { EmployersTitleText } from "./3d-text/EmployersTitleText";
import { EmployersListText } from "./3d-text/EmployersListText";
import { Canvas } from "@react-three/fiber";
import { MyModal } from "../modal/MyModal";
import { Planet01 } from "./planets/Planet-01";
import { CodeLogo } from "./skills-icons/Code_logo";
import { DynamicCamera } from "./camera/DynamicCamera";
import { useStore } from "../utils/store";
import { Analytics } from "../analytics/Analytics";
import { Perf } from "r3f-perf";

const rotationDirection = 0.1;
const heightDirection = 2;
const minCameraHeight = 0;
const maxCameraHeight = -94;
const experienceSectionHeightStart = -30;
const experienceSectionHeightEnd = -38;

export const ThreeDScene = () => {
  const [watchClicks, setWatchClicks] = useState(1);

  const setCameraHeight = useStore((state) => state.setCameraHeight);
  const cameraHeight = useStore((state) => state.cameraHeight);

  const setCameraRotation = useStore((state) => state.setCameraRotation);
  const cameraRotation = useStore((state) => state.cameraRotation);

  // analytics store
  const setSessionClicks = useStore((state) => state.setSessionClicks);

  let initialCameraRotation;

  function handleCameraDirection({
    cameraRotationDirectionSpeed,
    cameraHeightDirectionSpeed,
  }) {
    // Check if the camera should rotate based off of section height
    if (
      cameraHeight <= experienceSectionHeightStart &&
      cameraHeight >= experienceSectionHeightEnd
    ) {
      initialCameraRotation = cameraRotation;
    } else {
      initialCameraRotation = cameraRotation + cameraRotationDirectionSpeed;
    }
    setCameraRotation(adjustCameraRotation());

    let cameraHeightCheck = cameraHeight + cameraHeightDirectionSpeed;
    // Ensures that the camera does not go above or below the last section screen
    if (
      cameraHeightCheck <= minCameraHeight &&
      cameraHeightCheck >= maxCameraHeight
    ) {
      setCameraHeight(cameraHeight + cameraHeightDirectionSpeed);
    }
  }

  // adjustCameraRotation is for center the section view. Almost like an auto aim in a video game
  const adjustCameraRotation = () => {
    if (initialCameraRotation >= 0) {
      // hit home
      initialCameraRotation = 0;
    } else if (initialCameraRotation <= -1.5 && initialCameraRotation >= -1.6) {
      // hit Expereince
      initialCameraRotation = -1.57;
    } else if (initialCameraRotation <= -3.1 && initialCameraRotation >= -3.2) {
      // hit skill
      initialCameraRotation = -3.14;
    } else if (initialCameraRotation <= -4.7 && initialCameraRotation >= -4.8) {
      // hit stack
      initialCameraRotation = -4.71;
    } else if (initialCameraRotation <= -4.8) {
      // hit End
      initialCameraRotation = -4.71;
    }

    return initialCameraRotation;
  };

  const handleAnalytics = () => {
    setWatchClicks((watchClicks) => watchClicks + 1);
    setSessionClicks(watchClicks);
  };

  return (
    <>
      <MyModal />
      <Analytics />

      <Suspense>
        <Canvas
          onWheel={(event) => {
            if (event.deltaY > 0) {
              handleCameraDirection({
                cameraRotationDirectionSpeed: -rotationDirection,
                cameraHeightDirectionSpeed: -heightDirection,
              });
            } else if (event.deltaY < 0) {
              handleCameraDirection({
                cameraRotationDirectionSpeed: rotationDirection,
                cameraHeightDirectionSpeed: heightDirection,
              });
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
            <TitleDescriptionText />

            {/* <ContactFormText />
            <AboutMeText /> */}

            <group position={[0, -35, 0]}>
              <EmployersTitleText />
              <EmployersListText />
            </group>

            <group position={[0, -65, 0]}>
              <SkillsTitleText />
              <SkillsListText />
            </group>

            <group position={[0, -94, 0]}>
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
