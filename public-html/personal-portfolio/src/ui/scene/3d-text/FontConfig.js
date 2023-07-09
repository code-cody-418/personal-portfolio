import { Text3D } from "@react-three/drei";

export const FontConfig = ({ text, fontType, size, texture }) => {
  return (
    <>
      <Text3D 
        font={fontType} 
        size={size}
        height={0.1}
        curveSegments={3} //careful making higher! Will cause lag!!
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