import { store } from "../../../Store/store"
import { getAllAccountItems, stateAllAccountItems } from "../../../Store/Account/accountItemsSlice"

export const quickBarLoad = () => {
    const actionOne = document.getElementById("actionOne")
    const actions = document.getElementsByClassName("action")
    let accountItems = []
    console.log(actions[1])

    const state = store.getState()
    // console.log(state.accountItems.allAccountItems)

    accountItems = state.accountItems.allAccountItems
    console.log(accountItems)

    accountItems.forEach( (item, i) => {
        const itemId = item.account_item_item_id
        console.log(itemId)
        actions[i].style.backgroundImage = `url('./ui/Items/${itemId}.png'), url("./ui/Frames/Frame_Stone_01.png")`
    })

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