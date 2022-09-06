import React, {useEffect, useState} from "react";
import {Box, useTexture} from "@react-three/drei";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";

export const SkillsIcons = ({iconState}) => {

    //loads textures for the icons
    const reactIcon = useTexture("/react-icon.png")
    const expressIcon = useTexture("/express-icon.png")
    const reduxIcon = useTexture("/redux-icon.png")
    const dockerIcon = useTexture("/docker-icon.png")
    const bootstrapIcon = useTexture("/bootstrap-icon.png")
    const githubIcon = useTexture("/github-icon.png")

    const [currentIcon, setCurrentIcon] = useState(null)


    //determines which icon is showing
    useEffect(() => {
        if (iconState === "reactActive") {
            setCurrentIcon(reactIcon)
        } else if (iconState === "expressActive") {
            setCurrentIcon(expressIcon)
        } else if (iconState === "reduxActive") {
            setCurrentIcon(reduxIcon)
        } else if (iconState === "dockerActive") {
            setCurrentIcon(dockerIcon)
        } else if (iconState === "bootstrapActive") {
            setCurrentIcon(bootstrapIcon)
        } else if (iconState === "githubActive") {
            setCurrentIcon(githubIcon)
        }
        // console.log("icon state", iconState)
    }, [iconState])

    //sets responsive behavior
    const { skillsIconSize, skillsIconZPositionSize } = useResponsive3d()

    return (
        <>
            <group
                position={[20, 0, skillsIconZPositionSize]}
                rotation={[0, -1.570796, 0]}
                scale={skillsIconSize}
            >
                <mesh>
                    <planeGeometry/>
                    <meshStandardMaterial
                        transparent={true}
                        // opacity={0.5}
                        map={currentIcon}
                    />
                </mesh>
            </group>
        </>
    )
}
