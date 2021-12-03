import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
document.addEventListener("DOMContentLoaded", () => {
  const sectionNames = [
    "Main",
    "Products",
    "About us",
    "IR & Career",
    "PR Center",
    "Life in Huvis",
  ];

  $(".main-page-wrapper").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: sectionNames,
    css3: true,
    onLeave: function (index, nextIndex, direction) {
      const navElement = document.querySelector("#fp-nav");
      if (nextIndex === 7) {
        navElement.classList.add("hidden");
      } else {
        navElement.classList.remove("hidden");
      }
    },
  });

  const ItemList = new Swiper(".visual-list", {
    spaceBetween: 0,
    centeredSlides: true,
    autoHeight: true,
    nested: true,
    observer: true,
    observeParents: true,
    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".list-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".list-button-next",
      prevEl: ".list-button-prev",
    },
  });

  $(".box-slide__list").slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 1000,
    swipe: true,
  });

  const button = document.querySelector(".family__button");
  const dropdown = document.querySelector(".family__discroption");
  const familyBox = document.querySelector(".family__button-box");

  button.addEventListener("click", () => {
    dropdown.classList.add("show");
  });

  familyBox.addEventListener("mouseleave", () => {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  });
});
