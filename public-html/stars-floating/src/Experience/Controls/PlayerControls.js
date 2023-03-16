import * as THREE from "three"
import Experience from '../Experience'


export default class PlayerControls {
    constructor() {
        this.experience = new Experience()
        this.time = this.experience.time
        this.player = this.experience.world.player.model
        this.thirdCamera = this.experience.world.thirdCamera


        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;

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

        if (key === "KeyW") {
            this.moveForward = true;
        } else if (key === "KeyS") {
            this.moveBackward = true;
        } else if (key === "KeyA") {
            this.moveLeft = true;
        } else if (key === "KeyD") {
            this.moveRight = true;
        } else if (key === "Space") {
        }
    }

    onKeyUp(e) {
        let key = e.code;

        if (key === "KeyW") {
            this.moveForward = false;
        } else if (key === "KeyS") {
            this.moveBackward = false;
        } else if (key === "KeyA") {
            this.moveLeft = false;
        } else if (key === "KeyD") {
            this.moveRight = false;
        }
    }



    update() {
        const delta = this.time.delta / 1000;

        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;

        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.normalize();

        if (this.moveRight || this.moveLeft) {
            this.velocity.x += this.direction.x * 1.0 * delta;
        }
        if (this.moveForward || this.moveBackward) {
            this.velocity.z -= this.direction.z * 1.0 * delta;
        }

        this.player.translateX(this.velocity.x)
        this.player.translateZ(this.velocity.z)

        //rotate the player
        if (this.moveRight) {
            this.player.rotateY(.017) //1 degree rotation
        }
        if (this.moveLeft) {
            this.player.rotateY(-.017) //1 degree rotation
        }

        this.thirdCamera.update()
    }
}