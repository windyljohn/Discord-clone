//////////////////////////////////////////////////////////////////////
// Dropdown view/hide
const btnLanguageEl = document.querySelector(".selector-container");
const dropdownEl = document.querySelector(".dropdown");
const dropdownListEl = document.querySelector(".dropdown-item");
const bodyEl = document.querySelector("body");
const bodyWrapperEL = document.querySelector(".body-wrapper");

btnLanguageEl.addEventListener("mouseup", function (e) {
  dropdownEl.classList.remove("hidden");
  dropdownListEl.classList.add("initial-highlight");
});

btnLanguageEl.addEventListener("mousedown", function (e) {
  dropdownEl.classList.add("hidden");
});

dropdownEl.addEventListener("mouseenter", function (e) {
  dropdownListEl.classList.remove("initial-highlight");
});

document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".selector-container") &&
    !e.target.closest(".dropdown-list")
  )
    dropdownEl.classList.add("hidden");
});

///////////////////////////////////////////////////////////////////////
// Animation on first load
const contentEl = document.querySelectorAll(".content");

contentEl.forEach((element) => {
  const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      element.classList.add("visible");
    }
  });
  obs.observe(element);
});

///////////////////////////////////////////////////////////////////////
// Mobile Navigation
const mobileNavContainerEl = document.querySelector(".mobile-nav-container");
const btnMobileEl = document.querySelector(".menu-mobile-icon");
const btnCloseMobileEl = document.querySelector(".close-mobile-icon");
const backdropEl = document.querySelector(".backdrop");
const safetyMarkerEl = document.querySelector(".safety-marker");
const mobileSafetyEl = document.querySelector(".mobile-safety");
const mobileBackEl = document.querySelector(".back-button");

btnMobileEl.addEventListener("click", function (e) {
  mobileNavContainerEl.classList.toggle("hidden");
  bodyWrapperEL.style.overflowY = "hidden";
  bodyWrapperEL.style.position = "fixed";
});

btnCloseMobileEl.addEventListener("click", function (e) {
  mobileNavContainerEl.classList.add("hidden");
  mobileSafetyEl.classList.add("inactive");
  bodyWrapperEL.style.overflowY = "auto";
  bodyWrapperEL.style.position = "static";
});

backdropEl.addEventListener("click", function (e) {
  mobileNavContainerEl.classList.add("hidden");
  mobileSafetyEl.classList.add("inactive");
  bodyWrapperEL.style.overflowY = "hidden";
  bodyWrapperEL.style.position = "static";
});

safetyMarkerEl.addEventListener("click", function () {
  mobileSafetyEl.classList.remove("inactive");
});

mobileBackEl.addEventListener("click", function () {
  mobileSafetyEl.classList.add("inactive");
});
