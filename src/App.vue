<template>
  <div class="wrapper">

    <RouterView></RouterView>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Poppins:regular,600,700);

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
}




ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

.wrapper {
  overflow: hidden;
}

.container {
  max-width: 1440px;
  padding: 0px 15px;
  margin: 0 auto;
}
</style>
