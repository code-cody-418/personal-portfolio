import * as THREE from "three";
import Experience from "../../Experience.js";
import gsap from "gsap";

export default class Dragon {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    //setup
    this.resource = this.resources.items.dragonModel;

    this.setModel();
    this.setAnimation();
    this.setMovingAnimation();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.position.set(-15, 0, 15);
    this.model.rotation.y = Math.PI / 2;
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }

  setAnimation() {
    this.animation = {};

    this.animation.mixer = new THREE.AnimationMixer(this.model);

    this.animation.actions = {};

    this.animation.actions.idle = this.animation.mixer.clipAction(
      this.resource.animations[0]
    );

    this.animation.actions.current = this.animation.actions.idle;
    this.animation.actions.current.play();
  }

  setMovingAnimation() {
    gsap.to(this.model.position, {
      duration: 4,
      y: 8,
    });

    this.tlPosition = gsap.timeline({
      delay: 5,
      repeat: -1,
      yoyo: false,
      defaults: {
        duration: 5,
        ease: "none",
      },
    });

    this.tlPosition
      .to(this.model.position, {
        x: 15,
        onComplete: () => {
          gsap.to(this.model.rotation, {
            duration: 1,
            y: Math.PI,
          });
        },
      })
      .to(this.model.position, {
        z: -15,
        onComplete: () => {
          gsap.to(this.model.rotation, {
            duration: 1,
            y: 4.71,
          });
        },
      })
      .to(this.model.position, {
        x: -15,
        onComplete: () => {
          gsap.to(this.model.rotation, {
            duration: 1,
            y: Math.PI * 2,
          });
        },
      })
      .to(this.model.position, {
        z: 15,
        onComplete: () => {
          gsap.fromTo(
            this.model.rotation,
            { y: 0 },
            {
              duration: 1,
              y: Math.PI / 2,
            }
          );
        },
      });
  }

  update() {
    this.animation.mixer.update(this.time.delta * 0.001);
  }
}
