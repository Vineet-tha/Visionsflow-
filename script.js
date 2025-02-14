// Typing Animation for Hero Section
const typingText = "Welcome to VisionFlow";
const typingElement = document.getElementById("typing-effect");

let charIndex = 0;

function type() {
    if (charIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here (100ms per character)
    } else {
        typingElement.style.borderRight = "none"; // Remove cursor after typing
    } nhi 
}

// Start typing animation when the page loads
window.onload = type;

// Mobile Menu Toggle
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
       const mobileMenu = document.getElementById('mobile-menu');
       const navLinks = document.getElementById('nav-links');

       mobileMenu.addEventListener('click', () => {
           navLinks.classList.toggle('active');
           mobileMenu.classList.toggle('active');
       });
   });
// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

