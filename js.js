const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('show');
});

//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer(full stack)', 'App Developer', 'Pentester' ,'Database Manager'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });

function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    //checks if the elements match the selector and if required instance is met
    if(elements.length > instance){
        //scroll to specified instance
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.contact');
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const mailtoLink = `mailto:ryanmuthoni050@gmail.com?subject=Want to hire you&body=${encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Message: ${message}`
        )}`;

        window.location.href = mailtoLink;
    });

    
    const hireMeButton = document.querySelectorAll('.btn-t');
    hireMeButton.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
        });
    });
});