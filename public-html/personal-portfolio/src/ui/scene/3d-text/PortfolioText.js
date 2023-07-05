import React, { useEffect, useState } from "react"
import { useTexture } from "@react-three/drei"
import { FontConfig } from "./FontConfig"
import { useModalStore } from "../../utils/store"
import Arrow from "./arrow/Arrow"

export const PortfolioText = ({ text, xPosition, yPosition, zPosition, yRotation, size, modalInfo, arrowRotation }) => {
    //Modal functions to show modal and to set state of what to display
    const handleShow = useModalStore((state) => state.showModal)
    const setModalTitle = useModalStore((state) => state.setModalTitle)
    const setModalSubTitle = useModalStore((state) => state.setModalSubTitle)
    const setModalDescription = useModalStore((state) => state.setModalDescription)

    //set the modal state when text is clicked
    const handleTextClick = (modalTitle, modalSubTitle, modalDescription) => {
        setModalTitle(modalTitle)
        setModalSubTitle(modalSubTitle)
        setModalDescription(modalDescription)
        handleShow()
    }

    //When the cursor is hovered texures change
    let defaultTexture = useTexture("/textures/blue_09_matCap.png")
    let selectedTexture = useTexture("/textures/gold_01_matCap.png")
    const [hoveredTexture, setHoveredTexture] = useState(defaultTexture)

    //sets cursor on hover
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    return (
        <>
            <group
                onClick={() => handleTextClick(modalInfo.title, modalInfo.subTitle, modalInfo.description)}
                onPointerOver={() => {
                    setHoveredTexture(selectedTexture)
                    setHovered(true)
                }}
                onPointerOut={() => {
                    setHoveredTexture(defaultTexture)
                    setHovered(false)
                }}
            >
                <group position={[xPosition, yPosition, zPosition]} rotation={[0, yRotation, 0]}>
                    <FontConfig
                        text={" " + text} //add empty space to give arrow padding
                        fontType="/Sunmore-Slant-Free-Regular.json"
                        size={size}
                        texture={hoveredTexture}
                    />
                </group>
                <Arrow
                    xPosition={xPosition}
                    yPosition={yPosition}
                    zPosition={zPosition}
                    arrowRotation={arrowRotation}
                    texture={hoveredTexture}
                />
            </group>
        </>
    )
}