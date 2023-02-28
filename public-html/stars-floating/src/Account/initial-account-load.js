/*
The initial loading of the account
*/
import { store } from "../Store/store.js"
import { getAllAccountItems } from "../Store/Account/accountItemsSlice"

export const initialAccountLoad = () => {
    store.dispatch(getAllAccountItems())
    return true
}