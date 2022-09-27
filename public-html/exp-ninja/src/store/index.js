import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profile from "./profileSlice"
import auth from "./authSlice"
import name from './nameSlice'
import autoWorkout from './autoWorkoutSlice'
import videoPlay from './videoPlaySlice'
import kakashiMove from "./trainer-Slices/kakashiSlice";
import korraMove from "./trainer-Slices/korraSlice";
import gokuMove from "./trainer-Slices/gokuSlice"
import narutoMove from "./trainer-Slices/narutoSlice"
import thirtySecondTimer from "./timer-Slices/thirtySecondTimer"
import videoSecondsTimer from "./timer-Slices/vdeoSecondsTimer"
import videoFinishedModal from "./VideoFinishedModalSlice";
import itemShop from "./itemShop/itemShopSlice"
import participation from "./eventParticipationSlices/participationSlice"

/*
This is where redux reducers are brought into the store
 */
const reducer = combineReducers({
    profile,
    auth,
    name,
    autoWorkout,
    videoPlay,
    kakashiMove,
    korraMove,
    gokuMove,
    narutoMove,
    thirtySecondTimer,
    videoSecondsTimer,
    videoFinishedModal,
    itemShop,
    participation,

})

export const store = configureStore({reducer})
