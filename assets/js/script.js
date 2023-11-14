"use strict";
// STORING ELEMENTS IN A VARIALBE
const btnOpenNav = document.querySelector(".btn-open-menu");
const btnCloseNav = document.querySelector(".btn-close-menu");

const navigationBar = document.querySelector(".navbar");

btnOpenNav.addEventListener("click", function () {
  navigationBar.classList.remove("hidden");
  btnOpenNav.classList.add("visibility-hidden");
  btnCloseNav.classList.remove("visibility-hidden");
});

btnCloseNav.addEventListener("click", function () {
  navigationBar.classList.add("hidden");
  btnOpenNav.classList.remove("visibility-hidden");
  btnCloseNav.classList.add("visibility-hidden");
});
