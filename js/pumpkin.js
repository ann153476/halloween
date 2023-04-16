document.onmousemove = function (e) {
  let x = e.x - 50;
  let y = e.y - 50;
  console.log(x + " " + y);
  document.querySelector(".y-1").style.transform = "rotate(45deg)";
};
