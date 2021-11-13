import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
document.addEventListener("DOMContentLoaded", () => {
  const mainPgeSwiper = new Swiper(".main-page-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    autoHeight: true,
    nested: true,
    observer: true,
    observeParents: true,
    speed: 2000,
    delay: 3000,
    pagination: {
      el: ".main-page__pagination",
      clickable: true,
    },
  });

  const ItemList = new Swiper(".item-list", {
    spaceBetween: 30,
    centeredSlides: true,
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
});
