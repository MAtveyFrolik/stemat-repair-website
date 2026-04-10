class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer-link:hover {
                    color: #f59e0b;
                    transform: translateX(4px);
                }
                @media (max-width: 768px) {
                    footer {
                        padding: 1rem 0;
                    }
                    .flex-col {
                        gap: 0.5rem;
                    }
                }
</style>
            <footer class="bg-gray-800 text-gray-300 py-4">
                <div class="container mx-auto px-6">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="flex items-center space-x-4 mb-4 md:mb-0">
                            <a href="#" class="text-gray-400 hover:text-accent transition">
                                <i data-feather="facebook" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-accent transition">
                                <i data-feather="linkedin" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-accent transition">
                                <i data-feather="instagram" class="w-5 h-5"></i>
                            </a>
                        </div>
                        
                        <div class="flex items-center space-x-6">
                            <div class="flex items-center">
                                <i data-feather="map-pin" class="w-5 h-5 mr-2 text-accent"></i>
                                <span>Московская область, улица Советская д41</span>
                            </div>
                            <div class="flex items-center">
                                <i data-feather="phone" class="w-5 h-5 mr-2 text-accent"></i>
                                <span>+7 (916) 570-30-42</span>
                            </div>
                            <div class="flex items-center">
                                <i data-feather="clock" class="w-5 h-5 mr-2 text-accent"></i>
                                <span>Работаем без выходных, 24/7</span>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <p class="text-sm">&copy; ${new Date().getFullYear()} СтеМат</p>
                        </div>
</div>
                </div>
            </footer>
`;
    }
}

customElements.define('custom-footer', CustomFooter);
