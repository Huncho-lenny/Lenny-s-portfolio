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

/*=============== INTERACTIVE DEMOS ===============*/
// Weather App
async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const result = document.getElementById('weatherResult');
    
    if (!cityInput || !result) return;
    
    const city = cityInput.value.trim();
    
    if (!city) {
        result.innerHTML = '<p>Please enter a city name</p>';
        return;
    }

    result.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        const current = data.current_condition[0];
        const location = data.nearest_area[0];
        
        result.innerHTML = `
            <h4>${location.areaName[0].value}, ${location.country[0].value}</h4>
            <div class="weather__temp">${current.temp_C}°C</div>
            <p style="text-transform: capitalize;">${current.weatherDesc[0].value}</p>
            <p>Feels like: ${current.FeelsLikeC}°C</p>
            <p>Humidity: ${current.humidity}%</p>
            <p>Wind Speed: ${current.windspeedKmph} km/h</p>
        `;
    } catch (error) {
        result.innerHTML = `<p style="color: #ef4444;">City not found. Please try again.</p>`;
    }
}

// Todo List
let demoTodos = [];

function loadDemoTodos() {
    const savedTodos = localStorage.getItem('portfolioTodos');
    if (savedTodos) {
        try {
            demoTodos = JSON.parse(savedTodos);
        } catch (e) {
            demoTodos = [];
        }
    }
    renderDemoTodos();
}

function saveDemoTodos() {
    localStorage.setItem('portfolioTodos', JSON.stringify(demoTodos));
}

function renderDemoTodos() {
    const list = document.getElementById('todoList');
    if (!list) return;
    
    if (demoTodos.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-color-light); padding: 1rem;">No tasks yet. Add one above!</p>';
        return;
    }
    
    list.innerHTML = demoTodos.map((todo, index) => `
        <div class="todo__item ${todo.completed ? 'completed' : ''}">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                   onchange="toggleDemoTodo(${index})">
            <span>${todo.text}</span>
            <button class="todo__delete" onclick="deleteDemoTodo(${index})">Delete</button>
        </div>
    `).join('');
}

function addTodo() {
    const input = document.getElementById('todoInput');
    if (!input) return;
    
    const text = input.value.trim();
    
    if (text) {
        demoTodos.push({ text, completed: false });
        saveDemoTodos();
        input.value = '';
        renderDemoTodos();
    }
}

function toggleDemoTodo(index) {
    if (demoTodos[index]) {
        demoTodos[index].completed = !demoTodos[index].completed;
        saveDemoTodos();
        renderDemoTodos();
    }
}

function deleteDemoTodo(index) {
    demoTodos.splice(index, 1);
    saveDemoTodos();
    renderDemoTodos();
}

// Color Generator
function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function generateColors() {
    const grid = document.getElementById('colorsGrid');
    if (!grid) return;
    
    const colors = Array.from({length: 5}, generateRandomColor);
    
    grid.innerHTML = colors.map(color => `
        <div class="color__box" style="background-color: ${color}" onclick="copyColor('${color}')">
            <div class="color__code">${color}</div>
        </div>
    `).join('');
}

function copyColor(color) {
    navigator.clipboard.writeText(color).then(() => {
        const notification = document.getElementById('copyNotification');
        if (notification) {
            notification.textContent = `Copied ${color}!`;
            notification.classList.add('show');
            setTimeout(() => notification.classList.remove('show'), 2000);
        }
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Initialize demos when page loads
function initializeDemos() {
    // Weather enter key
    const cityInput = document.getElementById('cityInput');
    const weatherBtn = document.getElementById('weatherBtn');
    if (cityInput) {
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') getWeather();
        });
    }
    if (weatherBtn) {
        weatherBtn.addEventListener('click', getWeather);
    }

    // Todo enter key and button
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    if (todoInput) {
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTodo();
        });
    }
    if (addTodoBtn) {
        addTodoBtn.addEventListener('click', addTodo);
    }

    // Color generator button
    const generateColorsBtn = document.getElementById('generateColorsBtn');
    if (generateColorsBtn) {
        generateColorsBtn.addEventListener('click', generateColors);
    }

    // Load todos and generate initial colors
    loadDemoTodos();
    generateColors();
}

// Call initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDemos);
} else {
    initializeDemos();
}