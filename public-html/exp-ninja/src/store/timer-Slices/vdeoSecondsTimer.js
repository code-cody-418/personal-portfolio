import { createSlice} from "@reduxjs/toolkit";

export const videoSecondsTimerSlice = createSlice( {
    name: 'videoSecondsTimer',
    initialState: {
        setVideoSecondsTimer: 0
    },
    reducers: {
        settingVideoSecondsTimer: (state, action) => {
            state.setVideoSecondsTimer = action.payload
        }
    }
})

export const { settingVideoSecondsTimer } = videoSecondsTimerSlice.actions

export default videoSecondsTimerSlice.reducer
