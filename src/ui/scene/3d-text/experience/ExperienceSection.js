import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";
import { ExperienceOne } from "./ExperienceOne";
import { Ipad } from "./Ipad";

export const ExperienceSection = () => {
  return (
    <>
      <group position={[0, 0, 0]}>
        <Ipad experienceImage={"/ipad/nn-apply-port-job-sort.png"} />
        <ExperienceOne />
      </group>

      <group position={[0, -35, 0]}>
      <Ipad experienceImage={"/ipad/nn-apply-port-signup.png"} />
      <ExperienceOne />
      </group>

      <group position={[0, -75, 0]}>
        <EmployersTitleText />
        <EmployersListText />
      </group>
    </>
  );
};
