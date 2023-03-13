import Experience from "../Experience";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class InitOrbitControls {
    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.canvas = this.experience.canvas

        this.controls = new OrbitControls(this.camera, this.canvas)
        this.camera.position.set(0, 0.5, 0)
        this.controls.enableDamping = true
    }

    update() {
        this.controls.update()
    }
}