<template>
    <div class="container">
        <headerBlock />
        <div class="aboutUs__block">
            <div class="aboutUs__block-left">
                <h1 class="aboutUs__block-title">ABOUT US.</h1>
                <p class="aboutUs__block-text">Avira caters to thoughtful shoppers who appreciate unique designs and top
                    quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and
                    looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be
                    your Online Clothing Shop that you can rely on for our expert service and care.
                </p>
                <p class="aboutUs__block-text"> We are here to serve you and make sure you find the Perfect Look for every
                    occasion. Our passion for
                    fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our
                    customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
                </p>
                <div class="aboutUs__block-info">
                    <div class="aboutUs__info-item">
                        <h3 class="aboutUs__info-title">50k+</h3>
                        <span class="aboutUs__info-subtitle">Happy Customers</span>
                    </div>
                    <div class="aboutUs__info-item">
                        <h3 class="aboutUs__info-title">60+</h3>
                        <span class="aboutUs__info-subtitle">Top Partners</span>
                    </div>
                    <div class="aboutUs__info-item">
                        <h3 class="aboutUs__info-title">5+</h3>
                        <span class="aboutUs__info-subtitle">Years of Trust</span>
                    </div>
                </div>
            </div>
            <div class="aboutUs__block-right">
                <img src="@/assets/girl.jpg" alt="" class="aboutUs__right-img">
            </div>
        </div>

    </div>
</template>
 
 
<script>
import headerBlock from './headerBlock.vue';
export default {
    components: {
        headerBlock,
    },
    data() {

        return {

        }

    }

}

</script>
 
 
<style>
.aboutUs__block {
    display: flex;
    gap: 149px;
}

.aboutUs__block-left {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
}

.aboutUs__block-right {
    flex: 0 1 50%;
}

.aboutUs__block-title {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 44px;
    line-height: 145%;
    color: #2D2D2D;
}

.aboutUs__block-text {
    max-width: 601px;
    margin-bottom: 96px;
    line-height: 150%;
    text-align: left;
    color: #737373;
}

.aboutUs__block-info {
    display: flex;
    gap: 96px;
}


.aboutUs__info-title {
    font-weight: 700;
    font-size: 44px;
    line-height: 145%;
    color: #2D2D2D;
}

.aboutUs__info-subtitle {
    font-weight: 600;
    font-size: 19px;
    line-height: 126%;
    color: #DB6B97
}

@media (max-width:1129.99px) {
    .aboutUs__block {
        justify-content: center;
        margin-bottom: 50px;
    }

    .aboutUs__block-title {
        font-size: 32px;
    }

    .aboutUs__block-text {
        font-size: 14px;

    }

    .aboutUs__block-right {
        display: none;
    }

    .aboutUs__block-info {        
        gap: 70px;
    }
    .aboutUs__info-title{
        font-size: 34px;
    }
    .aboutUs__info-subtitle{
        font-size: 15px;
    }
}
@media (max-width:404.99px) {
    .aboutUs__block-info {        
        gap: 30px;
    }
    .aboutUs__info-title{
        font-size: 24px;
    }
    
}
</style>