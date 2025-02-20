import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { ExperienceDescription } from "./ExperienceDescription";
import { Ipad } from "./Ipad";
import { content } from "../content";
import { ToshibaSatellite } from "./ToshibaSatellite";
import { Matrix } from "./Matrix";
import { useEffect, useState } from "react";
import { useStore } from "../../../utils/store";

const matrixHeightStart = -128
const matrixHeightEnd = -180


export const ExperienceSection = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const cameraHeight = useStore((state) => state.cameraHeight);
  
  useEffect(() => {
    if (cameraHeight >= matrixHeightStart || cameraHeight <= matrixHeightEnd) {
      setShowMatrix(false);
    } else {
      setShowMatrix(true);
    }
  }, [cameraHeight]);

  return (
    <>
      <EmployersTitleText />

      <group position={[0, -6, 0]}>
        <Ipad experienceImage={content.experience[0].img} />
        <group position={[20, -9, -23]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[0].description}
          />
        </group>
      </group>

      <group position={[0, -6, 30]}>
        <Ipad experienceImage={content.experience[1].img} />
        <group position={[20, -9, -23]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[1].description}
          />
        </group>
      </group>

      <group position={[23, -25, -25]} rotation={[0, -1.570796, 0]}>
        <ExperienceDescription
          description={content.experience[2].description}
        />
      </group>
      <group position={[23, -25, 5]} rotation={[0, -1.570796, 0]}>
        <ExperienceDescription
          description={content.experience[3].description}
        />
      </group>

      <group position={[0, -70, 0]}>
        <ToshibaSatellite
          experienceImage={"/toshiba_satellite/terminal.png"}
        />
      </group>

      <group visible={showMatrix} position={[0, -75, 0]}>
        <Matrix />
        
        <group position={[20, -10, -25]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[4].description}
          />
        </group>

        <group position={[20, -25, 0]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[5].description}
          />
        </group>

        <group position={[20, -40, -25]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[6].description}
          />
        </group>

        <group position={[20, -55, 0]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[7].description}
          />
        </group>

        {/* <EmployersListText /> */}
      </group>
    </>
  );
};
