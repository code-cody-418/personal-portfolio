import * as THREE from "three";
import Sizes from "./Utils/Sizes.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import sources from "./sources.js";
import Debug from "./Utils/Debug.js";
import FPS from "./Controls/FPS.js";
import Mouse from "./Utils/Mouse.js";
import Keys from "./Utils/KeyBoard.js";
import PlayerRaycaster from "./Raycasters/PlayerRaycaster.js";
import MainControls from "./Controls/MainControls.js";

// singleton to access the Experience
let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;

    // Global Access
    window.experience = this;

    // options
    this.canvas = canvas;

    //setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.mouse = new Mouse()
    this.keys = new Keys()
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.controls = new MainControls()
    this.renderer = new Renderer();
    this.world = new World();
    this.playerRaycaster = new PlayerRaycaster()

    //Size Event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.controls.update()
    this.playerRaycaster.update()
    this.world.update();
    this.renderer.update();
  }
}
