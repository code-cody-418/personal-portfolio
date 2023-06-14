import React, {useEffect, useState} from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const ProjectsListText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.8;
    responsiveData.desktopPositionX = 0;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 0
    
    responsiveData.mobileSize = 1.5;
    responsiveData.mobilePositionX = 0;
    responsiveData.mobilePositionY = 5;
    responsiveData.mobilePositionZ = -2

    const { size, positionX, positionY, positionZ} = useResponsive(responsiveData);

    let defaultTexture = useTexture("/textures/purple_08_matCap.png")
    let selectedTexture = useTexture("/textures/blue_01_matCap.png")

    const ListText = () => {
       
        //Project Text
        const projectTextOne = "NN DPM"
        const projectTextTwo = "SW Bakery"
        const projectTextThree = "Clothing Bank"

        //allows each skill to change color
        const [projectOneColor, setProjectOneColor] = useState(defaultTexture)
        const [projectTwoColor, setProjectTwoColor] = useState(defaultTexture)
        const [projectThreeColor, setProjectThreeColor] = useState(defaultTexture)

        //sets cursor on hover
        const [hovered, setHovered] = useState(false)
        useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

        return (
            <>
                <group position={[positionX, positionY, positionZ]}>
                    <group
                        onClick={() => window.open("http://www.dpm.navajo-nsn.gov/")}
                        onPointerOver={() => {
                            setProjectOneColor(selectedTexture)
                            setHovered(true)
                            
                        }}
                        onPointerOut={() => {
                            setProjectOneColor(defaultTexture)
                            setHovered(false)
                        }}
                        position={[-20, 2, 10]}
                        rotation={[0, 1.570796, 0]}
                    >
                        <FontConfig
                            text={projectTextOne}
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={projectOneColor}
                        />
                    </group>
                    <group
                        onClick={() => window.open("https://southwestbakery505.com/")}
                        onPointerOver={() => {
                            setProjectTwoColor(selectedTexture)
                            setHovered(true)
                            
                        }}
                        onPointerOut={() => {
                            setProjectTwoColor(defaultTexture)
                            setHovered(false)
                        }}
                        position={[-20, -2, 10]}
                        rotation={[0, 1.570796, 0]}
                    >
                        <FontConfig
                            text={projectTextTwo}
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={projectTwoColor}
                        />
                    </group>
                    <group
                        onClick={() => window.open("https://monsterslayer.org/")}
                        onPointerOver={() => {
                            setProjectThreeColor(selectedTexture)
                            setHovered(true)
                            
                        }}
                        onPointerOut={() => {   
                            setProjectThreeColor(defaultTexture)
                            setHovered(false)
                        }}
                        position={[-20, -6, 10]}
                        rotation={[0, 1.570796, 0]}
                    >
                        <FontConfig
                            text={projectTextThree}
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={projectThreeColor}
                        />
                    </group>
                </group>
                {/* <ProjectsExamples
                    exampleState={exampleState}
                /> */}
            </>
        )
    }
    return (
        <>
            <ListText/>
        </>
    )
}
