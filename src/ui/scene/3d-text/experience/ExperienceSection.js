import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { Ipad } from "./Ipad";
import { content } from "../content";
import { ToshibaSatellite } from "./ToshibaSatellite";
import { Matrix } from "./Matrix";
import { Cat } from "../../Cat";
import { Plane } from "@react-three/drei";
import { DescriptionText } from "../DescriptionText";

export const ExperienceSection = () => {
  return (
    <>
      <EmployersTitleText />

      <group position={[0, -6, 0]}>
        <Ipad experienceImage={content.experience[0].img} />
        <DescriptionText
          textContent={content.experience[0].description}
          desktopPosition={[20, -10, -15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={1}
          containerWidth={10}
          mobilePosition={[20, 7, -8]}
          mobileSize={0.2}
        />
      </group>

      <group position={[0, -6, 30]}>
        <Ipad experienceImage={content.experience[1].img} />
        <DescriptionText
          textContent={content.experience[1].description}
          desktopPosition={[20, -10, -15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={1}
          containerWidth={10}
          mobilePosition={[20, -7, -8]}
          mobileSize={0.2}
        />
      </group>

      <DescriptionText
        textContent={content.experience[2].description}
        desktopPosition={[23, -30, -15]}
        textRotation={[0, -1.570796, 0]}
        desktopSize={0.9}
        containerWidth={18}
        mobilePosition={[20, -7, -8]}
        mobileSize={0.2}
      />

      <DescriptionText
        textContent={content.experience[3].description}
        desktopPosition={[23, -30, 20]}
        textRotation={[0, -1.570796, 0]}
        desktopSize={0.9}
        containerWidth={18}
        mobilePosition={[20, -7, -8]}
        mobileSize={0.2}
      />

      <group position={[0, -70, 0]}>
        <ToshibaSatellite experienceImage={"/toshiba_satellite/terminal.png"} />
      </group>

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
          textContent={content.experience[4].description}
          desktopPosition={[20, -15, -15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -7, -8]}
          mobileSize={0.2}
        />

        <DescriptionText
          textContent={content.experience[5].description}
          desktopPosition={[20, -30, 15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -7, -8]}
          mobileSize={0.2}
        />

        <DescriptionText
          textContent={content.experience[6].description}
          desktopPosition={[20, -42, -15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -7, -8]}
          mobileSize={0.2}
        />

        <DescriptionText
          textContent={content.experience[7].description}
          desktopPosition={[20, -58, 15]}
          textRotation={[0, -1.570796, 0]}
          desktopSize={0.9}
          containerWidth={22}
          mobilePosition={[20, -7, -8]}
          mobileSize={0.2}
        />

        <group position={[20, -55, -10]}>
          <Plane
            position={[5, -4, -6]}
            scale={[22, 12, 0]}
            rotation={[0, -1.570796, 0]}
          >
            <meshBasicMaterial
              color="#000000"
              // color="#FFFFFF" // use for debug
            />
          </Plane>
          <group position={[0, -5, -2]}>
            <Cat />
          </group>
        </group>
        {/* <EmployersListText /> */}
      </group>
    </>
  );
};
