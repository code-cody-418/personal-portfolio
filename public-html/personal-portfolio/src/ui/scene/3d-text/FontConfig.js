import { Text3D } from "@react-three/drei";

export const FontConfig = ({ text, fontType, size, color }) => {
  return (
    <>
      <group>
        <Text3D font={fontType} size={size}
          height={0.1}
          curveSegments={32}
          bevelEnabled={true}
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}>
          {text}
          {
              color ? <meshBasicMaterial color={color}/> : <meshNormalMaterial /> // if color is passed uses the color with basic material else it uses no color with a normal material
            }

            
        </Text3D>
      </group>
    </>
  );
};