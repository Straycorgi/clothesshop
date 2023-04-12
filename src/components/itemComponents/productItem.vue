<template>
    <div class="product__block">
        <img :src="require('../../assets/products/' + image)" alt="" class="product__block-img">
        <div class="product__block-interractive">
            <span class="product__interractive-rate">{{ rate }}</span>
            <img src="@/assets/products/heart.svg" alt="favSVG" class="product__interractive-heart"
                @click="changeFav($event)" />
        </div>
        <h3 class="product__block-title">{{ title }}</h3>
        <p class="product__block-subtitle">{{ subtitle }}</p>
        <div class="product__block-price">
            <span v-if="origin" class="product__block-origin">Rs. {{ origin }}</span>
            <span class="product__block-sale">Rs. {{ sale }}</span>
        </div>

        <buttonComponent :btn-name="'Add to cart'" class="btn" />

    </div>
</template>
 
 
<script>
import buttonComponent from './buttonComponent.vue';
export default {
    props: ['image', 'rate', 'title', 'subtitle', 'origin', 'sale'],
    components: {
        buttonComponent,
    },
    data() {

        return {
            favIcon: false,
        }

    },
    methods: {
        changeFav(e) {
            if (!this.favIcon) {
                e.srcElement.src = require("../../assets/products/fullheart.svg");
                this.favIcon=!this.favIcon;
            }
            else{
                e.srcElement.src = require("../../assets/products/heart.svg");
                this.favIcon=!this.favIcon;
            }
        }
    },


}

</script>
 
 
<style>
.product__block-img {
    margin-bottom: -48px;
}

.product__block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 260px;
}

.product__block-interractive {
    display: flex;
    gap: 133px;
    margin-bottom: 40px;
    padding: 0px 16px;
}

.product__interractive-rate {
    background-color: #fff;
    padding: 4px 8px 4px 24px;
    position: relative;
}

.product__interractive-rate::before {
    position: absolute;
    content: '';
    width: 16px;
    height: 16px;
    background-image: url(@/assets/products/star.svg);
    background-repeat: no-repeat;
    left: 5px;
    top: 8px;
}

.product__interractive-heart {
    cursor: pointer;
}
.product__interractive-heart:active {
    animation: heartbeat .1s;
}
@keyframes heartbeat {
    from{
        transform: scale(1.45);
    }
    to{
        transform: scale(1);
    }
    
}
.product__block-price {
    display: flex;

}

.product__block-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #2D2D2D;
    margin-bottom: 4px;
}

.product__block-subtitle {
    font-size: 14px;
    line-height: 171%;
    color: #737373;
    margin-bottom: 16px;

}

.product__block-origin {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    margin-right: 8px;
    color: #737373;
    text-decoration: line-through;

}

.product__block-sale {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    color: #DB6B97;

}

.product__block-price {
    margin-bottom: 16px;
}

.btn {
    font-size: 14px;
    padding: 8px 70px;

}


</style>