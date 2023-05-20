import React, {useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {Interactive} from "@react-three/xr";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontLoader} from "three/examples/jsm/loaders/FontLoader.js"

export const EmployersTitleText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 5;
    responsiveData.desktopPositionX = 15;
    responsiveData.desktopPositionY = 7;
    responsiveData.desktopPositionZ = 20
    
    responsiveData.mobileSize = 2;
    responsiveData.mobilePositionX = 6;
    responsiveData.mobilePositionY = 7;
    responsiveData.mobilePositionZ = 20
  

    const { size, positionX, positionY, positionZ} = useResponsive(responsiveData);

    const [color, setColor] = useState("#e20e83")

    const FontConfig = ({text, position, rotation, color}) => {
        const font = useLoader(FontLoader, "/Saiyan-Sans-Regular.json");
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
                        {/* <textGeometry args={[text, config]}/> */}
                        <meshBasicMaterial color={color}/>
                    </mesh>
                </group>
            </>
        )
    }
    const TitleText = () => {
        return (
            <>
                <group
                    onClick={ () => setColor("#0000ff")}

                >
                    <Interactive
                        onSelect={() => setColor("#0000ff")}
                        onHover={() => console.log("Hovered")}
                    >
                        <FontConfig
                            text="Past Jobs"
                            position={[positionX, positionY, positionZ]}
                            rotation={[0, Math.PI, 0]}
                            color={color}
                        />
                    </Interactive>
                </group>
            </>
        )
    }
    return (
        <>
        <TitleText />
        </>
    )
}



