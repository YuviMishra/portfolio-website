// ==========================================
// Prakash Mishra — AI Developer Portfolio
// Neural network, animations, interactions
// ==========================================

// ===== Loading Screen =====
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        document.body.style.overflow = '';
    }, 2200);
});
document.body.style.overflow = 'hidden';

// ===== Cursor Glow (Desktop only) =====
(function cursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow || window.innerWidth < 768) return;
    let mx = 0, my = 0, gx = 0, gy = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
    });
    function animate() {
        gx += (mx - gx) * 0.08;
        gy += (my - gy) * 0.08;
        glow.style.left = gx + 'px';
        glow.style.top = gy + 'px';
        requestAnimationFrame(animate);
    }
    animate();
})();

// ===== Neural Network Canvas =====
(function initNeural() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let nodes = [];
    let mouse = { x: -1000, y: -1000 };
    const NODE_COUNT = Math.min(80, Math.floor(window.innerWidth / 15));
    const CONNECT_DIST = 160;
    const MOUSE_DIST = 200;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createNode() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            r: Math.random() * 2.5 + 0.8,
            baseR: 0,
            opacity: Math.random() * 0.5 + 0.15,
            hue: Math.random() > 0.5 ? 260 : 170 // purple or teal
        };
    }

    function init() {
        resize();
        nodes = [];
        for (let i = 0; i < NODE_COUNT; i++) {
            const n = createNode();
            n.baseR = n.r;
            nodes.push(n);
        }
    }

    document.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach((n, i) => {
            // Move
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
            if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

            // Mouse interaction — glow near cursor
            const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y);
            if (dm < MOUSE_DIST) {
                const force = (1 - dm / MOUSE_DIST) * 0.5;
                n.r = n.baseR + force * 4;
                n.opacity = Math.min(1, n.opacity + force * 0.3);
            } else {
                n.r += (n.baseR - n.r) * 0.05;
            }

            // Draw node
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            const color = n.hue === 260
                ? `rgba(167, 139, 250, ${n.opacity})`
                : `rgba(6, 214, 160, ${n.opacity})`;
            ctx.fillStyle = color;
            ctx.fill();

            // Connections
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = n.x - nodes[j].x;
                const dy = n.y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const alpha = 0.12 * (1 - dist / CONNECT_DIST);
                    ctx.beginPath();
                    ctx.moveTo(n.x, n.y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }

            // Mouse connections
            if (dm < MOUSE_DIST) {
                const alpha = 0.25 * (1 - dm / MOUSE_DIST);
                ctx.beginPath();
                ctx.moveTo(n.x, n.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); });
    init();
    draw();
})();

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Active Nav Link =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// ===== Typewriter Effect =====
(function typewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const texts = [
        'AI Developer',
        'Copilot Agent Builder',
        'Multi-Agent Architect',
        'Generative AI Engineer',
        'RAG & LLM Specialist',
        'Python Backend Expert',
        'Cloud Solutions Developer'
    ];
    let ti = 0, ci = 0, deleting = false, delay = 100;

    function type() {
        const cur = texts[ti];
        if (deleting) {
            el.textContent = cur.substring(0, --ci);
            delay = 40;
        } else {
            el.textContent = cur.substring(0, ++ci);
            delay = 80;
        }
        if (!deleting && ci === cur.length) {
            delay = 2500;
            deleting = true;
        } else if (deleting && ci === 0) {
            deleting = false;
            ti = (ti + 1) % texts.length;
            delay = 400;
        }
        setTimeout(type, delay);
    }
    type();
})();

// ===== Counter Animation =====
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseFloat(counter.dataset.count);
        const isFloat = target % 1 !== 0;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        function update() {
            current += step;
            if (current >= target) {
                counter.textContent = isFloat ? target.toFixed(1) : Math.floor(target);
                return;
            }
            counter.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
            requestAnimationFrame(update);
        }
        update();
    });
}

// ===== Scroll Reveal =====
function setupReveal() {
    const elements = document.querySelectorAll(
        '.project-card, .skill-category, .cert-card, .timeline-item, .contact-card, .detail-item, .about-text p, .about-visual'
    );
    elements.forEach(el => el.classList.add('reveal'));
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.08 });
    elements.forEach(el => observer.observe(el));
}

// ===== Counter Trigger =====
let counterDone = false;
const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterDone) {
            counterDone = true;
            animateCounters();
        }
    });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ===== Card Tilt on Hover =====
function setupTilt() {
    document.querySelectorAll('.glow-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rx = -(y - cy) / 20;
            const ry = (x - cx) / 20;
            card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    setupReveal();
    setupTilt();
});
