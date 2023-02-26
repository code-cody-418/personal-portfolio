/*
Loads all Game ui elements 
*/
import '../ui/ui.css'
import { quickBarLoad } from "./Actions/quick-bar"

export const loadGameUi = () => {
    quickBarLoad()
    return true
} 