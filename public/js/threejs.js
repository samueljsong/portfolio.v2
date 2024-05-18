import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

    /**
     * Object
     */
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    /**
     * Load and add STL model
     */
    const gltfLoader = new GLTFLoader();

    // gltfLoader.load(
    //     "3d/banana/scene.gltf",
    //     (gltf) => {
    //         gltf.scene.scale.set(0.01, 0.01, 0.01);
    //         scene.add(gltf.scene);
    //     },
    //     undefined,
    //     (error) => {
    //         console.log(error);
    //     }
    // );

    /**
     * Sizes
     */
    const sizes = {
        width: 800,
        height: 800,
    };

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height);
    camera.position.z = 5;
    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
    });

    // renderer.setSize(100, sizes.height);
    renderer.render(scene, camera);

    const animate = () => {
        requestAnimationFrame(animate);

        // Required if controls are used
        // controls.update();

        renderer.render(scene, camera);
    };
    animate();
});
