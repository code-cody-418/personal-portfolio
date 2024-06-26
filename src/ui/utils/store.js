import { create } from 'zustand'

export const useModalStore = create((set) => ({
    //set the modal to turn on and off
    modalState: false,
    showModal: () => set(() => ({ modalState: true })),
    closeModal: () => set(() => ({ modalState: false })),

    //set allModalInfo
    allModalInfo: null,
    setAllModalInfo: (allModalInfo) => set(() => ({ allModalInfo: allModalInfo})),

    //set allListItems
    allListItems: null,
    setAllListItems: (allListItems) => set(() => ({allListItems: allListItems})),

    //setCurrentItemIndex
    currentItemIndex: null,
    setCurrentItemIndex: (currentItemIndex) => set(() => ({currentItemIndex: currentItemIndex})),

    //set manual controls
    manualControlState: false,
    enableManualControls: () => set(() => ({manualControlState: true})),
    disableManualControls: () => set(() => ({manualControlState: false})),

    //set manual control direction
    manualControlDirection: 5,
    setManualControlDirectionForward: () => set( () => ({manualControlDirection: 5})),
    setManualControlDirectionBackward: () => set( () => ({manualControlDirection: -5}))
}))
