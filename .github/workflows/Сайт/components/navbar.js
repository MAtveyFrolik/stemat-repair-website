class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    background: rgba(15, 23, 42, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 70px;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                    text-decoration: none;
                    cursor: pointer;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #e2e8f0;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    position: relative;
                    cursor: pointer;
                }
                
                .nav-link:hover {
                    color: #f59e0b;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #f59e0b;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .cta-button {
                    background: #f59e0b;
                    color: #1e293b;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    cursor: pointer;
                }
                
                .cta-button:hover {
                    background: #d97706;
                    transform: translateY(-2px);
                }
                
                .mobile-menu-button {
                    display: none;
                    flex-direction: column;
                    gap: 4px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                }
                
                .mobile-menu-button span {
                    width: 25px;
                    height: 3px;
                    background: white;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu {
                    display: none;
                    background: rgba(15, 23, 42, 0.98);
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    padding: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .mobile-menu.active {
                    display: block;
                }
                
                .mobile-link {
                    display: block;
                    color: #e2e8f0;
                    text-decoration: none;
                    padding: 0.75rem 1rem;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    cursor: pointer;
                }
                
                .mobile-link:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #f59e0b;
                }
                
                .mobile-cta {
                    display: block;
                    background: #f59e0b;
                    color: #1e293b;
                    text-decoration: none;
                    padding: 1rem;
                    border-radius: 8px;
                    font-weight: bold;
                    text-align: center;
                    margin-top: 1rem;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .mobile-cta:hover {
                    background: #d97706;
                }
                
                .mobile-menu-button.active span:nth-child(1) {
                    transform: rotate(45deg) translate(6px, 6px);
                }
                
                .mobile-menu-button.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-button.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(6px, -6px);
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: flex;
                    }
                }
            </style>
            
            <nav class="navbar">
                <div class="nav-container">
                    <div class="logo">СтеМат</div>
                    
                    <div class="nav-links">
                        <div class="nav-link main-link">Главная</div>
                        <a href="#services" class="nav-link">Услуги</a>
                        <a href="#why-us" class="nav-link">О нас</a>
                        <a href="tel:+79165703042" class="cta-button">
                            Подать заявку: +7 (916) 570-30-42
                        </a>
                    </div>
                    
                    <button class="mobile-menu-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                
                <div class="mobile-menu">
                    <div class="mobile-link main-link">Главная</div>
                    <a href="#services" class="mobile-link">Услуги</a>
                    <a href="#why-us" class="mobile-link">О нас</a>
                    <a href="tel:+79165703042" class="mobile-cta">
                        Подать заявку: +7 916 570 30 42
                    </a>
                </div>
            </nav>
        `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        // Обработчик бургер-меню
        menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Функция для плавной прокрутки
        const smoothScrollTo = (targetId) => {
            if (targetId === 'top') {
                // Прокрутка к самому верху страницы
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Учитываем высоту навбара
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Закрываем мобильное меню если открыто
            if (mobileMenu.classList.contains('active')) {
                menuButton.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        };

        // Обработчик для кнопки "Главная"
        const mainLinks = this.shadowRoot.querySelectorAll('.main-link');
        mainLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                smoothScrollTo('top');
            });
        });

        // Обработчик для логотипа
        const logo = this.shadowRoot.querySelector('.logo');
        logo.addEventListener('click', () => {
            smoothScrollTo('top');
        });

        // Настройка обработчиков для остальных ссылок
        const desktopLinks = this.shadowRoot.querySelectorAll('.nav-link[href^="#"]');
        desktopLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                smoothScrollTo(target);
            });
        });

        // Настройка обработчиков для мобильных ссылок
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-link[href^="#"]');
        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                smoothScrollTo(target);
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);