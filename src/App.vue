<template>
  <body>
    <nav id="nav">
      <a href="#nav">
        <img src="./assets/logo.png" alt="">
       
      </a>
      <div class="titre">
        <h3>Mon Portfolio</h3>
      </div>
      <button id="icons" class="example-menu">Menu</button>
          <div class="modal-menu">
            <div class="modal-content-menu">
                <span class="close-button-menu">&times;</span>
                <h2>Menu</h2>
                <ul>
                  <li><a href="#a-propos">A propos</a></li>
                  <li><a href="#project">Mes projets</a></li>
                  <li><a href="#contact">Me contacter</a></li>
                </ul>
            </div>
          </div>

    </nav>
    <main>
      <div id="a-propos">
        <Apropos />
      </div>
      <div id="project">
        <ProjectsCard/>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
    <footer>
      <div class="social-links">
        <div class="social1">
          <a href="https://www.instagram.com/w4cwac_/" onclick="window.open(this.href);return false">
            <img src="./assets/insta.png" alt="logo carré avec un vieil appareil photo(instagram)" class="insta">
            <p>Instagram</p>
          </a>
        </div>
        <a href="https://twitter.com/hugo_wacogne" onclick="window.open(this.href);return false">
          <img src="./assets/twitter.png" alt="logo d'un petit oiseau sur un fond bleu (twitter)" class="twitter">
          <p>Twitter</p>
        </a>
        <a href="https://github.com/w4cwac" onclick="window.open(this.href);return false">
          <img src="./assets/githubv2.png" alt="logo rond à fond blanc avec des bords bleu et une silhouette de chat (github)" class="git">
          <p>GitHub</p>
        </a>
        <div class="social2">
          <a href="https://discordapp.com/users/327839699144015872" onclick="window.open(this.href);return false">
            <img src="./assets/discord.png" alt="tête du robot mascotte de discord" class="discord">
            <p>Discord</p>
          </a>
        </div>
      </div>
      <p id="last-modif"></p>
    </footer>
  </body>
</template>
<script>

import Apropos from './components/Apropos.vue';
import ProjectsCard from './components/ProjectsCard.vue';
import Contact from './components/Contact.vue';


export default{
  name: 'App',
  components :{
    Apropos,
    ProjectsCard,
    Contact,
}


  
}




</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body{
  background-color: black;
  background-size: cover;
  height: 100%;
  width: 100%;

}
li{
  list-style: none;
}
a,
a:visited{
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover{
  color: rgb(255, 136, 0);
}
.modal-menu {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* background-color: #cccccc; */
        backdrop-filter: blur(5px);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
      }
      .modal-content-menu {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #eeeeee;
        padding: 1rem 1.5rem;
        width: 24rem;
        border-radius: 0.5rem;
      }
      .close-button-menu {
        float: right;
        width: 1rem;
        line-height: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 30px;
        background-color: #eeeeee;
      }
      .close-button-menu:hover {
        background-color: #adadad;
      }
      .show-modal-menu {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
      }
      .example-menu{
        border-radius: 0.5rem;
        background-color: rgb(6, 161, 161);
      }

nav a img{
  position: fixed;
  margin-top: -30px;
  height: 70px;
}




nav 
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  font-size: calc(0.5rem + 1.5vw);
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 20px;
  box-shadow: 0 0 2em white;
  background-color: black;

}
#a-propos{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgb(255, 120, 120); */
  width: 45vw;
  margin: auto;
  margin-top: 7%;
  border-radius: 25px;
  box-shadow: 0 0 2em white;
}
#project{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 45vw;
  margin: auto;
  margin-top: 5%;
  border-radius: 25px;
  box-shadow: 0 0 2em white;
}
#contact{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  margin: auto;
  margin-top: 5%;
  border-radius: 25px;
  box-shadow: 0 0 2em white;
}

.social1{
  margin-left: 2%;
}
.social2{
  margin-right: 2%;
}

.insta{
  height: 60px;
  width: 60px;
  margin-left: 15%;
}
.git{
  height: 60px;
  width: 60px;
}
.twitter{
  height: 60px;
  width: 60px;
  margin-left: 6%;
}
.discord{
  height: 60px;
  width: 60px;
  margin-left: 7%;
}

.social-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 2em white;
  background-color: rgba(149, 142, 142, 0.477);
  height: 100px;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 5%;

}

#last-modif{
  text-align: center;
  color: white;
  font-size: small ;
}

h3{
  position: absolute;
  top: 3%;
  left: 40%;
  color: white;
  text-shadow: 1px 1px 1px white, 0 0 1em rgb(255, 255, 255), 0 0 0.2em rgb(255, 255, 255);
}

.menu{
  height: 25px;

}

#icons {
  display: block;
  position: fixed;
  top: 4%;
  right: 8%;
  cursor: pointer;
}

</style>





