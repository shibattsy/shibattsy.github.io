let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight, 0.5, 1000
);
camera.position.z = 5;
const loader = new THREE.TextureLoader();
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
 //Cube
 let geometry = new THREE.BoxGeometry(1, 1, 1);
 console.log(geometry.parameters);
 //let material = new THREE.MeshBasicMaterial({color: 0xff0000});
 let material = new THREE.MeshBasicMaterial({ map: loader.load('1.jpg'),});
 let cube = new THREE.Mesh(geometry, material);
 //cube.scale.set( 1, 2, 3 );
 scene.add(cube);
 function animate(){
    
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();