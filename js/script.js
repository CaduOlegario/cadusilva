const menuMobile = document.querySelector(".menu-mobile");
const menuDesktop = document.querySelector(".menu-desk");

if (window.innerWidth < 680) {
  console.log("Mostra Menu Mobile");
  menuMobile.classList.remove("none");
  menuDesktop.classList.add("none");
  // }
} else if (window.innerWidth > 680) {
  console.log("Mostra Menu desk");
  menuMobile.classList.add("none");
  menuDesktop.classList.remove("none");
}

window.addEventListener("resize", () => {
  // console.log(window.innerWidth);

  if (window.innerWidth < 680) {
    console.log("Mostra Menu Mobile");
    menuMobile.classList.remove("none");
    menuDesktop.classList.add("none");
  } else if (window.innerWidth > 680) {
    console.log("Mostra Menu desk");
    menuMobile.classList.add("none");
    menuDesktop.classList.remove("none");
  }
});
