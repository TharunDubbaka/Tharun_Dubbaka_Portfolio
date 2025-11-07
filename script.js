
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    alert("Thank you! Your message has been sent.");
    contactForm.reset(); 
});
