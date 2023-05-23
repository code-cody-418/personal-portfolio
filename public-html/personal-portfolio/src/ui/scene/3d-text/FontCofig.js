import { Text3D } from "@react-three/drei";

export const FontConfig = ({ text, fontType,size }) => {
    return (
      <>
        <group>
          <Text3D font={fontType} size={size}
            height={0.4}
            curveSegments={32}
            bevelEnabled={true}
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}>
            {text}
            <meshNormalMaterial />
          </Text3D>
        </group>
      </>
    );
  };