import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
document.addEventListener("DOMContentLoaded", () => {
  const bullet = [
    "Main",
    "Products",
    "About us",
    "IR & Career",
    "PR Center",
    "Life in Huvis",
  ];
  const mainPgeSwiper = new Swiper(".main-page-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    autoHeight: true,
    nested: true,
    observer: true,
    observeParents: true,
    speed: 1000,
    delay: 3000,
    pagination: {
      el: ".main-page__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '"><span>' +
          bullet[index] +
          "</span></div>"
        );
      },
    },
  });

  const ItemList = new Swiper(".item-list", {
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

  new Swiper(".products__swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    nested: true,
    loop: true,
  });

  const button = document.querySelector(".family__button");
  button.addEventListener("click", () => {
    const dropdown = document.querySelector(".family__discroption");
    dropdown.classList.add("show");
  });

  button.addEventListener("blur", () => {
    const dropdown = document.querySelector(".family__discroption");
    dropdown.classList.remove("show");
  });
});
