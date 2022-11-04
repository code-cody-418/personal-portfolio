import Experience from "../Experience.js";
import Dragon from './Enemies/Dragon.js';
import Chest01 from "./Environment/Chests/Chest-01.js";
import Rock01 from "./Environment/Rocks/Rocks-01.js";
import Environment from './Environment/Environment.js';
import Helpers from '../Helpers/Helpers.js'

export default class World {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //Once the resources is loaded
        this.resources.on('ready', () => {
            this.dragon = new Dragon()
            this.chest01 = new Chest01()
            this.rock01 = new Rock01()
            this.environment = new Environment()
            this.helpers = new Helpers()
        })
    }

    update(){
        if(this.helpers && this.dragon){
            this.helpers.update()
            this.dragon.update()
        }
    }
}