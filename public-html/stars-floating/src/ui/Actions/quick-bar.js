import { fetchTest, getAccountCount } from "../../Store/Account/accountItemsSlice"
import { store } from "../../Store/store"

export const quickBarLoad = () => {
    const quickBar = document.getElementById("quickBar")

    quickBar.addEventListener("click", () => {
        store.dispatch(fetchTest())
        const state = store.getState()
        let count = getAccountCount(state)
        console.log(count)
    })
    return true
}