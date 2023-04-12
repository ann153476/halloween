const text = document.querySelector("#text");
const treeLeft = document.querySelector("#tree-left");
const treeRight = document.querySelector("#tree-right");
const gateLeft = document.querySelector("#gate-left");
const gateRight = document.querySelector("#gate-right");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  // console.log(value);
  if (value < 590) {
    header.style.backgroundImage = "linear-gradient(rgb(0, 0, 0), transparent)";
  }
  if (value > 590) {
    header.style.backgroundImage = "linear-gradient(#1d283a,#1d283a)";
  }

  text.style.marginTop = value * 2.5 + "px";
  treeLeft.style.left = value * -1.5 + "px";
  treeRight.style.left = value * 1.5 + "px";
  gateLeft.style.left = value * -0.7 + "px";
  gateRight.style.right = value * -0.7 + "px";
});
