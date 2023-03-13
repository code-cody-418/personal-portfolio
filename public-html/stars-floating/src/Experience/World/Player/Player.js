import * as THREE from "three"
import Experience from "../../Experience"

export default class Player {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.player = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshStandardMaterial( { color: 0x00ff00}))
        this.scene.add(this.player)
    }    
}