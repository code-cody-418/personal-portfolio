import Experience from "../../Experience"

export default class Player {
    constructor() {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        
        this.resource = this.resources.items.player

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.children[0].rotateZ(Math.PI)

        this.scene.add(this.model)
    }
}