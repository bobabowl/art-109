// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~

let scene, camera, renderer, ball, cylinder, dog;
let sceneContainer = document.querySelector("#scene-container");
let mixer;
let actionPant, actionTail;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x015220);

    camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    sceneContainer.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(.2, 32, 16);
    const geometry2 = new THREE.CylinderGeometry(1, 1, 4, 32)
    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
    const material = new THREE.MeshStandardMaterial({ map: texture });

    ball = new THREE.Mesh(geometry, material);
    cylinder = new THREE.Mesh(geometry2, material);
    scene.add(ball);
    scene.add(cylinder);

    camera.position.z = 5;

    // const controls = new OrbitControls(camera, renderer.domElement);

}



// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~

const loader = new GLTFLoader(); // to load 3d models

loader.load("assets/dog_shiny.gltf", function (gltf) {
    dog = gltf.scene;
    scene.add(dog);
    dog.scale.set(2, 2, 2);
    dog.position.y = -3;

    mixer = new THREE.AnimationMixer(dog);
    const clips = gltf.animations;

    const clipPant = THREE.AnimationClip.findByName(clips, "pant");
    actionPant = mixer.clipAction(clipPant);
    // actionPant.play();

    const clipTail = THREE.AnimationClip.findByName(clips, "tail");
    actionTail = mixer.clipAction(clipTail);
    actionTail.play();


    const light = new THREE.DirectionalLight(0xffff000, 3);
    light.position.set(3, 4, 5);
    scene.add(light);

    const helper = new THREE.DirectionalLightHelper(light, 5);
    scene.add(helper);
})




// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
let mouseIsDown = false;

document.querySelector("body").addEventListener("mousedown", () => {
    actionPant.play();
    actionPant.paused = false;
    mouseIsDown = true;
    console.log("mousedown");
})
document.querySelector("body").addEventListener("mouseup", () => {
    actionPant.paused = true;
    mouseIsDown = false;
    console.log("mouseup");
})
document.querySelector("body").addEventListener("mousemove", () => {
    if (mouseIsDown == true) {

        ball.rotation.x += 0.5;
        ball.rotation.y += 0.5;
        console.log("mousemove");
    }
})

const clock = new THREE.Clock();
function animate() {


    requestAnimationFrame(animate);

    ball.rotation.x += 0.01;
    ball.rotation.y += 0.01;

    ball.position.x = Math.sin(Date.now() / 6000) * 4;
    ball.position.y = Math.sin(Date.now() / 4000) * 2;
    ball.position.z = Math.sin(Date.now() / 5000) * 5;

    cylinder.rotation.x += 0.05;
    cylinder.rotation.y += 0.05;

    if (dog) {
        // dog.rotation.x += 0.01;
        // dog.rotation.y += 0.01;

        dog.rotation.y = Math.sin(Date.now() / 500) * 1;
    }

    renderer.render(scene, camera);
    mixer.update(clock.getDelta());
}


function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener('resize', onWindowResize, false);
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    console.log("scroll");
    camera.position.z = t * 1;
    // camera.position.x = t * 0.01;
}
document.body.onscroll = moveCamera;
init();
animate();
moveCamera();
