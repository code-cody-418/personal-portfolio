import React, { Suspense } from "react";
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
import { DynamicCamera } from "./camera/DynamicCamera";
import { useStore } from "../utils/store";
import { Analytics } from "../analytics/Analytics";
import { Perf } from "r3f-perf";
import { ExperienceSection } from "./3d-text/experience/ExperienceSection";
import { OrbitControls } from "@react-three/drei";
import { ExperienceLight } from "./3d-text/experience/ExperienceLight";
import { NoToneMapping } from "three";
import { ModalIcon } from "../modal/ModalIcon";
import { content } from "./3d-text/content";
import { CameraControls } from "./camera/CameraControls";
import { Space } from "./Space";
import { PerformanceMonitorWrapper } from "./utils/PerformanceMonitorWrapper";

export const ThreeDScene = () => {
  // const [watchClicks, setWatchClicks] = useState(1);
  // analytics store
  // const setSessionClicks = useStore((state) => state.setSessionClicks);

  // const handleAnalytics = () => {
  //   setWatchClicks((watchClicks) => watchClicks + 1);
  //   setSessionClicks(watchClicks);
  // };
  const performanceGood = useStore((state) => state.performanceGood);

  return (
    <>
      <MyModal />
      <Analytics />

      <ModalIcon />

      <CameraControls />

      <Suspense>
        <Canvas gl={{ toneMapping: NoToneMapping }}>
          <Perf />
          <PerformanceMonitorWrapper />
          <DynamicCamera />
          {/* <OrbitControls makeDefault /> */}

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

          {/* <ContactFormText />
            <AboutMeText /> */}

          <group visible={performanceGood} position={[0, -35, 0]}>
            <ExperienceSection />
          </group>

          <group position={[0, -210, 0]}>
            <SkillsTitleText />
            <SkillsListText />
          </group>

          <group position={[0, -245, 0]}>
            <StacksTitleText />
            <StacksListText />
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
