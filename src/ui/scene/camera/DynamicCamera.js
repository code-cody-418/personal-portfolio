import { OrbitControls } from "@react-three/drei";
import { useStore } from "../../utils/store";

export const DynamicCamera = () => {
  const manualControlState = useStore((state) => state.manualControlState)
  const manualControlDirection = useStore((state) => state.manualControlDirection)

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        // distance of camera creation
        minDistance={0}
        maxDistance={3}
        rotateSpeed={0.3}
        // vertical angle limit
        minPolarAngle={1.5708}
        maxPolarAngle={1.5708}
        // horizontal angle limit
        // minAzimuthAngle={-1.57}
        // maxAzimuthAngle={1.57}
        // Auto Rotate for Manual Control
        autoRotate={manualControlState}
        autoRotateSpeed={manualControlDirection}
      />
    </>
  );
};
