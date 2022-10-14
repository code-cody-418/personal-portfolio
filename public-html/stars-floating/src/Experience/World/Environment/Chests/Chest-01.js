import * as THREE from 'three'
import Experience from '../../../Experience'

export default class Chest01 {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.Chest01


    }
}