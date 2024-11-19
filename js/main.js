// Swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// show video

const playBtn = document.querySelector(".play-movie");
const video = document.querySelector(".video-container");
const closeBtn = document.querySelector(".close-video");
const myVideo = document.querySelector("#myvideo");

playBtn.addEventListener("click", () => {
  video.classList.add("show-video");
  //   autoplay video when open modal video
  myVideo.play();
});

closeBtn.addEventListener("click", () => {
  video.classList.remove("show-video");
  //   pause video when close modal video
  myVideo.pause();
});
