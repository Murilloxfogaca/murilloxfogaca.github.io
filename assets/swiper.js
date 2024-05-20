var swiper = new Swiper(".careerSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var skillsSwiper = new Swiper(".skillsSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
  },
});
