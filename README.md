# Lenny's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Mobile-friendly navigation menu
- **Animated Sections**: Scroll reveal animations using ScrollReveal.js
- **Typing Effect**: Dynamic text animation using Typed.js
- **Contact Form**: Email integration with EmailJS
- **Social Links**: Links to GitHub, LinkedIn, and Twitter
- **Resume Download**: PDF resume download functionality

## Sections

1. **Home**: Introduction with animated typing effect
2. **About**: Personal information and skills overview
3. **Projects**: Showcase of portfolio projects
4. **Resume**: Education, experience, and skills
5. **Contact**: Contact form and social media links

## Setup Instructions

1. **Replace Placeholder Images**:
   - Add your profile photo as `assets/img/profile.png`
   - Add your about photo as `assets/img/about.png`
   - Add project screenshots as `assets/img/project-1.jpg`, `project-2.jpg`, `project-3.jpg`
   - Add a favicon as `assets/img/favicon.png`

2. **Update Resume**:
   - Replace `assets/pdf/resume.pdf` with your actual resume

3. **Configure Email (Optional)**:
   - Sign up for EmailJS (https://www.emailjs.com/)
   - Replace the placeholder values in `assets/js/main.js`:
     - `service_YOUR_ID` with your EmailJS service ID
     - `template_YOUR_ID` with your EmailJS template ID
     - `YOUR_PUBLIC_KEY` with your EmailJS public key

4. **Customize Content**:
   - Update personal information in `index.html`
   - Modify social media links
   - Update project descriptions and links
   - Customize the color scheme in `assets/css/style.css` (change the `--hue` variable)

5. **Test the Website**:
   - Open `index.html` in a web browser
   - Test all navigation links
   - Verify responsive design on different screen sizes

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- ScrollReveal.js (for animations)
- Typed.js (for typing effect)
- EmailJS (for contact form)
- RemixIcon (for icons)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.