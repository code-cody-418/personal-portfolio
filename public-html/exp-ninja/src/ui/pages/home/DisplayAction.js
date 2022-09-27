import React, {useEffect, useState} from "react";
import {moves} from "../../shared/interfaces/moves";
import {names} from "../../shared/interfaces/names";

export const DisplayAction = ({name, narutoAction, korraAction, gokuAction, kakashiAction}) => {

    const [textAnimation, setTextAnimation] = useState(moves.capitalJumpingJack)

    useEffect(() => {
        if (name === names.kakashi) {
            if (kakashiAction === moves.idle) {
                return setTextAnimation(moves.capitalIdle)
            } else if (kakashiAction === moves.jumpingJack) {
                return setTextAnimation(moves.capitalJumpingJack)
            } else if (kakashiAction === moves.armStretch) {
                return setTextAnimation(moves.capitalArmStretch)
            } else if (kakashiAction === moves.neckStretch) {
                return setTextAnimation(moves.capitalNeckStretch)
            } else if (kakashiAction === moves.touchToes) {
                return setTextAnimation(moves.capitalTouchToes)
            } else if (kakashiAction === moves.pushUp) {
                return setTextAnimation(moves.capitalPushUp)
            }  else if (kakashiAction === moves.sitUps) {
                return setTextAnimation(moves.capitalSitUps)
            } else if (kakashiAction === moves.kick) {
                return setTextAnimation(moves.capitalKick)
            } else if (kakashiAction === moves.squat) {
                return setTextAnimation(moves.capitalSquat)
            } else if (kakashiAction === moves.bicepCurl) {
                return setTextAnimation(moves.capitalBicepCurl)
            } else if (kakashiAction === moves.coolDown) {
                return setTextAnimation(moves.capitalCoolDown)
            } else if (kakashiAction === moves.celebration) {
                return setTextAnimation("Finished!!!")
            }
        } else if (name === names.korra) {
            if (korraAction === moves.idle) {
                return setTextAnimation(moves.capitalIdle)
            } else if (korraAction === moves.armStretch) {
                return setTextAnimation(moves.capitalArmStretch)
            }  else if (korraAction === moves.touchToes) {
                return setTextAnimation(moves.capitalTouchToes)
            }  else if (korraAction === moves.burpee) {
                return setTextAnimation(moves.capitalBurpee)
            }  else if (korraAction === moves.crossJumps) {
                return setTextAnimation(moves.capitalCrossJumps)
            }  else if (korraAction === moves.crossRotation) {
                return setTextAnimation(moves.capitalCrossRotation)
            }  else if (korraAction === moves.pushUp) {
                return setTextAnimation(moves.capitalPushUp)
            }  else if (korraAction === moves.sitUps) {
                return setTextAnimation(moves.capitalSitUps)
            }  else if (korraAction === moves.bicepCurl) {
                return setTextAnimation(moves.capitalBicepCurl)
            }  else if (korraAction === moves.coolDown) {
                return setTextAnimation(moves.capitalCoolDown)
            }  else if (korraAction === moves.celebration) {
                return setTextAnimation("Finished!!!")
            }
        } else if (name === names.goku) {
            if (gokuAction === moves.idle) {
                return setTextAnimation(moves.capitalIdle)
            } else if (gokuAction === moves.touchToes) {
                setTextAnimation(moves.capitalTouchToes)
            }  else if (gokuAction === moves.armStretch) {
                setTextAnimation(moves.capitalArmStretch)
            }  else if (gokuAction === moves.jumpingJack) {
                setTextAnimation(moves.capitalJumpingJack)
            }  else if (gokuAction === moves.jab) {
                setTextAnimation(moves.capitalJab)
            }  else if (gokuAction === moves.hook) {
                setTextAnimation(moves.capitalHook)
            }  else if (gokuAction === moves.punchCombo) {
                setTextAnimation(moves.capitalPunchCombo)
            }  else if (gokuAction === moves.bicepCurl) {
                setTextAnimation(moves.capitalBicepCurl)
            }  else if (gokuAction === moves.plank) {
                setTextAnimation(moves.capitalPlank)
            }  else if (gokuAction === moves.sitUps) {
                setTextAnimation(moves.capitalSitUps)
            }  else if (gokuAction === moves.pushUp) {
                setTextAnimation(moves.capitalPushUp)
            }  else if (gokuAction === moves.coolDown) {
                setTextAnimation(moves.capitalCoolDown)
            } else if (gokuAction === moves.celebration) {
                setTextAnimation("Finished!!!")
            }
        } else if (name === names.naruto) {
            if (narutoAction === moves.idle) {
                return setTextAnimation(moves.capitalIdle)
            } else if (narutoAction === moves.armStretch) {
                return setTextAnimation(moves.capitalArmStretch)
            } else if (narutoAction === moves.touchToes) {
                return setTextAnimation(moves.capitalTouchToes)
            } else if (narutoAction === moves.upRock) {
                return setTextAnimation(moves.capitalUpRock)
            } else if (narutoAction === moves.footwork) {
                return setTextAnimation(moves.capitalFootwork)
            } else if (narutoAction === moves.freeze) {
                return setTextAnimation(moves.capitalFreeze)
            } else if (narutoAction === moves.jumpingJack) {
                return setTextAnimation(moves.capitalJumpingJack)
            } else if (narutoAction === moves.bikeCrunch) {
                return setTextAnimation(moves.capitalBikeCrunch)
            } else if (narutoAction === moves.sitUps) {
                return setTextAnimation(moves.capitalSitUps)
            } else if (narutoAction === moves.pushUp) {
                return setTextAnimation(moves.capitalPushUp)
            } else if (narutoAction === moves.bicepCurl) {
                return setTextAnimation(moves.capitalBicepCurl)
            } else if (narutoAction === moves.coolDown) {
                return setTextAnimation(moves.capitalCoolDown)
            } else if (narutoAction === moves.celebration) {
                return setTextAnimation("Finished!!!")
            }
        }
    }, [kakashiAction, korraAction, narutoAction, gokuAction, name])

    return (
        <>
            <h2 className='actionText'>{textAnimation}</h2>
        </>
    )
}
