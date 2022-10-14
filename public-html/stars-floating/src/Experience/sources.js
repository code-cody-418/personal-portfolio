export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path: [
            'textures/environmentMap/px.jpg',
            'textures/environmentMap/nx.jpg',
            'textures/environmentMap/py.jpg',
            'textures/environmentMap/ny.jpg',
            'textures/environmentMap/pz.jpg',
            'textures/environmentMap/nz.jpg',
        ]
    },
    {
        name: 'redDirtColorTexture',
        type: 'texture',
        path: 'textures/red-dirt/red_mud_stones_diff_1k.jpg'
    },
    {
        name: 'redDirtNormalTexture',
        type: 'texture',
        path: 'textures/red-dirt/red_mud_stones_nor_dx_1k.jpg'
    },
    {
        name: 'dragonModel',
        type: 'gltfModel',
        path: 'models/dragon/Dragon.gltf'
    },
    {
        name: 'chest01',
        type: 'draco',
        path: 'models/chests/Chest01.gltf'
    }
]