import React from "react";

export const Walls = () => {

    const wallColor = "#A9A9A9"
    const wallHeight = 40
    const wallWidth = 100
    const wallVisible = false

    return (
        <>
            {/*floor*/}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}
                // visible={wallVisible}
                visible={ false }
            >
                <planeBufferGeometry attach='geometry' args={[60, 60]}/>
                <meshStandardMaterial attach='material' color={"#554b4b"} />
            </mesh>

            {/*projects wall*/}
            <mesh
                rotation={[-Math.PI / 2, 1.57, 0]}
                position={[-20,-1, 0]}
                visible={wallVisible}
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]}/>
                <meshStandardMaterial attach='material' color={wallColor} />
            </mesh>

            {/*skills wall*/}
            <mesh
                rotation={[-Math.PI / 2, -1.57, 0]}
                position={[20, -1, 0]}
                visible={wallVisible}
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]}/>
                <meshStandardMaterial attach='material' color={wallColor} />
            </mesh>

            {/*Title Wall*/}
            <mesh
                rotation={[Math.PI, Math.PI, 1.57]}
                position={[0, -1, -15]}
                visible={wallVisible}
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]}/>
                <meshStandardMaterial attach='material' color={"#000"} />
            </mesh>

            {/*Back Wall*/}
            <mesh
                rotation={[0, Math.PI, -1.57]}
                position={[0, -1, 50]}
                visible={wallVisible}
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]} />
                <meshStandardMaterial attach='material' color={wallColor} />
            </mesh>
        </>
    )
}
