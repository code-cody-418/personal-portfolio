import { hideInventory, showInventory } from "./inventory/inventory.js"

export const initSettingsListener = () => {
    const charSettingsElement = document.getElementById("settingOne")
    const craftingSettingsElement = document.getElementById("settingTwo")
    const bagsSettingsElement = document.getElementById("settingThree")
    const settingsElement = document.getElementById("settingFour")
    const inventoryElement = document.getElementById("inventory")

    charSettingsElement.addEventListener("click", () => {
        console.log("Character Screen Setting Clicked")
    })

    craftingSettingsElement.addEventListener("click", () => {
        console.log("Crafting Screen Setting Clicked")
    })

    bagsSettingsElement.addEventListener("click", () => {
        showInventory()
    })

    settingsElement.addEventListener("click", () => {
        console.log("Setting screen setting clicked")
    })

    inventoryElement.addEventListener("click", () => {
        hideInventory()
    })
}