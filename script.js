        // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1500);
        });

        // Particles animation with enhanced visuals and mobile optimization
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            // Reduce particle count on mobile devices for better performance
            const isMobile = window.innerWidth <= 768;
            const particleCount = isMobile ? 30 : 60;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 3 + 1;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 15 + 8) + 's';
                particle.style.animationDelay = Math.random() * 5 + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // Doomsday Clock Countdown
        function updateCountdown() {
            const eventDate = new Date('February 11, 2026 16:00:00').getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            } else {
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Header scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                }
            });
        });

        // Scroll reveal animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.info-card, .event-card, .contact-card, .timeline-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Add parallax effect to hero backdrop
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBackdrop = document.querySelector('.hero-backdrop');
            if (heroBackdrop) {
                heroBackdrop.style.transform = `translate(-50%, -50%) scale(${1 + scrolled * 0.0003})`;
            }
        });
