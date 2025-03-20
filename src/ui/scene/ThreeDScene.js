import React, { Suspense, useEffect, useState } from "react";
import { TitleText } from "./3d-text/title/TitleText";
import { StacksListText } from "./3d-text/StacksListText";
import { SkillsListText } from "./3d-text/SkillsListText";
import { DescriptionText } from "./3d-text/DescriptionText";
import { Canvas } from "@react-three/fiber";
import { CodeLogo } from "./skills-icons/Code_logo";
import { useStore } from "../utils/store";
import { Analytics } from "../analytics/Analytics";
import { ExperienceSection } from "./3d-text/experience/ExperienceSection";
import { AboutMeText } from "./3d-text/AboutMeText";
import { ContactFormText } from "./3d-text/ContactFormText";
import { ExperienceLight } from "./3d-text/experience/ExperienceLight";
import { NoToneMapping } from "three";
import { content } from "./3d-text/content";
import { Space } from "./Space";
import { PerformanceMonitorWrapper } from "./utils/PerformanceMonitorWrapper";
import { EmployersListText } from "./3d-text/EmployersListText";
import { DebugInterface } from "../debug/DebugInterface";
import { CameraWrapper } from "./camera/CameraWrapper";
import { PerfWrapper } from "./utils/PerfWrapper";
import GithubLogo from "./skills-icons/Github_logo";
import { NNSeal } from "./skills-icons/Nn-seal";
import ReactLogo from "./skills-icons/React_logo";
import { Loading } from "../loading/Loading";

export const ThreeDScene = () => {
  // const [watchClicks, setWatchClicks] = useState(1);
  // analytics store
  // const setSessionClicks = useStore((state) => state.setSessionClicks);

  // const handleAnalytics = () => {
  //   setWatchClicks((watchClicks) => watchClicks + 1);
  //   setSessionClicks(watchClicks);
  // };
  const performanceGood = useStore((state) => state.performanceGood);
  const debugStatus = useStore((state) => state.debugStatus);
  const setDebugStatus = useStore((state) => state.setDebugStatus);
  const setIsDesktop = useStore((state) => state.setIsDesktop);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setDebugStatus(false); // set to true to enable and false to disable debug interface
  }, [setDebugStatus]);

  useEffect(() => {
    if (width <= 800) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [setIsDesktop, width]);

  return (
    <>
      <Analytics />

      {debugStatus === true ? <DebugInterface /> : null}

      <Suspense fallback={<Loading />}>
        <Canvas gl={{ toneMapping: NoToneMapping }}>
          <PerformanceMonitorWrapper />
          <PerfWrapper />
          <CameraWrapper />

          <directionalLight position={[0, -10, 0]} intensity={1} />

          <ExperienceLight />

          {/* <group onClick={handleAnalytics}> */}
          <TitleText
            text={"Cody's Portfolio"}
            desktopSize={1.5}
            desktopPosition={[-7, 6.5, -15]}
            mobileSize={0.8}
            mobilePosition={[-4, 6, -15]}
            rotation={[0, 0, 0]}
            texture={"/textures/purple_08_matCap.png"}
            font={"/Philosopher_Regular.json"}
          />
          <TitleText
            text={"Software Developer"}
            desktopSize={2.5}
            desktopPosition={[-15.5, 2, -15]}
            mobileSize={0.85}
            mobilePosition={[-5, 3, -15]}
            rotation={[0, 0, 0]}
            texture={"/textures/purple_09_matCap.png"}
          />
          <DescriptionText
            textContent={content.hero[0].description}
            desktopPosition={[-6, -2.5, -15]}
            textRotation={[0, 0, 0]}
            desktopSize={0.85}
            containerWidth={15}
            mobilePosition={[0, 1, -15]}
            mobileSize={0.6}
            textAlign={"center"}
            backgroundShow={""}
          />
          <CodeLogo />

          <ContactFormText />
          <AboutMeText />

          <group visible={performanceGood} position={[0, -35, 0]}>
            <ExperienceSection />
          </group>

          <group position={[0, -210, 0]}>
            <TitleText
              text={"SKILLS"}
              desktopSize={2}
              desktopPosition={[21, 7, 20]}
              mobileSize={1.5}
              mobilePosition={[3, 14, 20]}
              rotation={[0, Math.PI, 0]}
              texture={"/textures/purple_08_matCap.png"}
              font={"/Philosopher_Regular.json"}
            />
            <SkillsListText />

            <TitleText
              text={"EMPLOYERS"}
              desktopSize={2}
              desktopPosition={[-8, 7, 20]}
              mobileSize={1.5}
              mobilePosition={[6, -3, 20]}
              rotation={[0, Math.PI, 0]}
              texture={"/textures/purple_08_matCap.png"}
              font={"/Philosopher_Regular.json"}
            />
            <EmployersListText />

            <GithubLogo />
            <NNSeal />
          </group>

          <group position={[0, -245, 0]}>
            <TitleText
              text={"STACK"}
              desktopSize={3}
              desktopPosition={[-20, 7, 10]}
              mobileSize={1.5}
              mobilePosition={[-20, 7, 7.5]}
              rotation={[0, 1.570796, 0]}
              texture={"/textures/purple_08_matCap.png"}
              font={"/Philosopher_Regular.json"}
            />
            <StacksListText />

            <ReactLogo />
          </group>
          {/* </group> */}

          <group visible={performanceGood}>
            <Space />
          </group>
        </Canvas>
      </Suspense>
    </>
  );
};
