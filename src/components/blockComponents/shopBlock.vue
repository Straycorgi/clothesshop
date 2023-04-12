<template>
    <div class="container">
        <headerBlock />
        <div class="shopBlock__top">
            <h2 class="shopBlock__top-title">SHOP BY CATEGORIES</h2>
            <div class="shopBlock__top-items">
                <div class="shopBlock__items-parent">
                    <RouterLink :to="{name:'productBlock',params:{id:'men'}}" class="shopBlock__items-link">MEN</RouterLink>
                </div>
                <div class="shopBlock__items-parent">
                    <RouterLink :to="{name:'productBlock',params:{id:'women'}}" class="shopBlock__items-link">WOMEN</RouterLink>
                </div>
                <div class="shopBlock__items-parent">
                    <div class="shopBlock__parent-box">
                        <a href="" class="shopBlock__items-link">accessories</a>
                    </div>
                    <div class="shopBlock__parent-box">
                        <a href="" class="shopBlock__items-link">kids</a>
                    </div>
                    <div class="shopBlock__parent-box">
                        <a href="" class="shopBlock__items-link">footwear</a>
                    </div>
                    <div class="shopBlock__parent-box">
                        <a href="" class="shopBlock__items-link">beauty</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="shopBlock__bottom">
            <h2 class="shopBlock__top-title">PRODUCTS AT SLASHED PRICES</h2>
            <div class="shopBlock__bottom-products">
                <div class="shopBlock__products-product" v-for="(item, index) in items" :key="index">
                    <productItem :image="item.image" :rate="item.rate" :title="item.title" :subtitle="item.subtitle"
                        :origin="item.origin" :sale="item.sale" />
                </div>
            </div>
        </div>
    </div>
</template>
 
 
<script>

import headerBlock from './headerBlock.vue';
import productItem from '../itemComponents/productItem.vue';
export default {

    components: {
        headerBlock, productItem,
    },
    data() {

        return {
            items: [
                {
                    image: 'item1.jpg',
                    rate: '4.9',
                    title: 'ZARA',
                    subtitle: 'Green High Neck Knit Sweater',
                    origin:  2999,
                    sale:  2299
                },
                {
                    image: 'item2.jpg',
                    rate: '4.3',
                    title: 'ONLY',
                    subtitle: 'Plush Jogging Trousers',
                    origin:  2299,
                    sale:  1790
                },
                {
                    image: 'item3.jpg',
                    rate: '5.0',
                    title: 'HnM',
                    subtitle: 'Black sweater with long sleeves',
                    origin:  3299,
                    sale:  2999
                },
                {

                    image: 'item4.jpg',
                    rate: '4.4',
                    title: 'Plush',
                    subtitle: 'High Rise Jeans- Ankle Length',
                    origin:  2299,
                    sale:  1790
                },
            ],
        }

    }

}

</script>
 
 
<style>
.shopBlock__top {
    margin-bottom: 80px;
}

.shopBlock__top-title {
    font-weight: 600;
    font-size: 23px;
    line-height: 139%;
    color: #2D2D2D;
    margin-bottom: 40px;
}

.shopBlock__top-items {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
}

.shopBlock__items-parent {
    height: 576px;
    display: flex;
}

.shopBlock__items-parent:nth-child(1) {
    background-image: url(@/assets/men.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-items: flex-end;
    flex: 1 1 29%;
}

.shopBlock__items-parent:nth-child(2) {
    background-image: url(@/assets/Women.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-items: flex-end;
    flex: 1 1 24%;
}

.shopBlock__items-parent:nth-child(3) {
    flex: 1 1 40%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 32px;
}

.shopBlock__items-link {
    padding: 16px 62px;
    background-color: #fff;
    color: black;
    margin: 24px 16px;
    transition: all .3s;
    text-transform: uppercase;

}

.shopBlock__items-link:hover {
    background-color: black;
    color: #fff;
}

.shopBlock__parent-box {
    flex: 1 0 25%;
    align-items: flex-end;
    display: flex;
}

.shopBlock__parent-box:nth-child(1) {
    background-image: url(@/assets/accessories.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

}

.shopBlock__parent-box:nth-child(2) {
    background-image: url(@/assets/kids.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;


}

.shopBlock__parent-box:nth-child(3) {
    background-image: url(@/assets/shoes.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    align-items: flex-start;
}

.shopBlock__parent-box:nth-child(4) {
    background-image: url(@/assets/beauty.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    align-items: flex-start;

}

















.shopBlock__bottom-products {
    display: flex;
    gap: 123px;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 -10px;
}

.shopBlock__products-product {
    flex:  0 1 15%;

}

.shopBlock__bottom {
    margin-bottom: 100px;
}
</style>