import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from '../Experience'

export default class ThirdPersonControls {
    constructor() {
        this.experience = new Experience()
        this.time = this.experience.time
        this.player = this.experience.player.instance
        this.thirdCamera = this.experience.thirdCamera

           
        // this.playerPosition.copy(this.player.position)
        // this.playerPosition.x = this.playerPosition.x + 1
        // this.playerPosition.y = this.playerPosition.y + 1


        // console.log(this.player)

        // this.controls = new OrbitControls(this.camera, this.canvas)
        // this.controls.enableDamping = true
        
        // this.controls.target.set(this.player.position.x, this.player.position.y, this.player.position.z)
        // this.controls.maxPolarAngle = Math.PI * 0.5
        // this.controls.minPolarAngle = Math.PI * 0.1

        // console.log(this.controls)



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
            this.velocity.x -= this.direction.x * 1.0 * delta;
        }
        if (this.moveForward || this.moveBackward) {
            this.velocity.z -= this.direction.z * 1.0 * delta;
        }

        this.player.translateX(this.velocity.x)
        this.player.translateZ(this.velocity.z)

        // this.camera.translateX(this.velocity.x)
        // this.camera.translateZ(this.velocity.z) 

        // this.playerPosition.copy(this.camera.position)
        // this.playerPosition.x = this.playerPosition.z + 3
        // this.playerPosition.y = this.playerPosition.y + 1
        // this.player.position.set(this.playerPosition.x, this.playerPosition.y, this.playerPosition.z)

        // this.camera.position.set(this.playerPosition.x, this.playerPosition.y, this.playerPosition.z);

        // this.camera.lookAt(this.player.position)

        //this sets where the controls/camera look at
        // this.controls.target.set(this.player.position.x, this.player.position.y, this.player.position.z)

        // this.controls.update()
        this.thirdCamera.update()
    }
}