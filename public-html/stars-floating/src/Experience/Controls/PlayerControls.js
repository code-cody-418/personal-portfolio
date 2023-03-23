import * as THREE from "three"
import Experience from '../Experience'


export default class PlayerControls {
    constructor() {
        this.experience = new Experience()
        this.time = this.experience.time
        this.player = this.experience.world.player.model
        this.thirdCamera = this.experience.world.thirdCamera
        this.playerAnimations = this.experience.world.playerAnimations

        this.controlKeys = {
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false
        }

        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();

        this.setEventListeners()
    }

    setEventListeners() {
        document.addEventListener("keydown", (e) => {
            this.onKeyDown(e);
        });

        document.addEventListener("keyup", (e) => {
            this.onKeyUp(e);
        });
    }

    onKeyDown(e) {
        let key = e.code;

        //checks for movement keys
        if (key === "KeyW") {
            this.controlKeys.moveForward = true;
            this.playerAnimations.playWalk("walk", 0.5)
        } else if (key === "KeyS") {
            this.controlKeys.moveBackward = true;
        } else if (key === "KeyA") {
            this.controlKeys.moveLeft = true;
        } else if (key === "KeyD") {
            this.controlKeys.moveRight = true;
        } else if (key === "Space") {
        }

        //checks for attack
        if (key === "KeyT") {
            this.playerAnimations.playAnimation("chargeStrike", 0.5)
        }
    }

    onKeyUp(e) {
        let key = e.code;

        if (key === "KeyW") {
            this.controlKeys.moveForward = false;
            this.playerAnimations.playAnimation("idle", 0.7)
        } else if (key === "KeyS") {
            this.controlKeys.moveBackward = false;
        } else if (key === "KeyA") {
            this.controlKeys.moveLeft = false;
        } else if (key === "KeyD") {
            this.controlKeys.moveRight = false;
        } 
    }

    update() {
        const delta = this.time.delta / 1000;

        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;

        this.direction.x = Number(this.controlKeys.moveRight) - Number(this.controlKeys.moveLeft);
        this.direction.z = Number(this.controlKeys.moveForward) - Number(this.controlKeys.moveBackward);
        this.direction.normalize();

        if (this.controlKeys.moveRight || this.controlKeys.moveLeft) {
            this.velocity.x += this.direction.x * 1.0 * delta;
        }
        if (this.controlKeys.moveForward || this.controlKeys.moveBackward) {
            this.velocity.z -= this.direction.z * 1.0 * delta;
        }

        this.player.translateX(this.velocity.x)
        this.player.translateZ(this.velocity.z)

        //rotate the player
        if (this.controlKeys.moveRight) {
            this.player.rotateY(.017) //1 degree rotation
        }
        if (this.controlKeys.moveLeft) {
            this.player.rotateY(-.017) //1 degree rotation
        }

        this.thirdCamera.update()
    }
}