import React, { useEffect } from "react";
import { ThreeDScene } from "./scene/ThreeDScene";
import WebGL from "three/addons/capabilities/WebGL.js";
import { ModalIcon } from "../ui/modal/ModalIcon";
import { MyModal } from "../ui/modal/MyModal";
import { useStore } from "./utils/store";

export const Home = () => {
  const isWebGLAvail = useStore((state) => state.isWebGLAvail);
  const setIsWebGLAvail = useStore((state) => state.setIsWebGLAvail);
  const handleShow = useStore((state) => state.showModal);

  useEffect(() => {
    if (WebGL.isWebGL2Available() === true) {
      setIsWebGLAvail(true);
    } else {
      setIsWebGLAvail(false);
      handleShow();
    }
  }, [handleShow, setIsWebGLAvail]);

  return (
    <>
      <ModalIcon />

      <MyModal />

      {isWebGLAvail === true ? <ThreeDScene /> : null}

      <div className="connect-logos">
        <a href="https://codecody.dev/attribution.html" target={"blank"}>
          <img
            src="/logos/creative-commons-logo.svg"
            alt="Creative Commons Logo"
            className="connect-logo"
          />
        </a>
        <a
          href="https://github.com/code-cody-418/personal-portfolio"
          target={"blank"}
        >
          <img
            src="code-icon-10.png"
            alt="Code Logo"
            className="connect-logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/code-cody" target={"blank"}>
          <img
            src="linked-in-logo-03.png"
            alt="LinkedIn Logo"
            className="connect-logo"
          />
        </a>
        <a href="https://github.com/code-cody-418" target={"blank"}>
          <img
            src="github-icon.svg"
            alt="Github Logo"
            className="connect-logo"
          />
        </a>
      </div>
    </>
  );
};
