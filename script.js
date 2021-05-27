  'use strict';

  // Variable for DOM manipulation
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');



const showModal = function(){
    console.log("Button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hideModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let index = 0; index < btnShowModal.length; index++) {
   btnShowModal[index].addEventListener('click', showModal)
}

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);