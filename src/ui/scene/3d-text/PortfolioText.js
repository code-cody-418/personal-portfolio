import React, { useEffect, useState } from "react"
import { useTexture } from "@react-three/drei"
import { FontConfig } from "./FontConfig"
import { useStore } from "../../utils/store"
import Arrow from "./arrow/Arrow"

export const PortfolioText = ({ text, xPosition, yPosition, zPosition, yRotation, size, modalInfo, allListItems, itemIndex, arrowRotation, sectionType, arrowHide, selectionSize }) => {
    //Modal functions to show modal and to set state of what to display
    const handleShow = useStore((state) => state.showModal)
    const setAllModalInfo = useStore((state) => state.setAllModalInfo)
    const setAllListItems = useStore((state) => state.setAllListItems)
    const setCurrentItemIndex = useStore((state) => state.setCurrentItemIndex)

    //set the modal state when text is clicked
    const handleTextClick = (modalInfo) => {
        setAllModalInfo(modalInfo)
        setAllListItems(allListItems)
        setCurrentItemIndex(itemIndex)
        handleShow()
    }

    //When the cursor is hovered texures change
    let defaultTexture = useTexture("/textures/blue_09_matCap.png")
    let selectedTexture = useTexture("/textures/gold_01_matCap.png")
    const [hoveredTexture, setHoveredTexture] = useState(defaultTexture)

    let transparentTexture = useTexture("/transparent.png")

    //sets cursor on hover
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    //makes an adjustment for the plane selection mesh
    let selectionAdjustmentX = 0
    let selectionAdjustmentZ = 0

    if (sectionType === "aboutMe") {
        selectionAdjustmentX = 6
    } else if (sectionType === "contactMe") {
        selectionAdjustmentX = 6
    } else if (sectionType === "employers") {
        selectionAdjustmentZ = 11
    } else if (sectionType === "skills") {
        selectionAdjustmentX = -11
    } else if (sectionType === "stack") {
        selectionAdjustmentZ = -11
    }

    //sets a default selectionSize
    if (selectionSize === undefined) {
        selectionSize = [25, 1.2]
    }
    return (
        <>
            <group position={[xPosition, yPosition, zPosition]} rotation={[0, yRotation, 0]}>
                <FontConfig
                    text={" " + text} //add empty space to give arrow padding
                    fontType="/Sunmore-Slant-Free-Regular.json"
                    size={size}
                    texture={hoveredTexture}
                />
            </group>
            {   //Hide the arrow if true
                arrowHide ? (
                    null
                ) : (
                    <Arrow
                        xPosition={xPosition}
                        yPosition={yPosition}
                        zPosition={zPosition}
                        arrowRotation={arrowRotation}
                        texture={hoveredTexture}
                    />
                )
            }

            <group //selection group with a mesh to prevent lag
                onClick={() => handleTextClick(modalInfo)}
                onPointerOver={() => {
                    setHoveredTexture(selectedTexture)
                    setHovered(true)
                }}
                onPointerOut={() => {
                    setHoveredTexture(defaultTexture)
                    setHovered(false)
                }}
            >
                <mesh //selection material with adjustments for each section 
                    position={[
                        xPosition + selectionAdjustmentX,
                        yPosition + 0.8,
                        zPosition + selectionAdjustmentZ,
                    ]}
                    rotation={[0, yRotation, 0]}
                >
                    <planeGeometry args={selectionSize} />
                    <meshBasicMaterial map={transparentTexture} alphaTest={0.5} />

                    {/* uncomment to see selection plane  */}
                    {/* <meshMatcapMaterial matcap={defaultTexture} /> */}
                </mesh>
            </group>
        </>
    )
}