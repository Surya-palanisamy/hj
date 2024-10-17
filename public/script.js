document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMobile = document.querySelector(".nav-buttons-mobile");
  const mainContent = document.querySelector("main");
  const navButtons = navMobile.querySelectorAll(".nav-btn");

  // Toggle mobile nav
  hamburger.addEventListener("click", toggleMobileNav);

  // Close mobile nav when clicking outside
  mainContent.addEventListener("click", closeMobileNav);

  // Close mobile nav when clicking nav buttons
  navButtons.forEach((button) => {
    button.addEventListener("click", closeMobileNav);
  });

  function toggleMobileNav() {
    navMobile.classList.toggle("hidden-nav");
    toggleHamburgerIcon();
  }

  function closeMobileNav() {
    if (!navMobile.classList.contains("hidden-nav")) {
      navMobile.classList.add("hidden-nav");
      resetHamburgerIcon();
    }
  }

  // Toggle hamburger icon
  function toggleHamburgerIcon() {
    const spans = hamburger.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.classList.toggle(`close-${index + 1}`);
    });
  }

  // Reset hamburger icon
  function resetHamburgerIcon() {
    const spans = hamburger.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.classList.remove(`close-${index + 1}`);
    });
  }
});
