// import '../styles/main.css'

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(`.hamburger-btn`);
  const hamburgerNav = document.querySelector(".hamburger-nav");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("html");
  const menuItems = document.querySelectorAll(".hamburger-nav li"); 
  const menuIcons = document.querySelectorAll(".hamburger-nav__icon-container a")

  // Toggle active classes when the hamburger button is clicked
  hamburgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerButton.classList.toggle("active");
    hamburgerNav.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  // Remove active classes when the overlay is clicked
  overlay.addEventListener("click", () => {
    hamburgerButton.classList.remove("active");
    hamburgerNav.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");
  });
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburgerButton.classList.remove("active");
      hamburgerNav.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
  menuIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    hamburgerButton.classList.remove("active");
    hamburgerNav.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});
});
