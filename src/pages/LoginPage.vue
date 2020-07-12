<template>
  <div class="container">
    <login class="log"></login>
  </div>
</template>
<script>
 import login from "../components/login";
 export default {
  components: {
    login
  },
  data(){
    return{
      name:"LoginPage"
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  // padding-top: 100%;
  // padding-bottom: 50%;
  // max-width: 400px;
  // background-color :rgba(255, 255, 255, 0.651);
  // background-origin: border-box;
  // height: 100%; /* You must set a specified height */
  // width: 100%;
  // margin-top: 50px;
  // background-position: center; /* Center the image */
  // background-repeat: no-repeat; /* Do not repeat the image */
  // background-size: cover; 

}
.log{
  // margin-top: 50px;
}

</style>
