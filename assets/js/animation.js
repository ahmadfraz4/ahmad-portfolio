// code to activate the navbar line on scroll

let sections = document.querySelectorAll('.sections')
let navLink = document.querySelectorAll('.nav-menu ul li a')
let mobileLink = document.querySelectorAll('.nav-menu-mobile ul li a')

window.onscroll = () =>{
  sections.forEach((section)=>{
    let top = window.scrollY;
    let topOfSection = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute('id')
      if(top >= topOfSection && top < topOfSection + height){
        navLink.forEach((link)=>{
          link.classList.remove('active')
          document.querySelector('.nav-menu ul li a[href*='+id+']').classList.add('active')
        })
      }

  })
}

mobileLink.forEach((nav)=>{
  nav.addEventListener('click',()=>{
    let navMenu = document.querySelector('.nav-menu-mobile')
    let toggle = document.getElementById('menu-toggle')
    setTimeout(()=>{
      toggle.click()
    },50)
  })
})

let typed = new Typed('.variations',{
  strings : [
    "Developer",
    "Designer",
    "Freelancer"
  ],
  typeSpeed : 80,
  backSpeed : 50,
  backDelay: 2000,
  loop : true,
})
