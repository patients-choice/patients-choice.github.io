document.addEventListener('DOMContentLoaded', function() {
    // Create a div to hold the header
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-container';
    
    // Determine if we're on the resources page
    const isResourcesPage = window.location.pathname.includes('resources.html');
    
    // Embedded header content
    const headerContent = `
<!-- Header -->
<header class="header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <a href="${isResourcesPage ? 'index.html' : '#home'}">
                    <img src="images/patients-choice-logo-updated-colors.png" alt="Patient's Choice Home Health Care" class="main-logo">
                </a>
                <div class="header-text">
                    <h2 data-translation-key="header.title">Home Health Care</h2>
                </div>
            </div>
            <button class="hamburger" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="nav">
                <ul>
                    <li style="--i: 1"><a href="${isResourcesPage ? 'index.html' : '#home'}" data-translation-key="nav.home">Home</a></li>
                    <li style="--i: 2"><a href="${isResourcesPage ? 'index.html#services' : '#services'}" data-translation-key="nav.services">Services</a></li>
                    <li style="--i: 3"><a href="${isResourcesPage ? 'index.html#insurance' : '#insurance'}" data-translation-key="nav.insurance">Insurance</a></li>
                    <li style="--i: 4"><a href="${isResourcesPage ? 'index.html#about' : '#about'}" data-translation-key="nav.about">About Us</a></li>
                    <li style="--i: 5"><a href="${isResourcesPage ? 'index.html#contact' : '#contact'}" data-translation-key="nav.contact">Contact</a></li>
                    <li style="--i: 6"><a href="${isResourcesPage ? 'index.html#testimonials' : '#testimonials'}" data-translation-key="nav.testimonials">Testimonials</a></li>
                    <li style="--i: 7"><a href="${isResourcesPage ? 'index.html#faqs' : '#faqs'}" data-translation-key="nav.faqs">FAQs</a></li>
                    <li style="--i: 8"><a href="resources.html" class="${isResourcesPage ? 'active' : ''}" data-translation-key="nav.resources">Resources</a></li>
                    <li class="language-switcher" style="--i: 9">
                        <button class="lang-btn" data-lang="en">EN</button>
                        <button class="lang-btn" data-lang="es">ES</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
<div class="overlay"></div>`;

    // Insert the header content
    headerContainer.innerHTML = headerContent;
    
    // Insert the header at the beginning of the body
    document.body.insertBefore(headerContainer, document.body.firstChild);
    
    // Initialize any header-specific functionality
    initializeHeader();
});

function initializeHeader() {
    // Initialize hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    
    if (hamburger && nav && overlay) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
} 