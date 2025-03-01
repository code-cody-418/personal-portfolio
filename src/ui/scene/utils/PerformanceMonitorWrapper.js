import { PerformanceMonitor } from "@react-three/drei";
import { useStore } from "../../utils/store";

export const PerformanceMonitorWrapper = () => {
  const curveSegments = useStore((state) => state.curveSegments);
  const setCurveSegments = useStore((state) => state.setCurveSegments);
  const setPerformanceGood = useStore((state) => state.setPerformanceGood);

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
        return [60, 1000]; // Basically anything under 60fps will cause ondecline to fire
      }}
    />
  );
};
