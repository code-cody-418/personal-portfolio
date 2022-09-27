import {createSlice} from "@reduxjs/toolkit";

export const videoFinishedModalSlice = createSlice({
    name: 'videoFinishedModal',
    initialState: {
        setVideoFinishedModal: false
    },
    reducers: {
        settingVideoFinishedModal: (state, action) => {
            state.setVideoFinishedModal = action.payload
        }
    }
})

export const {settingVideoFinishedModal} = videoFinishedModalSlice.actions

export default videoFinishedModalSlice.reducer
