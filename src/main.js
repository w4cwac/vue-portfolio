

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


//fonction du button burger (menu déroulant)
const icons = document.querySelector('#icons');
const nav = document.querySelector('#nav');

icons.addEventListener('click' , () => {
    nav.classList.toggle("active");
})

//fonction derniere modif 

document.getElementById('last-modif').innerHTML = 
'dernière modification le :'+ document.lastModified;

//fonction Modal
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".example");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


//2eme modal
var modalTwo = document.querySelector(".modal-two");
var triggerTwo = document.querySelector(".example-two");
var closeButtonTwo = document.querySelector(".close-button-two");

function toggleModalTwo() {
    modalTwo.classList.toggle("show-modal-two");
}

function windowOnClickTwo(event) {
    if (event.target === modalTwo) {
        toggleModalTwo();
    }
}


triggerTwo.addEventListener("click", toggleModalTwo);
closeButtonTwo.addEventListener("click", toggleModalTwo);
window.addEventListener("click", windowOnClickTwo);

//3eme modal
var modalThree = document.querySelector(".modal-three");
var triggerThree = document.querySelector(".example-three");
var closeButtonThree = document.querySelector(".close-button-three");

function toggleModalThree() {
    modalThree.classList.toggle("show-modal-three");
}

function windowOnClickThree(event) {
    if (event.target === modalThree) {
        toggleModalThree();
    }
}


triggerThree.addEventListener("click", toggleModalThree);
closeButtonThree.addEventListener("click", toggleModalThree);
window.addEventListener("click", windowOnClickThree);
