import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const TitleProfessionText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1;
  responsiveData.desktopPositionX = -10;
  responsiveData.desktopPositionY = -5;

  responsiveData.desktopSubSize = 1;
  responsiveData.desktopSubPositionX = 6;
  responsiveData.desktopSubPositionY = -5;

  responsiveData.mobileSize = 0.7;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 1;

  responsiveData.mobileSubSize = 1.5;
  responsiveData.mobileSubPositionX = -5;
  responsiveData.mobileSubPositionY = -2;

  const { size, positionX, positionY, subSize, subPositionX, subPositionY } =
    useResponsive(responsiveData);

  let purpleTexture = useTexture("/textures/purple_08_matCap.png")
  let texture02 = useTexture("/textures/purple_09_matCap.png")

  const ProfessionText = () => {
    //set the state of the icon
    const [textState, setTextState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");
    const [descriptionTexture, setDescriptionTexture] = useState(purpleTexture)

    //Functionality to 30 second timer
    const [thirtySeconds, setThirtySeconds] = useState(30);
    const [timerOnOff, setTimerOnOff] = useState(true);

    useEffect(() => {
      if (timerOnOff === true) {
        if (thirtySeconds === -1) {
          setThirtySeconds(30);
        } else if (thirtySeconds > -2) {
          const intervalId = setInterval(() => {
            setThirtySeconds((thirtySeconds) => thirtySeconds - 1);
          }, 1000);
          // console.log("seconds", thirtySeconds)
          return () => clearInterval(intervalId);
        }
      }
    }, [thirtySeconds, timerOnOff]);

    useEffect(() => {
      if (timerOnOff === true) {
        if (thirtySeconds === 30) {
          setTextState("Full ");
        } else if (thirtySeconds === 28) {
          setTextState("Full Stack ");
        } else if (thirtySeconds === 26) {
          setTextState("Full Stack Website");
        } else if (thirtySeconds === 24) {
          setDescriptionState("Developer");
          setDescriptionTexture(texture02)
          setTimerOnOff(false);
        }
      }
    }, [textState, thirtySeconds, timerOnOff]);

    return (
      <>
        <group position={[0, 0, 0]}>
          <group position={[positionX, positionY, -15]} //separate each new item in list by y-2
            rotation={[0, 0, 0]}>
            <FontConfig
              text={textState}
              fontType="/Sunmore-Slant-Free-Regular.json"
              size={size}
              texture={purpleTexture}
            />
          </group>
          <group position={[subPositionX, subPositionY, -15]} //separate each new item in list by y-2
            rotation={[0, 0, 0]}>
            <FontConfig
              text={descriptionState}
              fontType="/Sunmore-Slant-Free-Regular.json"
              size={subSize}
              texture={descriptionTexture}
            />
          </group>
        </group>
      </>
    );
  };
  return (
    <>
      <ProfessionText />
    </>
  );
};
