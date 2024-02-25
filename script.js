const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible")
})

if(navMenu.classList.contains("nav-menu-visible")){
    navToggle.setAttribute("aria-label", "cerrar menu");
}else{
    navToggle.setAttribute("aria-label", "Abrir menu")
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    effect: "fade",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    //scrollbar: {
    //  el: '.swiper-scrollbar',
    //},
  });