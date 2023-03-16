import * as THREE from "three"
import Experience from "../Experience";

export default class ThirdPersonCamera {
    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.player = this.experience.world.player.model
        this.time = this.experience.time

        this.playerPosition = new THREE.Vector3()
        this.currentLookat = new THREE.Vector3()
    }

    calculateIdealOffset() {
        this.idealOffset = new THREE.Vector3(0, 5, 10)
        this.idealOffset.applyQuaternion(this.player.quaternion)
        this.idealOffset.add(this.player.position)
        return this.idealOffset
    }

    calculateIdealLookat() {
        this.idealLookat = new THREE.Vector3(0, 5, 5)
        this.idealLookat.applyQuaternion(this.player.quaternion)
        this.idealLookat.add(this.player.position)
        return this.idealLookat
    }

    update() {
        this.calculateIdealOffset()
        this.calculateIdealLookat()

        this.playerPosition.lerp(this.idealOffset, 0.05)
        this.currentLookat.lerp(this.idealLookat, 0.05)

        this.camera.position.copy(this.playerPosition)
        this.camera.lookAt(this.currentLookat)
    }
}