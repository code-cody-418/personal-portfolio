import { EmployersListText } from "./EmployersListText";
import { EmployersTitleText } from "./EmployersTitleText";

export const ExperienceSection = () => {
  return (
    <>
      <group position={[0, 0, 0]}>
        <EmployersTitleText />
        <EmployersListText />
      </group>
      <group position={[0, -35, 0]}>
        <EmployersTitleText />
        <EmployersListText />
      </group>
      <group position={[0, -75, 0]}>
        <EmployersTitleText />
        <EmployersListText />
      </group>
    </>
  );
};
