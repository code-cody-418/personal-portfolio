import { Text3D } from "@react-three/drei";

export const FontConfig = ({ text, fontType, size, texture }) => {
  return (
    <>
      <Text3D 
        font={fontType} 
        size={size}
        height={0.1}
        curveSegments={32}
        bevelEnabled={true}
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}>
        {text}

        <meshMatcapMaterial matcap={texture} />

      </Text3D>
    </>
  );
};