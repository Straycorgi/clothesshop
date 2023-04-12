<template>
  <div class="container">
    <headerBlock class="header"/>
    <div class="explore__items">
      <div class="explore__items-left item" >
        <span class="explore__items-subtitle">Brands Everyone’s Crushing on</span>
        <h2 class="explore__items-title">Explore All</h2>
      </div>
      <div class="explore__items-right">
        <div class="explore__items-top item">
          <span class="explore__items-subtitle">456 Items</span>
          <h2 class="explore__items-title">Footwear</h2>
        </div>
        <div class="explore__items-bottom">
          <div class="explore__items-item item">
            <span class="explore__items-subtitle">680 Items</span>
            <h2 class="explore__items-title">Sweaters</h2>
          </div>
          <div class="explore__items-item item">
            <span class="explore__items-subtitle">341 Items</span>
            <h2 class="explore__items-title">Demins</h2>
          </div>
        </div>
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
.header{
  z-index: 50;
}
.explore__items {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;

}

.explore__items-left {
  max-width: 512px;
  flex-grow: 1;
  height: 686px;
  padding: 24px;
  background-image: url(@/assets/item1.jpg);
  background-position: center;
  display: flex;
  flex-direction: column;
}

.explore__items-right {
  max-width: 776px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.explore__items-top {
  background-image: url(@/assets/item2.jpg);
  background-position: center;
  flex-grow: 1;
  max-width: 776px;
  padding: 24px;
  height: 294px;
  display: flex;
  flex-direction: column;

}

.item {
  transition: all .3s;
  cursor: pointer;
}

.item:hover {
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2));

}

.explore__items-bottom {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
 
 
}

.explore__items-item {
  max-width: 372px;
  padding: 24px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  height: 360px;
  background-size: cover;
  background-repeat: no-repeat;
}

.explore__items-item:nth-child(1) {
  background-image: url(@/assets/item3.jpg);
  background-position: center;
 
}

.explore__items-item:nth-child(2) {
  background-image: url(@/assets/item4.jpg);
  background-position: center;
}

.explore__items-subtitle {
  font-weight: 600;
  font-size: 14px;
  line-height: 171%;
  color: #DB6B97;
  margin-bottom: 4px;
}

.explore__items-title {
  font-weight: 600;
  font-size: 23px;
  line-height: 139%;
  color: #2D2D2D;
  position: relative;
  margin-right: 130px;
}

.explore__items-title::after {
  content: '';
  position: absolute;
 
  width: 28px;
  height: 14px;
  background-image: url(@/assets/arrow.svg);
  background-repeat: no-repeat;
  top: 10px;
  left: 130px;
}

</style>