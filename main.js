// Main access function
function openMainSite() {
    window.open('https://popdez.com', '_blank');
}

// Alternative links handler
document.addEventListener('DOMContentLoaded', function() {
    // Handle alternative link clicks
    const linkItems = document.querySelectorAll('.link-item');
    
    linkItems.forEach(item => {
        const button = item.querySelector('.link-btn');
        const link = item.getAttribute('data-link');
        
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            window.open(link, '_blank');
        });
        
        // Also make the entire item clickable
        item.addEventListener('click', function() {
            window.open(link, '_blank');
        });
    });

    // Add some interactive effects
    const buttons = document.querySelectorAll('.link-btn, .main-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading effect to main button
    const mainButton = document.querySelector('.main-button');
    
    mainButton.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="material-symbols-outlined">hourglass_empty</span> ABRINDO...';
        this.style.opacity = '0.7';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.opacity = '1';
        }, 2000);
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Smooth scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe all cards for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Add ripple effect CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .link-btn, .main-button {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(rippleStyle);

    // Add ripple effect to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Add typing effect to the main title (optional)
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
});
