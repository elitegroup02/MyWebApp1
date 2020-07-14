import * as THREE from 'three';


export const Flag = () => {
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    const camX: number = -20, camY: number = 0, camZ: number = 10;
    let cameraViewPoint = new THREE.Vector3(0, 0, 0);
    camera.position.set(camX, camY, camZ);
    camera.lookAt(cameraViewPoint);

    let scene = new THREE.Scene();

    let flagMaterial = new THREE.LineBasicMaterial({color: 0xffff00});
    let flagBaseMaterial = new THREE.LineBasicMaterial({ color: 0x101c59});
    let flagPoleMaterial = new THREE.LineBasicMaterial({ color: 0x85230b});

    const flagGeometry = new THREE.BoxGeometry(7, 4, 0.1);
    const flagBaseGeometry = new THREE.BoxGeometry(4, 0.5, 4);
    const flagPoleGeometry = new THREE.CylinderGeometry(0.25, 0.25, 12, 20, 4);


    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    const flagBase = new THREE.Mesh(flagBaseGeometry, flagBaseMaterial);
    const flagPole = new THREE.Mesh(flagPoleGeometry, flagPoleMaterial);

    flag.translateY(4);
    flag.translateX(3.7);
    flagBase.translateY(-6);

    scene.add(flag, flagBase, flagPole);

    const animate = () => {
        requestAnimationFrame(animate);

        camera.translateX(-0.10);
        camera.lookAt(cameraViewPoint);

        renderer.render(scene, camera);
    };
    animate();
}
