import React from "react";
import { useTexture } from "@react-three/drei";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";

export const SkillsIcons = ({ iconState }) => {
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 10;
  responsiveData.desktopPositionZ = 5;

  responsiveData.mobileSize = 6;
  responsiveData.mobilePositionZ = 5;

  const { size, positionZ } = useResponsive(responsiveData);

  //loads textures for the icons
  const reactIcon = useTexture("/react-icon.png");
  // const expressIcon = useTexture("/express-icon.png");
  // const reduxIcon = useTexture("/redux-icon.png");
  // const dockerIcon = useTexture("/docker-icon.png");
  // const bootstrapIcon = useTexture("/bootstrap-icon.png");
  // const githubIcon = useTexture("/github-icon.png");

  // const [modelIcon, setModelIcon] = useState(false)
  // const [currentIcon, setCurrentIcon] = useState(null);
  //determines which icon is showing
  // useEffect(() => {
  //   console.log("use effect ran", currentIcon)
  //   if (iconState === "reactActive") {
  //     // setModelIcon(true)
  //     setCurrentIcon(reactIcon)
  //   } else if (iconState === "expressActive") {
  //     setCurrentIcon(expressIcon);
  //   } else if (iconState === "reduxActive") {
  //     setCurrentIcon(reduxIcon);
  //   } else if (iconState === "dockerActive") {
  //     setCurrentIcon(dockerIcon);
  //   } else if (iconState === "bootstrapActive") {
  //     setCurrentIcon(bootstrapIcon);
  //   } else if (iconState === "githubActive") {
  //     setCurrentIcon(githubIcon);
  //   }
  // }, [
  //   iconState,
  //   bootstrapIcon,
  //   githubIcon,
  //   dockerIcon,
  //   reduxIcon,
  //   expressIcon,
  //   reactIcon
  // ]);

  return (
    <>
      <group
        position={[20, 0, positionZ]}
        rotation={[0, -1.570796, 0]}
        scale={size}
      >
        {/* <ReactIcon /> */}
        <mesh>
          <planeGeometry />
          <meshStandardMaterial
            transparent={true}
            // opacity={0.5}
            map={reactIcon} 
          />
        </mesh>
      </group>
    </>
  );
};
