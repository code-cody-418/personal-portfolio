import * as THREE from 'three'
import Experience from '../Experience';

export default class Mouse {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    
    this.mousePosition = new THREE.Vector2()
    
    window.addEventListener("mousemove", (e) => {
      this.mousePosition.x = (e.clientX / this.sizes.width) * 2 - 1;
      this.mousePosition.y = -(e.clientY / this.sizes.height) * 2 + 1;
    });
  }
}
