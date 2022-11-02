import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {SkillsIcons} from "../skills-icons/SkillsIcons";
import {Interactive} from "@react-three/xr";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";


export const EmployersListText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 15;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 20
    
    responsiveData.mobileSize = 1.2;
    responsiveData.mobilePositionX = 6;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = 20

    const { size, positionX, positionY, positionZ} = useResponsive(responsiveData);

    const FontConfig = ({text, position, rotation, uniqueColor}) => {
        const font = useLoader(THREE.FontLoader, "/Sunmore-Slant-Free-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: size,
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

        // useEffect(() => {
        //     if (timerOnOff === true) {
        //         if (thirtySeconds === 30) {
        //             setIconState("reactActive")
        //             setReactColor("#61dafb")
        //             setGithubColor(startingColor)
        //         } else if (thirtySeconds === 25) {
        //             setIconState("expressActive")
        //             setExpressColor("#FFFFFF")
        //             setReactColor(startingColor)
        //         } else if (thirtySeconds === 20) {
        //             setIconState("reduxActive")
        //             setReduxColor("#764abc")
        //             setExpressColor(startingColor)
        //         } else if (thirtySeconds === 15) {
        //             setIconState("dockerActive")
        //             setDockerColor("#2496ed")
        //             setReduxColor(startingColor)
        //         } else if (thirtySeconds === 10) {
        //             setIconState("bootstrapActive")
        //             setBootstrapColor("#7952b3")
        //             setDockerColor(startingColor)
        //         } else if (thirtySeconds === 5) {
        //             setIconState("githubActive")
        //             setGithubColor("#FFF")
        //             setBootstrapColor(startingColor)
        //         }
        //     }
        // }, [iconState, thirtySeconds, timerOnOff])

        return (
            <>
                <group
                    //this group moves the whole list
                    position = {[positionX, positionY, positionZ]}>
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
                                text="Navajo Nation"
                                position={[0, 4, 0]} //separate each new item in list by y-2
                                rotation={[0, Math.PI, 0]}
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
                                text="Gesture"
                                position={[0, 2, 0]}
                                rotation={[0, Math.PI, 0]}
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
                                text="CNM"
                                position={[0, 0, 0]}
                                rotation={[0, Math.PI, 0]}
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
                            text="Freelance"
                            position={[0, -2, 0]}
                            rotation={[0, Math.PI, 0]}
                            uniqueColor={dockerColor}
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
