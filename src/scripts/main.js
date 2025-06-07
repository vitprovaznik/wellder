//Accordion
import Accordion from "accordion-js";
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".accordion-container");
  if (container) {
    new Accordion(".accordion-container");
  }
});
//Back to top
import { addBackToTop } from "vanilla-back-to-top";
addBackToTop({
  diameter: 56,
  backgroundColor: "rgb(255, 255, 255)",
  textColor: "#e97818",
  zIndex: 1000,
  scrollDuration: 50,
});

//Lightgallery
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
lightGallery(document.querySelector(".gallery"), {
        plugins: [lgThumbnail],
        selector: "a"
    });

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
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburgerButton.classList.remove("hamburger-btn--active");
      hamburgerNav.classList.remove("hamburger-nav--active");
      overlay.classList.remove("overlay--active");
      body.classList.remove("html--no-scroll");
    }
  });
});
const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const filename = document.getElementById("filename");

if (dropzone) {
  dropzone.addEventListener("click", () => {
    if (fileInput) fileInput.click();
  });

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("contact-form__dropzone--active");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("contact-form__dropzone--active");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("contact-form__dropzone--active");
    if (fileInput) {
      fileInput.files = e.dataTransfer.files;
      if (filename) {
        filename.textContent = fileInput.files[0]?.name || "";
      }
    }
  });
}

if (fileInput) {
  fileInput.addEventListener("change", () => {
    if (filename) {
      filename.textContent = fileInput.files[0]?.name || "";
    }
  });
}

// document.querySelector('.contact-form').addEventListener('submit', function(e) {
// });
