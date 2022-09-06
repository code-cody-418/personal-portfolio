import * as THREE from 'three'
import Experience from '../../Experience.js'
import Ground from './Ground.js'
import Lights from './Lights/Lights.js'

export default class Environment {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.lights = new Lights()
        this.ground = new Ground()

        //debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('environment')
        }


        this.setEnvironmentMap()
    }
    setEnvironmentMap(){
        this.environmentMap = {}
        this.environmentMap.intensity = 3.0
        this.environmentMap.texture = this.resources.items.environmentMapTexture

        this.environmentMap.texture.encoding = THREE.sRGBEncoding

        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () => {
            this.scene.traverse( (child) => {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }

        this.environmentMap.updateMaterials()

        if(this.debug.active){
            this.debugFolder
            .add(this.environmentMap, 'intensity')
            .name('envIntensity')
            .min(0)
            .max(10)
            .step(0.001)
            .onChange(this.environmentMap.updateMaterials)
        }
    }
}