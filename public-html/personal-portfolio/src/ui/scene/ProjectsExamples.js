import React, { useEffect, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useResponsive } from "../../customHooks/useResponsive";
import { Responsive } from "../../constructor/Responsive";

export const ProjectsExamples = ({ exampleState }) => {
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 14;
  responsiveData.desktopPositionY = 0;
  responsiveData.desktopPositionZ = 18;
  responsiveData.desktopRotationY = 2.3

  responsiveData.mobileSize = 14;
  responsiveData.mobilePositionY = -9;
  responsiveData.mobilePositionZ = 0;
  responsiveData.mobileRotationY = 1.570796

  const { size, positionY, positionZ, rotationY } =
    useResponsive(responsiveData);

  //loads textures for the examples
  const saiyanWebDevExample = useTexture("/saiyanwebdev-example.png");
  const alienGramExample = useTexture("/aliengram-example.png");
  const expNinjaExample = useTexture("/expNinja-example.png");

  //sets state for the current example to be shown
  const [currentExample, setCurrentExample] = useState(null);
  const [currentExampleVisible, setCurrentExampleVisible] = useState(true);
  // const [expNinjaVisible, setExpNinjaVisible] = useState(false)

  //determines which icon is showing
  useEffect(() => {
    if (exampleState === "projectOneActive") {
      setCurrentExample(saiyanWebDevExample);
      setCurrentExampleVisible(true);
      // setExpNinjaVisible(false)
    } else if (exampleState === "projectTwoActive") {
      setCurrentExampleVisible(true);
      setCurrentExample(expNinjaExample);
      // setExpNinjaVisible(true)
    } else if (exampleState === "projectThreeActive") {
      // setExpNinjaVisible(false)
      setCurrentExampleVisible(true);
      setCurrentExample(alienGramExample);
    }
    // console.log("icon state", iconState)
  }, [exampleState, alienGramExample, expNinjaExample, saiyanWebDevExample]);

  return (
    <>
      <group
        position={[-16, positionY, positionZ]}
        rotation={[0, rotationY, 0]}
        scale={size}
      >
        <mesh visible={currentExampleVisible}>
          <planeGeometry />
          <meshStandardMaterial
            transparent={true}
            // opacity={0.5}
            map={currentExample}
          />
        </mesh>
      </group>
    </>
  );
};
