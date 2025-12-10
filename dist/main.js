/**
 * Mobile Navigation Toggle
 * Handles hamburger menu functionality and accessibility
 */
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    // Toggle menu on button click
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a nav link is clicked
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const isClickInside = mobileMenuButton.contains(e.target) || mobileMenu.contains(e.target);
      if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        mobileMenuButton.focus();
      }
    });
  }

  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
