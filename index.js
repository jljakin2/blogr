const mobileNavItems = document.querySelectorAll(".mobile-menu__head-item");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");
const menu = document.querySelector(".mobile-menu__container");

mobileNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("visible");
  });
});

hamburger.addEventListener("click", () => {
  menu.classList.add("visible");
  hamburger.classList.add("invisible");
  closeButton.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("visible");
  closeButton.classList.remove("visible");
  hamburger.classList.remove("invisible");
});
