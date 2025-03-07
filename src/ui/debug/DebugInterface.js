import { useStore } from "../utils/store";

export const DebugInterface = () => {
  const setOrbitControlsStatus = useStore(
    (state) => state.setOrbitControlsStatus
  );

  const setListPlanesStatus = useStore((state) => state.setListPlanesStatus);

  const handleClick = ({ localKey, setter }) => {
    let localValue = localStorage.getItem(localKey);
    if (localValue === "enabled") {
      localValue = "disabled";
    } else if (localValue === "disabled") {
      localValue = "enabled";
    } else {
      localValue = "enabled";
    }
    localStorage.setItem(localKey, localValue);
    setter(localValue);
  };

  const getStatus = ({ localKey }) => {
    let localValue = localStorage.getItem(localKey);
    let status;
    if (localValue === "enabled") {
      status = true;
    } else if (localValue === "disabled") {
      status = false;
    } else {
      status = false;
    }
    return status;
  };
  return (
    <>
      <div className="debug-interface-container">
        <div className="debug-interface">
          <h3>Debug Interface</h3>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OrbitControls</td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={getStatus({
                        localKey: "orbitControls",
                      })}
                      onClick={() =>
                        handleClick({
                          localKey: "orbitControls",
                          setter: setOrbitControlsStatus,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>List Planes</td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={getStatus({
                        localKey: "listPlanes",
                      })}
                      onClick={() =>
                        handleClick({
                          localKey: "listPlanes",
                          setter: setListPlanesStatus,
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
