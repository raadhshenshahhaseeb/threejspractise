import * as THREE from '../libs/three/three.module.js';
import {GLTFLoader} from '../libs/three/jsm/GLTFLoader.js';
import {OrbitControls} from "../libs/three/jsm/OrbitControls.js";
//Declaration of a new scene with three.js
const scene = new THREE.Scene();
//this line changes background color
scene.background = new THREE.Color(0x19BDFF)

// Camera and renderer config
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

//Controls
const orbControls = new OrbitControls(camera, renderer.domElement);
orbControls.enableDamping = true
orbControls.minDistance = 5
orbControls.maxDistance = 20
orbControls.enablePan = false
orbControls.maxPolarAngle = Math.PI / 2 - 0.05
orbControls.update();

// const loaderTerrain = new GLTFLoader();
// let objTerrain;
// loaderTerrain.load('../assets/grass2/scene.gltf', function (gltfTerrain) {
//     objTerrain = gltfTerrain.scene;
//     objTerrain.scale.set(15,10,10 )
//     gltfTerrain.scene.position.set(0, 10, 0)
//     scene.add(gltfTerrain.scene);
//
// }, undefined, function (error) {
//
//     console.error(error);
//
// });

const loaderMatilda = new GLTFLoader();
let objMatilda;
loaderMatilda.load('../assets/matilda/scene.gltf', function (gltfMatilda) {
    objMatilda = gltfMatilda.scene;
    gltfMatilda.scene.position.set(-1, 0, 0)
    objMatilda.scale.setScalar(1 / 100);
    scene.add(gltfMatilda.scene);
}, undefined, function (error) {

    console.error(error);

});
const loaderGreg = new GLTFLoader();
let objGreg;
loaderGreg.load('../assets/greg/scene.gltf', function (gltfGreg) {
    objGreg = gltfGreg.scene;
    objGreg.scale.setScalar(1);
    gltfGreg.scene.position.set(1, 0, 0)
    scene.add(gltfGreg.scene);
}, undefined, function (error) {

    console.error(error);

});


document.onkeydown = function (e) {
    if (e.keyCode === 37) {
        objGreg.position.x -= 0.1; // change x by -1 left
    } else if (e.keyCode === 38) {
        objGreg.position.z += 0.1; // change x by -1 up
    } else if (e.keyCode === 39) {
        objGreg.position.x += 0.1; // change x by -1 right
    } else if (e.keyCode === 40) {
        objGreg.position.z -= 0.1; // change x by -3 down
    } else if (e.keyCode === 69) {
        objGreg.position.y -= 0.1; // change x by -3 below
    }
}

const ambient_light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
scene.add(ambient_light);
camera.position.set(5, 5, 0);

function animate() {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

