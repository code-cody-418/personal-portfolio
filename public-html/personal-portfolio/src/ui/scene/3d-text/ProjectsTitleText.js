import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";

export const ProjectsTitleText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 5;
    responsiveData.desktopPositionX = -20;
    responsiveData.desktopPositionY = 7;
    responsiveData.desktopPositionZ = 10
    
    responsiveData.mobileSize = 3.5;
    responsiveData.mobilePositionX = -20;
    responsiveData.mobilePositionY = 11;
    responsiveData.mobilePositionZ = 7.5

    const { size, positionX, positionY, positionZ} = useResponsive(responsiveData);

    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: size,
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
        return (
            <>
                <group
                >
                    <FontConfig
                        text="Projects"
                        position={[positionX, positionY, positionZ]}
                        rotation={[0, 1.570796, 0]}
                    />
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
