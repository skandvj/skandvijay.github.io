// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// Achievements Logic
// Achievements Logic
const achievements = [
    { image: 'award.png', text: 'x2 Best Employee award from Gap Inc.' },
    { image: 'nasscom_certificate.png', text: 'Gold Medal for IOT Domain Specialist exam by Govt. of India.' },
    { image: 'otaku.png', text: 'Founder of fastest growing club at VIT University' },
    { image: 'instalogo.png', text: 'Built a community with 10,000+ daily interactions.' },
];


let currentAchievement = 0;

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const achievementContainer = document.getElementById('achievement-container');
    const achievementImage = document.getElementById('achievement-image');
    const achievementText = document.getElementById('achievement-text');

    if (!achievementContainer || !achievementImage || !achievementText) {
        console.error("One or more achievement elements are missing!");
        return;
    }

    function updateAchievement() {
        const achievement = achievements[currentAchievement];

        // Fade Out Effect
        achievementContainer.style.opacity = 0;

        setTimeout(() => {
            // Update content
            achievementImage.src = achievement.image;
            achievementText.textContent = achievement.text;

            // Fade In Effect
            achievementContainer.style.opacity = 1;

            // Move to the next achievement
            currentAchievement = (currentAchievement + 1) % achievements.length;
        }, 500); // Sync with CSS fade transition

        setTimeout(updateAchievement, 4000); // Display time for each achievement
    }

    // Start the achievement cycle
    updateAchievement();
});



document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.getElementById("about-text");

   
    const content = `
        <p>Hi, I am Skand, I never set out to be a product manager, but looking back, it feels inevitable. My journey began in the world of Software Product Management, knee-deep in data pipelines, backend systems, and automation frameworks. At first, it was all about solving technical problems—optimizing queries, debugging code, and making things run faster. But over time, I realized that the real challenge wasn’t just writing better code—it was figuring out <strong>why</strong> we were building things in the first place. That’s when I became obsessed with <strong>product thinking</strong>.</p>


        <p>But that wasn’t enough. I wanted to go deeper into <strong>AI-driven decision-making</strong>, not just automation. At Carnegie Mellon University, I immersed myself in <strong>machine learning, business strategy, and analytics</strong>, bridging the gap between AI’s raw power and real-world business needs. I worked with researchers analyzing <strong>how ad-blockers shape consumer behavior</strong>, exploring how AI could make sense of human attention. In every role, I realized that great product management isn’t about features or roadmaps—it’s about asking the right questions and letting <strong>AI unlock answers we never knew existed</strong>.</p>

        <p>Today, I thrive at the intersection of <strong>AI, business, and product innovation</strong>. My obsession? Building products that don’t just <strong>react</strong> to data but can <strong>anticipate and shape the future</strong>. Whether it’s AI-driven automation, market-defining analytics, or intelligent systems that enhance decision-making, my focus is on making sure <strong>technology serves people—not the other way around</strong>.</p>

        <p>So here I am—still solving problems, still building, still questioning everything. Not just a product manager, but a storyteller, a strategist, and a firm believer that the best products aren’t just built—they evolve, adapt, and learn. Just like us. 🚀</p>
    `;
    aboutText.innerHTML = content;
});

{/* <p>One of my most defining moments was when I found myself staring at a <strong>massive financial data problem</strong>—a backlog worth millions in unprocessed journal entries. Engineers saw it as a database issue. Finance teams saw it as a process failure. I saw it as an opportunity. Instead of just fixing a system, I designed an <strong>AI-powered workflow automation</strong> that didn't just process data—it predicted <strong>bottlenecks before they happened</strong>, giving finance teams insights instead of headaches. That single initiative turned into a product, saving countless hours and financial risks.</p> */}



document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        {
            title: "Optimizing eCommerce with Machine Learning: Predicting Customer Lifetime Value for Samsung",
            description: "Discover how ML-driven CLV prediction enhances customer retention and engagement.",
            image: "Images/samsung.png",
            link: "experience/blog-samsung-clv.html"
        },
        {
            title: "Understanding the Socioeconomic Impact of Ad-Blockers and Anti-Trackers",
            description: "Explore how income levels influence the adoption of ad-blockers and their impact on digital privacy and advertising.",
            image: "Images/socio-economic.png",
            link: "experience/blog-adblockers.html"
        }
        // ,
        // {
        //     title: "AI-Powered Product Visualization – The Future of Augmented Reality",
        //     description: "Exploring how AI and AR can revolutionize eCommerce through immersive product experiences.",
        //     image: "Images/ai_product_visualization.jpg",
        //     link: "blog-ai-visualization.html"
        // }
    ];

    const blogGrid = document.querySelector('.blog-grid');

    blogPosts.forEach(post => {
        const blogHTML = `
            <div class="blog-card">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-content">
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-desc">${post.description}</p>
                    <a href="${post.link}" class="blog-read-more">Read More</a>
                </div>
            </div>
        `;
        blogGrid.innerHTML += blogHTML;
    });
});



function scheduleCall() {
    // Replace with your Calendly link
    var calendlyLink = "https://calendar.google.com/calendar/u/0/r/week?hl=en";

    // Open the link in a new tab
    window.open(calendlyLink, '_blank');
}


const typingText = document.querySelector('.dynamic-text');
const words = ['Product Manager','Artificial Intelligence Advocate', 'Data Science Enthusiast', 'Community Builder'];
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

// Add event listener to the "SV" logo to scroll to the top of the page
document.getElementById('scroll-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Smooth scroll effect
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = [

        {
            title: "Predictive Sales Performance Optimization for Netflix",
            image: "netflix.png",
            // viewMoreLink: "projects/sketchai.html",
            githubLink: "https://github.com/skandvj/Predictive-Sales-Performance-Optimization-for-Netflix.git"
        },

        {
            title: "Customer Lifetime Value (CLV) & Market Segmentation using Machine Learning",
            image: "starbucks.png",
            // viewMoreLink: "projects/sketchai.html",
            githubLink: "https://github.com/skandvj/Customer-Lifetime-Value-CLV-Market-Segmentation-using-Machine-Learning"
        },

        {
            title: "SketchAI - Convert Sketches into Product Ready Images",
            image: "Images/sketchai.webp",
            viewMoreLink: "projects/sketchai.html",
            githubLink: "https://github.com/skandvj/SketchAI--Creates-Sketches-into-Product-Ready-Images"
        },
        {
            title: "AI-Powered Frame-Level Speech Classification",
            image: "Images/speechclassification.png",
            viewMoreLink: "projects/speech-classification.html",
            githubLink: "https://github.com/skandvj/HW1P2-Frame-Level-Speech-Recognition"
        },
        {
            title: "Virtual Assistant for Visually Impaired",
            image: "Images/virtualasssistant.jpeg",
            viewMoreLink: "projects/vision-blind.html",
            githubLink: "https://github.com/skandvj/VisionForBlind"
        }
        
    ];

    const projectsGrid = document.querySelector(".projects-grid");

    projects.forEach(project => {
        const projectHTML = `
            <div class="project-card">
                <div class="project-content">
                    <div class="project-visual">
                        <img src="${project.image}" class="project-image" alt="${project.title}" />
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-buttons">
                       
                            <a href="${project.githubLink}" class="github-link" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectHTML;
    });
});
{/* <a href="${project.viewMoreLink}" class="view-more-btn">View More</a> */}


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
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,        // Start visible
    y: 0,              // No vertical movement
    scale: 1,          // No scaling effect
    rotationX: 0,      // No rotation
    rotationY: 0,      // No rotation
    duration: 0.5,     // Shorten duration for a quicker transition
    ease: "power4.out",
    stagger: 0.1
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

function openResume() {
    window.open("Skand_Vijay.pdf", "_blank");
}


// // Form submission alert
// document.getElementById('contact-form').addEventListener('submit', e => {
//     e.preventDefault();
//     alert('Thank you for your message! I will get back to you soon.');
//     e.target.reset();
// });

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
