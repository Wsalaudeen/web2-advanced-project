const navbar = document.querySelector("nav");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  navbar.classList.toggle("open");
});
