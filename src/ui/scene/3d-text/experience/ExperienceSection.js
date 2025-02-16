import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { ExperienceOne } from "./ExperienceOne";
import { Ipad } from "./Ipad";

export const ExperienceSection = () => {
  return (
    <>
      <group position={[20, -7, -15]}>
        <group position={[0, 0, 0]}>
          <Ipad
            experienceImage={
              "/ipad/ipad-images/experience-hr-portal-job-search.png"
            }
          />
          <ExperienceOne />
        </group>

        <group position={[0, 0, 30]}>
          <Ipad experienceImage={"/ipad/ipad-images/experience-hr-portal-create-account.png"} />
          <ExperienceOne />
        </group>

        <group position={[0, -35, 0]}>
          <EmployersTitleText />
          <EmployersListText />
        </group>

        <group position={[0, -75, 0]}>
          <EmployersTitleText />
          <EmployersListText />
        </group>
      </group>
    </>
  );
};
