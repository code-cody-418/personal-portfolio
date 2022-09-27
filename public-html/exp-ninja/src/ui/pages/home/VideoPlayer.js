import React, {useEffect, useState} from "react";
import animeMontage from "../../../videos/Anime Training Montage AMV.mp4";
import {settingVideoPlay} from "../../../store/videoPlaySlice";
import {names} from "../../shared/interfaces/names";
import {settingKakashiMove} from "../../../store/trainer-Slices/kakashiSlice";
import {gokuMoves, korraMoves, moves, narutoMoves} from "../../shared/interfaces/moves";
import {settingGokuMove} from "../../../store/trainer-Slices/gokuSlice";
import {settingKorraMove} from "../../../store/trainer-Slices/korraSlice";
import {settingNarutoMove} from "../../../store/trainer-Slices/narutoSlice";
import ReactPlayer from "react-player";
import {useDispatch, useSelector} from "react-redux";
import {settingThirtySecondTimer} from "../../../store/timer-Slices/thirtySecondTimer";
import {settingVideoFinishedModal} from "../../../store/VideoFinishedModalSlice";
import {kakashiMoves} from "../../shared/interfaces/moves";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {httpConfig} from "../../shared/utils/http-config";
import levelUpAudio from "../../../sounds/exp-up-sound.wav"
import thirtySecondAudio from "../../../sounds/thirty-second-sound.wav"
import coinAudio from "../../../sounds/coin-sound.wav"

export const VideoPlayer = ({profile}) => {

    const dispatch = useDispatch();

    const name = useSelector((state) => state.name.setName)
    const videoPlay = useSelector((state) => state.videoPlay.setVideoPlay)
    const autoWorkout = useSelector(state => state.autoWorkout.setAutoWorkout)


//Functionality for 30 second workout timer
    const [thirtySeconds, setThirtySeconds] = useState(30)

    //index's to rotate through trainer moves
    const [kakashiIndex, setKakashiIndex] = useState(0)
    const [gokuIndex, setGokuIndex] = useState(0)
    const [korraIndex, setKorraIndex] = useState(0)
    const [narutoIndex, setNarutoIndex] = useState(0)

    //sets the first move of the workout and when video is paused sets move to idle
    useEffect(() => {
        if (videoPlay === true && autoWorkout === true) {
            if (name === names.kakashi) {
                setKakashiIndex(kakashiIndex + 1)
                dispatch(settingKakashiMove(kakashiMoves[kakashiIndex]))
            } else if (name === names.goku) {
                setGokuIndex(gokuIndex + 1)
                dispatch(settingGokuMove(gokuMoves[gokuIndex]))
            } else if (name === names.korra) {
                setKorraIndex(korraIndex + 1)
                dispatch(settingKorraMove(korraMoves[korraIndex]))
            } else if (name === names.naruto) {
                setNarutoIndex(narutoIndex + 1)
                dispatch(settingNarutoMove(narutoMoves[narutoIndex]))
            }
        } else if (videoPlay === false) {
            if (name === names.kakashi) {
                dispatch(settingKakashiMove(moves.idle))
            } else if (name === names.goku) {
                dispatch(settingGokuMove(moves.idle))
            } else if (name === names.korra) {
                dispatch(settingKorraMove(moves.idle))
            } else if (name === names.naruto) {
                dispatch(settingNarutoMove(moves.idle))
            }
        }
    }, [videoPlay])

    //This function is very important. It sets a thirty second timer that resets when it reaches -1
    //When the timer resets it adds exp and levels up the profile. In addition it increments an index
    //for an array of trainer moves. It also deals with sounds.
    useEffect(() => {
        if (thirtySeconds === -1) {
            setThirtySeconds(30)
            setPlayingThirtySecondAudio(true)
            expUp()
            levelUp()
            setResetAudio(false)
            if (videoPlay === true && autoWorkout === true) {
                if (name === names.kakashi) {
                    if (kakashiIndex === 10) {
                        setKakashiIndex(3) //this restarts the array after stretches
                    } else if (kakashiIndex !== 10) {
                        setKakashiIndex(kakashiIndex + 1) //this increments the next move in the array
                        dispatch(settingKakashiMove(kakashiMoves[kakashiIndex]))
                    }
                } else if (name === names.goku) {
                    if (gokuIndex === 11) {
                        setGokuIndex(2)
                    } else if (gokuIndex !== 11) {
                        setGokuIndex(gokuIndex + 1)
                        dispatch(settingGokuMove(gokuMoves[gokuIndex]))
                    }
                } else if (name === names.korra) {
                    if (korraIndex === 9) {
                        setKorraIndex(2)
                    } else if (korraIndex !== 9) {
                        setKorraIndex(korraIndex + 1)
                        dispatch(settingKorraMove(korraMoves[korraIndex]))
                    }
                } else if (name === names.naruto) {
                    if (narutoIndex === 11) {
                        setNarutoIndex(2)
                    } else if (narutoIndex !== 11) {
                        setNarutoIndex(narutoIndex + 1)
                        dispatch(settingNarutoMove(narutoMoves[narutoIndex]))
                    }
                }
            }
        } else if (videoPlay === true) {
            const intervalId = setInterval(() => {
                setThirtySeconds(thirtySeconds => thirtySeconds - 1)
                dispatch(settingThirtySecondTimer(thirtySeconds))
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [videoPlay, thirtySeconds])


//sets the state of the videoFinshedModal to show for when the video ends
    const handleShow = () => {
        coinUp()
        dispatch(settingVideoFinishedModal(true))
    };

//function to call api that adds a Exp to profile
    const expUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/profile/expUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            // console.log(reply);
                            dispatch(fetchProfileByProfileId(profile.profileId));
                        }
                        // console.log(reply);
                    }
                );
        }
    }

//function to call api that adds a level to profile
    const levelUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            if ((profile.profileExp + '').indexOf('00', 1) > -1 === true) {
                httpConfig.put(`/apis/profile/levelUp/${profile.profileId}`, profile)
                    .then(reply => {
                            if (reply.status === 200) {
                                // console.log(reply);
                                dispatch(fetchProfileByProfileId(profile.profileId));
                                setPlayingLevelUpAudio(true)
                            }
                            // console.log(reply);
                        }
                    );
            }
        }
    }

    const coinUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/profile/coinUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            // console.log(reply);
                            dispatch(fetchProfileByProfileId(profile.profileId));
                            setPlayingCoinAudio(true)
                        }
                        // console.log(reply);
                    }
                );
        }
    }

    //level up sound
    const [audioLevelUp] = useState(new Audio(levelUpAudio))
    const [playingLevelUpAudio, setPlayingLevelUpAudio] = useState(false)


    useEffect(() => {
        playingLevelUpAudio ? audioLevelUp.play() : audioLevelUp.pause()
    }, [playingLevelUpAudio])

    // console.log("level up audio", playingLevelUpAudio)

    //thirty second sound
    const [audioThirtySecond] = useState(new Audio(thirtySecondAudio))
    const [playingThirtySecondAudio, setPlayingThirtySecondAudio] = useState(false)

    useEffect(() => {
        if (playingThirtySecondAudio === true) {
            return audioThirtySecond.play()
        }
        handleReset()
    }, [playingThirtySecondAudio])

    // console.log("thirty audio", playingThirtySecondAudio)

    //coin sound
    const [audioCoin] = useState(new Audio(coinAudio))
    const [playingCoinAudio, setPlayingCoinAudio] = useState(false)

    useEffect(() => {
        playingCoinAudio ? audioCoin.play() : audioCoin.pause()
    }, [playingCoinAudio])

    //reset all audio
    const [resetAudio, setResetAudio] = useState(false)

    useEffect(() => {
        setPlayingLevelUpAudio(false)
        setPlayingThirtySecondAudio(false)
        setPlayingCoinAudio(false)
    }, [resetAudio])

    const handleReset = () => {
        setResetAudio(true)
    }

    // console.log("reset audio", resetAudio)
    // array of youtube videos
    const youTubePlaylists = [
        'https://www.youtube.com/embed/3ZHwkpyvDqE',
        'https://www.youtube.com/embed/4zHK8pRl78o',
        'https://www.youtube.com/embed/dY09rc_8-Rc'
    ]

    return (
        <>
            <ReactPlayer url={youTubePlaylists}

                         width={'100%'}
                         height={'400px'}
                         playing={videoPlay}
                         onEnded={() => {
                             handleShow()
                             dispatch(settingVideoPlay(false))
                         }}
                         onPlay={() => {
                             dispatch(settingVideoPlay(true))
                         }}
                         onPause={() => {
                             dispatch(settingVideoPlay(false))
                         }}
                // config={{
                //     youtube: {
                //         playerVars: { showinfo: 1,
                //             origin: 'http://143.244.183.237/',
                //             // origin: 'http://localhost:3000/',
                //             enablejsapi: 1
                //         }
                //     }
                // }}
                //extra callbacks for videoplayer
                         controls={true}
                // muted={true}
                // onProgress={}
            />
        </>
    )
}
