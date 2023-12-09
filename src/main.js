

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

