import { Perf } from "r3f-perf";
import { useStore } from "../../utils/store";

export const PerfWrapper = () => {
  const perfStatus = useStore((state) => state.perfStatus);
  return (
    <>{perfStatus === "enabled" ? <Perf position="bottom-left" /> : null}</>
  );
};
