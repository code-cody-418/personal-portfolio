import * as THREE from "three"
import Experience from "../Experience";

export default class ThirdPersonCamera {
    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.player = this.experience.player.instance

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

        this.playerPosition.copy(this.idealOffset)
        this.currentLookat.copy(this.idealLookat)

        this.camera.position.copy(this.playerPosition)
        this.camera.lookAt(this.currentLookat)
    }
}