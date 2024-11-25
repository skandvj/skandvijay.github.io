// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// // Custom cursor initialization
// const cursor = document.querySelector('.cursor');
// const cursorFollower = document.querySelector('.cursor-follower');
// document.addEventListener('mousemove', (e) => {
//     gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
//     gsap.to(cursorFollower, { x: e.clientX, y: e.clientY, duration: 0.3 });
// });



// Typing effect setup
const typingText = document.querySelector('.dynamic-text');
const words = ['Aspiring Product Manager', 'Tech Enthusiast', 'Community Builder', 'Former Software Engineer'];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    typingText.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}
typeEffect();

gsap.registerPlugin(ScrollTrigger);



// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Scroll-based animations
function handleScrollAnimations() {
    const sections = [
        { selector: '.about-content', delay: 300 },
        { selector: '.skills-section' }
    ];

    sections.forEach(({ selector, delay = 0 }) => {
        const section = document.querySelector(selector);
        if (isInViewport(section) && !section.classList.contains('animate')) {
            section.classList.add('animate');
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
                setTimeout(() => p.classList.add('animate'), delay * (index + 1));
            });
        }
    });
}
window.addEventListener('scroll', handleScrollAnimations);

// Enhanced "About Me" Section Transition
// Enhanced "About Me" Section Transition with GSAP
const aboutSection = document.querySelector(".about-me");

gsap.from(aboutSection, {
    scrollTrigger: {
        trigger: aboutSection,
        start: "top 80%", // Trigger animation when 80% of the section is in the viewport
        end: "top 50%", // End the animation at 50% into the viewport
        toggleActions: "play none none reverse", // Play on entering and reverse on leaving
    },
    opacity: 0,        // Fade-in from transparent
    y: 80,             // Start from below and move up
    scale: 0.95,       // Slightly scale up for a zoom effect
    rotationX: 15,     // Add a slight 3D tilt for depth
    rotationY: -10,    // Slight tilt for more perspective
    ease: "power4.out", // Smooth, soft easing for better flow
    stagger: 0.05      // Faster stagger for quicker sequences (if needed)
});




// Hero animation with Three.js
// Particle Background
const heroCanvas = document.getElementById('hero-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, heroCanvas.clientWidth / heroCanvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true });
renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
camera.position.z = 5;

// Resize Canvas
window.addEventListener('resize', () => {
    camera.aspect = heroCanvas.clientWidth / heroCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
});

// Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 7000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: '#00cec9',
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

function animateParticles() {
    particlesMesh.rotation.y += 0.002;
    renderer.render(scene, camera);
    requestAnimationFrame(animateParticles);
}
animateParticles();

// Achievements Logic
// Achievements Logic
const achievements = [
    {
        image: 'Images/award.png',
        text: 'x2 Best Employee award from Gap Inc.',
    },
    {
        image: 'Images/nasscom.png',
        text: 'Gold Medal for IOT Domain Specialist exam by Govt. of India.',
    },
    {
        image: 'Images/otaku.png',
        text: 'Founder of fastest growing club at VIT University',
    },
    {
        image: 'Images/instalogo.png',
        text: 'Built a community with 10,000+ daily interaction.',
    },
];

let currentAchievement = 0;
const achievementContainer = document.getElementById('achievement-container');
const achievementImage = document.getElementById('achievement-image');
const achievementText = document.getElementById('achievement-text');

function updateAchievement() {
    const achievement = achievements[currentAchievement];
    achievementImage.src = achievement.image;
    achievementText.textContent = achievement.text;

    // Fade in
    achievementContainer.style.opacity = 1;

    // Schedule next achievement
    setTimeout(() => {
        // Fade out
        achievementContainer.style.opacity = 0;

        // Move to the next achievement
        currentAchievement = (currentAchievement + 1) % achievements.length;
        setTimeout(updateAchievement, 1000); // Wait for fade-out to finish
    }, 4000); // Display time for each achievement
}

// Start achievements cycle
updateAchievement();



// Scroll-triggered animations with GSAP
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: { trigger: title, start: "top 80%", end: "top 20%", toggleActions: "play none none reverse" },
        opacity: 0, y: 50, duration: 1
    });
});

gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 80%", end: "top 20%", toggleActions: "play none none reverse" },
        opacity: 0, x: i % 2 === 0 ? -50 : 50, duration: 1
    });
});

// Stats counter with GSAP
document.querySelectorAll(".stat-number").forEach(stat => {
    const target = parseInt(stat.getAttribute("data-target"));
    let current = 0;
    const increment = target >= 1000000 ? target / 100 : 1;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        stat.textContent = target >= 1000000 ? `${(current / 1000000).toFixed(1)} Million+` : `${Math.floor(current)}+`;
    }, 10);
});

// Mobile menu toggle
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-btn').classList.toggle('open');
    document.querySelector('.nav-links').classList.toggle('show');
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
});

// Project canvas particle effect
document.querySelectorAll('.project-canvas').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    let particles = [];
    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    };
    Particle.prototype.draw = function () {
        ctx.fillStyle = '#0984e3';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };
    function init() {
        particles = [];
        for (let i = 0; i < 50; i++) particles.push(new Particle(canvas.width / 2, canvas.height / 2));
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
            if (p.size <= 0.2) particles.splice(particles.indexOf(p), 1);
        });
        if (particles.length < 50) particles.push(new Particle(canvas.width / 2, canvas.height / 2));
        requestAnimationFrame(animate);
    }
    init();
    animate();
});

// Window resize handler
window.addEventListener('resize', () => {
    camera.aspect = heroCanvas.clientWidth / heroCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
    document.querySelectorAll('.project-canvas').forEach(canvas => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    });
});
