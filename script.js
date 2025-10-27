// Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeNavigation();
    initializeFloatingCards();
    initializeAnimations();
    initializeContactForm();
    initializeParticleSystem();
    initializeScrollEffects();
    initializeLiveClock();
    initializeWeather();
    initializeTechStack();
    initializeProjectCards();
    initializeSkillItems();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Floating cards animation
function initializeFloatingCards() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.zIndex = '';
        });
        
        // Remove modal on click - no action
    });
}

// Show card modal with information
function showCardModal(cardName) {
    const cardInfo = getCardInfo(cardName);
    
    const modal = document.createElement('div');
    modal.className = 'card-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${cardInfo.title}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-icon">
                        <i class="${cardInfo.icon}"></i>
                    </div>
                    <p>${cardInfo.description}</p>
                    <div class="modal-features">
                        <h4>Texnologiyalar:</h4>
                        ${cardInfo.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary close-modal">Yopish</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close functionality
    modal.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        });
    });
    
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// Get card information
function getCardInfo(cardName) {
    const cardData = {
        'WEB DEV': {
            title: 'Web Dasturlash',
            icon: 'fas fa-laptop-code',
            description: 'Zamonaviy web texnologiyalari yordamida professional veb-saytlar va web ilovalar yarataman. Frontend va backend dasturlashda tajribam bor.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Node.js', 'PHP', 'Python']
        },
        'MOBILE': {
            title: 'Mobil Ilovalar',
            icon: 'fas fa-mobile-alt',
            description: 'Cross-platform mobil ilovalar yarataman. React Native, Flutter va native mobil dasturlash texnologiyalarida ishlayman.',
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
        },
        'DATABASE': {
            title: 'Ma\'lumotlar Bazasi',
            icon: 'fas fa-database',
            description: 'Ma\'lumotlar bazasi loyihalash va boshqarishda tajribam bor. SQL va NoSQL ma\'lumotlar bazalarida ishlayman.',
            technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Oracle']
        },
        'CLOUD': {
            title: 'Cloud Computing',
            icon: 'fas fa-cloud',
            description: 'Cloud texnologiyalari va servislar bilan ishlashda tajribam bor. AWS, Azure va Google Cloud platformalarida loyihalar yarataman.',
            technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD']
        },
        'AI/ML': {
            title: 'Sun\'iy Intellekt',
            icon: 'fas fa-robot',
            description: 'Machine Learning va Artificial Intelligence sohalarida ishlayman. AI modeli yaratish va integratsiya qilishda tajribam bor.',
            technologies: ['TensorFlow', 'PyTorch', 'Python', 'Scikit-learn', 'OpenAI', 'NLP']
        },
        'GAMES': {
            title: 'O\'yin Dasturlash',
            icon: 'fas fa-gamepad',
            description: 'O\'yin dasturlash va game development sohalarida tajribam bor. Unity, Unreal Engine va browser-based o\'yinlar yarataman.',
            technologies: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Phaser.js', 'Three.js']
        }
    };
    
    return cardData[cardName] || {
        title: cardName,
        icon: 'fas fa-code',
        description: 'Dasturlash va texnologiya sohasida xizmatlar.',
        technologies: ['Programming', 'Development', 'Coding']
    };
}

// Tech stack interaction
function initializeTechStack() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.background = 'rgba(0, 242, 254, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.background = '';
        });
        
        // Add click effect
        item.addEventListener('click', function() {
            const techName = this.querySelector('span').textContent;
            showTechInfo(techName);
        });
    });
}

// Show tech info modal
function showTechInfo(techName) {
    const techInfo = getTechInfo(techName);
    
    const modal = document.createElement('div');
    modal.className = 'tech-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${techName}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="tech-preview">
                        <div class="preview-icon">
                            <i class="fab fa-${techInfo.icon}"></i>
                        </div>
                        <div class="preview-content">
                            <h4>${techInfo.title}</h4>
                            <p>${techInfo.description}</p>
                            <div class="preview-features">
                                ${techInfo.features.map(feature => `<span>${feature}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content:center;gap:0;">
                    <button class="btn-primary close-modal">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close functionality
    modal.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.remove();
        });
    });
    
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            modal.remove();
        }
    });
}

// Get tech information
function getTechInfo(techName) {
    const techData = {
        'Python': {
            icon: 'python',
            title: 'Python Programming',
            description: 'Versatile programming language for web development, data science, and automation.',
            features: ['Web Development', 'Data Science', 'Machine Learning', 'Automation']
        },
        'JavaScript': {
            icon: 'js',
            title: 'JavaScript Development',
            description: 'Dynamic programming language for interactive web applications.',
            features: ['Frontend', 'Backend', 'Mobile Apps', 'Desktop Apps']
        },
        'React': {
            icon: 'react',
            title: 'React Framework',
            description: 'Modern JavaScript library for building user interfaces.',
            features: ['Component-based', 'Virtual DOM', 'Hooks', 'Ecosystem']
        },
        'Node.js': {
            icon: 'node-js',
            title: 'Node.js Runtime',
            description: 'JavaScript runtime for server-side development.',
            features: ['Server-side', 'Real-time', 'Microservices', 'NPM']
        }
    };
    
    return techData[techName] || {
        icon: 'code',
        title: techName,
        description: 'Technology and tool for development.',
        features: ['Development', 'Programming', 'Coding', 'Building']
    };
}

// Project cards interaction - Ultra-enhanced modern interactions
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Staggered entrance animation
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Advanced 3D tilt effect with magnetic attraction
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;
            
            // Magnetic effect - card follows cursor slightly
            const magneticX = (x - centerX) * 0.1;
            const magneticY = (y - centerY) * 0.1;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(25px) 
                scale(1.03)
                translate(${magneticX}px, ${magneticY}px)
            `;
            
            // Enhanced glow effect to icon
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.boxShadow = `
                    0 25px 60px rgba(0, 242, 254, 0.5),
                    0 0 0 2px rgba(255, 255, 255, 0.2)
                `;
                icon.style.transform = 'rotate(5deg) scale(1.1)';
            }
            
            // Add floating particles around card
            createFloatingParticles(card, e.clientX, e.clientY);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1) translate(0, 0)';
            
            // Reset icon effects
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.boxShadow = '';
                icon.style.transform = '';
            }
        });
        
        // Enhanced click effect with multiple ripples
        card.addEventListener('click', function(e) {
            const projectName = this.querySelector('h3').textContent;
            
            // Create multiple ripple effects
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    createRippleEffect(this, e.clientX, e.clientY, i);
                }, i * 100);
            }
            
            // Add click animation
            this.style.transform += ' scale(0.98)';
            setTimeout(() => {
                this.style.transform = this.style.transform.replace(' scale(0.98)', '');
            }, 150);
            
            // Show project modal after effects
            setTimeout(() => {
                showProjectModal(projectName);
            }, 500);
        });
        
        // Enhanced tech tag interactions
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach((tag, tagIndex) => {
            // Staggered hover effects
            tag.addEventListener('mouseenter', function() {
                setTimeout(() => {
                    this.style.transform = 'translateY(-4px) scale(1.08) rotate(2deg)';
                    this.style.background = 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)';
                    this.style.color = '#1e40af';
                    this.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
                }, tagIndex * 50);
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                this.style.background = '';
                this.style.color = '';
                this.style.boxShadow = '';
            });
            
            // Add click effect to tech tags
            tag.addEventListener('click', function(e) {
                e.stopPropagation();
                createTechTagRipple(this, e);
            });
        });
        
        // Enhanced button interactions
        const viewBtn = card.querySelector('.btn-view');
        const codeBtn = card.querySelector('.btn-code');
        
        if (viewBtn) {
            viewBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.05)';
                this.style.textShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                this.style.color = '#1d4ed8';
            });
            
            viewBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.textShadow = '';
                this.style.color = '';
            });
        }
        
        if (codeBtn) {
            codeBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.08)';
                this.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.5)';
                this.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
                this.style.color = 'white';
            });
            
            codeBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
                this.style.background = '';
                this.style.color = '';
            });
        }
        
        // Add scroll-triggered animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
}

// Create floating particles effect
function createFloatingParticles(card, x, y) {
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        const randomX = (Math.random() - 0.5) * 100;
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #00f2fe 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
            --random-x: ${randomX}px;
            animation: floatAway 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

// Create ripple effect for cards
function createRippleEffect(card, x, y) {
    const ripple = document.createElement('div');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * (0.8 + Math.random() * 0.4);
    const rippleX = x - rect.left - size / 2;
    const rippleY = y - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${rippleX}px;
        top: ${rippleY}px;
        background: radial-gradient(circle, rgba(0, 242, 254, 0.4) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.8s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    card.style.position = 'relative';
    card.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// Create ripple effect for tech tags
function createTechTagRipple(tag, e) {
    const ripple = document.createElement('div');
    const rect = tag.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 5;
    `;
    
    tag.style.position = 'relative';
    tag.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Show project modal
function showProjectModal(projectName) {
    const projectInfo = getProjectInfo(projectName);
    
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${projectName}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="project-preview">
                        <div class="preview-image">
                            <i class="fas fa-${projectInfo.icon}"></i>
                        </div>
                        <div class="preview-content">
                            <h4>${projectInfo.title}</h4>
                            <p>${projectInfo.description}</p>
                            <div class="preview-tech">
                                ${projectInfo.tech.map(tech => `<span>${tech}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="viewProject('${projectName}')">View Project</button>
                    <button class="btn-secondary" onclick="viewCode('${projectName}')">View Code</button>
                    <button class="btn-secondary close-modal">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close functionality
    modal.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.remove();
        });
    });
    
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            modal.remove();
        }
    });
}

// Get project information
function getProjectInfo(projectName) {
    const projectData = {
        'E-commerce Veb-sayt': {
            icon: 'laptop-code',
            title: 'E-commerce Platform',
            description: 'Full-featured e-commerce website with modern design and functionality. Includes payment integration, user management, and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux']
        },
        'Mobil Ilova': {
            icon: 'mobile-alt',
            title: 'Mobile Application',
            description: 'Cross-platform mobile application built with React Native. Features real-time updates and offline functionality.',
            tech: ['React Native', 'Firebase', 'Redux', 'Expo', 'Push Notifications']
        },
        'Dashboard': {
            icon: 'chart-line',
            title: 'Analytics Dashboard',
            description: 'Data visualization dashboard with real-time analytics. Interactive charts and customizable widgets.',
            tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'WebSocket']
        },
        'AI Chatbot': {
            icon: 'robot',
            title: 'AI Chatbot System',
            description: 'Intelligent chatbot powered by artificial intelligence. Natural language processing and machine learning integration.',
            tech: ['Python', 'OpenAI', 'FastAPI', 'TensorFlow', 'NLP']
        },
        'O\'yin Platformasi': {
            icon: 'gamepad',
            title: 'Gaming Platform',
            description: 'Multiplayer gaming platform with real-time gameplay. Unity-based games with cloud synchronization.',
            tech: ['Unity', 'C#', 'Photon', 'AWS', 'WebRTC']
        },
        'Cloud Storage': {
            icon: 'cloud',
            title: 'Cloud Storage Platform',
            description: 'Secure cloud storage solution with file management, sharing, and backup capabilities.',
            tech: ['AWS', 'Docker', 'Kubernetes', 'Node.js', 'MongoDB']
        },
        'Blog Platformasi': {
            icon: 'blog',
            title: 'Blog Platform',
            description: 'Modern CMS for content creation and management. SEO optimized with advanced analytics.',
            tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'Vercel']
        },
        'Restaurant App': {
            icon: 'shopping-cart',
            title: 'Restaurant Management',
            description: 'Complete restaurant solution with online ordering, table management, and payment processing.',
            tech: ['Flutter', 'Firebase', 'Stripe', 'Google Maps', 'Push Notifications']
        },
        'E-Learning Platform': {
            icon: 'graduation-cap',
            title: 'E-Learning Platform',
            description: 'Interactive online learning platform with video streaming, quizzes, and progress tracking.',
            tech: ['React', 'Socket.io', 'MongoDB', 'FFmpeg', 'WebRTC']
        }
    };
    
    return projectData[projectName] || {
        icon: 'code',
        title: projectName,
        description: 'A development project showcasing modern technologies.',
        tech: ['JavaScript', 'HTML', 'CSS', 'API']
    };
}

// Skill items interaction - Original animations preserved
function initializeSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Animations initialization
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .tech-item, .contact-method');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Xabaringiz yuborildi! Tez orada javob beramiz.', 'success');
            contactForm.reset();
        });
    }
}

// Particle system
function initializeParticleSystem() {
    // Create additional particles
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 3 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = Math.random() * 10 + 's';
            
            heroParticles.appendChild(particle);
        }
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-card');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });
}

// Live clock
function initializeLiveClock() {
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('uz-UZ', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const clockElement = document.getElementById('header-time');
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Weather simulation
function initializeWeather() {
    const weatherData = [
        { temp: '22°C', desc: 'Sunny' },
        { temp: '18°C', desc: 'Cloudy' },
        { temp: '25°C', desc: 'Clear' },
        { temp: '20°C', desc: 'Partly Cloudy' }
    ];
    
    const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
    
    const tempElement = document.getElementById('header-weather-temp');
    const descElement = document.getElementById('header-weather-desc');
    
    if (tempElement) tempElement.textContent = randomWeather.temp;
    if (descElement) descElement.textContent = randomWeather.desc;
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Skill Modal Functions
function openSkillModal(skillName) {
    return; // disabled
}

function closeSkillModal() {
    const modal = document.getElementById('skillModal');
    modal.classList.remove('active');
}

function getSkillData(skillName) {
    const skillData = {
        'python': {
            title: 'Python',
            icon: 'fab fa-python',
            heading: 'Python Programming',
            description: 'A versatile, high-level programming language known for its simplicity and readability. Widely used in web development, data science, AI, and automation.',
            features: ['Easy to Learn', 'Data Science', 'Web Development', 'AI/ML']
        },
        'javascript': {
            title: 'JavaScript',
            icon: 'fab fa-js-square',
            heading: 'JavaScript Development',
            description: 'Dynamic programming language for interactive web applications. Powers modern web development with frameworks and libraries.',
            features: ['Frontend', 'Backend', 'Mobile Apps', 'Real-time']
        },
        'react': {
            title: 'React',
            icon: 'fab fa-react',
            heading: 'React Framework',
            description: 'Modern JavaScript library for building user interfaces. Component-based architecture with virtual DOM for optimal performance.',
            features: ['Component-based', 'Virtual DOM', 'Hooks', 'Ecosystem']
        },
        'nodejs': {
            title: 'Node.js',
            icon: 'fab fa-node-js',
            heading: 'Node.js Runtime',
            description: 'JavaScript runtime for server-side development. Enables building scalable network applications with JavaScript.',
            features: ['Server-side', 'Real-time', 'Microservices', 'NPM']
        },
        'java': {
            title: 'Java',
            icon: 'fab fa-java',
            heading: 'Java Programming',
            description: 'A powerful, object-oriented programming language. Widely used in enterprise applications, Android development, and large-scale systems.',
            features: ['Enterprise', 'Android', 'Scalable', 'Object-Oriented']
        },
        'php': {
            title: 'PHP',
            icon: 'fab fa-php',
            heading: 'PHP Development',
            description: 'Server-side scripting language designed for web development. Powers millions of websites and popular frameworks like Laravel.',
            features: ['Web Development', 'Server-side', 'Dynamic', 'Popular']
        },
        'database': {
            title: 'Database',
            icon: 'fas fa-database',
            heading: 'Database Management',
            description: 'Expertise in designing and managing database systems. Experience with SQL and NoSQL databases for scalable applications.',
            features: ['SQL', 'NoSQL', 'Data Design', 'Performance']
        },
        'cloud': {
            title: 'Cloud',
            icon: 'fas fa-cloud',
            heading: 'Cloud Computing',
            description: 'Experience with cloud platforms and services. Building scalable, reliable applications using modern cloud infrastructure.',
            features: ['AWS', 'Azure', 'Scalable', 'DevOps']
        },
        'macos': {
            title: 'macOS',
            icon: 'fab fa-apple',
            heading: 'macOS Development',
            description: 'Developing applications for macOS. Creating native and cross-platform solutions for Apple ecosystem.',
            features: ['Native Apps', 'Swift', 'macOS', 'Cross-platform']
        },
        'linux': {
            title: 'Linux',
            icon: 'fab fa-linux',
            heading: 'Linux System',
            description: 'Proficient in Linux operating systems. Experience with system administration, server management, and open-source tools.',
            features: ['Administration', 'Server', 'Open Source', 'Command Line']
        },
        'windows': {
            title: 'Windows',
            icon: 'fab fa-windows',
            heading: 'Windows Development',
            description: 'Building applications for Windows platform. Creating native and web-based solutions for Windows ecosystem.',
            features: ['Native Apps', 'C#', 'Windows', 'Cross-platform']
        },
        'docker': {
            title: 'Docker',
            icon: 'fab fa-docker',
            heading: 'Docker & Containers',
            description: 'Containerization and orchestration with Docker. Building, shipping, and running applications in containers.',
            features: ['Containers', 'DevOps', 'Microservices', 'Scalability']
        }
    };
    
    return skillData[skillName] || {
        title: skillName,
        icon: 'fas fa-code',
        heading: `${skillName} Development`,
        description: 'Technology and tool for modern development practices.',
        features: ['Development', 'Programming', 'Coding', 'Building']
    };
}

// Tech Modal Function (reusing skill modal)
function openTechModal(techName) {
    return; // disabled
}

// Certificate Modal Function
function openCertificateModal(certId) {
    return; // disabled
}

function getCertificateData(certId) {
    const certData = {
        'backend': {
            title: 'Back-end sertifikati',
            icon: 'fas fa-server',
            heading: 'Back-end Development Certificate',
            description: 'IBM certified back-end development skills. Expertise in server-side programming, API development, and database management.',
            features: ['Server-side', 'API', 'Database', 'IBM Certified']
        },
        'data-science': {
            title: 'Data Science Math Skills',
            icon: 'fas fa-chart-line',
            heading: 'Data Science Certificate',
            description: 'Mathematical foundation for data science. Statistical analysis, linear algebra, and calculus for machine learning applications.',
            features: ['Statistics', 'Linear Algebra', 'Calculus', 'Data Analysis']
        },
        'microsoft': {
            title: 'Microsoft Servers',
            icon: 'fab fa-microsoft',
            heading: 'Microsoft Server Development',
            description: 'Expertise in developing and managing Microsoft Server environments. Windows Server, Active Directory, and enterprise solutions.',
            features: ['Windows Server', 'Active Directory', 'Enterprise', 'Microsoft']
        },
        'django': {
            title: 'Django SQL Development',
            icon: 'fab fa-python',
            heading: 'Django & SQL Certificate',
            description: 'Python Django framework expertise with SQL database integration. Building scalable web applications with Django ORM.',
            features: ['Django', 'Python', 'SQL', 'ORM']
        },
        'fullstack': {
            title: 'Full-stack sertifikati',
            icon: 'fas fa-layer-group',
            heading: 'Full-stack Development Certificate',
            description: 'Complete full-stack development expertise. Frontend and backend development, database management, and deployment.',
            features: ['Full-stack', 'Frontend', 'Backend', 'Database']
        },
        'frontend': {
            title: 'Front-end sertifikati',
            icon: 'fab fa-html5',
            heading: 'Front-end Development Certificate',
            description: 'Modern front-end development skills. HTML5, CSS3, JavaScript, and modern frameworks for responsive web design.',
            features: ['HTML5', 'CSS3', 'JavaScript', 'Responsive']
        },
        'ai': {
            title: 'Generative AI Elevate',
            icon: 'fas fa-robot',
            heading: 'Generative AI Certificate',
            description: 'AI and generative AI development skills. Building AI-powered applications with modern AI technologies.',
            features: ['AI', 'Machine Learning', 'Generative AI', 'Neural Networks']
        },
        'git': {
            title: 'Git va GitHub',
            icon: 'fab fa-git-alt',
            heading: 'Git & GitHub Certificate',
            description: 'Version control expertise with Git and GitHub. Collaborative development, branching strategies, and code management.',
            features: ['Git', 'GitHub', 'Version Control', 'Collaboration']
        },
        'html-css-js': {
            title: 'HTML, CSS va JavaScript',
            icon: 'fab fa-js-square',
            heading: 'Web Development Fundamentals',
            description: 'Complete web development foundation. HTML structure, CSS styling, and JavaScript interactivity.',
            features: ['HTML', 'CSS', 'JavaScript', 'Web Development']
        },
        'cloud': {
            title: 'Cloud Computing',
            icon: 'fas fa-cloud',
            heading: 'Cloud Computing Certificate',
            description: 'Introduction to cloud computing platforms. AWS, Azure, and cloud infrastructure management.',
            features: ['Cloud', 'AWS', 'Azure', 'DevOps']
        },
        'docker': {
            title: 'Docker & Kubernetes',
            icon: 'fab fa-docker',
            heading: 'Containerization Certificate',
            description: 'Docker and Kubernetes expertise. Container orchestration, microservices, and modern deployment practices.',
            features: ['Docker', 'Kubernetes', 'Containers', 'Microservices']
        },
        'genai': {
            title: 'Generative AI',
            icon: 'fas fa-brain',
            heading: 'Generative AI Introduction',
            description: 'Introduction to generative AI technologies. Understanding AI models, neural networks, and AI applications.',
            features: ['AI', 'Generative AI', 'Neural Networks', 'Machine Learning']
        },
        'software-eng': {
            title: 'Software Engineering',
            icon: 'fas fa-code',
            heading: 'Software Engineering Certificate',
            description: 'Software engineering fundamentals. SDLC, testing, documentation, and best practices for professional development.',
            features: ['SDLC', 'Testing', 'Documentation', 'Best Practices']
        }
    };
    
    return certData[certId] || {
        title: 'Certificate',
        icon: 'fas fa-certificate',
        heading: 'Professional Certificate',
        description: 'Professional certification in technology and development.',
        features: ['Certified', 'Professional', 'Skills', 'Development']
    };
}


// Action functions
function learnMore(techName) {
    showNotification(`Learning more about ${techName}...`, 'info');
    // Here you could redirect to documentation or show more details
}

function viewProject(projectName) {
    showNotification(`Opening ${projectName}...`, 'info');
    // Here you could redirect to the actual project
}

function viewCode(projectName) {
    showNotification(`Opening ${projectName} code repository...`, 'info');
    // Here you could redirect to GitHub or code repository
}

// Add CSS for modals and animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .tech-modal, .project-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
    }
    
    .modal-content {
        position: relative;
        background: rgba(10, 10, 10, 0.95);
        border: 1px solid rgba(0, 242, 254, 0.3);
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .modal-header h3 {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;
    }
    
    .close-modal {
        background: none;
        border: none;
        color: #ffffff;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .close-modal:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .tech-preview, .project-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
    }
    
    .preview-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: white;
    }
    
    .preview-content h4 {
        color: #ffffff;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    
    .preview-content p {
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .preview-features, .preview-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }
    
    .preview-features span, .preview-tech span {
        background: rgba(0, 242, 254, 0.2);
        color: #00f2fe;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .modal-footer {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .modal-footer button {
        flex: 1;
    }
    
    @media (max-width: 768px) {
        .modal-content {
            padding: 1.5rem;
            margin: 1rem;
        }
        
        .modal-footer {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(style);