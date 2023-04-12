<template>
    <input type="text" :placeholder="place" class="inputClass" v-model="text" >
</template>
 
 
<script>

export default {
    props: ['place'],
    data() {

        return {
            text:'',
        }

    },
    methods:{
        returnText(){
           this.$emit('getText',this.text);
        }
    },
}

</script>
 
 
<style>
.inputClass {
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