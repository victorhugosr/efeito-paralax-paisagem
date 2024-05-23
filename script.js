const titulo = document.querySelector('.titulo');
const folha1 = document.querySelector('.folha1');
const folha2 = document.querySelector('.folha2');
const arbusto2 = document.querySelector('.arbusto2');
const montanha1 = document.querySelector('.montanha1');
const montanha2 = document.querySelector('.montanha2');
const links = document.querySelectorAll('nav a');

document.addEventListener('scroll', function() {
    let valor = window.scrollY
    
    titulo.style.marginTop = valor * 1.1 + 'px'

    folha1.style.marginLeft = -valor + 'px'
    folha2.style.marginLeft = valor + 'px'

    arbusto2.style.marginBottom = -valor + 'px'

    montanha1.style.marginBottom = - valor * 1.1 + 'px'
    montanha2.style.marginBottom = - valor * 1.2 + 'px'
})

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        /*const destinoID = this.getAttribute('href').substring(1);
        const destinoSection = document.getElementById(destinoID);

        const offset = destinoSection.getBoundingClientRect().top + window.scrollY;
        const deslocamento = offset - document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: deslocamento,
            behavior: 'smooth'
        });*/
        
        links.forEach(link => {
            link.classList.remove('ativar');
        });

        this.classList.add('ativar');
    });
});

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}