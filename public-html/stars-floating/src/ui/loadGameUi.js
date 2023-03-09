/*
Loads all Game ui elements 
*/
import '../ui/ui.css'
import { initQuickBarListeners, quickBarLoad } from "./Actions/quick-bar/quick-bar"
import {initSettingsListener} from "./Actions/settings-bar.js"

export const loadGameUi = () => {
    quickBarLoad()
    initQuickBarListeners()
    initSettingsListener()
    return true
} 