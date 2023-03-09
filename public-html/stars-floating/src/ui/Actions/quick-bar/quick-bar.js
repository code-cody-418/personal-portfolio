import { store } from "../../../Store/store"
import { getAllAccountItems, stateAllAccountItems } from "../../../Store/Account/accountItemsSlice"

export const quickBarLoad = () => {
    const actionOne = document.getElementById("actionOne")
    const actions = document.getElementsByClassName("action")
    const bagItems = document.getElementsByClassName("inventoryItem")
    let accountItems = []
    
    const state = store.getState()

    accountItems = state.accountItems.allAccountItems

    accountItems.forEach( item => {
        const itemId = item.account_item_item_id
        const itemQuickBarNum = item.account_item_quickbar
        const itemBagNum = item.account_item_bag 
        // console.log(item.account_item_bag)
        bagItems[itemBagNum].style.backgroundImage = `url('./ui/Items/${itemId}.png'), url("./ui/Frames/Frame_Stone_01.png")`
        actions[itemQuickBarNum].style.backgroundImage = `url('./ui/Items/${itemId}.png'), url("./ui/Frames/Frame_Stone_01.png")`
    })

    return true
}

export const initQuickBarListeners = () => {
    const actionOne = document.getElementById("actionOne")

    actionOne.addEventListener("click", () => {
        const state = store.getState()
        console.log(state)
    })
    return true
}

store.subscribe(quickBarLoad) //listens for changes to the store and fires quickBarLoad after change