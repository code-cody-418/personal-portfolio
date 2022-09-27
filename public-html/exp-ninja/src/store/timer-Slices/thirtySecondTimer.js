import { createSlice} from "@reduxjs/toolkit";

export const thirtySecondTimerSlice = createSlice( {
    name: 'thirtySecondTimer',
    initialState: {
        setThirtySecondsTimer: 30
    },
    reducers: {
        settingThirtySecondTimer: (state, action) => {
            state.setThirtySecondsTimer = action.payload
        }
    }
})

export const { settingThirtySecondTimer } = thirtySecondTimerSlice.actions

export default thirtySecondTimerSlice.reducer
