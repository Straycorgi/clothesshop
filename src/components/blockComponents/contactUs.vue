<template>
    <div class="container visual">
        <headerBlock/>
        <div class="contactUs__block ">
            <div class="contactUs__block-left">
                <h2 class="contactUs__block-title">CONTACT US</h2>
                <span class="contactUs__block-subtitle">Feel free to contact us any time. We will get back to you as soon as
                    we can.</span>
                <inputComponent :place="'Name'" />
                <inputComponent :place="'Email'" />
                <textarea name="" id="" rows="5" placeholder="Message" class="ta" />
                <buttonComponent :btn-name="'Send'" />
            </div>
            <div class="contactUs__block-right">
                <ul class="contactUs__block-list">
                    <li class="contactUs__list-item">14 GreenRoad St.</li>
                    <li class="contactUs__list-item">14 GreenRoad St.</li>
                    <li class="contactUs__list-item">avira@getinfo.com</li>
                    <li class="contactUs__list-item">Mon-Fri: 9:00 AM - 8:00 PM<br>
                        Sat: 9:30 AM - 6:30 PM</li>
                </ul>
                <div class="contactUs__block-social">
                    <div class="contactUs__social-item">
                        <img src="../../assets/insta.svg" alt="" class="contactUs__item-img">
                    </div>
                    <div class="contactUs__social-item">
                        <img src="../../assets/facebook.svg" alt="" class="contactUs__item-img">
                    </div>
                    <div class="contactUs__social-item">
                        <img src="../../assets/twitter.svg" alt="" class="contactUs__item-img">
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>
 
 
<script>
import inputComponent from '../itemComponents/inputComponent.vue';
import buttonComponent from '../itemComponents/buttonComponent.vue';
import headerBlock from './headerBlock.vue';
export default {
    components: {
        inputComponent, buttonComponent,headerBlock,
    },
    data() {

        return {
          
        }

    }

}

</script>
 
 
<style>
.contactUs__block {
    display: flex;
    gap: 288px;
    position: relative;
}
.visual::after{
    position: absolute;
    content: ' ';
    width: 184px;
    height: 214px;
    background-image: url(@/assets/pocket.svg);
    background-repeat: no-repeat;
    bottom: 10px;
    right: 10px;
}
@media (max-width:1143.99px) {
    .contactUs__block{
        gap: 150px;
    }
}
@media (max-width:978.99px) {
    .contactUs__block{
        gap: 50px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .visual::after{
       display: none;
    }
}
       

.contactUs__block-left {
    display: flex;
    flex-direction: column;
    max-width: 384px;
}

.contactUs__block-title {
    font-weight: 600;
    font-size: 23px;
    line-height: 139%;
    color: #2D2D2D;
    margin-bottom: 8px;
}

.contactUs__block-subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    margin-bottom: 40px;
    color: #737373;
}

.ta {
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    margin-bottom: 24px;
    background: #F6F6F6;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
    resize: none;
}
.contactUs__block-right {
    background: #DB6B97;
    padding: 88px 112px;
    position: relative;
    flex: 1 1;
}
.contactUs__block-right::after{
    background-color: #DB6B97;
    position: absolute;
    top: 0;
    right: -300px;
    content: '';
    width: 300px;
    height: 492px;
}

.contactUs__list-item {
    margin-bottom: 40px;
    color: #fff;
    position: relative;
}
.contactUs__block-social {
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
}

.contactUs__list-item:nth-child(1)::before{
    content: ' ';
    background-image: url(@/assets/gps.svg);
    width: 20px;
    height: 20px;
    position: absolute;
    background-repeat: no-repeat;
    left: -34px;
    top: 3px;
}
.contactUs__list-item:nth-child(2)::before{
    content: ' ';
    background-image: url(@/assets/phone.svg);
    width: 20px;
    height: 20px;
    position: absolute;
    background-repeat: no-repeat;
    left: -34px;
    top: 3px;
}
.contactUs__list-item:nth-child(3)::before{
    content: ' ';
    background-image: url(@/assets/mail.svg);
    width: 20px;
    height: 20px;
    position: absolute;
    background-repeat: no-repeat;
    left: -34px;
    top: 3px;
}
.contactUs__list-item:nth-child(4)::before{
    content: ' ';
    background-image: url(@/assets/clock.svg);
    width: 20px;
    height: 20px;
    position: absolute;
    background-repeat: no-repeat;
    left: -34px;
    top: 3px;
}

</style>