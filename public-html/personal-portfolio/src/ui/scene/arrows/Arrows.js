import React, {useEffect, useState} from "react";
import {Box} from "@react-three/drei";

// Turns on and off Reference Boxs to help position
const visible = true

export const ReferenceCenter = () => {

    const [hovered, setHovered] = useState(false)

    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])



    return (
        <>
            <group
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                // onClick={({camera}) => camera.lookAt(30, 0, 0)}
            >
                <Box
                    position={[0, -1, -14]}
                    // rotation={[0, -1, 0]}
                    visible={visible}
                />
            </group>
        </>
    )
}

export const ReferenceProject = () => {
    return (
        <>
            <group
            >
                <Box
                    position={[-19, 0, 0]}
                    visible={visible}
                />
            </group>
        </>
    )
}

export const ReferenceSkills = () => {
    return (
        <>
            <group
            >
                <Box
                    position={[20, -12, 0]}
                    visible={visible}
                />
            </group>
        </>
    )
}

export const RightArrow = () => {

    const [hovered, setHovered] = useState(false)

    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    return (
        <>
        <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={({camera}) => camera.lookAt(30, 0, 0)}
            visible={false}
        >
            <Box
                position={[10, -2, -10]}
                // rotation={[0, -1, 0]}
            />
        </group>
        </>
    )
}
