import * as THREE from "three"
import Experience from "../../Experience"

export default class Player {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.instance = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial( { color: 0x00ff00}))
        this.scene.add(this.instance)
    }    
}