
// #### Scroll Event ====

let header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  let windowPosition = window.scrollY > 50;

  if (windowPosition) {
    header.style.padding = "9px 0";
  } else {
    header.style.padding = "20px 0";
  }
  header.classList.toggle("sticky", windowPosition);
 
  let topGo = document.getElementById("top-go");
  topGo.classList.toggle("appear", windowPosition);
});


// #### Toggle Dark/Light Mode

let toggleMode = document.getElementById("mySwitch");
const toggleSwitch = document.querySelector(".switch");
let slider = document.querySelector('.slider')
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let body = document.querySelector("body");
let heroImg = document.querySelector(".hero img");
let section1 = document.querySelector('.section1')
let section6 = document.querySelector('.section6')
let imageAbout = document.querySelector('.w-about-img')
let variableText = document.querySelector('.variations')
toggleMode.addEventListener("change", () => {
  if (toggleMode.checked) {
    body.classList.add("light_theme");
    body.classList.remove("dark_theme");
    slider.classList.add('active')
    section1.classList.add('low-opacity')
    section1.classList.add('section1Light')
    section6.classList.add('section6Light')
    imageAbout.classList.add('w-light')
    variableText.style.color = 'red'
  } else {
    body.classList.add("dark_theme");
    body.classList.remove("light_theme");
    section1.classList.remove('section1Light')
    section6.classList.remove('section6Light')
    slider.classList.remove('active')
    imageAbout.classList.remove('w-light')
    section1.classList.remove('low-opacity')
    variableText.style.color = 'var(--orange)'
  }
});


// #### Toggle Mobile-Menu

var menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  let mobileMenu = document.querySelector(".nav-menu-mobile");
  mobileMenu.classList.toggle("disappear");
});

// #### Btn animation skills & Tools

let toolsPillBtn = document.querySelector(".btn-section-skills");
let toolsPill = document.querySelector(".active-skill");
document.querySelector(".skills-set");
document.querySelector(".tools-set");

let [skills, tools, skillbtn, toolbtn] = [
  document.querySelector(".skills-box-section"),
  document.querySelector(".tools-box-section"),
  document.querySelector(".skills-set"),
  document.querySelector(".tools-set"),
];

toolsPillBtn.addEventListener("click", () => {
  toolsPill.classList.toggle("pill-slide");
  skills.classList.toggle("disappear");
  tools.classList.toggle("disappear");
  skillbtn.classList.toggle("active");
  toolbtn.classList.toggle("active");
});


// animations on scroll
function observeAndAnimateSections(sections, animationClass) {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  sections.forEach(section => {
      observer.observe(section);
  });
}

// Animation selecting sections for animation:
const animateCards = document.querySelectorAll('.section2-cards');
const section1Content = document.querySelector('.section1-content');
const aboutImage = document.querySelector('.about-image')
let bannerImg = document.querySelector('#banner-img')
const skillBoxSection = document.querySelector('.skill-box-inner-section')
let projects = document.querySelectorAll('.project-list li')
const formSection = document.querySelector('.form-section')

// passing Elements to animate using function 
observeAndAnimateSections([bannerImg], 'growUp');
observeAndAnimateSections(animateCards, 'growUp');
observeAndAnimateSections([aboutImage], 'growUp');

observeAndAnimateSections([skillBoxSection], 'fadeInLeft');
observeAndAnimateSections([section1Content], 'fadeInLeft');
observeAndAnimateSections(projects, 'growUp');
observeAndAnimateSections([formSection], 'growUp');
