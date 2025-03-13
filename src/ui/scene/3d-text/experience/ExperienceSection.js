import { Ipad } from "./Ipad";
import { content } from "../content";
import { ToshibaSatellite } from "./ToshibaSatellite";
import { Matrix } from "./Matrix";
import { Cat } from "../../cat/Cat";
import { DescriptionText } from "../DescriptionText";
import { TitleText } from "../title/TitleText";

export const ExperienceSection = () => {
  return (
    <>
      <TitleText
        text={"EXPERIENCE"}
        desktopSize={3}
        desktopPosition={[20, 12, -12]}
        mobileSize={1.5}
        mobilePosition={[20, 15, -6]}
        rotation={[0, -1.570796, 0]}
        texture={"/textures/purple_08_matCap.png"}
        font={"/Philosopher_Regular.json"}
      />

      <TitleText
        text={"Fullstack HR Portal"}
        desktopSize={1}
        desktopPosition={[20, 7, -23]}
        mobileSize={0.8}
        mobilePosition={[20, 13, -8]}
        rotation={[0, -1.570796, 0]}
        texture={"/textures/purple_09_matCap.png"}
      />
      <Ipad
        experienceImage={content.experience[0].img}
        desktopSize={0.3}
        desktopPosition={[20, -17, -15]}
        mobileSize={0.25}
        mobilePosition={[20, -8, 0]}
      />
      <DescriptionText
        textContent={content.experience[0].description}
        desktopPosition={[20, -20, -15]}
        textRotation={[0, -1.570796, 0]}
        desktopSize={1}
        containerWidth={10}
        mobilePosition={[20, -11, 0]}
        mobileSize={0.9}
      />

      <Ipad
        experienceImage={content.experience[1].img}
        desktopSize={0.3}
        desktopPosition={[20, -17, 15]}
        mobileSize={0.25}
        mobilePosition={[20, -35, 0]}
      />
      <DescriptionText
        textContent={content.experience[1].description}
        desktopPosition={[20, -20, 15]}
        textRotation={[0, -1.570796, 0]}
        desktopSize={1}
        containerWidth={10}
        mobilePosition={[20, -38, 0]}
        mobileSize={0.9}
      />

      <DescriptionText
        textContent={content.experience[2].description}
        desktopPosition={[23, -32, -15]}
        textRotation={[0, -1.570796, 0]}
        desktopSize={0.9}
        containerWidth={18}
        mobilePosition={[20, -52, 0]}
        mobileSize={0.7}
      />

      <DescriptionText
        textContent={content.experience[3].description}
        desktopPosition={[23, -32, 20]}
        textRotation={[0, -1.570796, 0]}
        desktopSize={0.9}
        containerWidth={18}
        mobilePosition={[20, -70, 0]}
        mobileSize={0.7}
      />

      <ToshibaSatellite
        experienceImage={"/toshiba_satellite/terminal.png"}
        desktopSize={4}
        desktopPosition={[18, -72, 0]}
        mobileSize={3.5}
        mobilePosition={[18, -72, 0]}
      />

      <group position={[2, -75, 0]}>
        <Matrix animationSpeed={1} />
        <group position={[4, 0, 4]}>
          <Matrix animationSpeed={1.2} />
        </group>
        <group position={[6, 0, 8]}>
          <Matrix animationSpeed={1.5} />
        </group>
        <group position={[8, 0, 12]}>
          <Matrix animationSpeed={1.7} />
        </group>
        <group position={[10, 0, 16]}>
          <Matrix animationSpeed={2} />
        </group>
        <group position={[12, 0, 18]}>
          <Matrix animationSpeed={2.3} />
        </group>

        <DescriptionText
          titleContent={content.experience[4].title}
          textContent={content.experience[4].description}
          desktopPosition={[20, -15, -15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -15, 0]}
          mobileSize={0.7}
        />

        <DescriptionText
          titleContent={content.experience[5].title}
          textContent={content.experience[5].description}
          desktopPosition={[20, -30, 15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -28, 0]}
          mobileSize={0.7}
        />

        <DescriptionText
          titleContent={content.experience[6].title}
          textContent={content.experience[6].description}
          desktopPosition={[20, -42, -15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -40, 0]}
          mobileSize={0.7}
        />

        <DescriptionText
          titleContent={content.experience[7].title}
          textContent={content.experience[7].description}
          desktopPosition={[20, -58, 15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -50, 0]}
          mobileSize={0.7}
        />

        <Cat
          desktopSize={8}
          desktopPosition={[20, -60, -12]}
          mobileSize={8}
          mobilePosition={[20, -60, 0]}
        />
      </group>
    </>
  );
};
