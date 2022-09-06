import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";


//Extra fonts
// /Basaro_Regular.json

// /Sunmore-Slant-Free-Regular.json
// /Ranille-Normal-Regular.json
// /Roboto-Slab-Bold.json
// /Saiyan-Sans-Regular.json

export const ProjectsTitleText = () => {

    const { projectsTitleSize } = useResponsive3d()


    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: projectsTitleSize,
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

        const { projectsTitleXPosition, projectsTitleYPosition, projectsTitleZPosition } = useResponsive3d()

        return (
            <>
                <group
                >
                    <FontConfig
                        text="Projects"
                        position={[projectsTitleXPosition, projectsTitleYPosition, projectsTitleZPosition]}
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
