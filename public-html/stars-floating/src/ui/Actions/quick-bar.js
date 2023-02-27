import { getAllAccountItems, stateAllAccountItems } from "../../Store/Account/accountItemsSlice"
import { store } from "../../Store/store"

export const quickBarLoad = () => {
    const actionOne = document.getElementById("actionOne")

    const state = store.getState()
    console.log(state)

    actionOne.addEventListener("click", () => {
        // store.dispatch(getAllAccountItems())
        // const state = store.getState()
        // let allItems = stateAllAccountItems(state)
        console.log(state)
    })
    return true
}