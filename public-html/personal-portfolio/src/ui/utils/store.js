import { create } from 'zustand'

export const useModalStore = create((set) => ({
    //set the modal to turn on and off
    modalState: false,
    showModal: () => set(() => ({ modalState: true })),
    closeModal: () => set(() => ({ modalState: false })),

    //set allModalInfo
    allModalInfo: null,
    setAllModalInfo: (allModalInfo) => set(() => ({ allModalInfo: allModalInfo}))
}))
