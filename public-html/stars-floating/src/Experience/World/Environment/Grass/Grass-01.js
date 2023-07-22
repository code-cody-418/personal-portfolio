import * as THREE from 'three'
import Experience from "../../../Experience";

export default class Grass01 {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.grass01

        this.count = 500;

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
            let ranPosX = Math.floor(Math.random() * 100) - 50
            let ranPosZ = Math.floor(Math.random() * 100) - 50

            this.dummy.position.set(ranPosX, 0, ranPosZ);
            this.dummy.scale.set(1.5, 1.5, 1.5)

            this.dummy.updateMatrix();

            this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
            this.instancedMesh.needsUpdate = true;
        }
    }
}