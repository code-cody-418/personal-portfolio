/*
Loads all Game ui elements 
*/
import '../ui/ui.css'
import { initialLoadActionListeners, quickBarLoad } from "./Actions/quick-bar/quick-bar"

export const loadGameUi = () => {
    quickBarLoad()
    initialLoadActionListeners()
    return true
} 