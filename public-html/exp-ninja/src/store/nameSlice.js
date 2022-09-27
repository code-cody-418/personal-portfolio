import {createSlice} from "@reduxjs/toolkit";
import {names} from "../ui/shared/interfaces/names";

export const nameSlice = createSlice({
    name: 'name',
    initialState: {
        setName: names.kakashi
    },
    reducers: {
        settingName: (state, action) => {
            state.setName = action.payload
        }
    }
})

export const {settingName} = nameSlice.actions

export default nameSlice.reducer
