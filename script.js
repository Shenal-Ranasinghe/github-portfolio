// ===== Page Loader =====
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 1000);
    }
});

// ===== Profile Image Alternating =====
const profileImages = document.querySelectorAll('.profile-img');
if (profileImages.length > 1) {
    let currentImageIndex = 0;
    
    setInterval(() => {
        // Remove active class from current image
        profileImages[currentImageIndex].classList.remove('active');
        
        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % profileImages.length;
        
        // Add active class to next image
        profileImages[currentImageIndex].classList.add('active');
    }, 6000); // Switch every 6 seconds
}

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a direct link (not dropdown toggles)
    document.querySelectorAll('.nav-links > li > a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ===== Dropdown Menu Handling =====
// Handle dropdown clicks on mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = toggle.closest('.nav-dropdown');
            const wasActive = dropdown.classList.contains('active');
            
            // Close all other dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active', !wasActive);
        }
    });
});

// Close dropdown when clicking dropdown item
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
        document.querySelectorAll('.nav-dropdown').forEach(d => {
            d.classList.remove('active');
        });
    });
});

// ===== Typing Animation =====
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const texts = [
        'RFIC Design Enthusiast',
        'Embedded Systems Engineer',
        'Antenna Design Specialist',
        'Electronics Engineering Student',
        'RF Circuit Designer'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeText, typingSpeed);
    }

    // Start typing animation
    setTimeout(typeText, 1000);
}

// ===== Smooth Scroll & Active Navigation =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

if (sections.length > 0 && navItems.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
        
        // Add scrolled class to nav
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });
}

// ===== Project Filtering =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    const status = card.getAttribute('data-status');
                    if (status === filter) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeInUp 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Set first filter button as active by default
    if (filterButtons.length > 0) {
        filterButtons[0].classList.add('active');
    }
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.project-card, .skill-category, .experience-card, .achievement-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    // Show loading state when form is submitted
    contactForm.addEventListener('submit', (e) => {
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        
        if (btnText && btnLoading) {
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
        }
        
        if (submitBtn) {
            submitBtn.disabled = true;
        }
        
        // Show notification
        showNotification('Sending your message...', 'info');
    });
}

// Check if user just returned from form submission
if (window.location.hash === '#contact' && document.referrer.includes('formsubmit.co')) {
    setTimeout(() => {
        showNotification('Thank you for your message! I will get back to you soon. 📧', 'success');
        // Clear the form if it still has data
        if (contactForm) {
            contactForm.reset();
        }
    }, 500);
}

// Also check URL parameter for success
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('submitted') === 'true') {
    showNotification('Thank you for your message! I will get back to you soon. 📧', 'success');
    // Remove the parameter from URL
    window.history.replaceState({}, document.title, window.location.pathname + '#contact');
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1.5rem 2rem;
        background: ${type === 'success' ? 'rgba(40, 167, 69, 0.9)' : 'rgba(220, 53, 69, 0.9)'};
        color: white;
        border-radius: 10px;
        font-family: var(--font-sans);
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.4s ease-out;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 3000);
}

// ===== Enhanced Circuit Background Animation =====
const circuitBg = document.querySelector('.circuit-bg');

if (circuitBg) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    circuitBg.appendChild(canvas);
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Enhanced Circuit nodes with more properties
    const nodes = [];
    const nodeCount = 80;
    
    class Node {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.connections = 0;
            this.maxConnections = 3;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off walls
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
            
            // Keep in bounds
            this.x = Math.max(0, Math.min(width, this.x));
            this.y = Math.max(0, Math.min(height, this.y));
            
            this.connections = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            // Gradient fill
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
            gradient.addColorStop(0, 'rgba(0, 245, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(123, 47, 247, 0.2)');
            
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(0, 245, 255, 0.5)';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }
    
    // Mouse interaction
    let mouse = { x: null, y: null, radius: 150 };
    
    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150 && nodes[i].connections < nodes[i].maxConnections && nodes[j].connections < nodes[j].maxConnections) {
                    nodes[i].connections++;
                    nodes[j].connections++;
                    
                    const opacity = (1 - distance / 150) * 0.5;
                    
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    
                    // Gradient line
                    const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                    gradient.addColorStop(0, `rgba(0, 245, 255, ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(123, 47, 247, ${opacity})`);
                    gradient.addColorStop(1, `rgba(255, 0, 110, ${opacity})`);
                    
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            
            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = nodes[i].x - mouse.x;
                const dy = nodes[i].y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const opacity = (1 - distance / mouse.radius) * 0.8;
                    
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    
                    // Push nodes away from mouse
                    nodes[i].x += dx * 0.02;
                    nodes[i].y += dy * 0.02;
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        nodes.forEach(node => {
            node.update();
            node.draw();
        });
        
        drawConnections();
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            nodes.forEach(node => node.reset());
        }, 250);
    });
}

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.rf-circuit, .hero-text');
    
    parallaxElements.forEach(el => {
        if (el) {
            const speed = el.classList.contains('rf-circuit') ? 0.5 : 0.3;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
});

// ===== Add animation keyframes dynamically =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Console message =====
console.log('%c🚀 Portfolio Website Loaded Successfully! ', 'background: linear-gradient(135deg, #00f5ff 0%, #7b2ff7 100%); color: white; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
console.log('%cRF/IC Portfolio - Shenal Ranasinghe', 'color: #00f5ff; font-size: 14px; font-weight: bold;');

// ===== Certificate Modal Functions =====
function openCertificate(certPath) {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');
    const downloadLink = document.getElementById('downloadCertificate');
    
    if (modal && frame && downloadLink) {
        // Set the certificate source
        frame.src = certPath;
        downloadLink.href = certPath;
        
        // Show the modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');
    
    if (modal && frame) {
        modal.style.display = 'none';
        frame.src = ''; // Clear the source
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside the certificate content
document.addEventListener('click', (e) => {
    const modal = document.getElementById('certificateModal');
    if (e.target === modal) {
        closeCertificate();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificate();
        closeLightbox();
    }
});

// ===== Lightbox Modal Functions =====
function openLightbox(imagePath) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    
    if (modal && img) {
        img.src = imagePath;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
        // Clear image source after animation
        setTimeout(() => {
            if (img) img.src = '';
        }, 300);
    }
}

// Prevent closing when clicking on the image itself
document.addEventListener('DOMContentLoaded', () => {
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) {
        lightboxImg.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

// ===== Gallery Carousel Functionality =====
var carouselPositions = {
    mtts: 0,
    travel: 0,
    life: 0
};

var carouselIntervals = {};
var touchStartX = {};
var touchEndX = {};

function moveCarousel(category, direction) {
    const track = document.getElementById(`${category}-track`);
    if (!track) return;
    
    const slides = track.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    
    if (slideCount === 0) return;
    
    // Initialize position if not exists
    if (carouselPositions[category] === undefined) {
        carouselPositions[category] = 0;
    }
    
    // Calculate slides visible based on screen width
    let slidesVisible = 3;
    if (window.innerWidth <= 600) {
        slidesVisible = 1;
    } else if (window.innerWidth <= 1024) {
        slidesVisible = 2;
    }
    
    const maxPosition = Math.max(0, slideCount - slidesVisible);
    
    // Update position
    carouselPositions[category] += direction;
    
    // Loop around
    if (carouselPositions[category] < 0) {
        carouselPositions[category] = maxPosition;
    } else if (carouselPositions[category] > maxPosition) {
        carouselPositions[category] = 0;
    }
    
    // Calculate slide width and gap
    const slideWidth = slides[0].offsetWidth;
    const gap = 32; // 2rem = 32px (16px for mobile)
    const actualGap = window.innerWidth <= 600 ? 16 : gap;
    const moveAmount = (slideWidth + actualGap) * carouselPositions[category];
    
    // Apply transform with smooth transition
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${moveAmount}px)`;
}

// Auto-scroll carousel on mobile
function startAutoScroll(category) {
    if (window.innerWidth > 600) return; // Only on mobile
    
    carouselIntervals[category] = setInterval(() => {
        moveCarousel(category, 1);
    }, 5000); // Move every 5 seconds for better viewing
}

// Touch swipe support
function initTouchSupport(category) {
    const carousel = document.getElementById(`${category}-carousel`);
    if (!carousel) return;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX[category] = e.changedTouches[0].screenX;
        // Pause auto-scroll on touch
        if (carouselIntervals[category]) {
            clearInterval(carouselIntervals[category]);
        }
    });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX[category] = e.changedTouches[0].screenX;
        handleSwipe(category);
        // Resume auto-scroll after swipe with longer delay
        setTimeout(() => startAutoScroll(category), 3000);
    });
}

function handleSwipe(category) {
    const swipeThreshold = 50;
    const diff = touchStartX[category] - touchEndX[category];
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - move to next
            moveCarousel(category, 1);
        } else {
            // Swipe right - move to previous
            moveCarousel(category, -1);
        }
    }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    ['mtts', 'travel', 'life'].forEach(category => {
        initTouchSupport(category);
        if (window.innerWidth <= 600) {
            startAutoScroll(category);
        }
    });
});

// Reset carousel positions on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Clear all intervals
        Object.keys(carouselIntervals).forEach(key => {
            if (carouselIntervals[key]) {
                clearInterval(carouselIntervals[key]);
            }
        });
        
        // Reset all carousels
        Object.keys(carouselPositions).forEach(category => {
            carouselPositions[category] = 0;
            const track = document.getElementById(`${category}-track`);
            if (track) {
                track.style.transform = 'translateX(0)';
            }
        });
        
        // Restart auto-scroll if on mobile
        if (window.innerWidth <= 600) {
            ['mtts', 'travel', 'life'].forEach(category => {
                startAutoScroll(category);
            });
        }
    }, 250);
});
