"use strict";
// STORING ELEMENTS IN A VARIALBE
const btnOpenNav = document.querySelector(".btn-open-menu");
const btnCloseNav = document.querySelector(".btn-close-menu");

const navigationBar = document.querySelector(".navbar");
const overlayEL = document.querySelector(".overlay");

const btnBookmark = document.querySelector(".btn-bookmark");
const btnBookmarkDesktop = document.querySelector(".btn-bookmark-desktop");
const bookmarkText = document.querySelector(".bt");
const bookmarkIcon = document.querySelector(".bookmark-icon-desktop");
const cyanBookmark = document.querySelector(".cyan-bookmark-icon");
const bookmarkColorText = document.querySelector(".bc");
const mobileGreyBookmark = document.querySelector(".dd");
const mobileColorBookmark = document.querySelector(".cc");

const successModal = document.querySelector(".success");
const btnGotIt = document.querySelector(".btn-got-it");

// Back this project elements
const btnBack = document.querySelector(".btn-back");
const selectionEL = document.querySelector(".selection");

// Selection elements
const btnCloseSelection = document.querySelector(".btn-close-modal");

// Pledge elements
const btnNoPledge = document.querySelector(".pledge-label");
const noPledgeEL = document.querySelector(".no-pledge");
const btnSelectBamboo = document.querySelector(".btn-select");

const selectedPledges = document.querySelectorAll(".selected-pledge");
const radioPledge = document.querySelector("#radio-pledge");

const btnContinueELS = document.querySelectorAll(".btn-continue");
let backers;

// Pledge functionality
//No pledge
btnNoPledge.addEventListener("click", function () {
  selectedPledges[0].classList.toggle("hidden");
  noPledgeEL.classList.toggle("border-color");
  if (radioPledge.checked) {
    radioPledge.checked = false;
  } else {
    radioPledge.checked = true;
  }
});
btnContinueELS[0].addEventListener("click", function () {
  selectionEL.classList.add("hidden");
  successModal.classList.remove("hidden");
});
btnGotIt.addEventListener("click", function () {
  successModal.classList.add("hidden");
  overlayEL.classList.add("hidden");
});

btnSelectBamboo.addEventListener("click", function () {
  selectionEL.classList.remove("hidden");
  overlayEL.classList.remove("hidden");
});
////////////////////////////////////////////////////
/* FUNCTIONALITY */
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

btnBookmark.addEventListener("click", function () {
  mobileColorBookmark.classList.toggle("hidden");
  mobileGreyBookmark.classList.toggle("hidden");
});

btnBookmarkDesktop.addEventListener("click", function () {
  cyanBookmark.classList.toggle("visibility-hidden");
  bookmarkColorText.classList.toggle("hidden");
  bookmarkText.classList.toggle("hidden");
  // bookmarkIcon.src = "./images/icon-bookmark-cyan.svg";
});

/* BACK THIS PROJECT FUNCTIONALITY */
btnBack.addEventListener("click", function () {
  selectionEL.classList.remove("hidden");
  overlayEL.classList.remove("hidden");
});

/* SELECTION MODAL FUNCTIONALITY */
btnCloseSelection.addEventListener("click", function () {
  selectionEL.classList.add("hidden");
  overlayEL.classList.add("hidden");
});
