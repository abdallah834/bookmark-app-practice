"use strict";
let siteName = document.querySelector(".site-title");
let siteLink = document.querySelector(".site-link");
const addBtn = document.querySelector(".add-btn");
const sitesInfo = document.querySelector(".site-info");
const inputAlert = document.querySelector(".input-alert");
const alertCloseBtn = document.querySelector(".exit-alert");
const alertBody = document.querySelector(".bg-color");

const regex = /^[a-z]{3,}$/;
const regexLink = /^[a-z]{3,}(.com|.tv)$/;
let sitesArr = [];
let sitesBox = [];
let currentIndex;
addBtn.addEventListener("click", function () {
  if (
    siteName.classList.contains("is-valid") &&
    siteLink.classList.contains("is-valid")
  ) {
    displaySite();

    let link = siteLink.value;
    const visitBtn = document.querySelector(".visit-btn");
    visitBtn.addEventListener("click", function () {
      location.href = `https://www.${link}`;
    });
    const site = document.querySelector(".site-details");
    sitesBox.push(site);
    console.log(sitesBox);

    const deleteBtn = document.querySelector(".del-btn");
    deleteBtn.addEventListener("click", function (currentIndex) {
      sitesBox.splice(currentIndex, 1);
      sitesInfo.nextElementSibling.remove();
    });

    clearInputs();
    resetCheck();
  } else {
    inputAlert.classList.remove("d-none");
    alertCloseBtn.addEventListener("click", function () {
      inputAlert.classList.add("d-none");
    });
    alertBody.addEventListener("click", function () {
      inputAlert.classList.add("d-none");
    });
  }
});

function clearInputs() {
  siteName.value = "";
  siteLink.value = "";
}
function displaySite() {
  currentIndex = sitesArr.length;
  let firstLetter = siteName.value.charAt(0);
  let upperCaseLetter = firstLetter.toUpperCase();
  let remainingLetters = siteName.value.slice(1);
  let fullWord = upperCaseLetter + remainingLetters;

  let siteDetes = `<div class="site-details d-flex flex-row justify-content-between">
              <span class="ms-3">${sitesBox.length + 1}</span>
              <span  class="site-name">${fullWord}</span>
              <button class="visit-btn"><i class="fa-solid fa-eye"></i> Visit</button>
              <button class="del-btn"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>`;
  sitesArr.push(siteDetes);
  sitesInfo.insertAdjacentHTML("afterend", sitesArr[currentIndex]);
  console.log(currentIndex);
  console.log(sitesArr);
}
siteName.addEventListener("input", function () {
  // const regex = /^[a-z]{3,}$/;
  if (regex.test(siteName.value)) {
    siteName.classList.remove("is-invalid");
    siteName.classList.add("is-valid");
  } else {
    siteName.classList.remove("is-valid");
    siteName.classList.add("is-invalid");
  }
});
siteLink.addEventListener("input", function () {
  // const regexLink = /^[a-z]{3,}(.com|.tv)$/;
  if (regexLink.test(siteLink.value)) {
    siteLink.classList.remove("is-invalid");
    siteLink.classList.add("is-valid");
  } else {
    siteLink.classList.remove("is-valid");
    siteLink.classList.add("is-invalid");
  }
});

function resetCheck() {
  siteName.classList.remove("is-invalid");
  siteName.classList.remove("is-valid");
  siteLink.classList.remove("is-valid");
  siteLink.classList.remove("is-invalid");
}
// adding multiple attr to an el
// setAttributes(addBtn, {
//   "data-bs-toggle": "modal",
//   "data-bs-target": "#exampleModal",
// });
// function setAttributes(el, attr) {
//   for (const key in attr) {
//     el.setAttribute(key, attr[key]);
//   }
// }
