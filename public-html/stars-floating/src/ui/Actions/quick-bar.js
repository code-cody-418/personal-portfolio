import { getAllAccountItems, stateAllAccountItems } from "../../Store/Account/accountItemsSlice"
import { store } from "../../Store/store"

export const quickBarLoad = () => {
    const quickBar = document.getElementById("quickBar")

    quickBar.addEventListener("click", () => {
        // store.dispatch(getAllAccountItems())
        // const state = store.getState()
        // let allItems = stateAllAccountItems(state)
        // console.log(allItems)
    })
    return true
}