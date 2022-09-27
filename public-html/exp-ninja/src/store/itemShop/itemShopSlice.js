import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../../ui/shared/utils/http-config";
import profileSlice from "../profileSlice";

const itemShopSlice = createSlice({
    name: "itemShop",
    initialState: null,
    reducers: {
        getItemShopByItemShopProfileId: (state, action) => {
            return action.payload
        }
    }
})

export const {getItemShopByItemShopProfileId} = itemShopSlice.actions

export default itemShopSlice.reducer

export const fetchItemShopByProfileId = (profileId) => async dispatch => {
    const {data} = await httpConfig(`apis/itemShop/${profileId}`)
    dispatch(getItemShopByItemShopProfileId(data))
}
