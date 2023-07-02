import React from "react"
import { useTexture } from "@react-three/drei"
import { FontConfig } from "./FontConfig"
import { useModalStore } from "../../utils/store"

export const PortfolioText = ({ text, xPosition, yPosition, zPosition, yRotation, size, modalInfo }) => {
    let loadedTexture = useTexture("/textures/blue_09_matCap.png")

    //Modal functions to show modal and to set state of what to display
    const handleShow = useModalStore((state) => state.showModal)
    const setModalTitle = useModalStore((state) => state.setModalTitle)
    const setModalSubTitle = useModalStore((state) => state.setModalSubTitle)
    const setModalDescription = useModalStore((state) => state.setModalDescription)

    //set the state when text is clicked
    const handleTextClick = (modalTitle, modalSubTitle, modalDescription ) => {
        setModalTitle(modalTitle)
        setModalSubTitle(modalSubTitle)
        setModalDescription(modalDescription)
        handleShow()
    }
    return (
        <>
            <group
                position={[xPosition, yPosition, zPosition]} //separate each new item in list by y-2
                rotation={[0, yRotation, 0]}
                onClick={() => handleTextClick(modalInfo.title, modalInfo.subTitle, modalInfo.description)}
            >
                <FontConfig
                    text={text}
                    fontType="/Sunmore-Slant-Free-Regular.json"
                    size={size}
                    texture={loadedTexture}
                />
            </group>
        </>
    )
}