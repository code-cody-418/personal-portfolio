import { getAllAccountItems, stateAllAccountItems } from "../Store/Account/accountItemsSlice"
import { store } from "../Store/store.js"

export const loadAccount = () => {
    store.dispatch(getAllAccountItems())
}