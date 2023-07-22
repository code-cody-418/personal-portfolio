import * as THREE from 'three'
import Experience from '../../Experience'

export default class NpcModel {
    constructor(source, position, size, action) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.resources = this.experience.resources

        this.resource = this.resources.items[source]

        this.model = this.resource.scene
        this.model.position.set(position[0], position[1], position[2])
        this.model.scale.set(size[0], size[1], size[2])
        this.model.rotateY(4.712389)

        this.scene.add(this.model)

        this.setAnimation(action)
    }

    setAnimation(action) {
        this.animation = {};
        this.animation.mixer = new THREE.AnimationMixer(this.model);
        this.animation.actions = {};

        // create a map that has the key as the name of the animation and value as the clip action
        this.mapAnimations = new Map()
        this.resource.animations.forEach(animation => {
            this.mapAnimations.set(animation.name, this.animation.mixer.clipAction(animation));
        });

        //pass the action to the constructor and gets it from the map
        this.animation.actions.current = this.mapAnimations.get(action)
        this.animation.actions.current.play();
    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.001);
    }
}