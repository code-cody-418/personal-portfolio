import React from "react";
import { ThreeDScene } from "./scene/ThreeDScene";
import './scene/sceneStyle.css'

//if xr is NOT on load css to hide xr button
const xr = navigator.xr;

if (xr === undefined || null) {
    import('../ui/scene/customVRButtonSettings.css')
}
export const Home = () => {
    return (
        <>
            <ThreeDScene />
            {/* <h1 className="connect">Hello</h1> */}
            <div className="connect-logos">
                <a href="https://www.linkedin.com/in/code-cody" target={"blank"}>
                    <img src="linked-in-logo-03.png" alt="LinkedIn Logo" className="connect-logo" />
                </a>
                <a href="https://github.com/code-cody-418" target={"blank"}>
                    <img src="github-icon.png" alt="Github Logo" className="connect-logo" />
                </a>
            </div>
        </>
    )
}
