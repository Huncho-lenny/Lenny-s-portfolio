/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HOME TYPED JS ===============*/
const typed = new Typed('.home__education', {
   strings: ['Frontend Developer', 'Web Developer', 'UI/UX Designer'],
   typeSpeed: 100,
   backSpeed: 50,
   backDelay: 2000,
   loop: true
})


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   // Add a class if the bottom offset is greater than 50 of the viewport
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_YOUR_ID', 'template_YOUR_ID', '#contact-form', 'YOUR_PUBLIC_KEY')
      .then(() => {
         // Show sent message
         contactMessage.textContent = 'Message sent successfully ✅'

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         contactForm.reset()
      }, () => {
         // Show error message
         contactMessage.textContent = 'Message not sent (service error) ❌'
      })
}

contactForm.addEventListener('submit', sendEmail) 


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp) 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
   const scrollDown = window.scrollY

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      }else{
         sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '80px',
   duration: 2000,
   delay: 200,
   easing: 'cubic-bezier(0.5, 0, 0, 1)',
   reset: false,
   viewFactor: 0.2,
   interval: 300,
   scale: 0.9,
})

// Hero section with stagger effect
sr.reveal('.home__data', {
   origin: 'left',
   distance: '100px',
   duration: 1000,
   delay: 100
})

sr.reveal('.home__social', {
   origin: 'bottom',
   distance: '100px',
   duration: 1000,
   delay: 600,
   interval: 200
})

sr.reveal('.home__image', {
   origin: 'right',
   distance: '100px',
   duration: 1200,
   delay: 400,
   rotate: { x: 0, y: 0, z: 5 }
})

// About section with flip effect
sr.reveal('.about__data', {
   origin: 'left',
   distance: '100px',
   duration: 1200,
   delay: 200,
   rotate: { x: 0, y: 20, z: 0 }
})

sr.reveal('.about__image', {
   origin: 'right',
   distance: '100px',
   duration: 1200,
   delay: 400,
   scale: 0.8
})

// Projects with cascade effect
sr.reveal('.projects__card', {
   origin: 'bottom',
   distance: '60px',
   duration: 1000,
   delay: 200,
   interval: 300,
   scale: 0.9,
   rotate: { x: 0, y: 0, z: 2 }
})

// Resume items with slide and fade
sr.reveal('.resume__data', {
   origin: 'top',
   distance: '50px',
   duration: 800,
   delay: 100,
   interval: 200,
   easing: 'ease-out'
})

sr.reveal('.resume__item', {
   origin: 'left',
   distance: '80px',
   duration: 1000,
   delay: 200,
   interval: 150,
   scale: 0.95
})

// Skills with progress bar effect
sr.reveal('.resume__skill', {
   origin: 'right',
   distance: '100px',
   duration: 1200,
   delay: 300,
   interval: 200,
   scale: 0.9
})

// Contact section with bounce
sr.reveal('.contact__data', {
   origin: 'bottom',
   distance: '80px',
   duration: 1000,
   delay: 200,
   easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
})

sr.reveal('.contact__card', {
   origin: 'top',
   distance: '60px',
   duration: 800,
   delay: 100,
   interval: 200,
   scale: 0.8,
   rotate: { x: 0, y: 0, z: -3 }
})

sr.reveal('.contact__form', {
   origin: 'right',
   distance: '100px',
   duration: 1200,
   delay: 400,
   scale: 0.9
})

// Footer with slide up
sr.reveal('.footer__container', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 200
})

// Section titles with special effect
sr.reveal('.section__title', {
   origin: 'top',
   distance: '60px',
   duration: 1000,
   delay: 100,
   scale: 0.9,
   rotate: { x: 0, y: 0, z: 1 }
})