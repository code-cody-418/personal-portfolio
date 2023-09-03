import React from "react";
import { ThreeDScene } from "./scene/ThreeDScene";

export const Home = () => {
    return (
        <>
            <ThreeDScene />

            <div className="connect-logos">
                <a href="https://codecody.dev/attribution.html" target={"blank"}>
                    <img src="/logos/creative-commons-logo.svg" alt="Creative Commons Logo" className="connect-logo" />
                </a>
                <a href="https://github.com/code-cody-418/personal-portfolio" target={"blank"}>
                    <img src="code-icon-10.png" alt="Code Logo" className="connect-logo" />
                </a>
                <a href="https://www.linkedin.com/in/code-cody" target={"blank"}>
                    <img src="linked-in-logo-03.png" alt="LinkedIn Logo" className="connect-logo" />
                </a>
                <a href="https://github.com/code-cody-418" target={"blank"}>
                    <img src="github-icon.svg" alt="Github Logo" className="connect-logo" />
                </a>
            </div>
        </>
    )
}
