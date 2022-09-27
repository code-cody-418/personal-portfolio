import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../../ui/shared/utils/http-config";

const participationSlice = createSlice({
    name: "participation",
    initialState: null,
    reducers: {
        setParticipationByIds: (state, action) => {
            return action.payload
        }
    }
})

export const {setParticipationByIds} = participationSlice.actions

export default participationSlice.reducer

export const fetchParticipation = (profileId) => async dispatch => {
    const {data} = await httpConfig(`/apis/participation/${profileId}`)
    await dispatch(setParticipationByIds(data))
}
