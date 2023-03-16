import * as THREE from "three"
import Experience from "../../Experience"

export default class Player {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time

        this.resource = this.resources.items.player

        // console.log(this.resource)

        this.setAnimationHash()
        this.setModel()
        this.setAnimation()
    }

    //creates a hash map of the resource animations
    setAnimationHash() {
        this.animations = new Map()

        for (const animation of this.resource.animations) {
            let animationName = animation.name
            this.animations.set(animationName, animation)
        }
    }

    setModel() {
        this.model = this.resource.scene
        this.model.children[0].rotateZ(Math.PI)

        this.scene.add(this.model)
    }

    setAnimation() {
        this.animation = {}

        this.animation.mixer = new THREE.AnimationMixer(this.model)

        this.animation.actions = {}

        this.animation.actions.idle = this.animation.mixer.clipAction(
            this.animations.get("idle")
        )

        this.animation.actions.current = this.animation.actions.idle
        this.animation.actions.current.play()
    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}