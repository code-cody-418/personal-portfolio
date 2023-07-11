import { Text3D } from "@react-three/drei";
import droid_sansReg from "three/examples/fonts/droid/droid_sans_regular.typeface.json"

export const FontConfig = ({ text, fontType, size, texture }) => {
  let font = null
  if (fontType === "title") {
    font = "/Philosopher_Regular.json"
  } else {
    font = droid_sansReg
  }
  return (
    <>
      <Text3D
        font={font}
        size={size}
        height={0.1}
        curveSegments={4} //careful making higher! Will cause lag!!
        bevelEnabled={true}
        bevelThickness={0.1}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}>
        {text}
        <meshMatcapMaterial matcap={texture} />
      </Text3D>
    </>
  );
};