<template>
  <body>
    <nav id="nav">
      <a href="">
       
      </a>
      <div class="titre">
        <h3>Mon Portfolio</h3>
      </div>
      <ul>
        <li>
          <a href="#a-propos">A propos</a>
        </li>
        <li>
          <a href="#project">Projet</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div id="icons"></div>

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
            <img src="./assets/insta.png" class="insta">
            <p>Instagram</p>
          </a>
        </div>
        <a href="https://twitter.com/hugo_wacogne" onclick="window.open(this.href);return false">
          <img src="./assets/twitter.png" class="twitter">
          <p>Twitter</p>
        </a>
        <a href="https://github.com/w4cwac" onclick="window.open(this.href);return false">
          <img src="./assets/githubv2.png" class="git">
          <p>GitHub</p>
        </a>
        <div class="social2">
          <a href="https://discordapp.com/users/327839699144015872" onclick="window.open(this.href);return false">
            <img src="./assets/discord.png" class="discord">
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
  position: absolute;
  top: 4%;
  right: 8%;
  cursor: pointer;
}


#icons:before{
  content:"\2630"; 
  color: white;
  position: fixed;

}

.active #icons::before{
  content: "\2715";
  color: white;
  position: fixed;
}

nav ul {
  position: fixed;
  top: 5%;
  left: -100%;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  width: 100vw;
  height: 100vh;
}
nav li {
  padding: 3px 0;
}

nav li:hover{
  background: rgba(227, 227, 227, 0.571);
}

nav.active ul{
  left: 0;
  backdrop-filter: blur(5px);
  

}
</style>





