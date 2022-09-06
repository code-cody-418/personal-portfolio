import * as THREE from "three";
import Experience from "../../Experience";

export default class Ground {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources

    // this.setInstance();
    this.setGeometry()
    this.setTextures()
    this.setMaterial()
    this.setMesh()
  }

  setGeometry(){
    this.geometry = new THREE.PlaneGeometry(1000, 1000)
  }
  setTextures(){
    this.textures = {}

    this.textures.color = this.resources.items.redDirtColorTexture
    this.textures.color.encoding = THREE.sRGBEncoding
    this.textures.color.repeat.set(20, 20)
    this.textures.color.wrapS = THREE.RepeatWrapping
    this.textures.color.wrapT = THREE.RepeatWrapping 

    this.textures.normal = this.resources.items.redDirtNormalTexture
    this.textures.normal.repeat.set(20, 20)
    this.textures.normal.wrapS = THREE.RepeatWrapping
    this.textures.normal.wrapT = THREE.RepeatWrapping 
  }
  setMaterial(){
    this.material = new THREE.MeshStandardMaterial({
      map: this.textures.color,
      normalMap: this.textures.normal
    })
  }
  setMesh(){
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.rotation.x = - Math.PI * 0.5
    this.mesh.receiveShadow = true
    this.mesh.name = "ground"
    this.scene.add(this.mesh)
  }

  // setInstance() {
  //   const geometry = new THREE.PlaneGeometry(1000, 1000);
  //   const material = new THREE.MeshStandardMaterial({
  //     color: "#876445",
  //     metalness: 0,
  //     roughness: 1,
  //   });

  //   this.plane = new THREE.Mesh(geometry, material);
  //   this.plane.rotation.x = -Math.PI * 0.5;
  //   this.plane.receiveShadow = true
  //   this.scene.add(this.plane);
  // }
}
