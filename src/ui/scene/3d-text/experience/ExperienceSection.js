import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { ExperienceDescription } from "./ExperienceDescription";
import { Ipad } from "./Ipad";
import { content } from "../content";

export const ExperienceSection = () => {
  return (
    <>
      <EmployersTitleText />

      <group position={[0, 0, 0]}>
        <Ipad
          experienceImage={
            content.experience[0].img
          }
        />
        <ExperienceDescription description={content.experience[0].description} />
      </group>

      <group position={[0, 0, 30]}>
        <Ipad
          experienceImage={
            content.experience[1].img
          }
        />
        <ExperienceDescription description={content.experience[1].description} />
      </group>

      <group position={[0, -35, 0]}>
        <EmployersListText />
      </group>

      <group position={[0, -75, 0]}>
        <EmployersListText />
      </group>
    </>
  );
};
