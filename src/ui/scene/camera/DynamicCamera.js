import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useStore } from "../../utils/store";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

export const DynamicCamera = () => {
  const manualControlState = useStore((state) => state.manualControlState);
  const manualControlDirection = useStore(
    (state) => state.manualControlDirection
  );
  const cameraHeight = useStore((state) => state.cameraHeight);
  const cameraRotation = useStore((state) => state.cameraRotation);

  const camera = useThree((state) => state.camera);

  const cameraBox = useRef();
  const controlsRef = useRef();
  const mainCamera = useRef();

  const { cameraPositionY } = useSpring({ cameraPositionY: cameraHeight });
  const { cameraRotationY } = useSpring({ cameraRotationY: cameraRotation });


  useFrame(({ clock }) => {
    // controlsRef.current.target.set(
    //   cameraBox.current.position.x,
    //   cameraBox.current.position.y,
    //   cameraBox.current.position.z
    // );
    // camera.lookAt(
    //   cameraBox.current.position.x,
    //   cameraBox.current.position.y,
    //   cameraBox.current.position.z
    // );
    // camera.position.set(cameraBox.current.position)
    // Planet in orbit
    // cameraBox.current.position.x = Math.cos(clock.getElapsedTime() ) * 6
    // // cameraBox.current.position.y = Math.cos(clock.getElapsedTime() )
    // cameraBox.current.position.z = Math.sin(clock.getElapsedTime() ) * 6
    // if(manualControlState) {
    //   mainCamera.current.rotation.y = cameraRotation
    // }
    // console.log(clock.getElapsedTime() / Math.PI)
    // mainCamera.current.position.y = cameraHeight
  });

  console.log(cameraRotation);
  return (
    <>
      <animated.group position-y={cameraPositionY} rotation-y={cameraRotationY}>
        <PerspectiveCamera
          makeDefault
          name={"mainCamera"}
          // rotation={[0, 1, 0]}
          ref={mainCamera}
        />
      </animated.group>
      {/* <animated.mesh
        visible={false}
        name={"cameraFollow"}
        position-y={cameraY}
        ref={cameraBox}
      >
        <boxGeometry />
      </animated.mesh>
      <OrbitControls
        ref={controlsRef}
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
      /> */}
    </>
  );
};
