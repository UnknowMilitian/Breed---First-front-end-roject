// ! For Scroling Navbar
const headerResponsive = document.getElementById("header");

window.onscroll = () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    headerResponsive.style.position = "fixed";
    headerResponsive.style.boxShadow = "0px 3px 16px 0px rgb(0 0 0 / 10%)";
  } else {
    if (parseInt(window.innerWidth) > 925) {
      headerResponsive.style.position = "static";
      headerResponsive.style.boxShadow = "none";
      headerResponsive.style.transition = "all 0.4s ease-in-out";
    } else {
      headerResponsive.style.boxShadow = "0px 3px 16px 0px rgb(0 0 0 / 10%)";
    }
  }
};

// ! For hamburger navbar
const hamburgerHeader = document.querySelector(".hamburger");
const navbarHeader = document.querySelector(".header-navbar");

hamburgerHeader.onclick = () => {
  navbarHeader.classList.toggle("active");
  hamburgerHeader.classList.toggle("active");
};
