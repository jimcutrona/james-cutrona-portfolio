
// wait for DOM to load first
document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function () { sticky() };
  //target scroll points using the top of selected elements 
  let stick = document.getElementById("navbar").offsetTop;
  let stickAgain = document.querySelector("main").offsetTop;
  //stick to top of screen when nav's absolute position is scrolled to 
  //stick to welcome section when user scrolls to the bottom of that element
  function sticky() {
    if (window.pageYOffset > stick) {
      navbar.classList.add("stick");
      navbar.classList.remove("nav")
    } else if (window.pageYOffset < stickAgain) {
      navbar.classList.remove("sticky");
      navbar.classList.add("nav")
    }
  }
})