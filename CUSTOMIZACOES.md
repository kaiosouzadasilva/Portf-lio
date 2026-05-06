<!-- GUIA DE PERSONALIZAÇÃO - Copie e cole estas linhas onde indicado -->

<!-- 1. ATUALIZANDO META TAGS NO <HEAD> DO index.html -->
<!--
Substitua as meta tags padrão por essas personalizadas:

    <meta name="description" content="Instrutor de Capoeira com 10+ anos de experiência. Desenvolvedor Full-Stack. Workshops, consultoria e treinamentos personalizados.">
    <meta name="keywords" content="Capoeira, Instrutor, Desenvolvedor, Full-Stack, Workshop, Treinamento">
    <meta name="author" content="Seu Nome Aqui">
    <meta property="og:title" content="Capoeira & Code - Instrutor de Capoeira & Dev Full-Stack">
    <meta property="og:description" content="Tradição na Roda, Inovação no Código">
    <meta property="og:image" content="https://seu-site.com/og-image.jpg">
    <meta property="og:url" content="https://seu-site.com">
    <meta name="twitter:card" content="summary_large_image">
-->

<!-- 2. ADICIONANDO ANIMAÇÃO CUSTOMIZADA -->
<!--
Para adicionar uma animação customizada a qualquer elemento, adicione a classe "fade-in":

    <div class="skill-card glass fade-in">
        <!-- conteúdo -->
    </div>

As animações ocorrerão quando o elemento entrar na viewport.
-->

<!-- 3. BOTÃO DE WHATSAPP FLUTUANTE -->
<!--
Adicione este código antes da tag </body> para um botão WhatsApp flutuante:

    <style>
        .whatsapp-float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            right: 40px;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 3px #999;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .whatsapp-float:hover {
            background-color: #20ba5f;
            transform: scale(1.1);
        }

        @media (max-width: 768px) {
            .whatsapp-float {
                width: 50px;
                height: 50px;
                bottom: 20px;
                right: 20px;
                font-size: 25px;
            }
        }
    </style>

    <a href="https://wa.me/5511999999999?text=Olá%20Gostaria%20de%20conhecer%20seus%20serviços" 
       class="whatsapp-float" title="WhatsApp" target="_blank">
        📱
    </a>
-->

<!-- 4. FORMULÁRIO DE CONTATO SIMPLES (Adicione na seção #contato) -->
<!--
Substitua o conteúdo de .contato-content por:

    <div class="cta-box glass">
        <h3>Entre em Contato</h3>
        <form id="contact-form" style="display: flex; flex-direction: column; gap: 1rem;">
            <input type="text" placeholder="Seu Nome" required 
                   style="padding: 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(0,168,255,0.2); 
                   border-radius: 8px; color: #e8e8e8; font-family: var(--font-primary);">
            
            <input type="email" placeholder="Seu Email" required 
                   style="padding: 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(0,168,255,0.2); 
                   border-radius: 8px; color: #e8e8e8; font-family: var(--font-primary);">
            
            <textarea placeholder="Sua Mensagem" rows="5" required 
                       style="padding: 0.75rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(0,168,255,0.2); 
                       border-radius: 8px; color: #e8e8e8; font-family: var(--font-primary); resize: vertical;"></textarea>
            
            <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
        </form>
    </div>

Adicione este JavaScript no fim do script.js:

    document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch('seu-backend-aqui.php', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                e.target.reset();
            }
        } catch (error) {
            alert('Erro ao enviar mensagem. Tente novamente.');
            console.error(error);
        }
    });
-->

<!-- 5. CONTADOR DE ESTATÍSTICAS -->
<!--
Adicione uma nova seção antes de Habilidades:

    <section class="stats">
        <div class="container">
            <h2 class="section-title">Números que Falam</h2>
            <div class="stats-grid">
                <div class="stat-card glass">
                    <div class="stat-number" data-count="10">0</div>
                    <div class="stat-label">Anos de Capoeira</div>
                </div>
                <div class="stat-card glass">
                    <div class="stat-number" data-count="500">0</div>
                    <div class="stat-label">Alunos Treinados</div>
                </div>
                <div class="stat-card glass">
                    <div class="stat-number" data-count="50">0</div>
                    <div class="stat-label">Projetos Desenvolvidos</div>
                </div>
                <div class="stat-card glass">
                    <div class="stat-number" data-count="15">0</div>
                    <div class="stat-label">Workshops Realizados</div>
                </div>
            </div>
        </div>
    </section>

CSS para adicionar no style.css:

    .stats {
        background: linear-gradient(180deg, rgba(255, 215, 0, 0.02) 0%, transparent 100%);
        padding: var(--spacing-2xl) 0;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-lg);
    }

    .stat-card {
        padding: var(--spacing-xl);
        border-radius: 15px;
        text-align: center;
    }

    .stat-number {
        font-size: 3rem;
        font-weight: 700;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: var(--spacing-sm);
    }

    .stat-label {
        color: var(--color-text-muted);
        font-size: 1rem;
    }

JavaScript para animar:

    const animateStats = () => {
        document.querySelectorAll('.stat-number[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count);
            const increment = target / 60;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 30);
        });
    };

    // Chamar quando a seção entrar em view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelector('.stats')?.let(el => statsObserver.observe(el));
-->

<!-- 6. SEÇÃO DE DEPOIMENTOS -->
<!--
Adicione uma nova seção para depoimentos/reviews:

    <section class="testimonios">
        <div class="container">
            <h2 class="section-title">O Que Meus Alunos Dizem</h2>
            <div class="testimonios-grid">
                <div class="testimonial-card glass">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"Incrível! Aprendi técnicas reais e também sobre a história da capoeira."</p>
                    <strong>- João Silva</strong>
                </div>
                <div class="testimonial-card glass">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"O melhor workshop que já participei. Profissional, didático e envolvente!"</p>
                    <strong>- Maria Santos</strong>
                </div>
                <div class="testimonial-card glass">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p>"Combina perfeitamente tradição com inovação. Altamente recomendado!"</p>
                    <strong>- Carlos Oliveira</strong>
                </div>
            </div>
        </div>
    </section>

CSS:

    .testimonios {
        background: linear-gradient(180deg, rgba(0, 168, 255, 0.02) 0%, transparent 100%);
    }

    .testimonios-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-lg);
    }

    .testimonial-card {
        padding: var(--spacing-lg);
        border-radius: 12px;
        text-align: center;
    }

    .testimonial-card .stars {
        font-size: 1.2rem;
        margin-bottom: var(--spacing-sm);
    }

    .testimonial-card p {
        font-style: italic;
        margin-bottom: var(--spacing-md);
        color: var(--color-text-muted);
    }

    .testimonial-card strong {
        color: var(--color-yellow);
    }
-->

<!-- 7. MODO ESCURO/CLARO (TOGGLE) -->
<!--
Adicione um botão de toggle no navbar e este CSS/JS:

HTML (adicione ao navbar):
    <button class="theme-toggle" id="theme-toggle" title="Alternar tema">
        🌙
    </button>

CSS (adicione no style.css):
    .theme-toggle {
        background: none;
        border: none;
        color: var(--color-yellow);
        font-size: 1.2rem;
        cursor: pointer;
        padding: var(--spacing-sm);
        transition: transform var(--transition-base);
    }

    .theme-toggle:hover {
        transform: rotate(20deg);
    }

    body.light-mode {
        --color-bg-dark: #f5f5f5;
        --color-bg-secondary: #ffffff;
        --color-text-light: #1a1a1a;
        --color-text-muted: #606060;
    }

JavaScript (adicione no script.js):
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });

    // Carregar tema salvo
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    }
-->

---
Copie e cole os trechos de código acima onde indicado para expandir seu portfólio!
