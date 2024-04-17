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


function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

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


document.addEventListener('DOMContentLoaded', function() {
  const cookiesBar = document.getElementById('cookies-bar');
  const acceptCookiesBtn = document.getElementById('accept-cookies-btn');
  const refuseCookiesBtn = document.getElementById('refuse-cookies-btn');

  // Check if cookies have been accepted
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
      // Show cookies bar if not accepted
      cookiesBar.style.display = 'block';
  }

  // Handle accept cookies button click
  acceptCookiesBtn.addEventListener('click', function() {
      // Set cookiesAccepted to true in local storage
      localStorage.setItem('cookiesAccepted', true);
      
      // Hide cookies bar
      cookiesBar.style.display = 'none';
  });

  // Handle refuse cookies button click
  refuseCookiesBtn.addEventListener('click', function() {
      cookiesBar.style.display = 'none';
    });
});