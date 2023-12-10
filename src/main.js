

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

//Envoi Email
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;



    Email.send({
        SecureToken : "e78fd247-f8ff-40e3-8ecd-86e906b37deb",
        To : 'wacogne.hugo@gmail.com',
        From : "wacogne.hugo@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire(
                'Success!',
                'Message sent Successfully!',
                'success'
              )
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item")

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => { 
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && 
    !subject.classList.contains("error") && !message.classList.contains("error")) {

        sendEmail();

        form.reset();
        return false;

    }

});
