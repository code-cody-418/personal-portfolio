import { Button } from "react-bootstrap";
import { useModalStore } from "../../utils/store";

export const ManualCameraControls = () => {
  const enableManualControls = useModalStore(
    (state) => state.enableManualControls
  );

  const disableManualControls = useModalStore(
    (state) => state.disableManualControls
  );

  const setManualControlDirectionForward = useModalStore(
    (state) => state.setManualControlDirectionForward
  );

  const setManualControlDirectionBackward = useModalStore(
    (state) => state.setManualControlDirectionBackward
  );

  const handleBackwards = () => {
    enableManualControls()
    setManualControlDirectionBackward()
  }

  const handleForwards = () => {
    enableManualControls()
    setManualControlDirectionForward()
  }

  return (
    <>
      <div className="manualControlsPosition">
        <Button
          variant="primary"
          className="manualControlsButton"
          onMouseEnter={handleBackwards}
          onMouseLeave={disableManualControls}
        >
          backward
        </Button>

        <Button
          variant="secondary"
          className="manualControlsButton"
          onMouseEnter={handleForwards}
          onMouseLeave={disableManualControls}
        >
          forward
        </Button>
      </div>
    </>
  );
};
