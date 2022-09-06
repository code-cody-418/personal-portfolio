import React, {useEffect, useState} from "react";
import {useTexture} from "@react-three/drei";
import {useResponsive3d} from "../../customHooks/useResponsive3d";



export const ProjectsExamples = ({exampleState}) => {

    //loads textures for the examples
    const saiyanWebDevExample = useTexture("/saiyanwebdev-example.png")
    const alienGramExample = useTexture("/aliengram-example.png")
    const expNinjaExample = useTexture("/expNinja-example.png")

    //sets state for the current example to be shown
    const [currentExample, setCurrentExample] = useState(null)
    const [currentExampleVisible, setCurrentExampleVisible] = useState(true)
    // const [expNinjaVisible, setExpNinjaVisible] = useState(false)


    //determines which icon is showing
    useEffect(() => {
        if (exampleState === "saiyanWebDevActive") {
            setCurrentExample(saiyanWebDevExample)
            setCurrentExampleVisible(true)
            // setExpNinjaVisible(false)
        } else if (exampleState === "expNinjaActive") {
            setCurrentExampleVisible(true)
            setCurrentExample(expNinjaExample)
            // setExpNinjaVisible(true)
        } else if (exampleState === "alienGramActive") {
            // setExpNinjaVisible(false)
            setCurrentExampleVisible(true)
            setCurrentExample(alienGramExample)
        }
        // console.log("icon state", iconState)
    }, [exampleState])


    const {
        projectsExampleSize,
        projectsExampleYPosition,
        projectsExampleZPosition,
        projectsExampleYRotation,
        projectsExpNinjaExampleSize,
        projectsExpNinjaExampleYPosition,
        projectsExpNinjaExampleZPosition,
        projectsExpNinjaExampleYRotation
    } = useResponsive3d()

    return (
        <>
            <group
                position={[-16, projectsExampleYPosition, projectsExampleZPosition]}
                rotation={[0, projectsExampleYRotation, 0]}
                scale={projectsExampleSize}
            >
                <mesh
                    visible={currentExampleVisible}
                >
                    <planeGeometry/>
                    <meshStandardMaterial
                        transparent={true}
                        // opacity={0.5}
                        map={currentExample}
                    />
                </mesh>
            </group>
            {/*<Kakashi*/}
            {/*    position={[-19, projectsExpNinjaExampleYPosition, projectsExpNinjaExampleZPosition]}*/}
            {/*    rotation={[0, projectsExpNinjaExampleYRotation, 0]}*/}
            {/*    expNinjaVisible={expNinjaVisible}*/}
            {/*/>*/}

        </>
    )
}
