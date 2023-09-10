import { Canvas } from "@react-three/fiber";
import React from "react";
import GithubLogo from "../scene/skills-icons/Github_logo";
import { NNSeal } from "../scene/skills-icons/Nn-seal";
import ReactLogo from "../scene/skills-icons/React_logo";

//Check to see type of logo to be rendered
const Logo = ({ threeLogo }) => {
    if (threeLogo === "GithubLogo") {
        return <GithubLogo />
    } else if (threeLogo === "ReactLogo") {
        return <ReactLogo />
    } else if (threeLogo === "NNSeal") {
        return <NNSeal />
    }
}

export const ThreeLogo = ({ threeLogo }) => {
    return (
        <>
            <Canvas>
                <Logo threeLogo={threeLogo} />
            </Canvas>
        </>
    )
}