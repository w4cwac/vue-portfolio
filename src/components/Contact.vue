<template>
    <div class="body">
        <div class="contact">
            <h2>Contact Me !</h2>

            <form action="#">
                <div class="input-box">
                    <div class="input-field field">
                        <input type="text" placeholder="Full Name" id="name" class="item" autocomplete="off">
                        <div class="error-txt">Full Name can't be blank</div>
                    </div>
                    <div class="input-field field">
                        <input type="text" placeholder="Email Address" id="email" class="item" autocomplete="off">
                        <div class="error-txt ema il">Email Address can't be blank</div>
                    </div>
                </div>

                <div class="input-box">
                    <div class="input-field field">
                        <input type="text" placeholder="Phone Number" id="phone" class="item" autocomplete="off">
                        <div class="error-txt">Phone Number can't be blank</div>
                    </div>
                    <div class="input-field field">
                        <input type="text" placeholder="Subject" id="subject" class="item" autocomplete="off">
                        <div class="error-txt">Subject can't be blank</div>
                    </div>
                </div>

                <div class="textarea-field field">
                    <textarea name="" id="message" cols="30" rows="10" placeholder="Your Message" class="item" autocomplete="off"></textarea>
                    <div class="error-txt">Message can't be blank</div>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>

</template>

<script>
export default{
    


}

</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



.body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.contact h2{
    font-size: 40px;
    color: white;
    text-align: center;
    margin-bottom: 10px;
}

.contact form{
    width: 600px;
    text-align: center;
}

form .input-box{
    display: flex;
    justify-content: space-between;
}

.input-box .input-field{
    width: 48.5%;
}

.field .item{
    width: 100%;
    padding: 18px; /** augmente ou diminue la hauteur des box **/
    background: transparent;
    border: 2px solid aqua;
    outline: none;
    border-radius: 6px;
    font-size: 16px;
    color: #ededed;
    margin: 12px 0;/* Augmente ou diminue l'écart vertical entre les boxs*/
}

.field.error .item{
    border-color: red;
}

.field .item::placeholder{
    color: rgba(255, 255, 255, .3);
}

.field .error-txt{
    font-size: 14.5px;
    margin: -5px 0 10px;
    color: red;
    text-align: left;
    display: none;
}

.field.error .error-txt{
    display: block;
}

form .textarea-field .item{
    resize: none;
}

form .textarea-field .error-txt{
    margin-top: -10px;
}

form button{
    padding: 12px 32px;
    background:  rgb(6, 161, 161);
    border: none;
    border-radius: 6px;
    box-shadow: 0 0 10px  rgb(6, 161, 161);
    font-size: 16px;
    color: #333;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 20px;
    transition: .5s;

}

form button:hover{
    box-shadow: none;

}



</style>