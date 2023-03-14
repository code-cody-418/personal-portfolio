import Experience from "../Experience.js";
import InitOrbitControls from "./InitOrbitControl.js";
import FPS from "./FPS.js";
import ThirdPersonControls from "./ThirdPersonControls.js";

export default class MainControls {
    constructor() {
        this.experience = new Experience()

        //change this.controllerSelect to change the controller Options: "orbit" || "fps" || "third"
        this.controllerSelect = "third"

        if (this.controllerSelect === "orbit") {
            this.orbitControls = new InitOrbitControls();
            this.controller = this.orbitControls
        } else if (this.controllerSelect === "fps") {
            this.fpsControls = new FPS()
            this.controller = this.fpsControls
        } else if (this.controllerSelect === "third"){
            this.thirdPersonControls = new ThirdPersonControls()
            this.controller = this.thirdPersonControls
        }
    }

    update() {
        this.controller.update();
    }
}