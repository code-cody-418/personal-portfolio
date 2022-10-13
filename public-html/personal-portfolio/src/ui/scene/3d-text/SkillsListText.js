import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {SkillsIcons} from "../skills-icons/SkillsIcons";
import {Interactive} from "@react-three/xr";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";


export const SkillsListText = () => {

    const { skillsTextSize } = useResponsive3d()

    const FontConfig = ({text, position, rotation, uniqueColor}) => {
        const font = useLoader(THREE.FontLoader, "/Sunmore-Slant-Free-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: skillsTextSize,
                height: 0.2,
                curveSegments: 32,
                bevelEnabled: false,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }),
            [font]
        );
        const mesh = useRef();
        return (
            <>
                <group position={position} rotation={rotation}>
                    <mesh ref={mesh}>
                        <textGeometry args={[text, config]}/>
                        <meshStandardMaterial color={uniqueColor}/>
                    </mesh>
                </group>
            </>
        )
    }

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
                    setIconState("reactActive")
                    setReactColor("#61dafb")
                    setGithubColor(startingColor)
                } else if (thirtySeconds === 25) {
                    setIconState("expressActive")
                    setExpressColor("#FFFFFF")
                    setReactColor(startingColor)
                } else if (thirtySeconds === 20) {
                    setIconState("reduxActive")
                    setReduxColor("#764abc")
                    setExpressColor(startingColor)
                } else if (thirtySeconds === 15) {
                    setIconState("dockerActive")
                    setDockerColor("#2496ed")
                    setReduxColor(startingColor)
                } else if (thirtySeconds === 10) {
                    setIconState("bootstrapActive")
                    setBootstrapColor("#7952b3")
                    setDockerColor(startingColor)
                } else if (thirtySeconds === 5) {
                    setIconState("githubActive")
                    setGithubColor("#FFF")
                    setBootstrapColor(startingColor)
                }
            }
        }, [iconState, thirtySeconds, timerOnOff])


        const { skillsTextXPosition, skillsTextYPosition, skillsTextZPosition } = useResponsive3d()

        return (
            <>
                <group
                    //this group moves the whole list
                    position = {[skillsTextXPosition, skillsTextYPosition, skillsTextZPosition]}>
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
                    >
                        <Interactive
                            // onSelect={() => setColor("#0000ff")}
                            onHover={() => {
                                setIconState("reactActive")
                                setReactColor("#61dafb")
                                setTimerOnOff(false)
                            }}
                        >
                            <FontConfig
                                text="React"
                                position={[20, 4, 0]} //separate each new item in list by y-2
                                rotation={[0, -1.570796, 0]}
                                uniqueColor={reactColor}
                            />
                        </Interactive>
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
                    >
                        <Interactive
                            onSelect={() => {
                                setIconState("expressActive")
                                setExpressColor("#FFFFFF")
                                setTimerOnOff(false)
                            }}
                        >
                            <FontConfig
                                text="Express"
                                position={[20, 2, 0]}
                                rotation={[0, -1.570796, 0]}
                                uniqueColor={expressColor}
                            />
                        </Interactive>
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
                    >
                        <Interactive
                            onSqueezeStart={() => {
                                setIconState("reduxActive")
                                setReduxColor("#764abc")
                                setTimerOnOff(false)
                            }}
                            onSqueezeEnd={() => {
                                setReduxColor(startingColor)
                                setTimerOnOff(true)
                            }}
                        >
                            <FontConfig
                                text="Redux"
                                position={[20, 0, 0]}
                                rotation={[0, -1.570796, 0]}
                                uniqueColor={reduxColor}
                            />
                        </Interactive>
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
                    >
                        <FontConfig
                            text="Docker"
                            position={[20, -2, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={dockerColor}
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
                    >
                        <FontConfig
                            text="Bootstrap"
                            position={[20, -4, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={bootstrapColor}
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
                    >
                        <FontConfig
                            text="GitHub"
                            position={[20, -6, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={githubColor}
                        />
                    </group>
                </group>
                <SkillsIcons
                    // position={[0, 0, 0]}
                    iconState={iconState}
                />
            </>
        )
    }
    return (
        <>
            <ListText/>
        </>
    )


}
