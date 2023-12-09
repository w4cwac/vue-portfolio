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
                    <h2>Créer Boîte Modale</h2>
                    <button class="example">Cliquez ici pour voir le modal!</button>
                    <div class="modal">
                        <div class="modal-content">
                            <span class="close-button">&times;</span>
                            <h2>Ceci est un Modal</h2>
                        </div>
                    </div>
                    

                </div>
                <div class="project">
                    <img src="../assets/cdg.jpeg" alt="">
                    <h2>Créer Boîte Modale</h2>
                    <button class="example-two">Cliquez ici pour voir le modal!</button>
                    <div class="modal-two">
                        <div class="modal-content-two">
                            <span class="close-button-two">&times;</span>
                            <h2>Ceci est un Modal V2</h2>
                        </div>
                    </div>
                    
                </div>
                <div class="project">
                    <img src="../assets/espace-com.jpeg" alt="">
                    <h2>Créer Boîte Modale</h2>
                    <button class="example-three">Cliquez ici pour voir le modal!</button>
                    <div class="modal-three">
                        <div class="modal-content-three">
                            <span class="close-button-three">&times;</span>
                            <h2>Ceci est un Modal V2</h2>
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
    .project-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .project{
        padding: 5%;
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

   
    


</style>