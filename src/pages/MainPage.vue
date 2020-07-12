<template>
  <div class="container">
      <h1 class="title"><strong><b>Main Recipes</b></strong></h1>
      <b-row>
        <div class="mainP">
        <b-col>
          <div class="preview">
            <h2 style="color:white"><strong ><B>Random Recipes</B></strong></h2>
            <RecipePreviewList title="Random Recipes" class="RandomRecipes center" />
          </div>
        </b-col>
        </div>
        <div class="mainP">
          <b-col>
            <!-- <router-link
              class="toLogIn"
              v-if="!$root.store.username"
              to="/login"
              tag="button"
            >Login to view this</router-link> -->
            
            <login v-if="!$root.store.username" class="log"></login>
             <h2 style="color:white "><strong ><B>Last Watched Recipes</B></strong></h2>
            <recipeWatchedList
              title="Last Viewed Recipes"
              :class="{
                RandomRecipes: true,
                blur: !$root.store.username,
                center: true
              }"
              disabled
            ></recipeWatchedList>
          </b-col>
        </div>
      </b-row>
  </div>
</template>

<script>
import login from "../components/login";
import RecipePreviewList from "../components/RecipePreviewList";
import recipeWatchedList from "../components/recipeWatchedList";
export default {
  components: {
    RecipePreviewList,
    login,
    recipeWatchedList
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 50px;
  color: whitesmoke;
  text-align: center;
  // margin: 1em 0 0.5em 0;
	// color: #343434;
	font-weight: normal;
	font-family: 'Ultra', sans-serif;   
	font-size: 36px;
	line-height: 70px;
	text-transform: uppercase;
  text-shadow: 0px 8px  rgb(0, 0, 0), 0 0px rgb(177, 116, 25);
  // background-color: rgb(190, 126, 180);
  background-position:center ;
  ;
}
.log{
  margin-top: 140px;

}
// .contai/ner {

// background-color: rgba(255, 255, 255, 0.0);
//  background-image:url("../src/images/cuttingBoard.jpg");
// height: 100%; /* You must set a specified height */
// width: 100%;
// // background-position: center; /* Center the image */
// background-repeat: no-repeat; /* Do not repeat the image */
// background-size: cover;
// background-origin: border-box;
// height: 100%; /* You must set a specified height */
// width: 100%;
// background-position: center; /* Center the image */
// background-repeat: no-repeat; /* Do not repeat the image */
// background-size: cover;
// max-width: 500px;
// text-align: center;
// }
// .RandomRecipes {
// margin: 10px 0 10px;
// }
.blur {
  -webkit-filter: blur(0px); /* Safari 6.0 - 9.0 */
  filter: blur(20px);
  display: none;
  
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
  
}
::v-deep .blur .log {
  display: none; 
}
// .preview {
//   width: 45%;
// }
// .right {
//   text-align: right;
// }
// .left {
//   text-align: left;
// }
// .toCenter {
//   text-align: center;
// }
.toLogIn {
  // padding-right: 40px;
  margin-top: 15px;
  margin-left: 40px;;
  box-shadow: 27px 1px 31px -1px #1c1b18;
	background:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);
	background-color:#eae0c2;
	border-radius:42px;
	border:2px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#505739;
	font-family:Georgia;
	font-size:21px;
	font-weight:bold;
	padding:20px 30px;
	text-decoration:none;
}
.toLogIn:hover {
  background:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
	background-color:#ccc2a6;
}
.toLogIn:active {
  position: relative;
  top: 1px;
}

.mainP {
  margin-top: 50px;
  margin-left: 100px;
  width: 40%;
}
</style>
