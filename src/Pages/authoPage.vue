<template>
    <div class="authoPage__block">
        <div class="authoPage__block-left">
            <a class="authoPage__left-logo" href="#">
                <img src="@/assets/logoWhite.svg" alt="logoImg" class="authoPage__logo-img">
            </a>
            <div class="authoPage__left-bg">
                <img src="@/assets/foreground.svg" alt="bgImg" class="authoPage__bg-img">
            </div>
        </div>
        <div class="autoPage__block-right">
            <a class="authoPage__right-logo" href="#">
                <img src="@/assets/logo.svg" alt="logoImg" class="authoPage__logo-img">
            </a>
            <div class="autoPage__right-form">
                <h2 class="autoPage__form-title">Nice to see you again!</h2>
                <inputComponent class="autoPage__form-input" :place="'Email or phone number'" />
                <inputComponent class="autoPage__form-password" :place="'Enter password'" />
                <div class="autoPage__form-interract">
                    <input type="checkbox" class="autoPage__form-checkbox">
                    <span class="autoPage__form-text">Remember me</span>
                    <a href="#" class="autoPage__form-text">Forgot password?</a>
                </div>
                <buttonComponent class="autoPage__form-btn" :btn-name="'Sign in'" />
                <div class="autoPage__form-switcher">
                    <span class="autoPage__form-text">Don’t have an account?</span>
                    <a href="#" class="autoPage__form-link">Get Started</a>
                </div>

            </div>
        </div>
    </div>
</template>
 
 
<script>
import inputComponent from '@/components/itemComponents/inputComponent.vue';
import buttonComponent from '@/components/itemComponents/buttonComponent.vue';
export default {
    components: {
        inputComponent, buttonComponent,
    },
    data() {

        return {

        }

    }

}

</script>
 
 
<style>
.authoPage__block {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
}

.authoPage__block-left {
    background-color: #DB6B97;
    flex: 1 1 58%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.authoPage__left-logo {
    margin: 40px 56px;

}

.authoPage__bg-img {

    margin-right: -100px;

}

.autoPage__block-right {
    flex: 1 1 42%;
}

.autoPage__block-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.autoPage__right-form {
    display: flex;
    flex-direction: column;
    max-width: 360px;
}

.autoPage__form-title {
    font-weight: 600;
    font-size: 23px;
    line-height: 139%;
    color: #2D2D2D;
    margin-bottom: 32px;
}

.autoPage__form-input {
    margin-bottom: 24px;
}

.autoPage__form-password {
    margin-bottom: 24px;
}

.autoPage__form-interract {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.autoPage__form-interract>* {
    font-size: 12px;
    line-height: 133%;
    font-weight: 400;
    color: #2D2D2D;
    transition:  color .3s;
}
.autoPage__form-interract>a:hover{
    color: black;
    
}
.autoPage__form-btn {
    margin-bottom: 65px;
    position: relative;
}

.autoPage__form-btn::after {
    content: '';
    position: absolute;
    width: 360px;
    height: 1px;
    background-color: #D2D2D2;
    left: 0;
    bottom: -32px;
}

.autoPage__form-switcher {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.autoPage__form-switcher>span {
    font-size: 12px;
    line-height: 133%;
    color: #737373;
}

.autoPage__form-switcher>a {
    font-weight: 600;
    font-size: 12px;
    line-height: 133%;
    color: #DB6B97;
    transition: color .3s;
}

.autoPage__form-switcher>a:hover {
    color: #ee3d84;
}
.authoPage__right-logo{
    visibility: hidden;
    position: absolute;
    top: 40px;
    left: 56px;
}
@media ( max-width: 1377.99px){
    .authoPage__block-left{
        display: none;
    }
    .authoPage__right-logo{
       visibility: visible;
    }

    
}
</style>