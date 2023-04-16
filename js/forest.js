const tree = document.querySelector(".trees");
const batBoo = document.querySelector(".batboo");

function batboo() {
  const sound = document.getElementById("Sound");
  sound.play();
  batBoo.classList.add("boo");
  setTimeout(() => {
    batBoo.classList.remove("boo");
  }, 3000);
}

tree.addEventListener("click", batboo);

window.addEventListener("scroll", () => {
  let value = window.scrollY;
});
