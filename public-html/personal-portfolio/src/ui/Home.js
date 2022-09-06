import React from "react";
import {ThreeDScene} from "./scene/ThreeDScene";
import './scene/sceneStyle.css'

//if xr is NOT on load css to hide xr button
const xr = navigator.xr;

if (xr === undefined || null) {
    import ('../ui/scene/customVRButtonSettings.css')
}
export const Home = () => {
    return (
        <>
            <ThreeDScene />
        </>
    )
}
