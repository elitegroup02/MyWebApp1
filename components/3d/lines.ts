import * as THREE from 'three';


export const Lines = () => {
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    let camX: number = -100, camY: number = 0, camZ: number = 10;
    let cameraViewPoint = new THREE.Vector3(0, 0, 0);
    camera.position.set(camX, camY, camZ);
    camera.lookAt(cameraViewPoint);

    let scene = new THREE.Scene();

    //create a blue LineBasicMaterial
    let material = new THREE.LineBasicMaterial({color: 0xffff00});

    let points = [];
    let point1 = new THREE.Vector3(0, 0, 0);
    let point2 = new THREE.Vector3(20, 0, 0);
    let point3 = new THREE.Vector3(0, 20, 0);
    let point4 = new THREE.Vector3(10, 10, 30);

    points.push(point1);
    points.push(point2);
    points.push(point1);
    points.push(point3);
    points.push(point2);
    points.push(point3);
    points.push(point1);
    points.push(point4);
    points.push(point2);
    points.push(point4);
    points.push(point3);
    points.push(point4);

    let geometry = new THREE.BufferGeometry().setFromPoints(points);

    let line = new THREE.Line(geometry, material);

    scene.add(line);

    const animate = () => {
      requestAnimationFrame(animate);

      camera.translateX(-0.20);
      camera.lookAt(cameraViewPoint);

      renderer.render(scene, camera);
    };
    animate();
}
