import { Box } from "@react-three/drei";
import { useRef } from "react";

export const ExperienceLight = () => {
  const directionalLightRef = useRef();

  return (
    <>
      {/* <TransformControls mode="translate"> */}
        <group position={[-10, 15, 10]}>
          <Box />
          <directionalLight
            ref={directionalLightRef}
            target-position={[20, -35, -15]}
            color={0xffffff}
            intensity={5}
          />
        </group>
      {/* </TransformControls> */}
    </>
  );
};
