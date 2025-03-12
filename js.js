

//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'App Developer', 'Pentester', 'System Administrator'],
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