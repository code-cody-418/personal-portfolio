import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";

export const TitleText = () => {

    const FontConfig = ({text}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");

        // sets the size of the 3d text based on mobile or desktop using a custom hook
        const {titleSize} = useResponsive3d()

        // const titleSize = 5

        // console.log("titleSize", titleSize)

        const config = useMemo(
            () => ({
                font: font,
                size: titleSize,
                height: 0.4,
                curveSegments: 32,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }),
            [font, titleSize]
        );
        const mesh = useRef();

        return (
            <>
                <group
                >
                    <mesh ref={mesh}>
                        <textGeometry args={[text, config]}/>
                        <meshNormalMaterial/>
                    </mesh>
                </group>
            </>
        )
    }

    const PortfolioText = () => {

        const {titleXPosition, titleYPosition, titleGroupYPosition} = useResponsive3d()

        // const titleXPosition = -9
        // const titleYPosition = 6

        // console.log("titlePostion", titleXPosition)

        //hover cursor change
        const [hovered] = useState(false)
        useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

        return (
            <>
                <group
                    position={[0, titleGroupYPosition, 0]}
                >
                    <group
                        position={[titleXPosition, titleYPosition, -15]}
                    >
                        <FontConfig
                            text="Codys"
                        />
                    </group>
                    <group
                        position={[titleXPosition, 0, -15]}
                    >
                        <FontConfig
                            text="Portfolio"
                        />
                    </group>
                </group>
            </>
        )
    }
    return (
        <>
            <PortfolioText/>
        </>
    )
}
