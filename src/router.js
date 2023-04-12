import { createRouter, createWebHashHistory } from "vue-router";
import homeBlock from './components/blockComponents/homeBlock.vue';
import aboutBlock from './components/blockComponents/aboutBlock.vue';
import contactUs from './components/blockComponents/contactUs.vue';
import authoPage from './Pages/authoPage.vue';
import shopBlock from './components/blockComponents/shopBlock.vue';
import productBlock from './components/blockComponents/productBlock.vue';

export default createRouter({
    mode: history,
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: homeBlock, alias: '/' },
        { path: '/about', component: aboutBlock },
        { path: '/contactUs', component: contactUs },
        { path: '/authoPage', component: authoPage },
        { path: '/shopBlock',component: shopBlock},
        { path: '/productBlock/:id',component: productBlock,name:'productBlock'},
    ]
})