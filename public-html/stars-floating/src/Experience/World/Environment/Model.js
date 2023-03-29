import * as THREE from 'three'
import Experience from '../../Experience'

export default class Model {
    constructor(source, position, size){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items[source]

        this.model = this.resource.scene
        this.model.position.set(position[0], position[1], position[2])
        this.model.scale.set(size[0], size[1], size[2])
        this.model.rotateY(4.712389)

        this.scene.add(this.model)
    }
}