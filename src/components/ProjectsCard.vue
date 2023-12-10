<template>
    <div class="mainCard">
        <div class="container-one">
            <h2>Mes Projets</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Itaque, quia ipsum debitis doloremque dolorum rem fugit. 
                Iste mollitia, illum adipisci ea officia corrupti!
                 Rerum, odit molestias recusandae beatae quod minima.</p>
        </div>
        <div class="container-two">
            <div class="project-container">
                <div class="project">
                    <img src="../assets/mon-cv.jpeg" alt="">
                    <h2>Mon CV</h2>
                    <button class="example">En savoir plus</button>
                    <div class="modal">
                        <div class="modal-content">
                            <span class="close-button">&times;</span>
                            <h2>Mon CV</h2>
                            <h3>30/10/2023</h3>
                            <p>Dans ce premier projet, j'ai du réaliser mon CV,
                                en respectant un modèle précis. 
                            </p>
                                <img src="../assets/capture-de-mon-cv.png" alt="">
                            <p>Pour le réaliser j'ai utilisé les technologies suivantes :</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <p>Ci-dessous le liens vers le repository githbub</p>
                            <div class="project-button">
                                <a href="https://github.com/w4cwac/Mon-CV" onclick="window.open(this.href);return false">Mon CV</a>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <div class="project">
                    <img src="../assets/cdg.jpeg" alt="">
                    <h2>Cahier des charges</h2>
                    <button class="example-two">En savoir plus</button>
                    <div class="modal-two">
                        <div class="modal-content-two">
                            <span class="close-button-two">&times;</span>
                            <h2>Cahier des Charges</h2>
                            <h3>13/11/2023</h3>
                            <p>
                                Pour ce deuxième projet j'ai rédigé intégralement un cahier des charges,
                                ce dernier concernais le création d'un site pour une entreprise fictive.
                            </p>
                            <p>
                                J'ai réalisé ce devoir à l'aide de l'outil Canva disponible gratuitement en ligne
                            </p>
                            <img src="../assets/capture-cdg.png" alt="">
                            <div class="project-button">
                                <a href="https://www.canva.com/design/DAFz23kfWpE/view" onclick="window.open(this.href);return false">Cahier des Charges</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="project">
                    <img src="../assets/espace-com.jpeg" alt="">
                    <h2>Espace Commentaire</h2>
                    <button class="example-three">En savoir plus</button>
                    <div class="modal-three">
                        <div class="modal-content-three">
                            <span class="close-button-three">&times;</span>
                            <h2>Espace Commentaire</h2>
                            <h3>27/11/2023</h3>
                            <p>
                                Dans ce troisième projet j'ai dynamisé un espace commentaire créé pour l'occasion,
                                Le CEF nous a fourni un fichier html et j'y ai ajouté un script JavaScript pour pouvoir ajouter des commentaire,
                            </p>
                            <img src="../assets/capture-espace-com.png" alt="">
                            <div class="project-button">
                                <a href="https://github.com/w4cwac/espace_com" onclick="window.open(this.href);return false">Espace commentaire</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default{
    


}




</script>

<style>
    img{
        height: 20px;
    }

    .mainCard{
        display: flex;
        flex-direction: column;
        background-color: gray;
        border-radius: 25px;
        height: 100%;
        text-align: center;
    }
    .container-one{
        border-radius: 25px;
        background-color: aqua;
    }
    .container-two{
        border-radius: 25px;
        background-color: blueviolet;
        margin: 2.5%;
    }
    .project-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .project{
        padding: 2.5%;
    }

    .project img{
        height: 70px;
    }
    
    li{
        list-style: none;
    }

    .project-button{
        background-color: aqua;
        padding: 5px;
        border-radius: 15px;
    }
    
    .project-button a{
        text-decoration: none;
        color: black;
    }
    .modal-content img{
        height: 300px;
    }
    .modal-content-two img{
        height: 300px;
    }
    .modal-content-three img{
        height: 250px;
    }



    /* Modal*/
      .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #cccccc;
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
      }
      .modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #eeeeee;
        padding: 1rem 1.5rem;
        width: 24rem;
        border-radius: 0.5rem;
      }
      .close-button {
        float: right;
        width: 1rem;
        line-height: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 30px;
        background-color: #eeeeee;
      }
      .close-button:hover {
        background-color: #adadad;
      }
      .show-modal {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
      }
      .example{
        border-radius: 0.5rem;
        background-color: rgb(6, 161, 161);
      }
      
      
    
/*********************two */


      .modal-two {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #cccccc;
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
      }
      .modal-content-two {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #eeeeee;
        padding: 1rem 1.5rem;
        width: 24rem;
        border-radius: 0.5rem;
      }
      .close-button-two {
        float: right;
        width: 1rem;
        line-height: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 30px;
        background-color: #eeeeee;
      }
      .close-button-two:hover {
        background-color: #adadad;
      }
      .show-modal-two {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
      }
      .example-two{
        border-radius: 0.5rem;
        background-color: rgb(6, 161, 161);
      }

/**********three */
.modal-three {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #cccccc;
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
      }
      .modal-content-three {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #eeeeee;
        padding: 1rem 1.5rem;
        width: 24rem;
        border-radius: 0.5rem;
      }
      .close-button-three {
        float: right;
        width: 1rem;
        line-height: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 30px;
        background-color: #eeeeee;
      }
      .close-button-three:hover {
        background-color: #adadad;
      }
      .show-modal-three {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
      }
      .example-three{
        border-radius: 0.5rem;
        background-color: rgb(6, 161, 161);
      }

   
    


</style>