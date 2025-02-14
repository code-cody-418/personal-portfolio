import { Box, TransformControls } from "@react-three/drei";
import { useRef } from "react";

export const ExperienceLight = () => {
  const directionalLightRef = useRef();
  const temp = useRef();

  console.log(temp?.current);
  return (
    <>
      <group position={[15, 15, 15]}>
        {/* <Box /> */}
        <directionalLight
          ref={directionalLightRef}
          target-position={[20, -35, -15]}
          color={0xffffff}
          intensity={8}
        />
      </group>
    </>
  );
};
