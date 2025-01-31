import { PerspectiveCamera } from "@react-three/drei";
import { useStore } from "../../utils/store";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

export const DynamicCamera = () => {
  const cameraHeight = useStore((state) => state.cameraHeight);
  const cameraRotation = useStore((state) => state.cameraRotation);

  const mainCamera = useRef();

  const { cameraPositionY } = useSpring({ cameraPositionY: cameraHeight });
  const { cameraRotationY } = useSpring({ cameraRotationY: cameraRotation });

  return (
    <>
      <animated.group 
        position-y={cameraPositionY} 
        rotation-y={cameraRotationY}
      >
        <PerspectiveCamera 
          makeDefault 
          name={"mainCamera"} 
          ref={mainCamera}
          fov={75} 
        />
      </animated.group>
    </>
  );
};
