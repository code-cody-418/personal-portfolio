import { create } from "zustand";

export const useStore = create((set) => ({
  //set the modal to turn on and off
  modalState: false,
  showModal: () => set(() => ({ modalState: true })),
  closeModal: () => set(() => ({ modalState: false })),

  //set allModalInfo
  allModalInfo: null,
  setAllModalInfo: (allModalInfo) =>
    set(() => ({ allModalInfo: allModalInfo })),

  //set allListItems
  allListItems: null,
  setAllListItems: (allListItems) =>
    set(() => ({ allListItems: allListItems })),

  //setCurrentItemIndex
  currentItemIndex: null,
  setCurrentItemIndex: (currentItemIndex) =>
    set(() => ({ currentItemIndex: currentItemIndex })),

  //set manual controls
  manualControlState: false,
  enableManualControls: () => set(() => ({ manualControlState: true })),
  disableManualControls: () => set(() => ({ manualControlState: false })),

  //set manual control direction
  manualControlDirection: 5,
  setManualControlDirectionForward: () =>
    set(() => ({ manualControlDirection: 5 })),
  setManualControlDirectionBackward: () =>
    set(() => ({ manualControlDirection: -5 })),

  // set analytics clicks
  sessionClicks: 0,
  setSessionClicks: (watchClicks) =>
    set(() => ({sessionClicks: watchClicks})),

  // set analytics time
  sessionTime: 0,
  setSessionTime: (secondsPassed) => 
    set(() => ({sessionTime: secondsPassed}))
}));
