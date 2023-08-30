import React from "react";
import GithubLogo from "../scene/skills-icons/Github_logo";
import ReactLogo from "../scene/skills-icons/React_logo";

export const ThreeLogo = ({threeLogo}) => {
    if(threeLogo === "GithubLogo"){
        return  <GithubLogo />
    } else if (threeLogo === "ReactLogo"){
        return  <ReactLogo />
    }
}