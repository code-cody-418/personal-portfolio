import { Text3D } from "@react-three/drei";
import droid_sansReg from "three/examples/fonts/droid/droid_sans_regular.typeface.json";

export const FontConfig = ({
  text,
  fontType,
  size,
  texture,
  thickness,
  segments,
}) => {
  let font = null;
  if (fontType === "title") {
    font = "/Philosopher_Regular.json";
  } else {
    font = droid_sansReg;
  }

  let bevelThickness = thickness ?? 0.1;
  let curveSegments = segments ?? 6;
  return (
    <>
      <Text3D
        font={font}
        size={size}
        height={0.1}
        curveSegments={curveSegments} //change this value to lower triangles
        bevelEnabled={true}
        bevelThickness={bevelThickness}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={1} //change this value to lower triangles
      >
        {text}
        <meshMatcapMaterial matcap={texture} />
      </Text3D>
    </>
  );
};
