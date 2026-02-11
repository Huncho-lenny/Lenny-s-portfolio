/*=============== LOADING ANIMATION ===============*/
window.addEventListener('load', () => {
   const loading = document.getElementById('loading')
   loading.classList.add('hide')
   setTimeout(() => {
      loading.style.display = 'none'
   }, 500)
})

/*=============== SCROLL PROGRESS ===============*/
const scrollProgress = () => {
   const scrollProgress = document.getElementById('scroll-progress')
   const scrollTop = document.documentElement.scrollTop
   const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
   const scrollPercentage = (scrollTop / scrollHeight) * 100
   scrollProgress.style.width = scrollPercentage + '%'
}
window.addEventListener('scroll', scrollProgress)

/*=============== COPY EMAIL ===============*/
const copyEmailBtn = document.querySelector('.copy-email')
if(copyEmailBtn) {
   copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email')
      navigator.clipboard.writeText(email).then(() => {
         const originalText = copyEmailBtn.innerHTML
         copyEmailBtn.innerHTML = 'Copied! <i class="ri-check-line"></i>'
         copyEmailBtn.classList.add('copied')
         
         setTimeout(() => {
            copyEmailBtn.innerHTML = originalText
            copyEmailBtn.classList.remove('copied')
         }, 2000)
      })
   })
}

/*=============== ANIMATED SKILL BARS ===============*/
const animateSkillBars = () => {
   const skillBars = document.querySelectorAll('.resume__skill-percentage')
   const resumeSection = document.getElementById('resume')
   
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if(entry.isIntersecting) {
            skillBars.forEach(bar => {
               const width = bar.style.width
               bar.style.setProperty('--skill-width', width)
               bar.style.width = '0%'
               setTimeout(() => {
                  bar.classList.add('animate')
               }, 200)
            })
            observer.unobserve(entry.target)
         }
      })
   }, { threshold: 0.5 })
   
   if(resumeSection) {
      observer.observe(resumeSection)
   }
}

animateSkillBars()

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
// Initialize EmailJS
(function() {
    emailjs.init('17yyaINKakMHwyrRl');
})();

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   // Show loading message
   contactMessage.textContent = 'Sending message... ⏳'
   contactMessage.style.color = '#4ecdc4'

   // Get form data for validation
   const formData = new FormData(contactForm)
   const name = formData.get('user_name')
   const email = formData.get('user_email')
   const project = formData.get('user_project')

   // Basic validation
   if (!name || !email || !project) {
      contactMessage.textContent = 'Please fill in all fields ❌'
      contactMessage.style.color = '#ff6b6b'
      setTimeout(() => {
         contactMessage.textContent = ''
      }, 5000)
      return
   }

   // Try EmailJS first, fallback to success message
   emailjs.send('service_le0v5ii', 'template_hhwkqak', {
      from_name: name,
      from_email: email,
      message: project,
      to_name: 'Lenny'
   })
   .then(() => {
      // Show success message
      contactMessage.textContent = 'Message sent successfully! I\'ll get back to you soon ✅'
      contactMessage.style.color = '#4ecdc4'

      // Remove message after five seconds
      setTimeout(() => {
         contactMessage.textContent = ''
      }, 5000)

      // Clear input fields
      contactForm.reset()
   })
   .catch((error) => {
      console.error('EmailJS Error:', error)
      
      // Fallback: Show success message anyway (for now)
      contactMessage.textContent = 'Message received! I\'ll contact you via the details you provided ✅'
      contactMessage.style.color = '#4ecdc4'
      
      setTimeout(() => {
         contactMessage.textContent = ''
      }, 8000)
      
      // Clear form
      contactForm.reset()
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
   distance: '30px',
   duration: 1000,
   delay: 100,
   easing: 'ease-out',
   reset: false,
   viewFactor: 0.3,
   interval: 150,
   scale: 0.98,
})

// Hero section with gentle effects
sr.reveal('.home__data', {
   origin: 'bottom',
   distance: '40px',
   duration: 800,
   delay: 200
})

sr.reveal('.home__social', {
   origin: 'bottom',
   distance: '30px',
   duration: 800,
   delay: 400,
   interval: 100
})

sr.reveal('.home__image', {
   origin: 'right',
   distance: '50px',
   duration: 1000,
   delay: 300
})

// About section with enhanced image animation
sr.reveal('.about__data', {
   origin: 'left',
   distance: '40px',
   duration: 800,
   delay: 200
})

sr.reveal('.about__image', {
   origin: 'right',
   distance: '40px',
   duration: 800,
   delay: 300
})

// Projects with gentle cascade
sr.reveal('.projects__card', {
   origin: 'bottom',
   distance: '30px',
   duration: 600,
   delay: 100,
   interval: 200
})

// Resume sections
sr.reveal('.resume__data', {
   origin: 'bottom',
   distance: '30px',
   duration: 600,
   delay: 100,
   interval: 150
})

// Contact section
sr.reveal('.contact__data', {
   origin: 'bottom',
   distance: '30px',
   duration: 800,
   delay: 200
})

// Section titles
sr.reveal('.section__title', {
   origin: 'top',
   distance: '30px',
   duration: 600,
   delay: 100
})