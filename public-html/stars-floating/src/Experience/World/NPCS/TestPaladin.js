import * as THREE from "three"
import Experience from "../../Experience";

export default class TestPaladin {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time

        this.resource = this.resources.items.testPaladin

        this.setModel()
        this.setAnimation()
        this.setListener()
    }
    setModel() {
        this.model = this.resource.scene
        this.model.children[0].position.set(-15, 0, 15)

        this.scene.add(this.model)
    }

    setAnimation() {
        this.animation = {}

        this.animation.mixer = new THREE.AnimationMixer(this.model)

        this.animation.actions = {}

        this.animation.actions.attack = this.animation.mixer.clipAction(
            this.resource.animations[0]
        )

        this.animation.actions.current = this.animation.actions.attack
        this.animation.actions.current.setLoop(THREE.LoopOnce)
    }

    setListener() {
        // const actionOne = document.getElementById("actionOne")

        // actionOne.addEventListener("click", () => {
        //     this.animation.actions.current.play().reset()
        // })
    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}