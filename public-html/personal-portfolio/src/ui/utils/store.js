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
}))
