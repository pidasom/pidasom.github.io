const toggleBar = document.querySelector("#hambuger-contain");
const nav = document.querySelector(".nav");
const menuBg = document.querySelector("#menu-bg");

const toChange = () => {
  toggleBar.classList.toggle("change");
  nav.classList.toggle("change");
  menuBg.classList.toggle("change-bg"); 
};
toggleBar.addEventListener("click", toChange);
