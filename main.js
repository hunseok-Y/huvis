import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  autoHeight: true,
  delay: 3000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
