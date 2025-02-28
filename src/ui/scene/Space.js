import { Stars } from "@react-three/drei";
import { Satellite } from "./debris/Satellite";
import { Planet01 } from "./planets/Planet-01";
import { useEffect, useState } from "react";
import { useStore } from "../utils/store";

export const Space = () => {
  const cameraHeight = useStore((state) => state.cameraHeight);

  const [showOutsideMatrixSection, setShowOutsideMatrixSection] =
    useState(true);
  useEffect(() => {
    if (cameraHeight <= -92 && cameraHeight > -208) {
      setShowOutsideMatrixSection(false);
    } else {
      setShowOutsideMatrixSection(true);
    }
  }, [cameraHeight]);

  return (
    <>
      <group visible={showOutsideMatrixSection}>
        <Planet01 />
        <Satellite />
        <Stars count={1000} radius={200} />
      </group>
    </>
  );
};
