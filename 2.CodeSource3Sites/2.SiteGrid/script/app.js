const itemsSlide = document.querySelectorAll('.container-slides img');
const nbSlide = itemsSlide.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;


suivant.addEventListener('click', slideSuivante);

function slideSuivante(){
    itemsSlide[count].classList.remove('active');

    if(count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    itemsSlide[count].classList.add('active');

}

precedent.addEventListener('click', slidePrecedente)

function slidePrecedente(){
    itemsSlide[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    itemsSlide[count].classList.add('active');

}