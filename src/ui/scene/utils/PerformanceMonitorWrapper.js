import { PerformanceMonitor } from "@react-three/drei";
import { useStore } from "../../utils/store";
import { useEffect } from "react";

/*
The Performance Monitor watches for problems with performance 
and will begin to make changes to the scene. 
For example, if fps is below a certain threshold the scene will be changed.
*/
export const PerformanceMonitorWrapper = () => {
  const curveSegments = useStore((state) => state.curveSegments);
  const setCurveSegments = useStore((state) => state.setCurveSegments);
  const setPerformanceGood = useStore((state) => state.setPerformanceGood);
  const perfMonitorStatus = useStore((state) => state.perfMonitorStatus);

  useEffect(() => {
    if (perfMonitorStatus === "enabled") {
      setPerformanceGood(false);
    }
  }, [perfMonitorStatus, setPerformanceGood]);

  return (
    <PerformanceMonitor
      onDecline={() => {
        if (curveSegments > 1) {
          setCurveSegments(curveSegments - 2);
        }
      }}
      flipflops={3}
      onFallback={() => {
        setPerformanceGood(false);
      }}
      bounds={() => {
        return [30, 1000]; // Basically anything under 30fps will cause ondecline to fire
      }}
    />
  );
};
