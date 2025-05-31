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
const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const filename = document.getElementById('filename');

  dropzone.addEventListener('click', () => fileInput.click());

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('contact-form__dropzone--active');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('contact-form__dropzone--active');
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('contact-form__dropzone--active');
    fileInput.files = e.dataTransfer.files;
    filename.textContent = fileInput.files[0]?.name || '';
  });

  fileInput.addEventListener('change', () => {
    filename.textContent = fileInput.files[0]?.name || '';
  });

  // Optional: show file name on submit and prevent empty file
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    // Example: prevent submit if file is required and not selected
    // if (fileInput.files.length === 0) {
    //   e.preventDefault();
    //   alert('Přiložte soubor.');
    // }
  });
