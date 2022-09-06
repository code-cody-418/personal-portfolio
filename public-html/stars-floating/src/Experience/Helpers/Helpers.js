import * as THREE from "three";
import Experience from "../Experience.js";
import Stats from "three/examples/jsm/libs/stats.module";

export default class Helpers {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.scene = this.experience.scene;
      this.light = this.experience.world.environment.lights.sunLight;
      this.setAxisHelper();
      this.setLightHelper();
      this.setStatsHelper();
    }
  }
  setAxisHelper() {
    //The X axis is red. The Y axis is green. The Z axis is blue.
    this.axis = new THREE.AxesHelper(5);
    this.scene.add(this.axis);
  }
  setLightHelper() {
    this.directionalLightHelper = new THREE.DirectionalLightHelper(
      this.light,
      5
    );
    this.scene.add(this.directionalLightHelper);
  }
  setStatsHelper() {
    this.stats = new Stats();
    let element = document.getElementById("container");
    element.appendChild(this.stats.dom);
  }
  update() {
    if (this.stats) {
      this.stats.update();
    }
  }
}
