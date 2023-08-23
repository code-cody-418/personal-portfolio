import React from "react"
import { Card } from "react-bootstrap"
import { Responsive } from "../../constructor/Responsive";
import { useResponsive } from "../../customHooks/useResponsive";

export const Tutorial = () => {
    const responsiveData = new Responsive();
    const { isMobile } = useResponsive(responsiveData);

    return (
        <>
            <div className="tutorial">
                {isMobile ?
                    (
                        null
                    ) :
                    (
                        <Card style={{ width: '14rem' }} className="p-2 border-0 text-white bg-transparent tutorial-card">
                            Hold left click while moving mouse to rotate camera
                        </Card>
                    )}
            </div>
        </>
    )
}