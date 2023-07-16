import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const TitleProfessionText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1;
  responsiveData.desktopPositionX = -6.5;
  responsiveData.desktopPositionY = -1;

  responsiveData.desktopSubSize = 1;
  responsiveData.desktopSubPositionX = 0;
  responsiveData.desktopSubPositionY = -1;

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 4;

  responsiveData.mobileSubSize = 1.5;
  responsiveData.mobileSubPositionX = -5;
  responsiveData.mobileSubPositionY = 2;

  const { size, positionX, positionY, subSize, subPositionX, subPositionY } =
    useResponsive(responsiveData);

  let purpleTexture = useTexture("/textures/purple_08_matCap.png")
  let texture02 = useTexture("/textures/purple_09_matCap.png")

  //set the state of the icon
  const [textState, setTextState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");

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
        setTextState("");
      } else if (thirtySeconds === 28) {
        setTextState("Full ");
      } else if (thirtySeconds === 26) {
        setTextState("Full Stack");
      } else if (thirtySeconds === 24) {
        setDescriptionState("Engineer");
        setTimerOnOff(false);
      }
    }
  }, [textState, thirtySeconds, timerOnOff]);

  return (
    <>
      <group position={[positionX, positionY, -15]}>
        <FontConfig
          text={textState}
          fontType="/Sunmore-Slant-Free-Regular.json"
          size={size}
          texture={purpleTexture}
        />
      </group>
      <group position={[subPositionX, subPositionY, -15]}>
        <FontConfig
          text={descriptionState}
          fontType="/Sunmore-Slant-Free-Regular.json"
          size={subSize}
          texture={texture02}
        />
      </group>
    </>
  );
};
