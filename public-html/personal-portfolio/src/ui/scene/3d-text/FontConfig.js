import { Text3D } from "@react-three/drei";
import helvetiketBold from "three/examples/fonts/helvetiker_bold.typeface.json"
import optimerBold from "three/examples/fonts/optimer_bold.typeface.json"
import gentilisBold from "three/examples/fonts/gentilis_bold.typeface.json"
import droid_sansReg from "three/examples/fonts/droid/droid_sans_regular.typeface.json"
import droid_sansBold from "three/examples/fonts/droid/droid_sans_bold.typeface.json"

// I like the optimer bold on the title.
// dont like helveriket on title

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