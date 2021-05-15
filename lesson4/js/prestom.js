const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.tab')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

let last_Update = document.lastModified;
document.getElementById('last_Update').textContent = last_Update;