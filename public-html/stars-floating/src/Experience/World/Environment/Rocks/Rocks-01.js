import * as THREE from "three";
import Experience from "../../../Experience";

export default class Rock01 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resource = this.resources.items.rock01;

    this.count = 10;

    this.setModel();
    this.setPosition();
  }

  setModel() {
    this.model = this.resource.scene;
    this.geometry = this.model.children[0].geometry;
    this.material = this.model.children[0].material;

    this.instancedMesh = new THREE.InstancedMesh(
      this.geometry,
      this.material,
      this.count
    );

    this.scene.add(this.instancedMesh);
  }

  setPosition() {
    this.dummy = new THREE.Object3D();

    for (let i = 0; i <= this.count; i++) {
      if (i === 0) {
        this.dummy.position.set(3, 0, 5);
        this.dummy.scale.set(3, 3, 3)
      } else if (i === 1) {
        this.dummy.position.set(-10, 0, 15);
        this.dummy.scale.set(2, 2, 2)
      } else if (i === 2) {
        this.dummy.position.set(-30, 0, 10);
        this.dummy.scale.set(3, 3, 3)
      } else if (i === 3) {
        this.dummy.position.set(15, 0, -15);
        this.dummy.scale.set(2, 2, 2)
      } else if (i === 4) {
        this.dummy.position.set(10, 0, 40);
        this.dummy.scale.set(3, 3, 3)
      } else if (i === 5) {
        this.dummy.position.set(-15, 0, 30);
        this.dummy.scale.set(3, 3, 3)
      } else if (i === 6) {
        this.dummy.position.set(-20, 0, -25);
        this.dummy.scale.set(2, 2, 2)
      } else if (i === 7) {
        this.dummy.position.set(18, 0, -35);
        this.dummy.scale.set(2, 2, 2)
      } else if (i === 8) {
        this.dummy.position.set(-45, 0, 10);
        this.dummy.scale.set(2, 2, 2)
      } else if (i === 9) {
        this.dummy.position.set(8, 0, 35);
        this.dummy.scale.set(4, 4, 4)
      }

      this.dummy.updateMatrix();

      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
      this.instancedMesh.needsUpdate = true;
    }
  }
}
