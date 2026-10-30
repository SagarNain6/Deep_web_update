/**
 * SPPL - Enterprise Corporate Website Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /**
   * Sticky Navbar
   */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  }

  /**
   * Auto-close mobile navbar when clicking a non-dropdown nav-link
   */
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) {
    document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1200) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

  /**
   * Dropdown submenu toggle on mobile (click instead of hover)
   */
  document.querySelectorAll('.dropdown-submenu > a').forEach(el => {
    el.addEventListener('click', function(e) {
      if (window.innerWidth < 1200) {
        e.preventDefault();
        e.stopPropagation();
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('dropdown-menu')) {
          submenu.classList.toggle('show');
        }
      }
    });
  });

  /**
   * Smooth scroll with offset for sticky navbar
   */
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Only handle pure same-page anchors (start with #)
      if (href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    });
  });

  /**
   * Scroll to Top Button
   */
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Initialize AOS (Animate On Scroll) - Optimized for ultra-snappy responsiveness
   */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 350,
      easing: 'ease-out',
      once: true,
      offset: 20
    });
  }

  /**
   * Initialize Swiper (Hero Slider)
   */
  if (typeof Swiper !== 'undefined') {
    const heroSwiperEl = document.querySelector('.hero-swiper');
    if (heroSwiperEl) {
      new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }

    const projectCarouselEl = document.querySelector('.project-carousel');
    if (projectCarouselEl) {
      new Swiper('.project-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    }

    const clientCarouselEl = document.querySelector('.client-carousel');
    if (clientCarouselEl) {
      new Swiper('.client-carousel', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 }
        }
      });
    }
  }

  /**
   * Animated Statistics (CountUp via IntersectionObserver)
   */
  const stats = document.querySelectorAll('.stat-count');
  if (stats.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-count'), 10);
          animateValue(target, 0, endValue, 2000);
          obs.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
  }

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      obj.innerHTML = Math.floor(eased * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  /**
   * Contact Form — success toast feedback
   */
  const contactForm = document.getElementById('contactForm');
  const formToast = document.getElementById('formToast');

  if (contactForm && formToast) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic HTML5 validation check
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Simulate sending (replace with real fetch/EmailJS/Formspree as needed)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';

      setTimeout(() => {
        // Reset form
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Show success toast
        formToast.classList.add('show');
        setTimeout(() => formToast.classList.remove('show'), 4000);
      }, 1200);
    });
  }

  /**
   * Order Book Category Filter Handler
   */
  const orderFilterBtns = document.querySelectorAll('.order-filter-btn');
  const orderCardCols = document.querySelectorAll('.order-card-col');

  if (orderFilterBtns.length > 0 && orderCardCols.length > 0) {
    orderFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-order-filter');

        // Update active class
        orderFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        orderCardCols.forEach(col => {
          const sector = col.getAttribute('data-sector');
          if (filter === 'all' || sector === filter) {
            col.classList.remove('d-none');
            col.style.opacity = '0';
            col.style.transform = 'translateY(10px)';
            setTimeout(() => {
              col.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
              col.style.opacity = '1';
              col.style.transform = 'translateY(0)';
            }, 10);
          } else {
            col.classList.add('d-none');
          }
        });
      });
    });
  }

  /**
   * Vessel Manufacturing Track Record Live Search Filter
   */
  const vesselSearchInput = document.getElementById('vesselSearchInput');
  const vesselTableRows = document.querySelectorAll('#vesselTrackRecordTable tbody tr');

  if (vesselSearchInput && vesselTableRows.length > 0) {
    vesselSearchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      vesselTableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (query === '' || rowText.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

});


