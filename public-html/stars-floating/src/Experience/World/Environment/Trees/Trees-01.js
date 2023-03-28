import Experience from "../../../Experience";
import * as THREE from 'three'

export default class Trees01 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resource = this.resources.items.tree01;

    this.count = 10;

    this.setModel();
    this.setPosition();
  }

  setModel() {
    this.model = this.resource.scene;
    this.geometry = this.model.children[0].children[0].geometry;
    this.material = this.model.children[0].children[0].material
    this.treeTopGeometry = this.model.children[0].children[1].geometry;
    this.treeTopMaterial = this.model.children[0].children[1].material

    this.instancedMesh = new THREE.InstancedMesh(
      this.geometry,
      this.material,
      this.count
    );

    this.instancedMeshTreeTop = new THREE.InstancedMesh(
      this.treeTopGeometry,
      this.treeTopMaterial,
      this.count
    );

    this.scene.add(this.instancedMesh);
    this.scene.add(this.instancedMeshTreeTop);
  }

  setPosition() {
    this.dummy = new THREE.Object3D();

    this.dummy.scale.set(10, 10, 10)

    for (let i = 0; i <= this.count; i++) {
      if (i === 0) {
        this.dummy.position.set(10, 0, -1);
        this.dummy.scale.set(3, 3, 3)
      } else if (i === 1) {
        this.dummy.position.set(10, 0, -15);
        this.dummy.scale.set(5, 5, 5)
      } else if (i === 2) {
        this.dummy.position.set(-21, 0, 5);
        this.dummy.scale.set(8, 8, 8)
      } else if (i === 3) {
        this.dummy.position.set(8, 0, -5);
        this.dummy.scale.set(5, 5, 5)
      } else if (i === 4) {
        this.dummy.position.set(7, 0, -38);
        this.dummy.scale.set(7, 7, 7)
      } else if (i === 5) {
        this.dummy.position.set(-12, 0, 25);
        this.dummy.scale.set(7, 7, 7)
      } else if (i === 6) {
        this.dummy.position.set(-18, 0, -45);
        this.dummy.scale.set(6, 6, 6)
      } else if (i === 7) {
        this.dummy.position.set(4, 0, -8);
        this.dummy.scale.set(4, 4, 4)
      } else if (i === 8) {
        this.dummy.position.set(-3, 0, 34);
        this.dummy.scale.set(4, 4, 4)
      } else if (i === 9) {
        this.dummy.position.set(5, 0, -12);
        this.dummy.scale.set(6, 6, 6)
      }

      this.dummy.updateMatrix();

      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
      this.instancedMesh.needsUpdate = true;

      this.instancedMeshTreeTop.setMatrixAt(i, this.dummy.matrix)
      this.instancedMeshTreeTop.needsUpdate = true
    }
  }
}
