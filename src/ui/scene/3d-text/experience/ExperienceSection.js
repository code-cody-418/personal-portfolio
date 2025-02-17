import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { ExperienceDescription } from "./ExperienceDescription";
import { Ipad } from "./Ipad";
import { content } from "../content";
import { ToshibaSatellite } from "./ToshibaSatellite";

export const ExperienceSection = () => {
  return (
    <>
      <EmployersTitleText />

      <group position={[0, 0, 0]}>
        <Ipad experienceImage={content.experience[0].img} />
        <ExperienceDescription
          description={content.experience[0].description}
        />
      </group>

      <group position={[0, 0, 30]}>
        <Ipad experienceImage={content.experience[1].img} />
        <ExperienceDescription
          description={content.experience[1].description}
        />
      </group>

      <group position={[0, -10, 0]}>
        <group position={[0, 0, 0]}>
          <ExperienceDescription
            description={content.experience[2].description}
          />
        </group>
        <group position={[0, 0, 30]}>
          <ExperienceDescription
            description={content.experience[3].description}
          />
        </group>
      </group>

      <group position={[0, -60, 0]}>
        <ToshibaSatellite experienceImage={"/toshiba_satellite/temp_code.png"} />
      </group>

      <group position={[0, -75, 0]}>
        <EmployersListText />
      </group>
    </>
  );
};
