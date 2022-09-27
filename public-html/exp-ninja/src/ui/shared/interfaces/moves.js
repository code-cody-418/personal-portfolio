//
//these are the exercise moves available in the 3d models
//

//kakashi's moves to be looped through


//used for displaying names of the exercise moves
import {move} from "formik";

export const moves = {
    //shared
    idle: 'idle',
    capitalIdle: 'Chillin',
    jumpingJack: 'jumpingJack',
    capitalJumpingJack: 'Jumping Jacks',
    armStretch: 'armStretch',
    capitalArmStretch: 'Arm Stretch',
    coolDown: 'coolDown',
    capitalCoolDown: 'Cool Down',
    touchToes: 'touchToes',
    capitalTouchToes: 'Touch Toes',
    pushUp: 'pushUp',
    capitalPushUp: 'Push Ups',
    sitUps: 'sitUps',
    capitalSitUps: "Sit Ups",
    bicepCurl: 'bicepCurl',
    capitalBicepCurl: 'Bicep Curl',
    celebration: 'celebration',
    capitalCelebration: 'Celebration',

    //Kakashi
    kick: 'kick',
    capitalKick: 'Kick',
    neckStretch: 'neckStretch',
    capitalNeckStretch: 'Neck Stretch',
    squat: 'squat',
    capitalSquat: 'Squat',

    //Korra
    burpee: 'burpee',
    capitalBurpee: 'Burpee',
    crossJumps: 'crossJumps',
    capitalCrossJumps: 'Cross Jumps',
    crossRotation: 'crossRotation',
    capitalCrossRotation: 'Cross Rotation',

    //Naruto
    bikeCrunch: 'bikeCrunch',
    capitalBikeCrunch: 'Bike Crunch',
    footwork: 'footwork',
    capitalFootwork: 'Footwork',
    freeze: 'freeze',
    capitalFreeze: 'Freeze',
    upRock: 'upRock',
    capitalUpRock: 'Uprock',

    //Goku
    hook: 'hook',
    capitalHook: 'Hook',
    jab: 'jab',
    capitalJab: 'Jab',
    kettlebell: 'kettlebell',
    capitalKettlebell: 'Kettlebell',
    plank: 'plank',
    capitalPlank: 'Plank',
    punchCombo: 'punchCombo',
    capitalPunchCombo: 'Punch Combo',
}

export const kakashiMoves = [
    moves.armStretch,
    moves.neckStretch,
    moves.touchToes,
    moves.sitUps,
    moves.pushUp,
    moves.jumpingJack,
    moves.coolDown,
    moves.kick,
    moves.bicepCurl,
    moves.squat,
    moves.coolDown
]

export const gokuMoves = [
    moves.touchToes,
    moves.armStretch,
    moves.jumpingJack,
    moves.jab,
    moves.hook,
    moves.punchCombo,
    moves.coolDown,
    moves.bicepCurl,
    moves.plank,
    moves.sitUps,
    moves.pushUp,
    moves.coolDown
]

export const korraMoves = [
    moves.armStretch,
    moves.touchToes,
    moves.burpee,
    moves.crossJumps,
    moves.crossRotation,
    moves.coolDown,
    moves.pushUp,
    moves.sitUps,
    moves.bicepCurl,
    moves.coolDown
]

export const narutoMoves = [
    moves.armStretch,
    moves.touchToes,
    moves.jumpingJack,
    moves.upRock,
    moves.footwork,
    moves.freeze,
    moves.coolDown,
    moves.bikeCrunch,
    moves.sitUps,
    moves.pushUp,
    moves.bicepCurl,
    moves.coolDown
]
