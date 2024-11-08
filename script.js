document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.innerHTML = `<div class="alert alert-success" role="alert">Thank you, ${name}! Your message has been sent successfully.</div>`;
            contactForm.reset();
        } else {
            formMessage.innerHTML = `<div class="alert alert-danger" role="alert">Please fill out all fields.</div>`;
        }
    });
});