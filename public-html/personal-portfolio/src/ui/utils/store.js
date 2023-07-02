import { create } from 'zustand'

export const useModalStore = create((set) => ({
    modalState: false,
    showModal: () => set(() => ({modalState: true})),
    closeModal: () => set(() => ({modalState: false})),
    modalTitle: "",
    setModalTitle: (modalTitle) => set(() => ({ modalTitle: modalTitle })),
    modalDescription: "",
    setModalDescription: (modalDescription) => set(() => ({ modalDescription: modalDescription})),
    modalSubTitle: "",
    setModalSubTitle: (modalSubTitle) => set(() => ({ modalSubTitle: modalSubTitle}))
}))
