import * as THREE from 'three'
import Experience from "../../../Experience";

export default class Rock01 {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.rock01

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(5, 5, 5)
        this.model.position.set(5, 0, 5)
        console.log(this.model.children);    

        this.scene.add(this.model)
    }
}