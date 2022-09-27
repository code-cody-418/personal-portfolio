import { createSlice } from "@reduxjs/toolkit";

export const videoPlaySlice = createSlice({
    name: 'videoPlay',
    initialState: {
        setVideoPlay: false
    },
    reducers: {
        settingVideoPlay: (state, action) => {
            state.setVideoPlay = action.payload
        }
    }
})

export const { settingVideoPlay } = videoPlaySlice.actions

export default videoPlaySlice.reducer
