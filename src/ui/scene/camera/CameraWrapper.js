import { OrbitControls } from "@react-three/drei";
import { CameraControls } from "./CameraControls";
import { DynamicCamera } from "./DynamicCamera";
import { useStore } from "../../utils/store";

export const CameraWrapper = () => {
  const orbitControlsStatus = useStore((state) => state.orbitControlsStatus);

  return (
    <>
      {orbitControlsStatus === "disabled" ? (
        <>
          <CameraControls />
          <DynamicCamera />
        </>
      ) : (
        <OrbitControls makeDefault />
      )}
    </>
  );
};
