<template>
    <div class="container">
        <headerBlock />


        <div class="product">
            <div class="product__top">
                <div class="product__top-header">
                    <div class="product__top-left">
                        <span class="product__top-category">{{ sender }}</span>
                        <span class="product__top-length">{{ setProduct.length }} Items </span>
                    </div>
                    <div class="product__filter-block">
                        <span class="product__filter-text" @click="isFilter = !isFilter,findProductText='',rangeValue=0,rateProduct=0">Filter</span>

                    </div>
                </div>
                <Transition name="opacity">
                    <div class="product__top-filter" v-if="isFilter">
                        <h2 class="product__top-title">Filter</h2>
                        <inputComponent type="text" placeholder="Enter item name" class="searchInput"
                            v-model="findProductText" @getText="getText()"/> 
                        <div class="product__top-filters">
                            <input type="radio" name="contact" value="1" @click="rateProduct = $event.target.value">
                            <label>Rate 1 </label>
                            <input type="radio" name="contact" value="2" @click="rateProduct = $event.target.value">
                            <label>Rate 2 </label>
                            <input type="radio" name="contact" value="3" @click="rateProduct = $event.target.value">
                            <label>Rate 3 </label>
                            <input type="radio" name="contact" value="4" @click="rateProduct = $event.target.value">
                            <label>Rate 4 </label>
                            <input type="radio" name="contact" value="5" @click="rateProduct = $event.target.value">
                            <label>Rate 5 </label>
                            <input type="range" min="0" max="10000" step="10" v-model="this.rangeValue" class="slider">
                            <label class="currentPrice">More than {{ rangeValue }} Rs.</label>
                        </div>

                    </div>
                </Transition>

            </div>
            <div class="product__bottom">
                <productItem v-for="(item, index) in setProduct" :key="index" :image="item.image" :rate="item.rate"
                    :title="item.title" :subtitle="item.subtitle" :origin="item.orgign" :sale="item.sale" />
            </div>
        </div>
    </div>
</template>
 
 
<script>
import headerBlock from './headerBlock.vue';
import productItem from '../itemComponents/productItem.vue';
import inputComponent from '../itemComponents/inputComponent.vue';


export default {
    components: {
        headerBlock, productItem,inputComponent
    },
    data() {

        return {
            prodcuts: [
                {
                    tag: 'men',
                    image: 'product1.jpg',
                    rate: 4.9,
                    title: 'VERO MODA',
                    subtitle: 'Blue Soft Knit Sweater',
                    orgign: '',
                    sale: 2299,
                },
                {
                    tag: 'men',
                    image: 'product2.jpg',
                    rate: 4.3,
                    title: 'Forever 21',
                    subtitle: 'Plush body-hug sweater',
                    orgign: 2299,
                    sale: 1790,
                },
                {
                    tag: 'men',
                    image: 'product3.jpg',
                    rate: 2.2,
                    title: 'HnM',
                    subtitle: 'Wide-leg TRF Jeans',
                    orgign: 3299,
                    sale: 2999,
                },
                {
                    tag: 'men',
                    image: 'product4.jpg',
                    rate: 3.9,
                    title: 'ONLY',
                    subtitle: 'Floral Print Corsetry-Inspired Top',
                    orgign: '',
                    sale: 1790,
                },
                {
                    tag: 'women',
                    image: 'product5.jpg',
                    rate: '4.0',
                    title: 'ZARA',
                    subtitle: 'Knit Scarf with diamond shapes',
                    orgign: 2999,
                    sale: 2299,
                },
                {
                    tag: 'women',
                    image: 'product6.jpg',
                    rate: '4.3',
                    title: 'ONLY',
                    subtitle: 'Pink Blazer Dress',
                    orgign: 2299,
                    sale: 1790,
                },
                {
                    tag: 'women',
                    image: 'product7.jpg',
                    rate: '4.1',
                    title: 'VERO MODA',
                    subtitle: 'Velvet Halter Jumpsuit',
                    orgign: 3299,
                    sale: 2999,
                },
                {
                    tag: 'women',
                    image: 'product8.jpg',
                    rate: '4.2',
                    title: 'Plush',
                    subtitle: 'High Rise Jeans- Ankle Length',
                    orgign: 2299,
                    sale: 1790,
                },


            ],
            rateProduct: 0,
            sender: this.$route.params.id,
            isFilter: false,
            rangeValue: 0,
            findProductText: '',


        }

    },
    computed: {
        setProduct() {
            return this.prodcuts.filter(product => {
                return product.tag == this.sender && product.rate >= this.rateProduct && product.sale >= this.rangeValue && product.title.toLowerCase().includes(this.findProductText.trim().toLowerCase());
            });

        },

    }

}

</script>
 
 
<style>
.opacity-enter-active,
.opacity-leave-active {
    transition: all 0.5s ease;
}

.opacity-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.opacity-enter-to {
    opacity: 1;
    transform: translateY(0px);
}

.opacity-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.product {
    margin-bottom: 100px;
}

.product__top {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
}

.product__top-header {
    display: flex;
    justify-content: space-between;
}

.product__top-category {
    font-weight: 600;
    font-size: 23px;
    line-height: 139%;
    color: #2D2D2D;
    text-transform: uppercase;
}

.product__top-length {
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
    color: #DB6B97
}

.product__top-left {
    display: flex;
    gap: 40px;
    align-items: center;
}

.product__filter-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #DB6B97;
}

.product__filter-block {

    cursor: pointer;
}


.product__bottom {
    display: flex;
    justify-content: space-between;
   /*  margin: 0 -15px; */
    gap: 40px 123px;
    flex-wrap: wrap;
    margin-bottom: 200px;
}

.product__top-filter {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}

.product__top-title {
    font-weight: 600;
    font-size: 23px;
    line-height: 139%;
    color: #2D2D2D;
    text-transform: uppercase;
    margin-bottom: 30px;
}

.product__top-filters {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.searchInput{
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    margin-bottom: 24px;
    background: #F6F6F6;
    border: 1px solid #D2D2D2;
    border-radius: 8px;
}
</style>