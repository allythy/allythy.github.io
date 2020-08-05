
//Glitch
let backgroundImage = document.getElementById("wrapper-glitch")
let count = 3;
for (let i = 0; i < count; i++) {
  let negGlitch = document.createElement('div')
  negGlitch.className = "wrapper"
  backgroundImage.appendChild(negGlitch);
}

// Menu
document.addEventListener("DOMContentLoaded", () => {
  let navbarBurger = document.querySelector(".navbar-burger");
  let navbarMenu = document.querySelector(".navbar-menu");
  if (navbarBurger && navbarMenu) {
    navbarBurger.addEventListener("click", function () {
      navbarBurger.classList.toggle("is-active");
      if (navbarBurger.classList.contains("is-active")) {
        navbarMenu.style.display = "block";
        if (navbarMenu.querySelectorAll("a[href]")) {
          [].forEach.call(navbarMenu.querySelectorAll("a[href]"), function (
            navURL
          ) {
            navURL.addEventListener("click", function () {
              navbarMenu.style.display = "none";
              navbarBurger.classList.remove("is-active");
            });
          });
        }
      } else navbarMenu.style.display = "none";
    });
  }
  if (document.querySelectorAll(".navbar-link")) {
    [].forEach.call(document.querySelectorAll(".navbar-link"), function (
      elLink
    ) {
      if (elLink.classList.contains("is-active"))
        elLink.classList.toggle("is-active");
      if (
        elLink.nextElementSibling.classList.contains("navbar-dropdown") &&
        elLink.nextElementSibling.hasChildNodes()
      ) {
        elLink.addEventListener("click", function () {
          elLink.classList.toggle("is-active");
          if (
            elLink.classList.contains("is-active") &&
            elLink.nextElementSibling.style.display === "none"
          )
            elLink.nextElementSibling.style.display = "block";
          else if (
            !elLink.classList.contains("is-active") &&
            elLink.nextElementSibling.style.display === "block"
          )
            elLink.nextElementSibling.style.display = "none";
          [].forEach.call(elLink.nextElementSibling.childNodes, function (
            siblingChild
          ) {
            siblingChild.addEventListener("click", function () {
              siblingChild.parentNode.style.display = "none";
              if (elLink.classList.contains("is-active"))
                elLink.classList.toggle("is-active");
            });
          });
        });
        elLink.nextElementSibling.addEventListener("mouseleave", function () {
          elLink.nextElementSibling.style.display = "none";
          if (elLink.classList.contains("is-active"))
            elLink.classList.toggle("is-active");
        });
      }
    });
  }
});

// Scroll-down
window.addEventListener("scroll", function(){
  var header = this.document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
})