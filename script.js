const burger = document.querySelector(".burger-btn");
const navUL = document.querySelector(".nav-ul");
const bars = document.querySelectorAll(".bar");

burger.addEventListener("click", () => {
  navUL.classList.toggle("show");

  bars.forEach((element) => {
    element.classList.toggle("active");
  });
});

navUL.addEventListener("click", () => {
  navUL.classList.remove("show");

  bars.forEach((element) => {
    element.classList.remove("active");
  });
});

window.addEventListener(
  "scroll",
  () => {
    let parent = document.getElementById("parallax-container");
    let children = parent.getElementsByTagName("div");
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform =
        "translateY(-" + (window.pageYOffset * i) / children.length + "px)";
    }
  },
  false
);
