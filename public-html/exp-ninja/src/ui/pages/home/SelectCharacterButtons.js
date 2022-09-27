import React from "react";
import {Button, Col} from "react-bootstrap";
import {settingAutoWorkout} from "../../../store/autoWorkoutSlice";
import {settingVideoPlay} from "../../../store/videoPlaySlice";
import {settingKakashiMove} from "../../../store/trainer-Slices/kakashiSlice";
import {moves} from "../../shared/interfaces/moves";
import {settingGokuMove} from "../../../store/trainer-Slices/gokuSlice";
import {settingNarutoMove} from "../../../store/trainer-Slices/narutoSlice";
import {settingKorraMove} from "../../../store/trainer-Slices/korraSlice";
import {names} from "../../shared/interfaces/names";
import {useDispatch, useSelector} from "react-redux";

//logic for character button selection
export const SelectCharacterButtons = () => {

    const dispatch = useDispatch()

    const autoWorkout = useSelector(state => state.autoWorkout.setAutoWorkout)
    const videoPlay = useSelector((state) => state.videoPlay.setVideoPlay)
    const name = useSelector((state) => state.name.setName)


    if (autoWorkout === true) {
        return (
            <>
                <Col xl={2} className='ps-sm-5 ml-auto'>
                    {videoPlay === false ? (
                        <Button
                            className='startWorkoutButton'
                            onClick={() => {
                                dispatch(settingAutoWorkout(true))
                                dispatch(settingVideoPlay(true))
                            }}
                        >Start Workout</Button>
                    ) : (
                        <Button
                            className='startWorkoutButton'
                            onClick={() => {
                                dispatch(settingAutoWorkout(true))
                                dispatch(settingVideoPlay(false))
                                dispatch(settingKakashiMove(moves.idle))
                                dispatch(settingGokuMove(moves.idle))
                                dispatch(settingNarutoMove(moves.idle))
                                dispatch(settingKorraMove(moves.idle))
                            }}
                        >Pause Workout</Button>
                    )
                    }
                    <Button
                        className='startWorkoutButton'
                        onClick={() => {
                            dispatch(settingVideoPlay(true))
                            dispatch(settingAutoWorkout(false))
                        }}
                    >Customize Workout</Button>
                </Col>
            </>
        )
    } else if (name === names.kakashi && autoWorkout === false) {
        return (
            <>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button
                        className='characterButton'
                        onClick={() => {
                            dispatch(settingAutoWorkout(true))
                            dispatch(settingVideoPlay(true))
                        }}
                    >Auto</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.idle))}>Chillin</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.armStretch))}>Arm Stretch</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.neckStretch))}>Neck Stretch</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.touchToes))}>Toe Touch</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.pushUp))}>Push Ups</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.sitUps))}>Sit-ups</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.jumpingJack))}>Jumping Jacks</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.kick))}>Kick</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.squat))}>Squat</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.bicepCurl))}>Bicep Curl</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKakashiMove(moves.coolDown))}>Cool Down</Button>
                </Col>
            </>
        )
    } else if (name === names.naruto && autoWorkout === false) {
        return (
            <>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button
                        className='characterButton'
                        onClick={() => {
                            dispatch(settingAutoWorkout(true))
                            dispatch(settingVideoPlay(true))
                        }}
                    >Auto</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.armStretch))}>Arm
                        Stretch</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.touchToes))}>Touch
                        Toes</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.upRock))}>Uprock</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.footwork))}>Footwork</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.freeze))}>Freeze</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.jumpingJack))}>Jumping
                        Jacks</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.bikeCrunch))}>Crunch's</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingNarutoMove(moves.sitUps))}>Sit
                        Ups</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton' onClick={() => dispatch(settingNarutoMove(moves.pushUp))}>Push
                        Up</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingNarutoMove(moves.bicepCurl))}>Bicep
                        Curl</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingNarutoMove(moves.coolDown))}>Cool
                        Down</Button>
                </Col>
            </>
        )
    } else if (name === names.goku && autoWorkout === false) {
        return (
            <>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button
                        className='characterButton'
                        onClick={() => {
                            dispatch(settingAutoWorkout(true))
                            dispatch(settingVideoPlay(true))
                        }}
                    >Auto</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingGokuMove(moves.touchToes))}>Touch
                        Toes</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingGokuMove(moves.armStretch))}>Arm
                        Stretch</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingGokuMove(moves.jumpingJack))}>Jumping
                        Jacks</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingGokuMove(moves.jab))}>Jab</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingGokuMove(moves.hook))}>Hook</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton' onClick={() => dispatch(settingGokuMove(moves.punchCombo))}>Punch
                        Combo</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingGokuMove(moves.bicepCurl))}>Bicep
                        Curl</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingGokuMove(moves.plank))}>Plank</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton' onClick={() => dispatch(settingGokuMove(moves.sitUps))}>Sit
                        Ups</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingGokuMove(moves.pushUp))}>Push
                        Ups</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingGokuMove(moves.coolDown))}>Cool
                        Down</Button>
                </Col>
            </>
        )
    } else if (name === names.korra && autoWorkout === false) {
        return (
            <>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button
                        className='characterButton'
                        onClick={() => {
                            dispatch(settingAutoWorkout(true))
                            dispatch(settingVideoPlay(true))
                        }}>Auto</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKorraMove(moves.idle))}>Chillin</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKorraMove(moves.armStretch))}>Arm
                        Stretch</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton' onClick={() => dispatch(settingKorraMove(moves.touchToes))}>Touch
                        Toes</Button>

                    <Button className='characterButton'
                            onClick={() => dispatch(settingKorraMove(moves.burpee))}>Burpee</Button>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKorraMove(moves.crossJumps))}>Cross
                        Jumps</Button>

                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton'
                            onClick={() => dispatch(settingKorraMove(moves.crossRotation))}>Cross
                        Rotations</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingKorraMove(moves.pushUp))}>Push
                        Ups</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingKorraMove(moves.sitUps))}>Sit
                        Ups</Button>
                </Col>
                <Col md={2} lg={1} className='mx-0 px-0'>
                    <Button className='characterButton' onClick={() => dispatch(settingKorraMove(moves.bicepCurl))}>Bicep
                        Curl</Button>
                    <Button className='characterButton' onClick={() => dispatch(settingKorraMove(moves.coolDown))}>Cool
                        Down</Button>
                </Col>
            </>
        )
    }
    return (
        <>
        </>
    )
}
