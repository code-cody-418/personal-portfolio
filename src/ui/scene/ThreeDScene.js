import React, { Suspense, useEffect } from "react";
import { TitleText } from "./3d-text/title/TitleText";
import { SkillsTitleText } from "./3d-text/SkillsTitleText";
import { StacksTitleText } from "./3d-text/StacksTitleText";
import { StacksListText } from "./3d-text/StacksListText";
import { SkillsListText } from "./3d-text/SkillsListText";
import { TitleProfessionText } from "./3d-text/title/TitleProfessionText";
import { DescriptionText } from "./3d-text/DescriptionText";
import { Canvas } from "@react-three/fiber";
import { MyModal } from "../modal/MyModal";
import { CodeLogo } from "./skills-icons/Code_logo";
import { useStore } from "../utils/store";
import { Analytics } from "../analytics/Analytics";
import { ExperienceSection } from "./3d-text/experience/ExperienceSection";
import { AboutMeText } from "./3d-text/AboutMeText";
import { ContactFormText } from "./3d-text/ContactFormText";
import { ExperienceLight } from "./3d-text/experience/ExperienceLight";
import { NoToneMapping } from "three";
import { ModalIcon } from "../modal/ModalIcon";
import { content } from "./3d-text/content";
import { Space } from "./Space";
import { PerformanceMonitorWrapper } from "./utils/PerformanceMonitorWrapper";
import { EmployersTitleText } from "./EmployersTitleText";
import { EmployersListText } from "./EmployersListText";
import { DebugInterface } from "../debug/DebugInterface";
import { CameraWrapper } from "./camera/CameraWrapper";
import { PerfWrapper } from "./utils/PerfWrapper";
import GithubLogo from "./skills-icons/Github_logo";
import { NNSeal } from "./skills-icons/Nn-seal";
import ReactLogo from "./skills-icons/React_logo";

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

  useEffect(() => {
    setDebugStatus(true); // set to true to enable and false to disable debug interface
  }, [setDebugStatus]);

  return (
    <>
      <MyModal />
      <Analytics />

      {debugStatus === true ? <DebugInterface /> : null}

      <ModalIcon />

      <Suspense>
        <Canvas gl={{ toneMapping: NoToneMapping }}>
          <PerformanceMonitorWrapper />
          <PerfWrapper />
          <CameraWrapper />
          {/* <ambientLight intensity={1} /> */}
          <directionalLight position={[0, -10, 0]} intensity={1} />

          <ExperienceLight />

          {/* <group onClick={handleAnalytics}> */}
          <TitleText />
          <TitleProfessionText />
          <DescriptionText
            textContent={content.hero[0].description}
            desktopPosition={[-7, -4.5, -15]}
            textRotation={[0, 0, 0]}
            desktopSize={0.75}
            containerWidth={20}
            mobilePosition={[0, -7, -15]}
            mobileSize={0.5}
          />
          <CodeLogo />

          <ContactFormText />
          <AboutMeText />

          <group visible={performanceGood} position={[0, -35, 0]}>
            <ExperienceSection />
          </group>

          <group position={[0, -210, 0]}>
            <SkillsTitleText />
            <SkillsListText />

            <EmployersTitleText />
            <EmployersListText />

            <GithubLogo />
            <NNSeal />
          </group>

          <group position={[0, -245, 0]}>
            <StacksTitleText />
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
