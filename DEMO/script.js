// Initialize AOS animations
AOS.init({ duration: 800, once: true });

// Hamburger menu functionality - Initialize immediately
let isMenuOpen = false;

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const overlay = document.getElementById('overlay');
  const closeSidebar = document.getElementById('closeSidebar');

  if (!hamburger || !mobileMenu) {
    console.log('Mobile menu elements not found');
    return;
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    console.log('Toggle menu:', isMenuOpen);

    const spans = hamburger.querySelectorAll('span');

    if (isMenuOpen) {
      // Show sidebar
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';

      mobileMenu.style.transform = 'translateX(0)';
      mobileMenu.style.opacity = '1';
      mobileMenu.style.visibility = 'visible';

      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Hide sidebar
      spans[0].style.transform = 'rotate(0) translate(0, 0)';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'rotate(0) translate(0, 0)';

      mobileMenu.style.transform = 'translateX(100%)';
      mobileMenu.style.opacity = '0';

      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';

      // Restore body scroll
      document.body.style.overflow = '';

      setTimeout(() => {
        if (!isMenuOpen) mobileMenu.style.visibility = 'hidden';
      }, 300);
    }
  }

  function closeMenu() {
    if (isMenuOpen) {
      isMenuOpen = false;
      const spans = hamburger.querySelectorAll('span');

      spans[0].style.transform = 'rotate(0) translate(0, 0)';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'rotate(0) translate(0, 0)';

      mobileMenu.style.transform = 'translateX(100%)';
      mobileMenu.style.opacity = '0';

      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';

      // Restore body scroll
      document.body.style.overflow = '';

      setTimeout(() => {
        mobileMenu.style.visibility = 'hidden';
      }, 300);
    }
  }

  // Add click listener to hamburger
  hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Hamburger clicked');
    toggleMenu();
  });

  // Add click listener to close button
  if (closeSidebar) {
    closeSidebar.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close menu when clicking on mobile links
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      console.log('Mobile link clicked');
      closeMenu();
    });
  });

  // Close menu when clicking on overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isMenuOpen) {
      closeMenu();
    }
  });

  console.log('Mobile menu initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}