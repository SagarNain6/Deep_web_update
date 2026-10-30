const fs = require('fs');

const pages = [
    {
        name: 'shipbuilding.html',
        title: 'Shipbuilding | SPPL',
        desc: 'SPPL Shipbuilding: Defence, Naval, and Commercial vessels.',
        active: 'shipbuilding.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Shipbuilding</h1>
            <p class="lead">Naval & Commercial Maritime Solutions</p>
        </div>
    </section>
    
    <section class="section-padding" id="shipbuilding-overview">
        <div class="container text-center">
            <h2 class="section-title mb-4" data-aos="fade-up">A Legacy of Maritime Excellence</h2>
            <p class="lead text-secondary max-w-700 mx-auto mb-5" data-aos="fade-up" data-aos-delay="100">
                Suryadipta Projects Private Limited (SPPL) is a premier shipyard recognized for delivering world-class Defence, Naval, and Commercial vessels. Backed by state-of-the-art infrastructure and an uncompromising commitment to quality and safety, we design and construct highly complex marine assets. Our legacy is built on precision engineering, timely delivery, and operational reliability across the high seas.
            </p>
            <div class="row g-4 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="col-md-4">
                    <div class="p-4 bg-light rounded shadow-sm border-bottom border-4 hover-lift h-100" style="border-color: var(--c-industrial-orange) !important;">
                        <i class="fas fa-shield-alt fa-3x text-navy mb-3"></i>
                        <h4 class="text-navy">Defence Prowess</h4>
                        <p class="text-secondary small mb-0">Building robust vessels to exacting naval standards for maritime security.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 bg-light rounded shadow-sm border-bottom border-4 hover-lift h-100" style="border-color: var(--c-industrial-orange) !important;">
                        <i class="fas fa-ship fa-3x text-navy mb-3"></i>
                        <h4 class="text-navy">Commercial Viability</h4>
                        <p class="text-secondary small mb-0">Optimized fleet solutions for harbor, offshore, and cargo operations.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 bg-light rounded shadow-sm border-bottom border-4 hover-lift h-100" style="border-color: var(--c-industrial-orange) !important;">
                        <i class="fas fa-drafting-compass fa-3x text-navy mb-3"></i>
                        <h4 class="text-navy">Turnkey Engineering</h4>
                        <p class="text-secondary small mb-0">From initial naval architecture to outfitting and final commissioning.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-padding bg-light" id="defence">
        <div class="container">
            <div class="row align-items-center mb-5">
                <div class="col-lg-6" data-aos="fade-right">
                    <img src="assets/img/projects/defence-barge-launch.jpg" alt="Defence Vessels" class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
                    <h2 class="text-navy">Defence & Naval Vessels</h2>
                    <p class="text-secondary">Mission-critical vessels for maritime security and coastal defense. Built to rigorous military standards.</p>
                    <div id="defence-products" class="mt-4">
                        <h4 class="text-orange">Product List</h4>
                        <ul>
                            <li>Offshore Patrol Vessels (OPVs)</li>
                            <li>Fast Patrol Vessels (FPVs)</li>
                            <li>Survey Vessels</li>
                        </ul>
                    </div>
                    <a href="contact.html" class="btn btn-primary-custom mt-3">Inquire Now</a>
                </div>
            </div>
        </div>
    </section>
    <section class="section-padding" id="commercial">
        <div class="container">
            <div class="row align-items-center flex-row-reverse mb-5">
                <div class="col-lg-6" data-aos="fade-left">
                    <img src="assets/img/projects/commercial-ship-1.jpg" alt="Commercial Vessels" class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-right">
                    <h2 class="text-navy">Commercial Vessels</h2>
                    <p class="text-secondary">Reliable and efficient commercial vessels optimized for specific operational requirements.</p>
                    <div id="commercial-products" class="mt-4">
                        <h4 class="text-orange">Product List</h4>
                        <ul>
                            <li>Harbor Tugs (ASD, Tractor)</li>
                            <li>Bulk Carriers</li>
                            <li>Specialized Workboats</li>
                        </ul>
                    </div>
                    <a href="contact.html" class="btn btn-primary-custom mt-3">Inquire Now</a>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'heavy-engineering.html',
        title: 'Heavy Engineering | SPPL',
        active: 'heavy-engineering.html',
        desc: 'SPPL Heavy Engineering capabilities spanning fabrication, offshore, and industrial sectors.',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Heavy Engineering</h1>
            <p class="lead">Core Sector Fabrication & Manufacturing</p>
        </div>
    </section>
    <section class="section-padding bg-light" id="heavy-fabrication">
        <div class="container">
            <div class="row align-items-center mb-5">
                <div class="col-lg-6" data-aos="fade-right">
                    <img src="assets/img/projects/heavy-fabrication-tanks.jpg" alt="Heavy Fabrication" class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
                    <h2 class="text-navy">Heavy Fabrication</h2>
                    <p class="text-secondary">Complex structural components, girders, and massive mechanical assemblies built with precision.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section-padding" id="offshore-fabrication">
        <div class="container">
            <div class="row align-items-center flex-row-reverse mb-5">
                <div class="col-lg-6" data-aos="fade-left">
                    <img src="images/index_page/capability_3.webp" alt="Offshore Fabrication" class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-right">
                    <h2 class="text-navy">Offshore Fabrication</h2>
                    <p class="text-secondary">Wellhead platforms, jackets, subsea structures, and large living quarters modules for Oil & Gas operators.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section-padding bg-light" id="tanks-vessels">
        <div class="container">
            <h2 class="section-title text-center">Tanks & Vessels</h2>
            <p class="text-center text-secondary mb-4">ASME U and U2 stamped pressure vessels and large storage tanks in exotic metallurgies.</p>
        </div>
    </section>
    <section class="section-padding" id="rubber-lined">
        <div class="container">
            <h2 class="section-title text-center">Rubber Lined Products</h2>
            <p class="text-center text-secondary mb-4">Industrial rubber lining for pipes, tanks, and scrubbers providing ultimate corrosion and abrasion resistance.</p>
        </div>
    </section>
    <section class="section-padding bg-light" id="industrial-fabrication">
        <div class="container">
            <h2 class="section-title text-center">Industrial Fabrication</h2>
            <p class="text-center text-secondary mb-4">Turnkey solutions for power plants, refineries, and infrastructure mega-projects.</p>
        </div>
    </section>`
    },

    {
        name: 'infrastructure.html',
        title: 'Infrastructure | SPPL',
        desc: 'Discover SPPL’s world-class manufacturing facilities and waterfront shipyard.',
        active: 'infrastructure.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Infrastructure</h1>
            <p class="lead">State-of-the-art Manufacturing & Shipyard Facilities</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container text-center">
            <p class="lead mb-5" data-aos="fade-up">Spread across 500,000 sq.m, our integrated facility boasts deep-water jetties, massive fabrication shops, and advanced CNC machinery.</p>
            <div class="row g-4">
                <div class="col-md-6" data-aos="fade-up" id="shipyard">
                    <img src="images/shipyard.webp" alt="Shipyard" class="img-fluid rounded shadow mb-3">
                    <h3 class="text-navy">Waterfront Shipyard</h3>
                    <p class="text-secondary small">Equipped with 250m long slipways, Goliath cranes, and a dedicated fitting-out jetty capable of handling vessels up to 20,000 DWT.</p>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100" id="heavy-fabrication-yard">
                    <img src="images/heavy_engineering_workshop.webp" alt="Heavy Machine Shop" class="img-fluid rounded shadow mb-3">
                    <h3 class="text-navy">Heavy Machine & Fabrication Shop</h3>
                    <p class="text-secondary small">Features heavy plate rolling machines, multi-axis CNC milling, automatic submerged arc welding stations, and heavy lifting overhead cranes.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section-padding bg-light">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="section-title">Manufacturing Facilities</h2>
                <p class="section-subtitle">Process Equipment / Heavy Fabrication & Shipbuilding</p>
            </div>
            
            <!-- Strategic Location -->
            <div class="card border-0 shadow-sm p-4 p-md-5 mb-5 hover-lift" style="border-radius: 15px;" data-aos="fade-up">
                <div class="row align-items-center text-center">
                    <div class="col-12 mb-4">
                        <i class="fas fa-map-marker-alt text-orange fa-2x" style="color: var(--c-industrial-orange);"></i>
                        <h4 class="text-navy fw-bold mt-2">Strategic Location</h4>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h2 class="text-navy fw-bold mb-1">23 km</h2>
                        <p class="text-secondary mb-0 fw-medium">from Mumbai International Airport</p>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0 border-md-start border-md-end" style="border-color: #eaeaea !important;">
                        <h2 class="text-navy fw-bold mb-1">5 km</h2>
                        <p class="text-secondary mb-0 fw-medium">from Dahisar Checkpost, Mumbai</p>
                    </div>
                    <div class="col-md-4">
                        <h2 class="text-navy fw-bold mb-1">1.5 km</h2>
                        <p class="text-secondary mb-0 fw-medium">from Mumbai-Ahmedabad Western Exp. Hwy</p>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <!-- Unit 1 -->
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="card border-0 shadow-sm h-100 p-0 overflow-hidden hover-lift" style="border-radius: 15px;">
                        <div class="p-4 text-white d-flex align-items-center" style="background-color: var(--c-navy-blue);">
                            <div class="text-navy bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style="width: 55px; height: 55px; flex-shrink: 0;">
                                <h4 class="mb-0 fw-bold">01</h4>
                            </div>
                            <div>
                                <h4 class="mb-0 fw-bold text-white">Floor Shop Areas Unit 1</h4>
                                <span class="text-orange small fw-bold" style="letter-spacing: 1px; text-transform: uppercase;">For Industrial Products</span>
                            </div>
                        </div>
                        <div class="p-4 p-md-5 bg-white d-flex flex-column h-100">
                            <ul class="list-unstyled text-secondary mb-4 flex-grow-1" style="font-size: 1.05rem; line-height: 1.8;">
                                <li class="d-flex align-items-start mb-3">
                                    <i class="fas fa-check mt-1 me-3" style="color: var(--c-industrial-orange);"></i>
                                    <div><strong>50,000 SQ. FT.</strong> yard with concrete JETTY</div>
                                </li>
                                <li class="d-flex align-items-start mb-3">
                                    <i class="fas fa-check mt-1 me-3" style="color: var(--c-industrial-orange);"></i>
                                    <div>Jetty having draft of <strong>4.5 mtrs</strong></div>
                                </li>
                                <li class="d-flex align-items-start">
                                    <i class="fas fa-check mt-1 me-3" style="color: var(--c-industrial-orange);"></i>
                                    <div><strong>10,000 SQ. FT.</strong> covered fabrication & machine shop</div>
                                </li>
                            </ul>
                            <div class="p-3 rounded" style="background-color: rgba(255, 153, 0, 0.1); border-left: 4px solid var(--c-industrial-orange);">
                                <p class="text-navy small mb-0 fw-bold"><i class="fas fa-info-circle me-2" style="color: var(--c-industrial-orange);"></i>Yard is suitable to anchor barges for transportation of oversized equipments.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Unit 2 -->
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="card border-0 shadow-sm h-100 p-0 overflow-hidden hover-lift" style="border-radius: 15px;">
                        <div class="p-4 text-white d-flex align-items-center" style="background-color: var(--c-navy-blue);">
                            <div class="text-navy bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style="width: 55px; height: 55px; flex-shrink: 0;">
                                <h4 class="mb-0 fw-bold">02</h4>
                            </div>
                            <div>
                                <h4 class="mb-0 fw-bold text-white">Shipbuilding Yard Unit 2</h4>
                                <span class="text-orange small fw-bold" style="letter-spacing: 1px; text-transform: uppercase;">For Repairs & Conversion</span>
                            </div>
                        </div>
                        <div class="p-4 p-md-5 bg-white d-flex flex-column h-100">
                            <ul class="list-unstyled text-secondary mb-4 flex-grow-1" style="font-size: 1.05rem; line-height: 1.8;">
                                <li class="d-flex align-items-start mb-3">
                                    <i class="fas fa-check mt-1 me-3" style="color: var(--c-industrial-orange);"></i>
                                    <div>Located <strong>400 mtrs</strong> from our main office & Unit 1</div>
                                </li>
                                <li class="d-flex align-items-start mb-3">
                                    <i class="fas fa-check mt-1 me-3" style="color: var(--c-industrial-orange);"></i>
                                    <div><strong>50,000 SQ. FT.</strong> open yard with slipway</div>
                                </li>
                                <li class="d-flex align-items-start">
                                    <i class="fas fa-check mt-1 me-3" style="color: var(--c-industrial-orange);"></i>
                                    <div>Adequate bollards for anchoring ships</div>
                                </li>
                            </ul>
                            <div class="p-3 rounded" style="background-color: rgba(255, 153, 0, 0.1); border-left: 4px solid var(--c-industrial-orange);">
                                <p class="text-navy small mb-0 fw-bold"><i class="fas fa-info-circle me-2" style="color: var(--c-industrial-orange);"></i>Fully equipped for comprehensive shipbuilding, ship repairs, and vessel conversion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'quality.html',
        title: 'Quality & Safety | SPPL',
        desc: 'Learn about our rigorous quality assurance and zero-harm safety culture.',
        active: 'quality.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Quality & Safety</h1>
            <p class="lead">Uncompromising Standards in Every Detail</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6" data-aos="fade-right">
                    <h2 class="section-title">Quality Assurance</h2>
                    <p class="mt-4 text-secondary">Quality is embedded in our DNA. We operate a rigorous QA/QC program aligned with global standards. Our in-house NDT testing facility and metrology lab ensure precision engineering.</p>
                    <ul class="list-unstyled mt-3">
                        <li><i class="fas fa-check text-orange me-2"></i> ISO 9001:2015 Certified</li>
                        <li><i class="fas fa-check text-orange me-2"></i> ASME U, U2, S, R Stamps</li>
                        <li><i class="fas fa-check text-orange me-2"></i> CE Marking capabilities</li>
                    </ul>
                </div>
                <div class="col-md-6" data-aos="fade-left">
                    <h2 class="section-title">Health & Safety</h2>
                    <p class="mt-4 text-secondary">We maintain a 'Zero Harm' policy. SPPL is committed to providing a safe working environment for all employees, contractors, and stakeholders through continuous training and strict adherence to HSE protocols.</p>
                    <ul class="list-unstyled mt-3">
                        <li><i class="fas fa-check text-orange me-2"></i> ISO 45001:2018 Certified (OH&S)</li>
                        <li><i class="fas fa-check text-orange me-2"></i> ISO 14001:2015 Certified (Environment)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'media.html',
        title: 'Media & News | SPPL',
        desc: 'Stay updated with the latest news, events, and media gallery of SPPL.',
        active: 'media.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Media Room</h1>
            <p class="lead">Latest News, Events, and Corporate Updates</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4" data-aos="fade-up">
                    <div class="card border-0 shadow-sm h-100">
                        <img src="assets/img/projects/media-trade-show.jpg" class="card-img-top" alt="News">
                        <div class="card-body">
                            <span class="text-orange small fw-bold">Press Release</span>
                            <h5 class="card-title text-navy mt-2">SPPL secures major offshore fabrication contract</h5>
                            <p class="card-text text-secondary small">SPPL has been awarded a multi-million dollar contract for the fabrication of a wellhead platform...</p>
                            <a href="#" class="btn btn-sm btn-outline-custom mt-2">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="card border-0 shadow-sm h-100">
                        <img src="assets/img/projects/defence-barge-water.jpg" class="card-img-top" alt="News">
                        <div class="card-body">
                            <span class="text-orange small fw-bold">Event</span>
                            <h5 class="card-title text-navy mt-2">Successful launch of 50T Bollard Pull Tug</h5>
                            <p class="card-text text-secondary small">The latest addition to the harbor operations fleet was successfully launched at SPPL Shipyard today.</p>
                            <a href="#" class="btn btn-sm btn-outline-custom mt-2">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'careers.html',
        title: 'Careers | SPPL',
        desc: 'Join the SPPL team. Explore career opportunities in heavy engineering and shipbuilding.',
        active: 'careers.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Careers at SPPL</h1>
            <p class="lead">Build Your Future with an Industry Leader</p>
        </div>
    </section>
    <section class="section-padding bg-light">
        <div class="container text-center">
            <h2 class="section-title mb-4">Why Join Us?</h2>
            <p class="lead text-secondary max-w-700 mx-auto mb-5">At SPPL, we offer more than just a job. We offer a career working on some of the most challenging and impressive engineering projects in the world. We foster a culture of innovation, continuous learning, and inclusivity.</p>
            
            <div class="row g-4 mt-4 text-start">
                <div class="col-md-6" data-aos="fade-up">
                    <div class="p-4 bg-white rounded shadow-sm border-start border-4" style="border-color: var(--c-industrial-orange) !important;">
                        <h4 class="text-navy">Naval Architect</h4>
                        <p class="text-secondary small">Location: Shipyard HQ | Experience: 5-8 Years</p>
                        <a href="contact.html" class="btn btn-sm btn-outline-custom">Apply Now</a>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="p-4 bg-white rounded shadow-sm border-start border-4" style="border-color: var(--c-industrial-orange) !important;">
                        <h4 class="text-navy">Sr. Welding Engineer</h4>
                        <p class="text-secondary small">Location: Heavy Fabrication Unit | Experience: 10+ Years</p>
                        <a href="contact.html" class="btn btn-sm btn-outline-custom">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'contact.html',
        title: 'Contact Us | SPPL',
        desc: 'Get in touch with SPPL for inquiries, project discussions, and support.',
        active: 'contact.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Contact Us</h1>
            <p class="lead">We'd love to hear from you</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-5" data-aos="fade-right">
                    <h2 class="text-navy mb-4">Corporate Headquarters</h2>
                    <div class="d-flex mb-4">
                        <i class="fas fa-map-marker-alt text-orange fa-2x mt-1 me-3"></i>
                        <div>
                            <h5 class="text-navy mb-1">Address</h5>
                            <p class="text-secondary mb-0">Plot No. 45, Industrial Area, Phase II,<br>Manufacturing District, India - 400001</p>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <i class="fas fa-phone-alt text-orange fa-2x mt-1 me-3"></i>
                        <div>
                            <h5 class="text-navy mb-1">Phone</h5>
                            <p class="text-secondary mb-0">+91 98765 43210<br>+91 22 1234 5678</p>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <i class="fas fa-envelope text-orange fa-2x mt-1 me-3"></i>
                        <div>
                            <h5 class="text-navy mb-1">Email</h5>
                            <p class="text-secondary mb-0">info@sppl.com<br>sales@sppl.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7" data-aos="fade-left">
                    <div class="bg-light p-5 rounded shadow-sm">
                        <h3 class="text-navy mb-4">Send us a Message</h3>
                        <form action="javascript:void(0);">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control form-control-lg" placeholder="Your Name" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control form-control-lg" placeholder="Your Email" required>
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control form-control-lg" placeholder="Subject" required>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control form-control-lg" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary-custom w-100 justify-content-center">Send Message <i class="fas fa-paper-plane ms-2"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    }
];

const template = (page) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${page.desc}">
    <title>${page.title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- Topbar -->
    <div class="header-top d-none d-lg-block">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <span class="me-3"><i class="fas fa-envelope text-orange me-2"></i> info@sppl.com</span>
                    <span><i class="fas fa-phone-alt text-orange me-2"></i> +91 98765 43210</span>
                </div>
                <div class="col-md-6 text-end">
                    <a href="careers.html" class="me-3">Careers</a>
                    <a href="media.html" class="me-3">Media</a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="ms-2"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="images/logo/logo.webp" alt="SPPL Logo" height="40" class="me-2">
                <span class="m-0" style="color: rgb(40, 40, 114); text-transform: uppercase; font-weight: 700; font-size: 0.9rem; line-height: 1.2;">
                    <span class="d-block">Suryadipta Projects</span>
                    <span class="d-block">Private Limited</span>
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-xl-center">
                    <li class="nav-item"><a class="nav-link ${page.active === 'index.html' ? 'active' : ''}" href="index.html">Home</a></li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${page.active === 'about.html' ? 'active' : ''}" href="about.html" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
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
                        <a class="nav-link dropdown-toggle ${page.active === 'infrastructure.html' ? 'active' : ''}" href="infrastructure.html" id="infraDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Infrastructure</a>
                        <ul class="dropdown-menu" aria-labelledby="infraDropdown">
                            <li><a class="dropdown-item dropdown-overview" href="infrastructure.html"><i class="fas fa-industry me-2"></i>Infra Overview</a></li>
                            <li><hr class="dropdown-divider my-1"></li>
                            <li><a class="dropdown-item" href="infrastructure.html#shipyard">Shipyard</a></li>
                            <li><a class="dropdown-item" href="infrastructure.html#heavy-fabrication-yard">Heavy Fabrication Yard</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${page.active === 'shipbuilding.html' ? 'active' : ''}" href="shipbuilding.html" id="shipbuildingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shipbuilding</a>
                        <ul class="dropdown-menu" aria-labelledby="shipbuildingDropdown">
                            <li><a class="dropdown-item dropdown-overview" href="shipbuilding.html"><i class="fas fa-ship me-2"></i>Shipbuilding Overview</a></li>
                            <li><hr class="dropdown-divider my-1"></li>
                            <li><a class="dropdown-item" href="shipbuilding.html#defence">Defence</a></li>
                            <li><a class="dropdown-item" href="shipbuilding.html#commercial">Commercial</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${page.active === 'heavy-engineering.html' ? 'active' : ''}" href="heavy-engineering.html" id="heavyEngDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Heavy Engineering</a>
                        <ul class="dropdown-menu" aria-labelledby="heavyEngDropdown">
                            <li><a class="dropdown-item dropdown-overview" href="heavy-engineering.html"><i class="fas fa-cogs me-2"></i>Heavy Eng. Overview</a></li>
                            <li><hr class="dropdown-divider my-1"></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#heavy-fabrication">Heavy Fabrication</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#offshore-fabrication">Offshore Fabrication</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#tanks-vessels">Tanks &amp; Vessels</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#rubber-lined">Rubber lined Products</a></li>
                            <li><a class="dropdown-item" href="heavy-engineering.html#industrial-fabrication">Industrial Fabrication</a></li>
                        </ul>
                    </li>

                    <li class="nav-item"><a class="nav-link ${page.active === 'projects.html' ? 'active' : ''}" href="projects.html">Project Gallery</a></li>
                    <li class="nav-item"><a class="nav-link ${page.active === 'reach-us.html' ? 'active' : ''}" href="contact.html">Reach Us</a></li>
                </ul>
                <a href="contact.html" class="btn btn-primary-custom ms-lg-3 d-none d-lg-inline-flex">Inquire Now</a>
            </div>
        </div>
    </nav>

    ${page.content}

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <h2 class="text-white m-0 mb-4 fw-bold">SPPL</h2>
                    <p class="text-secondary" style="color: var(--c-steel-grey-light) !important;">Suryadipta Projects Pvt. Ltd. is a leading heavy engineering and shipbuilding corporation dedicated to executing mega projects with unmatched precision, quality, and scale.</p>
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
                    <h4 class="footer-heading">Contact Us</h4>
                    <ul class="footer-links">
                        <li class="d-flex mb-3">
                            <i class="fas fa-phone-alt text-orange mt-1 me-3"></i>
                            <span class="text-secondary" style="color: var(--c-steel-grey-light) !important;">+91 98765 43210</span>
                        </li>
                        <li class="d-flex mb-3">
                            <i class="fas fa-envelope text-orange mt-1 me-3"></i>
                            <span class="text-secondary" style="color: var(--c-steel-grey-light) !important;">info@sppl.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="mb-0">&copy; 2026 Suryadipta Projects Pvt. Ltd. (SPPL). All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top -->
    <div class="scroll-top">
        <i class="fas fa-chevron-up"></i>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="js/main.js"></script>
</body>
</html>`;

pages.forEach(p => {
    fs.writeFileSync(p.name, template(p));
    console.log('Created ' + p.name);
});
