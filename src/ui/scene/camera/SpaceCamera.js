import { PerspectiveCamera, Box } from "@react-three/drei";
import { useThree, extend, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const SpaceCamera = () => {
  const { camera, gl } = useThree();
  const boxOne = useRef();
  const boxTwo = useRef();

  extend({ OrbitControls });
  const controls = useRef();

  const [changeCamera, setChangeCamera] = useState(false);

  useEffect(() => {
    if (changeCamera) {
      camera.lookAt(5, 0, 0);
    } else {
      camera.lookAt(0, 0, -5);
    }
  }, [camera, changeCamera]);

  useFrame(() => {
    if (changeCamera) {
    //   controls?.current?.update();
    }
    controls?.current?.update();
  });

  return (
    <>
      <orbitControls
        ref={controls}
        args={[camera, gl.domElement]}
        enablePan={false}
        enableZoom={false}
        enableDamping={true}
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
        // camera={mainCamera}
        // makeDefault
        // object={manualCamera}
      />
      {/* <PerspectiveCamera makeDefault name="dreiCamera" /> */}
      <group
        ref={boxOne}
        position={[0, 0, -5]}
        onClick={() => setChangeCamera(!changeCamera)}
      >
        <Box />
      </group>
      <group
        ref={boxTwo}
        position={[5, 0, 0]}
        onClick={() => setChangeCamera(!changeCamera)}
      >
        <Box />
      </group>
    </>
  );
};
