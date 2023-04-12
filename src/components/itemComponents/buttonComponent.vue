<template>
    <a href="#" class="button">{{ btnName }}</a>
</template>
 
 
<script>

export default {
    props: ['btnName'],
    data() {

        return {

        }

    }

}

</script>
 
 
<style>
.button {
    background: #2D2D2D;
    border-radius: 8px;
    color: #fff;
    padding: 10px 145px;
    border: 1px solid black;
    transition: all .3s;
    text-align: center;
}
.button:hover{
    color: black;
    
    background: #fff;
}
@media (max-width:349.99px) {
    .button{
        padding: 10px 130px;
    }
}
</style>