import { createSlice } from "@reduxjs/toolkit";
import { moves } from "../../ui/shared/interfaces/moves"

export const narutoSlice = createSlice({
    name: 'narutoMove',
    initialState: {
        setMove: moves.idle
    },
    reducers: {
        settingNarutoMove: (state, action) => {
            state.setMove = action.payload
        }
    }
})

export const { settingNarutoMove } = narutoSlice.actions

export default narutoSlice.reducer
