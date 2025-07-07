
        // In-memory theme storage (replaces localStorage)
        let currentTheme = 'dark';
        
        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        // Initialize theme
        function initializeTheme() {
            if (currentTheme === 'light') {
                body.setAttribute('data-theme', 'light');
                themeToggle.textContent = '☀️';
            } else {
                body.removeAttribute('data-theme');
                themeToggle.textContent = '🌙';
            }
        }
        
        initializeTheme();
        
        themeToggle.addEventListener('click', () => {
            const isLight = body.getAttribute('data-theme') === 'light';
            
            if (isLight) {
                body.removeAttribute('data-theme');
                themeToggle.textContent = '🌙';
                currentTheme = 'dark';
            } else {
                body.setAttribute('data-theme', 'light');
                themeToggle.textContent = '☀️';
                currentTheme = 'light';
            }
        });

         // Smooth scroll
        document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.getElementById("navbar");

    // Hamburger menu toggle
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

          // Close menu after clicking a link (mobile)
          if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
          }
        }
      });
    });

    // Scroll effect on navbar
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
        
        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Particle effect on hero section
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '20px';
            particle.style.height = '20px';
            particle.style.background = 'var(--primary)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.opacity = '10';
            
            const bganimation = document.querySelector('.bganimation');
            bganimation.appendChild(particle);
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Animate
            const duration = 1000 + Math.random() * 2000;
            particle.animate([
                { transform: 'translateY(0px)', opacity: 0.7 },
                { transform: 'translateY(-100px)', opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Create particles periodically
        setInterval(createParticle, 100);
    

   
  const typewriter = document.querySelector('.typewriter');
  const phrases = ["Frontend Developer", "Full Stack Developer"];
  const typingDelay = 150;  // delay between typing each letter (ms)
  const erasingDelay = 100; // delay between erasing each letter (ms)
  const newPhraseDelay = 1500; // delay before typing new phrase (ms)
  let phraseIndex = 0;
  let letterIndex = 0;

  function type() {
    if (letterIndex < phrases[phraseIndex].length) {
      typewriter.textContent += phrases[phraseIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newPhraseDelay);
    }
  }

  function erase() {
    if (letterIndex > 0) {
      typewriter.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, typingDelay);
    }
  }

  // Start the typing effect on load
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newPhraseDelay);
  });

  // Intersection Observer for timeline animations
        const observerOptions2 = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });



    const slider = document.getElementById("card-slider");
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");

    // Manual scroll buttons
    leftBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 300, behavior: "smooth" });
    });

    // Auto scroll
    setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // Change every 3 seconds
  


    