import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { ExperienceDescription } from "./ExperienceDescription";
import { Ipad } from "./Ipad";
import { content } from "../content";
import { ToshibaSatellite } from "./ToshibaSatellite";
import { Matrix } from "./Matrix";
import { Cat } from "../../Cat";
import { Plane, useTexture } from "@react-three/drei";

export const ExperienceSection = () => {
  return (
    <>
      <EmployersTitleText />

      <group position={[0, -6, 0]}>
        <Ipad experienceImage={content.experience[0].img} />
        <group position={[20, -9, -23]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[0].description}
            planeScale={[17, 3, 0]}
            planePosition={[8, -0.5, 0]}
          />
        </group>
      </group>

      <group position={[0, -6, 30]}>
        <Ipad experienceImage={content.experience[1].img} />
        <group position={[20, -9, -23]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[1].description}
            planeScale={[17, 3, 0]}
            planePosition={[8, -0.5, 0]}
          />
        </group>
      </group>

      <group position={[23, -25, -25]} rotation={[0, -1.570796, 0]}>
        <ExperienceDescription
          description={content.experience[2].description}
          planeScale={[22, 15, 0]}
          planePosition={[10, -6, 0]}
        />
      </group>
      <group position={[23, -25, 5]} rotation={[0, -1.570796, 0]}>
        <ExperienceDescription
          description={content.experience[3].description}
          planeScale={[23, 15, 0]}
          planePosition={[11, -6, 0]}
        />
      </group>

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

        <group position={[20, -10, -25]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[4].description}
            planeScale={[25, 15, 0]}
            planePosition={[12, -6, 0]}
          />
        </group>

        <group position={[20, -30, 0]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[5].description}
            planeScale={[24, 7, 0]}
            planePosition={[11, -2, 0]}
          />
        </group>

        <group position={[20, -42, -25]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[6].description}
            planeScale={[25, 8, 0]}
            planePosition={[12, -3, 0]}
          />
        </group>

        <group position={[20, -55, 0]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[7].description}
            planeScale={[25, 11, 0]}
            planePosition={[12, -4, 0]}
          />
        </group>

        <group position={[20, -55, -10]}>
          <Plane
            position={[1, -4, -6]}
            scale={[22, 8, 0]}
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
