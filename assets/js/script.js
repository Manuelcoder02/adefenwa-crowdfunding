"use strict";
// STORING ELEMENTS IN A VARIALBE
const btnOpenNav = document.querySelector(".btn-open-menu");
const btnCloseNav = document.querySelector(".btn-close-menu");

const navigationBar = document.querySelector(".navbar");

const btnBookmark = document.querySelector(".btn-bookmark");
const btnBookmarkDesktop = document.querySelector(".btn-bookmark-desktop");
const bookmarkText = document.querySelector(".bt");
const bookmarkIcon = document.querySelector(".a");
console.log(bookmarkIcon);

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

btnBookmarkDesktop.addEventListener("click", function () {
  bookmarkText.textContent = "Bookmarked";
  bookmarkText.style.color = "hsl(176, 72%, 28%)";
  bookmarkIcon.src = "./images/icon-bookmark-cyan.svg";
});
