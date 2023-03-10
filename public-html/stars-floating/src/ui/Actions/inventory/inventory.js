export const showInventory = () => {
    const inventoryElement = document.getElementById("inventory")
    
    inventoryElement.style.display = "grid"
    return true
}

export const hideInventory = () => {
    const inventoryElement = document.getElementById("inventory")
    
    inventoryElement.style.display = "none"
    return true
}