const elementos = document.querySelectorAll("[data-anima]");
const animacaoClass = "animacao";

function animaScroll() {
  const topoPaginaNaJanela = window.pageYOffset + (window.innerHeight * 3) / 4;
  elementos.forEach(function (elemento) {
    if (topoPaginaNaJanela > elemento.offsetTop) {
      elemento.classList.add(animacaoClass);
    } else {
      elemento.classList.remove(animacaoClass);
    }
  });
}

if (elementos.length) {
  window.addEventListener("scroll", function () {
    animaScroll();
  });
}

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "images/menu/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "images/menu/close_white_36dp.svg";
  }
}

var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

var btn = $("#back-to-top");

btn.click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

function reference() {
  vid = document.getElementById("video");
  vid.play();
  const video = document.querySelector("#video");
  video.requestPictureInPicture();
}
