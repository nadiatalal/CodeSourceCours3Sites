// Navbar animée
const btnNav = document.querySelector('.responsive-nav-btn');
const listeNav = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');

btnNav.addEventListener('click', () => {

    listeNav.classList.toggle('active-nav');

    if(window.location.href.includes('index')){
        if(imgBtn.src.includes('menu')){
            imgBtn.src = './ressources/croix.svg';
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = './ressources/menu.svg';
            imgBtn.style.width = "40px";
            imgBtn.style.height = "40px";
        }
    
    } else {
        if(imgBtn.src.includes('menu')){
            imgBtn.src = '../ressources/croix.svg';
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = '../ressources/menu.svg';
            imgBtn.style.width = "40px";
            imgBtn.style.height = "40px";
        }
    
    }

})


// FAQ

const allCross = document.querySelectorAll('.panneau-visible img');

allCross.forEach(logo => {

    logo.addEventListener('click', function(){

        // console.log(this);
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];

        if(this.src.includes('plus')){
            this.src = "/ressources/minus.svg";
            currentChoice.style.height = height + 40 + "px";
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        } else {
            this.src = "/ressources/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity =0;
            currentChoice.style.padding = "0px 15px";
        }

    })

})


// Onglets 

const choixTarifs = Array.from(document.querySelectorAll('.choix'));
const contenuTarifs = Array.from(document.querySelectorAll('.panneau'));

choixTarifs.forEach(choix => {
    choix.addEventListener('click', (e) => {

        let indexClic = choixTarifs.indexOf(e.target);

        for(i = 0; i < choixTarifs.length; i++){

            if(i === indexClic){
                choixTarifs[i].classList.add('active-choix');
                contenuTarifs[i].classList.add('panneau-active');
            } else {
                choixTarifs[i].classList.remove('active-choix');
                contenuTarifs[i].classList.remove('panneau-active');
            }

        }

    })
})