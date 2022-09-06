import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";


//Extra fonts
// /Basaro_Regular.json

// /Sunmore-Slant-Free-Regular.json
// /Ranille-Normal-Regular.json
// /Roboto-Slab-Bold.json
// /Saiyan-Sans-Regular.json

export const ContactFormText = () => {

    const { contactFormTextSize } = useResponsive3d()


    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Sunmore-Slant-Free-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: contactFormTextSize,
                height: 0.2,
                curveSegments: 32,
                bevelEnabled: true,
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
                        <meshBasicMaterial color={"#e20e83"}/>
                    </mesh>
                </group>
            </>
        )
    }

    const TitleText = () => {

        const {
            contactFormTextXPosition,
            contactFormTextYPosition,
            contactFormTextZPosition,
            contactButtonWidthSize,
            contactButtonHeightSize,
            contactButtonXPosition,
            contactButtonYPosition,
            contactButtonZPosition

        } = useResponsive3d()

        const [buttonColor, setButtonColor] = useState("#fff")

        //hover cursor change
        const [hovered, setHovered] = useState(false)
        useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])



        return (
            <>
                <group
                    onClick={ () => window.location = '/contact-form' }
                    onPointerOver={() => {
                        setHovered(true)
                        setButtonColor("#24a0ed")
                    }}
                    onPointerOut={() => {
                        setHovered(false)
                        setButtonColor("#fff")
                    }}
                >
                    <FontConfig
                        text="Contact Me"
                        position={[contactFormTextXPosition, contactFormTextYPosition, contactFormTextZPosition]}
                        // rotation={[0, .75, 0]}
                    />
                    <mesh //this is the contact form button as a Plane geometry
                        position={[contactButtonXPosition, contactButtonYPosition, contactButtonZPosition]}
                    >
                        <planeGeometry
                            attach='geometry' args={[contactButtonWidthSize, contactButtonHeightSize]}
                        />
                        <meshBasicMaterial
                        color={buttonColor}
                        attach='material'
                        />
                    </mesh>
                </group>
            </>
        )
    }

    return (
        <>
            <TitleText/>
        </>
    )
}
