import Accordion from "accordion-js";
new Accordion(".accordion-container");

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(`.hamburger-btn`);
  const hamburgerNav = document.querySelector(".hamburger-nav");
  const overlay = document.querySelector(".navbar__overlay");
  const body = document.querySelector("html");
  const menuItems = document.querySelectorAll(".hamburger-nav li");
  const menuIcons = document.querySelectorAll(
    ".hamburger-nav__icon-container a"
  );

  // Toggle active classes when the hamburger button is clicked
  hamburgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerButton.classList.toggle("hamburger-btn--active");
    hamburgerNav.classList.toggle("hamburger-nav--active");
    overlay.classList.toggle("overlay--active");
    body.classList.toggle("html--no-scroll");
  });

  // Remove active classes when the overlay is clicked
  overlay.addEventListener("click", () => {
    hamburgerButton.classList.remove("hamburger-btn--active");
    hamburgerNav.classList.remove("hamburger-nav--active");
    overlay.classList.remove("overlay--active");
    body.classList.remove("html--no-scroll");
  });
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburgerButton.classList.remove("hamburger-btn--active");
      hamburgerNav.classList.remove("hamburger-nav--active");
      overlay.classList.remove("overlay--active");
      body.classList.remove("html--no-scroll");
    });
  });
  menuIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      hamburgerButton.classList.remove("hamburger-btn--active");
      hamburgerNav.classList.remove("hamburger-nav--active");
      overlay.classList.remove("overlay--active");
      body.classList.remove("html--no-scroll");
    });
  });
});
