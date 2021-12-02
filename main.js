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
    breakpoints: true,
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

  $(".box-slide__list").slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 1000,
    swipe: true,
  });
});
