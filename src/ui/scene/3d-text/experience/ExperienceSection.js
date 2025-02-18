import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { ExperienceDescription } from "./ExperienceDescription";
import { Ipad } from "./Ipad";
import { content } from "../content";
import { ToshibaSatellite } from "./ToshibaSatellite";
import { Matrix } from "./Matrix";

export const ExperienceSection = () => {
  return (
    <>
      <EmployersTitleText />

      <group position={[0, 0, 0]}>
        <Ipad experienceImage={content.experience[0].img} />
        <group position={[20, -9, -23]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[0].description}
          />
        </group>
      </group>

      <group position={[0, 0, 30]}>
        <Ipad experienceImage={content.experience[1].img} />
        <group position={[20, -9, -23]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[1].description}
          />
        </group>
      </group>

      <group position={[20, -19, -23]} rotation={[0, -1.570796, 0]}>
        <ExperienceDescription
          description={content.experience[2].description}
        />
      </group>
      <group position={[20, -19, 7]} rotation={[0, -1.570796, 0]}>
        <ExperienceDescription
          description={content.experience[3].description}
        />
      </group>

      <group position={[0, -60, 0]}>
        <ToshibaSatellite
          experienceImage={"/toshiba_satellite/temp_code.png"}
        />
      </group>

      <group position={[0, -75, 0]}>
        <Matrix />
        
        <group position={[20, -19, 7]} rotation={[0, -1.570796, 0]}>
          <ExperienceDescription
            description={content.experience[4].description}
          />
        </group>

        <EmployersListText />
      </group>
    </>
  );
};
