// ============================================
// CONTROLE DE TEMA (CLARO/ESCURO)
// ============================================
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');

if (btnLight) {
    btnLight.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    });
}

if (btnDark) {
    btnDark.addEventListener('click', () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    });
}

// Carregar tema salvo ao inicializar
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// ============================================
// CONTROLE DE IDIOMAS
// ============================================
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    
    if (lang === 'en') {
        // Redirecionar para versão em inglês (quando disponível)
        alert('🇺🇸 English version coming soon!');
        // Descomentar quando index_en.html estiver pronto:
        // window.location.href = 'index_en.html';
    } else if (lang === 'pt') {
        // Redirecionar para versão em português
        alert('🇧🇷 Permanecendo em Português-Brasileiro');
        // window.location.href = 'index.html';
    }
}

// ============================================
// MENU MOBILE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================================
// SLIDESHOW DE GRUPO DE CAPOEIRA
// ============================================
let currentSlideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n >= slides.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = n;
    }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
    showSlide(n);
}

// Auto-advance slides a cada 8 segundos
let slideshowInterval;

function startSlideshow() {
    slideshowInterval = setInterval(() => {
        changeSlide(1);
    }, 8000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Inicializar slideshow ao carregar
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    startSlideshow();
    
    // Pausar ao passar o mouse
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }
});

// ============================================
// ANIMAÇÕES DE SCROLL (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar animações ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.skill-card, .media-card, .alunos-card, .championship-card, .btn, .highlight-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ============================================
// SCROLL SUAVE CUSTOMIZADO
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// EFEITO DE PARALLAX NO HERO
// ============================================
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero && scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// ANIMAÇÃO DE BOTÃO COM RIPPLE EFFECT
// ============================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'translate(-50%, -50%)';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ============================================
// VERIFICAÇÃO DE ATIVIDADE E ATUALIZAÇÃO DO NAV
// ============================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// CARREGAMENTO DINÂMICO (Lazy Loading)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONTADOR SIMPLES (Opcional)
// ============================================
const countUp = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
};

// ============================================
// FEEDBACK DE CLIQUE EM CARDS
// ============================================
document.querySelectorAll('.skill-card, .media-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ============================================
// INICIALIZAÇÃO
// ============================================
console.log('%c Capoeira & Code - Portfolio', 'color: #00a8ff; font-size: 16px; font-weight: bold;');
console.log('%c Tradição na Roda, Inovação no Código', 'color: #ffd700; font-size: 12px;');
