import React, {useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {Interactive} from "@react-three/xr";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";


export const SkillsTitleText = () => {

    const [color, setColor] = useState("#e20e83")

    const { skillsTitleSize } = useResponsive3d()

    const FontConfig = ({text, position, rotation, color}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: skillsTitleSize,
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
                        <meshBasicMaterial color={color}/>
                    </mesh>
                </group>
            </>
        )
    }
    const TitleText = () => {

        const { skillsTitleXPosition, skillsTitleYPosition, skillsTitleZPosition } = useResponsive3d()

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
                            text="Tech Skills"
                            position={[skillsTitleXPosition, skillsTitleYPosition, skillsTitleZPosition]}
                            rotation={[0, -1.570796, 0]}
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



