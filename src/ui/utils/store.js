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

  // set font curveSegments
  curveSegments: 5,
  setCurveSegments: (curveSegments) =>
    set(() => ({
      curveSegments: curveSegments,
    })),

  // set hide 3d experience objects
  performanceGood: true,
  setPerformanceGood: (performanceGood) =>
    set(() => ({
      performanceGood: performanceGood,
    })),

  // set analytics clicks
  sessionClicks: 0,
  setSessionClicks: (watchClicks) =>
    set(() => ({ sessionClicks: watchClicks })),

  // set analytics time
  sessionTime: 0,
  setSessionTime: (secondsPassed) =>
    set(() => ({ sessionTime: secondsPassed })),

  // used to keep track of the card header height to adjust to highest header
  tallestCardHeaderHeight: 0,
  setTallestCardHeaderHeight: (cardHeaderHeight) =>
    set(() => {
      return { tallestCardHeaderHeight: cardHeaderHeight };
    }),
}));
