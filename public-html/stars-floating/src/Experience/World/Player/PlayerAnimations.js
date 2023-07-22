import * as THREE from "three"
import Experience from "../../Experience"

export default class PlayerAnimations {
    constructor() {
        this.experience = new Experience()
        this.time = this.experience.time
        this.resource = this.experience.world.player.resource
        this.model = this.experience.world.player.model

        this.setAnimationHash()
        this.setAnimation()
        this.playAnimation("idle", 0.5) //first call set to default idle
    }

    //creates a hash map of the resource animations
    setAnimationHash() {
        this.animations = new Map()

        for (const animation of this.resource.animations) {
            let animationName = animation.name
            this.animations.set(animationName, animation)
        }
    }

    //sets up mixer and creates an objects with all the animations as clipActions
    setAnimation() {
        this.animation = {}
        this.animation.actions = {}
        this.animation.actions.current = {} //holds the current animation 
        this.animation.actions.previous = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)

        this.animation.actions.idle = this.animation.mixer.clipAction(
            this.animations.get("idle")
        )

        this.animation.actions.walk = this.animation.mixer.clipAction(
            this.animations.get("walk")
        )

        this.animation.actions.attack = this.animation.mixer.clipAction(
            this.animations.get("attack")
        )

        this.animation.actions.current = this.animation.actions.idle
    }

    playWalk(action, duration) {
        this.animation.actions.previous = this.animation.actions.current
        this.animation.actions.current = this.animation.actions[action]

        if (this.animation.actions.previous !== this.animation.actions.current) {
            this.animation.actions.previous.fadeOut(duration)
        }

        if (this.animation.actions.current.getEffectiveWeight() === 0) {
            this.animation.actions.current
                .reset()
                .setEffectiveTimeScale(1)
                .setEffectiveWeight(1)
                .fadeIn(duration)
                .play()
        } else {
            this.animation.actions.current.play()
        }
    }

    playAnimation(action, duration) {
        this.animation.actions.previous = this.animation.actions.current
        this.animation.actions.current = this.animation.actions[action]

        if (this.animation.actions.previous !== this.animation.actions.current) {
            this.animation.actions.previous.fadeOut(duration)
        }

        this.animation.actions.current
            .reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(duration)
            .play()
    }

    //mandatory update on frame
    update() {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}