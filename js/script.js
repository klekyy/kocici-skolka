// Mobile menu

const hamburgerMenu = document.querySelector("#mobile-menu");
const mobileNavigation = document.querySelector("#mobile-nav");

hamburgerMenu.addEventListener("click", function(e) {
  e.preventDefault();
  hamburgerMenu.classList.toggle("close");
  if (mobileNav.style.display === "block") {
    mobileNavigation.style.display = "none";
  } else {
    mobileNavigation.style.display = "block";
  }
});

// If you click on mobile navigation href, mobile menu disappear

const mobileHref = document.querySelectorAll(".mobile-href");
const mobileNav = document.getElementById("mobile-nav");

for(let oneHref of mobileHref){
  oneHref.addEventListener("click", function(){
    mobileNav.style.display = "none";
    hamburgerMenu.classList.remove("close")
  })
}

// Slider

let slideIndex = 1;
showDivs(slideIndex);
                  
function plusDivs(n) {
  showDivs(slideIndex += n);
  }
                  
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex"; 
}


// Cookies

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const rejectButton = document.getElementById('reject-cookies');

  // Check if the user has already made a choice
  if (!getCookie('cookie-consent')) {
      banner.style.display = 'block';
  }

  acceptButton.addEventListener('click', function () {
      setCookie('cookie-consent', 'accepted', 365);
      banner.style.display = 'none';
  });

  rejectButton.addEventListener('click', function () {
      setCookie('cookie-consent', 'rejected', 365);
      banner.style.display = 'none';
  });

  function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }
});

// GSAP Animations

gsap.registerPlugin(ScrollTrigger)

let headings2 = gsap.utils.toArray("h2")

gsap.from("li", { 
  scrollTrigger: "li",
  duration: 1, 
  x: -100, 
  stagger: 0.2, 
  opacity: 0, 
  delay: 1 
});


gsap.from("h1", { 
  scrollTrigger: "h1",
  duration: 1, 
  opacity: 0, 
  y: -100, 
  delay: 2 
});

gsap.from(".fb-mail", { 
  scrollTrigger: ".fb-mail",
  duration: 0.5, 
  x: 10, 
  repeat: 6, 
  yoyo: true 
});

gsap.from(".qr-div", {
  scrollTrigger: ".qr-div",
  duration: 1, 
  scale: 0 
});

headings2.forEach((heading2) => {
  
  gsap.from(heading2, { autoAlpha: 0,
    scrollTrigger: heading2,
    duration: 1,
    x: -300,
    opacity: 0
});
  
})


gsap.from(".right-content img", { 
  scrollTrigger: ".right-content img",
  duration: 2, 
  opacity: 0 
});


ScrollTrigger.create({
  trigger: ".pin-section",
  pin: true,
  start: "top top",
  end: "+=500"
});








