

"use strict";


/* ------- Light & Dark mode ------- */

const $themebtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";  // Corrected here
}

const changeTheme = () => {
  $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themebtn.addEventListener("click", changeTheme);


/* ------- Tab ------- */

const $tabbtn = document.querySelectorAll("[data-tab-btn]");
let lastActiveTab = document.querySelector("[data-tab-content]");
let lastActiveTabBtn = $tabbtn[0];

$tabbtn.forEach(item => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});

