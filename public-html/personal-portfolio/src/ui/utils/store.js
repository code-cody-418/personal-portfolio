import { create } from 'zustand'

export const useModalStore = create((set) => ({
    modalState: false,
    showModal: () => set(() => ({modalState: true})),
    closeModal: () => set(() => ({modalState: false})),
    modalTitle: "default",
    setModalTitle: (modalTitle) => set(() => ({ modalTitle: modalTitle }))
}))
