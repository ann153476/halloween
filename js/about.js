const aboutPage = document.querySelector(".about");

function stars() {
  for (let i = 1; i < 70; i++) {
    aboutPage.insertAdjacentHTML(
      "afterbegin",
      `<div id="star-${i}" class="star"></div>`
    );

    let star = document.querySelector(`#star-${i}`);
    star.style.left = Math.random() * (100 - 1) + 1 + "%";
    star.style.top = Math.random() * (80 - 1) + 1 + "%";
    star.style.animationDelay = Math.random() * (3 - 1) + 1 + "s";
  }
}

document.addEventListener("DOMContentLoaded", stars);
