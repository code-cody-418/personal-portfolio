import { useState } from "react";
import { useStore } from "../utils/store";

const rotationDirection = 0.1;
const heightDirection = 2;
const minCameraHeight = 0;
const maxCameraHeight = -245;
const experienceSectionHeightStart = -30;
const experienceSectionHeightEnd = -175;

export const CameraControls = ({ canvasRef }) => {
  const setCameraHeight = useStore((state) => state.setCameraHeight);
  const cameraHeight = useStore((state) => state.cameraHeight);

  const setCameraRotation = useStore((state) => state.setCameraRotation);
  const cameraRotation = useStore((state) => state.cameraRotation);

  function handleCameraDirection({
    cameraRotationDirectionSpeed,
    cameraHeightDirectionSpeed,
  }) {
    // Check if the camera should rotate based off of section height
    if (
      cameraHeight <= experienceSectionHeightStart &&
      cameraHeight >= experienceSectionHeightEnd
    ) {
      setCameraRotation(-1.57);
    } else {
      const adjustedCameraRotation = adjustCameraRotation(
        cameraRotationDirectionSpeed
      );
      setCameraRotation(adjustedCameraRotation);
    }

    let cameraHeightCheck = cameraHeight + cameraHeightDirectionSpeed;
    // Ensures that the camera does not go above or below the last section screen
    if (
      cameraHeightCheck <= minCameraHeight &&
      cameraHeightCheck >= maxCameraHeight
    ) {
      setCameraHeight(cameraHeight + cameraHeightDirectionSpeed);
    }
  }

  const adjustCameraRotation = (cameraRotationDirectionSpeed) => {
    let checkCameraRotation = cameraRotation + cameraRotationDirectionSpeed;
    checkCameraRotation = Math.round(checkCameraRotation * 100) / 100;
    // centers the section view. Almost like an auto aim in a video game
    if (checkCameraRotation >= 0) {
      // hit home
      checkCameraRotation = 0;
    } else if (checkCameraRotation <= -3.1 && checkCameraRotation >= -3.2) {
      // hit skill
      checkCameraRotation = -3.14;
    } else if (checkCameraRotation <= -4.7 && checkCameraRotation >= -4.8) {
      // hit stack
      checkCameraRotation = -4.71;
    } else if (checkCameraRotation <= -4.8) {
      // hit End
      checkCameraRotation = -4.71;
    }

    // Fixes section zigzag bug
    if (
      checkCameraRotation <= -1.57 &&
      cameraHeight >= experienceSectionHeightStart
    ) {
      checkCameraRotation = -1.57;
    } else if (
      checkCameraRotation >= -1.57 &&
      cameraHeight <= experienceSectionHeightEnd
    ) {
      checkCameraRotation = -1.57;
    }

    return checkCameraRotation;
  };

  const [lastTouchCall, setLastTouchCall] = useState(0);
  const [lastTouchY, setLastTouchY] = useState(0);

  const handleTouch = (e) => {
    // handleTouch has a throttle to slow down the event calls of the touch event
    let currentTouchY = e.touches[0].clientY;
    const timeNow = new Date().getTime();
    const delay = 60; // is the throttle
    if (timeNow - lastTouchCall >= delay) {
      setLastTouchCall(timeNow);
      setLastTouchY(currentTouchY);
      if (currentTouchY > lastTouchY) {
        handleCameraDirection({
          cameraRotationDirectionSpeed: rotationDirection,
          cameraHeightDirectionSpeed: heightDirection,
        });
      } else if (currentTouchY < lastTouchY) {
        handleCameraDirection({
          cameraRotationDirectionSpeed: -rotationDirection,
          cameraHeightDirectionSpeed: -heightDirection,
        });
      }
    }
  };

  return (
    <>
      <div
        className="camera-controls"
        // touch events are for mobile while wheel events are for browsers
        onWheel={(event) => {
          if (event.deltaY > 0) {
            handleCameraDirection({
              cameraRotationDirectionSpeed: -rotationDirection,
              cameraHeightDirectionSpeed: -heightDirection,
            });
          } else if (event.deltaY < 0) {
            handleCameraDirection({
              cameraRotationDirectionSpeed: rotationDirection,
              cameraHeightDirectionSpeed: heightDirection,
            });
          }
        }}
        onTouchStart={(e) => {
          setLastTouchY(e.touches[0].clientY);
        }}
        onTouchMove={(e) => {
          handleTouch(e);
        }}
      ></div>
    </>
  );
};
