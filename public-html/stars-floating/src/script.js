import './style.css'
import './ui/ui.css'

import Experience from './Experience/Experience.js'

const experience = new Experience(document.querySelector('canvas.webgl'))


// import "./style.css";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "lil-gui";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// /**
//  * Base
//  */
// //debug
// const gui = new dat.GUI();

// // Canvas
// const canvas = document.querySelector("canvas.webgl");

// // Scene
// const scene = new THREE.Scene();

// /**
//  * Models
//  */
// const gltfLoader = new GLTFLoader();

// let mixer = null;

// gltfLoader.load("/models/dragon/Dragon.gltf", (gltf) => {
//   mixer = new THREE.AnimationMixer(gltf.scene);
//   const action = mixer.clipAction(gltf.animations[0]);
//   action.play();

//   scene.add(gltf.scene);
// });

// /**
//  * Floor
//  */
// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(100, 100),
//   new THREE.MeshStandardMaterial({
//     color: "#4f2700",
//     metalness: 0,
//     roughness: 1,
//   })
// );
// floor.receiveShadow = true;
// floor.rotation.x = -Math.PI * 0.5;
// scene.add(floor);

// /**
//  * Lights
//  */
// // const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
// // scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
// directionalLight.castShadow = true;
// directionalLight.shadow.mapSize.set(1024, 1024);
// directionalLight.shadow.far = 15;
// directionalLight.shadow.left = -7;
// directionalLight.shadow.top = 7;
// directionalLight.shadow.right = 7;
// directionalLight.shadow.bottom = -7;
// directionalLight.position.set(5, 5, 5);
// scene.add(directionalLight);

// //light helper
// // const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 5)
// // scene.add(directionalLightHelper)

// /**
//  * Object
//  */
// // const geometry = new THREE.BoxGeometry(1, 1, 1)
// // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// // const mesh = new THREE.Mesh(geometry, material)
// // scene.add(mesh)

// /**
//  * Sizes
//  */
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// window.addEventListener("resize", () => {
//   // update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // update render
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// // fullscreen
// window.addEventListener("dblclick", () => {
//   if (!document.fullscreenElement) {
//     canvas.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// });

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// camera.position.set(3, 3, 6);
// scene.add(camera);

// // Controls
// const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 0.75, 0);
// controls.enableDamping = true;

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// /**
//  * Animate
//  */
// const clock = new THREE.Clock();
// let previousTime = 0;

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime();
//     const deltaTime = elapsedTime - previousTime;
//     previousTime = elapsedTime;
  
//     //Update mixer
//     if (mixer !== null) {
//       mixer.update(deltaTime);
//     }
  
//     // Update controls
//     controls.update();
  
//     // Render
//     renderer.render(scene, camera);
  
//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick);
// };

// tick();
