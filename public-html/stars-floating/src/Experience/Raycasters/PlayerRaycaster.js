import * as THREE from "three";
import Experience from "../Experience";

export default class PlayerRaycaster {
  constructor() {
    this.experience = new Experience();
    this.mousePosition = this.experience.mouse.mousePosition;
    this.camera = this.experience.camera.instance;
    this.world = this.experience.world;
    this.instance = new THREE.Raycaster();

    this.currentIntersect = null;

    window.addEventListener("click", () => {
      if (this.currentIntersect) {
        if (this.currentIntersect.object.name === "ground") {
          console.log("Ground is clicked!");
        }
      }
    });

    window.addEventListener("click", () => {
      if (this.world.chest01) {
        if (this.currentIntersect) {
          if (this.currentIntersect.object.name === "chest_1") {
            this.world.chest01.setAnimation()
          }
        }
      }
    });
  }

  update() {
    this.instance.setFromCamera(this.mousePosition, this.camera);

    const intersects = this.instance.intersectObjects(
      this.experience.world.scene.children
    );

    //checks to see the first item in array that is being intersected, then sets variable currentIntersect
    if (intersects.length) {
      this.currentIntersect = intersects[0];
    } else {
      this.currentIntersect = null;
    }
  }
}
