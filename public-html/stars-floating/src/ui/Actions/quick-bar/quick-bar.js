import { store } from "../../../Store/store"
import { getAllAccountItems, stateAllAccountItems } from "../../../Store/Account/accountItemsSlice"

export const quickBarLoad = () => {
    const actionOne = document.getElementById("actionOne")

    const state = store.getState()
    console.log(state.accountItems.allAccountItems)

    actionOne.style.backgroundImage = `url('./ui/Potions/Health_Potion_01.png'), url("./ui/Frames/Frame_Stone_01.png")`
    return true
}

export const initialLoadActionListeners = () => {
    const actionOne = document.getElementById("actionOne")

    actionOne.addEventListener("click", () => {
        const state = store.getState()
        console.log(state)
    })
    return true
}

store.subscribe(quickBarLoad) //listens for changes to the store and fires quickBarLoad after change