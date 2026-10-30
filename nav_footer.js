const fs = require('fs');
const path = require('path');

const getNavbar = (activePage) => `
    <!-- Topbar -->
    <div class="header-top d-none d-lg-block">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <span class="me-3"><i class="fas fa-envelope text-warning me-2"></i> info@sppl.com</span>
                    <span><i class="fas fa-phone-alt text-warning me-2"></i> +91 98765 43210</span>
                </div>
                <div class="col-md-6 text-end">
                    <a href="careers.html" class="me-3">Careers</a>
                    <a href="media.html" class="me-3">Media</a>
                    <a href="#" class="me-2"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-xl navbar-light sticky-top">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="images/logo/logo.webp" alt="SPPL Logo" height="40" class="me-2">
                <span class="navbar-brand-text">
                    <span class="d-block">Suryadipta Projects</span>
                    <span class="d-block">Private Limited</span>
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link ${activePage === 'index.html' ? 'active' : ''}" href="index.html">Home</a></li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activePage === 'about.html' ? 'active' : ''}" href="about.html" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
                            <li><a class="dropdown-item dropdown-overview" href="about.html"><i class="fas fa-building me-2"></i>About Overview</a></li>
                            <li><hr class="dropdown-divider my-1"></li>
                            <li><a class="dropdown-item" href="about.html#director-profile">Director Profile</a></li>
                            <li><a class="dropdown-item" href="about.html#sppl-journey">SPPL Journey</a></li>
                            <li><a class="dropdown-item" href="about.html#order-book">Current Order Book</a></li>
                            <li><hr class="dropdown-divider my-1"></li>
                            <li><a class="dropdown-item" href="quality.html">Quality & Safety</a></li>
                            <li><a class="dropdown-item" href="media.html">Media Room</a></li>
                            <li><a class="dropdown-item" href="careers.html">Careers</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activePage === 'infrastructure.html' ? 'active' : ''}" href="infrastructure.html" id="infraDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Infrastructure
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="infraDropdown">
                            <li><a class="dropdown-item" href="infrastructure.html#shipyard">Shipyard</a></li>
                            <li><a class="dropdown-item" href="infrastructure.html#heavy-fabrication-yard">Heavy Fabrication Yard</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activePage === 'shipbuilding.html' ? 'active' : ''}" href="shipbuilding.html" id="shipbuildingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Shipbuilding
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="shipbuildingDropdown">
                            <li><a class="dropdown-item" href="shipbuilding.html#defence">Defence</a></li>
                            <li><a class="dropdown-item" href="shipbuilding.html#commercial">Commercial</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${activePage === 'heavy-engineering.html' ? 'active' : ''}" href="heavy-engineering.html" id="heavyEngDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Heavy Engineering
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="heavyEngDropdown">
                            <li><a class="dropdown-item" href="heavy-engineering.html#heavy-fabrication">Heavy Fabrication</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#offshore-fabrication">Offshore Fabrication</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#tanks-vessels">Tanks &amp; Vessels</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#rubber-lined">Rubber lined Products</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#industrial-fabrication">Industrial Fabrication</a></li>
                        </ul>
                    </li>

                    <li class="nav-item"><a class="nav-link ${activePage === 'projects.html' ? 'active' : ''}" href="projects.html">Project Gallery</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'reach-us.html' ? 'active' : ''}" href="contact.html">Reach US</a></li>
                </ul>
                <a href="contact.html" class="btn btn-primary-custom ms-xl-3 d-none d-xl-inline-flex">Inquire Now</a>
                <div class="mobile-inquire-btn">
                    <a href="contact.html" class="btn btn-primary-custom w-100">Inquire Now <i class="fas fa-arrow-right ms-2"></i></a>
                </div>
            </div>
        </div>
    </nav>`;

const getFooter = () => `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <h2 class="text-warning m-0 mb-4 fw-bold">SPPL</h2>
                    <p class="text-secondary" style="color: var(--c-steel-grey-light) !important;">Suryadipta Projects Pvt. Ltd. (SPPL) is a leading heavy engineering and shipbuilding corporation dedicated to executing mega projects with unmatched precision, quality, and scale.</p>
                    <div class="mt-4">
                        <a href="#" class="text-white me-3 fs-5"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="text-white me-3 fs-5"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-white fs-5"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="infrastructure.html">Infrastructure</a></li>
                        <li><a href="shipbuilding.html">Shipbuilding</a></li>
                        <li><a href="heavy-engineering.html">Heavy Engineering</a></li>
                        <li><a href="projects.html">Project Gallery</a></li>
                        <li><a href="contact.html">Reach Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-heading">Our Capabilities</h4>
                    <ul class="footer-links">
                        <li><a href="shipbuilding.html#defence">Defence Vessels</a></li>
                        <li><a href="shipbuilding.html#commercial">Commercial Ships</a></li>
                        <li><a href="heavy-engineering.html#heavy-fabrication">Heavy Fabrication</a></li>
                        <li><a href="heavy-engineering.html#offshore-fabrication">Offshore Platforms</a></li>
                        <li><a href="heavy-engineering.html#tanks-vessels">Tanks &amp; Pressure Vessels</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-heading">Reach Us</h4>
                    <ul class="footer-links">
                        <li class="d-flex mb-3">
                            <i class="fas fa-map-marker-alt text-warning mt-1 me-3"></i>
                            <span class="text-secondary" style="color: var(--c-steel-grey-light) !important;">SPPL Waterfront Complex, Marine & Industrial Hub, India</span>
                        </li>
                        <li class="d-flex mb-3">
                            <i class="fas fa-phone-alt text-warning mt-1 me-3"></i>
                            <span class="text-secondary" style="color: var(--c-steel-grey-light) !important;">+91 98765 43210</span>
                        </li>
                        <li class="d-flex mb-3">
                            <i class="fas fa-envelope text-warning mt-1 me-3"></i>
                            <span class="text-secondary" style="color: var(--c-steel-grey-light) !important;">info@sppl.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="mb-0">&copy; 2026 Suryadipta Projects Pvt. Ltd. (SPPL). All Rights Reserved.</p>
            </div>
        </div>
    </footer>`;

module.exports = { getNavbar, getFooter };
console.log('Navigation & Footer Module Loaded');
