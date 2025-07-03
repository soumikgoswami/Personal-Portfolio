// script.js
// Three.js setup
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;
let centralObject, projectImagePlane;
const textureLoader = new THREE.TextureLoader();

const pageColors = {
    'objective': new THREE.Color(0x00bcd4), // Cyan
    'education': new THREE.Color(0x4CAF50), // Green
    'skills': new THREE.Color(0xFFC107),    // Amber
    'projects': new THREE.Color(0xF44336),  // Red
    'certifications': new THREE.Color(0x9C27B0), // Purple
    'hobbies': new THREE.Color(0x2196F3)    // Blue
};

// Placeholder project images (these are used directly in HTML, but kept here for reference if 3D plane needs specific images)
const projectImages = {
    'AI Assistant': 'https://placehold.co/600x400/00bcd4/ffffff?text=AI+Assistant+Image',
    'Restaurant Website': 'https://placehold.co/600x400/00bcd4/ffffff?text=Restaurant+Website+Image',
    'Netflix Clone': 'https://placehold.co/600x400/00bcd4/ffffff?text=Netflix+Clone+Image'
};

// Function to initialize the Three.js scene
function initThreeJS() {
    // Create a scene
    scene = new THREE.Scene();

    // Create a camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGL renderer
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Create particles for a subtle background effect
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
        // Position particles randomly in a cube
        positions[i * 3] = (Math.random() * 2 - 1) * 100; // x
        positions[i * 3 + 1] = (Math.random() * 2 - 1) * 100; // y
        positions[i * 3 + 2] = (Math.random() * 2 - 1) * 100; // z

        // Assign random colors
        color.setHSL(Math.random(), 0.7, 0.5);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create a central 3D object (e.g., a dodecahedron)
    const centralGeometry = new THREE.DodecahedronGeometry(1.5);
    const centralMaterial = new THREE.MeshPhongMaterial({ color: pageColors['objective'], flatShading: true });
    centralObject = new THREE.Mesh(centralGeometry, centralMaterial);
    scene.add(centralObject);

    // Create a plane for displaying project images in 3D
    const projectPlaneGeometry = new THREE.PlaneGeometry(4, 2.5); // Adjust size as needed
    const projectPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0 }); // Initially transparent
    projectImagePlane = new THREE.Mesh(projectPlaneGeometry, projectPlaneMaterial);
    projectImagePlane.position.set(0, 0, -3); // Position it behind the main content
    scene.add(projectImagePlane);
    projectImagePlane.visible = false; // Initially hidden

    // Event listeners for mouse interaction
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    // Set up navigation
    setupNavigation();
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Handle mouse movement for camera rotation
function onDocumentMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) / 100;
    mouseY = (event.clientY - window.innerHeight / 2) / 100;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate particles based on mouse position
    if (particles) {
        particles.rotation.x += (mouseY * 0.005 - particles.rotation.x) * 0.05;
        particles.rotation.y += (mouseX * 0.005 - particles.rotation.y) * 0.05;
    }

    // Rotate central object
    if (centralObject) {
        centralObject.rotation.x += 0.005;
        centralObject.rotation.y += 0.005;
    }

    // Render the scene
    renderer.render(scene, camera);
}

// Function to show a specific page and update 3D elements
function showPage(pageId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected content section
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }

    // Update central 3D object color
    if (centralObject && pageColors[pageId]) {
        centralObject.material.color.set(pageColors[pageId]);
    }

    // Handle project image plane visibility and texture
    if (pageId === 'projects') {
        projectImagePlane.visible = true;
        // Load a generic project image texture for the 3D plane
        textureLoader.load('https://placehold.co/600x400/00bcd4/ffffff?text=Projects+Overview',
            function (texture) {
                projectImagePlane.material.map = texture;
                projectImagePlane.material.opacity = 1.0;
                projectImagePlane.material.needsUpdate = true;
            },
            undefined,
            function (err) {
                console.error('An error happened loading the project overview texture.', err);
            }
        );
    } else {
        projectImagePlane.visible = false;
        projectImagePlane.material.opacity = 0.0; // Fade out
    }
}

// Set up navigation event listeners
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const pageId = this.dataset.page;
            showPage(pageId);
        });
    });

    // Show the initial page (Objective/About)
    showPage('objective');
}

// Initialize Three.js and set up navigation when the window loads
window.onload = function() {
    initThreeJS();
    animate();
};
