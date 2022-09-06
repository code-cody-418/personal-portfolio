import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import Experience from "../Experience.js";

export default class FPS {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera.instance;
    this.time = this.experience.time;

    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;

    this.velocity = new THREE.Vector3();
    this.direction = new THREE.Vector3();

    this.setFPSControls();
    this.setEventListeners();
  }

  setFPSControls() {
    //FPS controls
    this.controls = new PointerLockControls(this.camera, this.canvas);
  }

  setEventListeners() {
    this.canvas.addEventListener("click", () => {
      this.controls.lock();
    });

    document.addEventListener("keydown", (e) => {
      this.onKeyDown(e);
    });

    document.addEventListener("keyup", (e) => {
      this.onKeyUp(e);
    });
  }

  onKeyDown(e) {
    let key = e.code;

    if (key === "KeyW") {
      this.moveForward = true;
    } else if (key === "KeyS") {
      this.moveBackward = true;
    } else if (key === "KeyA") {
      this.moveLeft = true;
    } else if (key === "KeyD") {
      this.moveRight = true;
    } else if (key === "Space") {
    }
  }

  onKeyUp(e) {
    let key = e.code;

    if (key === "KeyW") {
      this.moveForward = false;
    } else if (key === "KeyS") {
      this.moveBackward = false;
    } else if (key === "KeyA") {
      this.moveLeft = false;
    } else if (key === "KeyD") {
      this.moveRight = false;
    }
  }

  update() {
    const delta = this.time.delta / 1000;

    this.velocity.x -= this.velocity.x * 10.0 * delta;
    this.velocity.z -= this.velocity.z * 10.0 * delta;

    this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
    this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
    this.direction.normalize();

    if (this.moveRight || this.moveLeft) {
      this.velocity.x -= this.direction.x * 400.0 * delta;
    }
    if (this.moveForward || this.moveBackward) {
      this.velocity.z -= this.direction.z * 400.0 * delta;
    }

    this.controls.moveRight(-this.velocity.x * delta);
    this.controls.moveForward(-this.velocity.z * delta);
  }
}