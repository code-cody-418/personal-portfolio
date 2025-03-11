import { Text3D } from "@react-three/drei";
import droid_sansReg from "three/examples/fonts/droid/droid_sans_regular.typeface.json";
import { useStore } from "../../utils/store";

export const FontConfig = ({ text, size, texture, font }) => {
  const curveSegments = useStore((state) => state.curveSegments);

  return (
    <>
      <Text3D
        font={font ?? droid_sansReg}
        size={size}
        height={0.1}
        curveSegments={curveSegments} //change this value to lower triangles
      >
        {text}
        <meshMatcapMaterial matcap={texture} />
      </Text3D>
    </>
  );
};
