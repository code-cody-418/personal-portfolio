import { create } from 'zustand'

export const useModalStore = create((set) => ({
    //set the modal to turn on and off
    modalState: false,
    showModal: () => set(() => ({ modalState: true })),
    closeModal: () => set(() => ({ modalState: false })),
    
    //set the modal title
    modalTitle: null,
    setModalTitle: (modalTitle) => set(() => ({ modalTitle: modalTitle })),
    
    //set modal subtitle
    modalSubTitle: null,
    setModalSubTitle: (modalSubTitle) => set(() => ({ modalSubTitle: modalSubTitle })),
    
    //set modal description
    modalDescription: null,
    setModalDescription: (modalDescription) => set(() => ({ modalDescription: modalDescription })),

    //set img
    modalImg: null,
    setModalImg: (modalImg) => set(() => ({ modalImg: modalImg })),
}))
