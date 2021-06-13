// Grab elements from the DOM
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

// Add an event listener to the burger and toggle the "active" class
burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   menu.classList.toggle("active");
});
