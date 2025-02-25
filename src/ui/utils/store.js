import { create } from "zustand";

export const useStore = create((set) => ({
  //set the modal to turn on and off
  modalState: false,
  showModal: () => set(() => ({ modalState: true })),
  closeModal: () => set(() => ({ modalState: false })),

  // set location
  sectionLocation: null,
  setSectionLocation: (sectionLocation) =>
    set(() => ({ sectionLocation: sectionLocation })),

  //set height of camera
  cameraHeight: 0,
  setCameraHeight: (cameraHeight) =>
    set(() => ({ cameraHeight: cameraHeight })),

  //set rotation of camera
  cameraRotation: 0,
  setCameraRotation: (cameraRotation) =>
    set(() => ({
      cameraRotation: cameraRotation,
    })),

  //set manual controls
  manualControlState: false,
  enableManualControls: () => set(() => ({ manualControlState: true })),
  disableManualControls: () => set(() => ({ manualControlState: false })),

  // set analytics clicks
  sessionClicks: 0,
  setSessionClicks: (watchClicks) =>
    set(() => ({ sessionClicks: watchClicks })),

  // set analytics time
  sessionTime: 0,
  setSessionTime: (secondsPassed) =>
    set(() => ({ sessionTime: secondsPassed })),
}));
