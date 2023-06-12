import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import ReactLogo from "../skills-icons/React_logo";

export const SkillsListText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 0;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = -15

    responsiveData.mobileSize = 1.5;
    responsiveData.mobilePositionX = 0;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = -8

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    const ListText = () => {

        //set the state of the icon
        const [iconState, setIconState] = useState(null)

        //color of text before being changed
        const startingColor = "rgb(122,158,248)"

        //allows each skill to change color
        const [reactColor, setReactColor] = useState(startingColor)
        const [expressColor, setExpressColor] = useState(startingColor)
        const [reduxColor, setReduxColor] = useState(startingColor)
        const [dockerColor, setDockerColor] = useState(startingColor)
        const [bootstrapColor, setBootstrapColor] = useState(startingColor)
        const [githubColor, setGithubColor] = useState(startingColor)

        //Functionality to 30 second timer
        const [thirtySeconds, setThirtySeconds] = useState(30)
        const [timerOnOff, setTimerOnOff] = useState(true)

        useEffect(() => {
            if (timerOnOff === true) {
                if (thirtySeconds === -1) {
                    setThirtySeconds(30)
                } else if (thirtySeconds > -2) {
                    const intervalId = setInterval(() => {
                        setThirtySeconds(thirtySeconds => thirtySeconds - 1)
                    }, 1000)
                    // console.log("seconds", thirtySeconds)
                    return () => clearInterval(intervalId)
                }
            }
        }, [thirtySeconds, timerOnOff])

        useEffect(() => {
            if (timerOnOff === true) {
                if (thirtySeconds === 30) {
                    // setIconState("reactActive")
                    setReactColor("#61dafb")
                    setGithubColor(startingColor)
                } else if (thirtySeconds === 25) {
                    // setIconState("expressActive")
                    setExpressColor("#FFFFFF")
                    setReactColor(startingColor)
                } else if (thirtySeconds === 20) {
                    // setIconState("reduxActive")
                    setReduxColor("#764abc")
                    setExpressColor(startingColor)
                } else if (thirtySeconds === 15) {
                    // setIconState("dockerActive")
                    setDockerColor("#2496ed")
                    setReduxColor(startingColor)
                } else if (thirtySeconds === 10) {
                    // setIconState("bootstrapActive")
                    setBootstrapColor("#7952b3")
                    setDockerColor(startingColor)
                } else if (thirtySeconds === 5) {
                    // setIconState("githubActive")
                    setGithubColor("#FFF")
                    setBootstrapColor(startingColor)
                }
            }
        }, [iconState, thirtySeconds, timerOnOff])

        return (
            <>
                <group
                    //this group moves the whole list
                    position={[positionX, positionY, positionZ]}>
                    <group
                        onPointerEnter={() => {
                            setIconState("reactActive")
                            setReactColor("#61dafb")
                            setTimerOnOff(false)
                        }}
                        onPointerLeave={() => {
                            setReactColor(startingColor)
                            setTimerOnOff(true)
                        }}
                        position={[20, 4, 0]} //separate each new item in list by y-2
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="React"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            color={reactColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("expressActive")
                            setExpressColor("#FFFFFF")
                            setTimerOnOff(false)
                        }}
                        onPointerLeave={() => {
                            setExpressColor(startingColor)
                            setTimerOnOff(true)
                        }}
                        position={[20, 2, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Express"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            color={expressColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("reduxActive")
                            setReduxColor("#764abc")
                            setTimerOnOff(false)
                        }}
                        onPointerLeave={() => {
                            setReduxColor(startingColor)
                            setTimerOnOff(true)
                        }}
                        position={[20, 0, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Redux"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            color={reduxColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("dockerActive")
                            setDockerColor("#2496ed")
                            setTimerOnOff(false)
                        }}
                        onPointerLeave={() => {
                            setDockerColor(startingColor)
                            setTimerOnOff(true)
                        }}
                        position={[20, -2, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Docker"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            color={dockerColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("bootstrapActive")
                            setBootstrapColor("#7952b3")
                            setTimerOnOff(false)
                        }}
                        onPointerLeave={() => {
                            setBootstrapColor(startingColor)
                            setTimerOnOff(true)
                        }}
                        position={[20, -4, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Bootstrap"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            color={bootstrapColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("githubActive")
                            setGithubColor("#FFF")
                            setTimerOnOff(false)
                        }}
                        onPointerLeave={() => {
                            setGithubColor(startingColor)
                            setTimerOnOff(true)
                        }}
                        position={[20, -6, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="GitHub"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            color={githubColor}
                        />
                    </group>
                </group>
                {/* <SkillsIcons
                    // position={[0, 0, 0]}
                    iconState={iconState}
                /> */}
                <ReactLogo />
            </>
        )
    }
    return (
        <>
            <ListText />
        </>
    )
}
