import React, { Suspense, useState } from "react";
import { TitleText } from "./3d-text/title/TitleText";
import { SkillsTitleText } from "./3d-text/SkillsTitleText";
import { StacksTitleText } from "./3d-text/StacksTitleText";
import { StacksListText } from "./3d-text/StacksListText";
import { SkillsListText } from "./3d-text/SkillsListText";
import { TitleProfessionText } from "./3d-text/title/TitleProfessionText";
import { TitleDescriptionText } from "./3d-text/title/TitleDescriptionText";
import { Canvas } from "@react-three/fiber";
import { MyModal } from "../modal/MyModal";
import { Planet01 } from "./planets/Planet-01";
import { CodeLogo } from "./skills-icons/Code_logo";
import { DynamicCamera } from "./camera/DynamicCamera";
import { useStore } from "../utils/store";
import { Analytics } from "../analytics/Analytics";
import { Perf } from "r3f-perf";
import { ExperienceSection } from "./3d-text/experience/ExperienceSection";
import { OrbitControls, Stars, TransformControls } from "@react-three/drei";
import { ExperienceLight } from "./3d-text/experience/ExperienceLight";

const rotationDirection = 0.1;
const heightDirection = 2;
const minCameraHeight = 0;
const maxCameraHeight = -175;
const experienceSectionHeightStart = -30;
const experienceSectionHeightEnd = -105;

export const ThreeDScene = () => {
  const [watchClicks, setWatchClicks] = useState(1);

  const setCameraHeight = useStore((state) => state.setCameraHeight);
  const cameraHeight = useStore((state) => state.cameraHeight);

  const setCameraRotation = useStore((state) => state.setCameraRotation);
  const cameraRotation = useStore((state) => state.cameraRotation);

  // analytics store
  const setSessionClicks = useStore((state) => state.setSessionClicks);

  function handleCameraDirection({
    cameraRotationDirectionSpeed,
    cameraHeightDirectionSpeed,
  }) {
    // Check if the camera should rotate based off of section height
    if (
      cameraHeight <= experienceSectionHeightStart &&
      cameraHeight >= experienceSectionHeightEnd
    ) {
      setCameraRotation(-1.57);
    } else {
      const adjustedCameraRotation = adjustCameraRotation(
        cameraRotationDirectionSpeed
      );
      setCameraRotation(adjustedCameraRotation);
    }

    let cameraHeightCheck = cameraHeight + cameraHeightDirectionSpeed;
    // Ensures that the camera does not go above or below the last section screen
    if (
      cameraHeightCheck <= minCameraHeight &&
      cameraHeightCheck >= maxCameraHeight
    ) {
      setCameraHeight(cameraHeight + cameraHeightDirectionSpeed);
    }
  }

  const adjustCameraRotation = (cameraRotationDirectionSpeed) => {
    let checkCameraRotation = cameraRotation + cameraRotationDirectionSpeed;
    checkCameraRotation = Math.round(checkCameraRotation * 100) / 100;
    // centers the section view. Almost like an auto aim in a video game
    if (checkCameraRotation >= 0) {
      // hit home
      checkCameraRotation = 0;
    } else if (checkCameraRotation <= -3.1 && checkCameraRotation >= -3.2) {
      // hit skill
      checkCameraRotation = -3.14;
    } else if (checkCameraRotation <= -4.7 && checkCameraRotation >= -4.8) {
      // hit stack
      checkCameraRotation = -4.71;
    } else if (checkCameraRotation <= -4.8) {
      // hit End
      checkCameraRotation = -4.71;
    }

    // Fixes section zigzag bug
    if (
      checkCameraRotation <= -1.57 &&
      cameraHeight >= experienceSectionHeightStart
    ) {
      checkCameraRotation = -1.57;
    } else if (
      checkCameraRotation >= -1.57 &&
      cameraHeight <= experienceSectionHeightEnd
    ) {
      checkCameraRotation = -1.57;
    }

    return checkCameraRotation;
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
          {/* <OrbitControls makeDefault /> */}

          <ambientLight intensity={0.1} />
          <directionalLight position={[0, -10, 0]} intensity={1} />

          <ExperienceLight />

          <group onClick={handleAnalytics}>
            <TitleText />
            <TitleProfessionText />
            <TitleDescriptionText />

            {/* <ContactFormText />
            <AboutMeText /> */}

            <group position={[0, -35, 0]}>
              <ExperienceSection />
            </group>

            <group position={[0, -140, 0]}>
              <SkillsTitleText />
              <SkillsListText />
            </group>

            <group position={[0, -175, 0]}>
              <StacksTitleText />
              <StacksListText />
            </group>
          </group>

          <CodeLogo />
          <Planet01 />
          <Stars />
        </Canvas>
      </Suspense>
    </>
  );
};
