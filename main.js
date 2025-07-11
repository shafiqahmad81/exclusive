import "./style.css";

let closeMenu = document.getElementById("close-menu");
let openMenu = document.getElementById("open-menu");
let mobileMenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", () => {
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});
closeMenu.addEventListener("click", () => {
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});

// slider section

const hero = new Swiper(".myHero", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const flash = new Swiper(".flashSales", {
  slidesPerView: 1,
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper1-button-next",
    prevEl: ".swiper1-button-prev",
  },
  pagination: {
    enabled: false,
    clickable: true,
  },

  breakpoints: {
    440: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
const catagory = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },
  pagination: {
    enabled: false,
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

// sidebar

document.querySelectorAll('.sidebarbtn').forEach(sidebarbtn => {
  sidebarbtn.addEventListener('click', () => {
    const content = sidebarbtn.nextElementSibling;
    const arrow = sidebarbtn.querySelector('svg');

    content.classList.toggle('hidden');
    arrow.classList.toggle('rotate-90');
  });
});


