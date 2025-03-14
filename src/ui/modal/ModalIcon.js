import { useStore } from "../utils/store";

export const ModalIcon = () => {
  //Modal functions to show modal and to set state of what to display
  const handleShow = useStore((state) => state.showModal);
  const setSectionLocation = useStore((state) => state.setSectionLocation);
  const isDesktop = useStore((state) => state.isDesktop);

  //set the modal state when text is clicked
  const handleTextClick = () => {
    setSectionLocation("About Me");
    handleShow();
  };

  return (
    <>
      <span className="modal-open-icon border">
        <svg
          onClick={() => handleTextClick()}
          xmlns="http://www.w3.org/2000/svg"
          width={isDesktop === true ? 64 : 32}
          height={isDesktop === true ? 64 : 32}
          fill="white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </span>
    </>
  );
};
