import * as THREE from "three"
import Experience from "../../../Experience";

export default class Rock01 {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.rock01

        this.count = 10

        this.setModel()
        this.setPosition()
    }

    setModel() {
        this.model = this.resource.scene
        // this.model.scale.set(5, 5, 5)
        // this.model.position.set(5, 0, 5)   
        this.geometry = this.model.children[0].geometry
        this.material = this.model.children[0].material 

        this.instancedMesh = new THREE.InstancedMesh(this.geometry, this.material, this.count)

        this.scene.add(this.instancedMesh)
    }

    setPosition() {
        this.dummy = new THREE.Object3D()
        
        for (let i = 0; i < this.count; i++) {
            this.dummy.position.set(i, 0, i)
            this.dummy.updateMatrix()
            
            this.instancedMesh.setMatrixAt(i, this.dummy.matrix)

            this.instancedMesh.needsUpdate = true
        }
    }
}