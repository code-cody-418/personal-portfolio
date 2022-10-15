import Experience from "../../../Experience";

export default class Chest01 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resource = this.resources.items.chest01;

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.children[0].position.set(-5, 0, 5);
    this.model.children[0].scale.x = 1.5;
    this.model.children[0].scale.y = 1.5;
    this.model.children[0].scale.z = 1.5;
    this.model.children[0].rotation.y = -Math.PI / 2;

    this.scene.add(this.model);
  }

  setAnimation() {
    if (this.model.children[0].children[2].rotation.x < Math.PI / 2) {
      this.model.children[0].children[2].rotation.x = Math.PI / 2;
    } else {
        this.model.children[0].children[2].rotation.x = 0;
    }
  }
}
