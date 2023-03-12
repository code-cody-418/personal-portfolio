import Experience from "../../../../Experience";

export default class Sword01 {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.sword01

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.name = "sword01"
        this.model.children[0].scale.set(0.3, 0.3, 0.3)
        this.model.children[0].rotation.x = 0
        this.model.children[0].position.set(0,0,0)

        this.scene.add(this.model)
    }
}