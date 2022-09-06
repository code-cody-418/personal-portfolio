import * as THREE from 'three'
import Experience from '../../Experience.js'

export default class Dragon {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time

        //setup
        this.resource = this.resources.items.dragonModel

        this.setModel()
        this.setAnimation()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.position.set(0, 0, -3) 
        this.scene.add(this.model)

        this.model.traverse( (child) => {
            if( child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })
    }

    setAnimation(){
        this.animation = {}

        this.animation.mixer = new THREE.AnimationMixer(this.model)

        this.animation.actions = {}

        this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])

        this.animation.actions.current = this.animation.actions.idle
        this.animation.actions.current.play()
    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}