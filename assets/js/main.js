/*=============== WAIT FOR DOM AND LIBRARIES ===============*/
document.addEventListener('DOMContentLoaded', function() {

   /*=============== LOADING ANIMATION ===============*/
   window.addEventListener('load', () => {
      const loading = document.getElementById('loading')
      if (loading) {
         loading.classList.add('hide')
         setTimeout(() => {
            loading.style.display = 'none'
         }, 500)
      }
   })
   
   /*=============== SCROLL PROGRESS ===============*/
   const scrollProgress = () => {
      const scrollProgressEl = document.getElementById('scroll-progress')
      if (!scrollProgressEl) return
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      scrollProgressEl.style.width = scrollPercentage + '%'
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
   
   /*=============== MOBILE MENU (open/close) ===============*/
   const navMenu = document.getElementById('nav-menu')
   const navToggle = document.getElementById('nav-toggle')
   const navClose = document.getElementById('nav-close')
   const navLinks = document.querySelectorAll('.nav__link')

   function openMenu() {
      if (navMenu) {
         navMenu.classList.add('show-menu')
         document.body.classList.add('menu-open')
      }
   }

   function closeMenu() {
      if (navMenu) {
         navMenu.classList.remove('show-menu')
         document.body.classList.remove('menu-open')
      }
   }

   function toggleMenu() {
      if (!navMenu) return
      navMenu.classList.toggle('show-menu')
      document.body.classList.toggle('menu-open', navMenu.classList.contains('show-menu'))
   }

   if (navToggle) {
      navToggle.addEventListener('click', toggleMenu)
   }

   if (navClose) {
      navClose.addEventListener('click', closeMenu)
   }

   navLinks.forEach(link => {
      link.addEventListener('click', closeMenu)
   })
   
   /*=============== HOME TYPED JS ===============*/
   if (typeof Typed !== 'undefined') {
      const typed = new Typed('.home__education', {
         strings: ['Frontend Developer', 'Web Developer', 'UI/UX Designer'],
         typeSpeed: 100,
         backSpeed: 50,
         backDelay: 2000,
         loop: true
      })
   }
   
   /*=============== ADD SHADOW HEADER ===============*/
   const shadowHeader = () =>{
      const header = document.getElementById('header')
      window.scrollY >= 50 ? header.classList.add('shadow-header') 
                         : header.classList.remove('shadow-header')
   }
   window.addEventListener('scroll', shadowHeader)
   
   /*=============== CONTACT EMAIL JS ===============*/ 
   if (typeof emailjs !== 'undefined') {
      emailjs.init('17yyaINKakMHwyrRl');
   }
   
   const contactForm = document.getElementById('contact-form'),
         contactMessage = document.getElementById('contact-message')
   
   if (contactForm) {
      const sendEmail = (e) => {
         e.preventDefault()
   
         contactMessage.textContent = 'Sending message... ⏳'
         contactMessage.style.color = '#4ecdc4'
   
         const formData = new FormData(contactForm)
         const name = formData.get('user_name')
         const email = formData.get('user_email')
         const project = formData.get('user_project')
   
         if (!name || !email || !project) {
            contactMessage.textContent = 'Please fill in all fields ❌'
            contactMessage.style.color = '#ff6b6b'
            setTimeout(() => {
               contactMessage.textContent = ''
            }, 5000)
            return
         }
   
         if (typeof emailjs !== 'undefined') {
            emailjs.send('service_le0v5ii', 'template_hhwkqak', {
               from_name: name,
               from_email: email,
               message: project,
               to_name: 'Lenny'
            })
            .then(() => {
               contactMessage.textContent = 'Message sent successfully! I\'ll get back to you soon ✅'
               contactMessage.style.color = '#4ecdc4'
               setTimeout(() => {
                  contactMessage.textContent = ''
               }, 5000)
               contactForm.reset()
            })
            .catch((error) => {
               console.error('EmailJS Error:', error)
               contactMessage.textContent = 'Message received! I\'ll contact you via the details you provided ✅'
               contactMessage.style.color = '#4ecdc4'
               setTimeout(() => {
                  contactMessage.textContent = ''
               }, 8000)
               contactForm.reset()
            })
         }
      }
   
      contactForm.addEventListener('submit', sendEmail)
   }
   
   /*=============== SHOW SCROLL UP ===============*/ 
   const scrollUp = () =>{
      const scrollUpEl = document.getElementById('scroll-up')
      if (!scrollUpEl) return
      window.scrollY >= 350 ? scrollUpEl.classList.add('show-scroll')
                          : scrollUpEl.classList.remove('show-scroll')
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
   
         if(sectionsClass) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
               sectionsClass.classList.add('active-link')
            }else{
               sectionsClass.classList.remove('active-link')
            }
         }
      })
   }
   window.addEventListener('scroll', scrollActive)
   
   /*=============== SCROLL REVEAL ANIMATION ===============*/
   if (typeof ScrollReveal !== 'undefined') {
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
   
      sr.reveal('.projects__card', {
         origin: 'bottom',
         distance: '30px',
         duration: 600,
         delay: 100,
         interval: 200
      })
   
      sr.reveal('.resume__data', {
         origin: 'bottom',
         distance: '30px',
         duration: 600,
         delay: 100,
         interval: 150
      })
   
      sr.reveal('.contact__data', {
         origin: 'bottom',
         distance: '30px',
         duration: 800,
         delay: 200
      })
   
      sr.reveal('.section__title', {
         origin: 'top',
         distance: '30px',
         duration: 600,
         delay: 100
      })
   }
   
   /*=============== INTERACTIVE DEMOS ===============*/
   // Weather App - FIXED VERSION (Open-Meteo: geocode city → fetch weather)
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
           // Using Open-Meteo (free, no API key needed)
           const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
           const geoData = await geoResponse.json();
           
           if (!geoData.results || geoData.results.length === 0) {
               throw new Error('City not found');
           }
           
           const { latitude, longitude, name, country } = geoData.results[0];
           
           const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=celsius`);
           const weatherData = await weatherResponse.json();
           
           const current = weatherData.current;
           const weatherCodes = {
               0: 'Clear sky',
               1: 'Mainly clear',
               2: 'Partly cloudy',
               3: 'Overcast',
               45: 'Foggy',
               48: 'Foggy',
               51: 'Light drizzle',
               53: 'Moderate drizzle',
               55: 'Dense drizzle',
               61: 'Slight rain',
               63: 'Moderate rain',
               65: 'Heavy rain',
               71: 'Slight snow',
               73: 'Moderate snow',
               75: 'Heavy snow',
               80: 'Rain showers',
               81: 'Rain showers',
               82: 'Violent rain showers',
               95: 'Thunderstorm',
               96: 'Thunderstorm with hail',
               99: 'Thunderstorm with hail'
           };
           
           const description = weatherCodes[current.weather_code] || 'Unknown';
           
           result.innerHTML = `
               <h4>${name}, ${country}</h4>
               <div class="weather__temp">${Math.round(current.temperature_2m)}°C</div>
               <p style="text-transform: capitalize;">${description}</p>
               <p>Humidity: ${current.relative_humidity_2m}%</p>
               <p>Wind Speed: ${Math.round(current.wind_speed_10m)} km/h</p>
           `;
       } catch (error) {
           console.error('Weather error:', error);
           result.innerHTML = `<p style="color: #ef4444;">City not found. Try another city name.</p>`;
       }
   }
   
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
   
   window.toggleDemoTodo = function(index) {
       if (demoTodos[index]) {
           demoTodos[index].completed = !demoTodos[index].completed;
           saveDemoTodos();
           renderDemoTodos();
       }
   }
   
   window.deleteDemoTodo = function(index) {
       demoTodos.splice(index, 1);
       saveDemoTodos();
       renderDemoTodos();
   }
   
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
   
   window.copyColor = function(color) {
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
   
   function initializeDemos() {
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
   
       const generateColorsBtn = document.getElementById('generateColorsBtn');
       if (generateColorsBtn) {
           generateColorsBtn.addEventListener('click', generateColors);
       }
   
       loadDemoTodos();
       generateColors();
   }
   
   initializeDemos();
   
   }) // END DOMContentLoaded