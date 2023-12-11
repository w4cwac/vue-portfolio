<template>
    <div class="main-container">
        <div class="container-one">
            <div class="profile">
                <img src="../assets/profil-picture.jpg" alt="jeune homme brun avec un bandana qui souris">
                <h3>Wacogne Hugo</h3>
                <p>Développeur web Junior</p>
            </div>
            <div class="contact-direct">
                <div class="links">
                    <a href="">
                        <img src="../assets/whatsapp.png" alt="bulle avec un telephone dedans" class="whatsapp">
                        <h2>06-23-21-45-13</h2>
                    </a>
                </div>
                <div class="links">
                    <a href="https://www.facebook.com/hugo.wacogne.5" onclick="window.open(this.href);return false">
                        <img src="../assets/messenger.png" alt="bulle avec un éclair dedans">
                        <h2>Messenger</h2>
                    </a>
                </div>
                    
            </div>
        </div>
        <div class="container-two">
            <div class="about-me">
                <h1>A-propos</h1>
                <p>
                    Je me présente, Hugo Wacogne, né le 04/01/2001, je suis actuellement en train de suivre la formation
                    du CEF pour devenir Développeur Web et Web mobile.
                    Durant cette Formation j'ai pu réaliser plusieurs projets, en utilisant différentes technologies.
                    Vous trouverez ci dessous des liens vers mes différents projets ainsi qu'un formulaire permettant de me contacter par mail 
                    directement, sinon je vous ai laissé plusieurs réseaux sociaux pour me joindre.
                </p>
            </div>
            <div class="technology">
                <h1>Technologie étudié</h1>
                <div class="logos">
                    <img src="../assets/JS.png" alt="logo jaune avec les lettres J et S">
                    <img src="../assets/css.png" alt="logo bleu avec le chiffre 3">
                    <img src="../assets/html.png" alt="logo rouge avec le chiffre 5">
                </div>
            </div>
            <div class="button-container">
                <div class="project-button">
                    <a href="#project">Mes Projets</a>
                </div>
            
                <div class="project-button">
                    <a href="https://www.canva.com/design/DAEhvxjWh_Y/view" onclick="window.open(this.href);return false">Mon CV</a>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export  default{

    
}


</script>

<style scoped>
    img{
        height: 20px;
    }

    .main-container{ /*div principale de la carte*/
        display: flex;
        flex-direction: row;
        background-color: rgb(58, 3, 209);
        border-radius: 25px;
        height: 100%
    }

    .container-one{/*PP + infos perso et poste recherché*/
        background-color: aqua;
        width: 30%;
        padding: 2%;
        text-align: center;
        border-radius: 25px;
    }

    .profile img{
        height: 15rem;
        clip-path: ellipse(50% 33%);
    }

    .links a{
        text-decoration: none;
        color: black;
        font-size: 12px;
    }

    .links img{
        height: 3.5rem;
    }

    .container-two{/*A propos + tech etudié*/
        background-color: rgb(103, 103, 249);
        margin: 2.5%;
        width: 70%;
    }

    .about-me{
        text-align: left;

    }

    .about-me h1{
        text-align: center;
    }

    .about-me p{
        color: white;
        margin: 10px;
        text-indent: 30px;
    }
    
    .technology{
        text-align: center;
    }

    .logos img{
        height: 2.5rem;
    }

    .button-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .project-button{
        background-color: rgb(6, 161, 161);
        padding: 5px;
        border-radius: 15px;
        margin: 5px;
    }

    .project-button a{
        text-decoration: none;
        color: white;
    }
</style>