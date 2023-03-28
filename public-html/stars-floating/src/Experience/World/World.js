import Experience from "../Experience.js";
import Dragon from './Enemies/Dragon.js';
import Chest01 from "./Environment/Chests/Chest-01.js";
import Trees01 from "./Environment/Trees/Trees-01.js"
import Rock01 from "./Environment/Rocks/Rocks-01.js";
import Environment from './Environment/Environment.js';
import Helpers from '../Helpers/Helpers.js'
import Sword01 from "./Environment/Items/Weapons/Sword-01.js";
import TestPaladin from "./NPCS/TestPaladin.js";
import Player from "./Player/Player.js"
import ThirdPersonCamera from "../Cameras/ThirdPersonCamera.js";
import MainControls from "../Controls/MainControls.js";
import PlayerAnimations from "./Player/PlayerAnimations.js";
import Grass01 from "./Environment/Grass/Grass-01.js";

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //Once the resources is loaded
        this.resources.on('ready', () => {
            // init player and controls
            this.player = new Player()
            this.thirdCamera = new ThirdPersonCamera()
            this.playerAnimations = new PlayerAnimations()
            this.controls = new MainControls()
            

            //init models
            this.dragon = new Dragon()
            this.chest01 = new Chest01()
            this.rock01 = new Rock01()
            this.grass01 = new Grass01()
            this.tree01 = new Trees01()
            this.sword01 = new Sword01()
            this.testPaladin = new TestPaladin()
            this.environment = new Environment()

            //init helpers
            this.helpers = new Helpers()
        })
    }

    update() {
        if (this.helpers && this.dragon && this.testPaladin) {
            this.helpers.update()
            this.dragon.update()
            this.testPaladin.update()

        }
        if (this.player && this.playerAnimations && this.controls) {
            this.playerAnimations.update()
            this.controls.update()
        }
    }
}