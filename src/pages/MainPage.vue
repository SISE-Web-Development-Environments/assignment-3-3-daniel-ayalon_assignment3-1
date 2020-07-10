<template>
  <div class="container">
    <div class="toCenter">
      <h1 class="title">Main Recipes Page</h1>
      <RecipePreviewList title="Random Recipes" class="RandomRecipes center" />
      <br><br><br>
      <router-link 
        class="toLogIn"
        v-if="!$root.store.username"
        to="/login"
        tag="button"
      >Login to vue this</router-link>
    
    <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

.toCenter {
  text-align: center;
}
.toLogIn {
	box-shadow: 0px 0px 0px 0px #035f66;
	background:linear-gradient(to bottom, #0b64b3 5%, #30282d 100%);
	background-color:#0b64b3;
	border-radius:42px;
	border:4px solid #000000;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Times New Roman;
	font-size:19px;
	font-weight:bold;
	padding:19px 52px;
	text-decoration:none;
	text-shadow:0px 0px 12px #000000;
}
.toLogIn:hover {
	background:linear-gradient(to bottom, #30282d 5%, #0b64b3 100%);
	background-color:#30282d;
}
.toLogIn:active {
	position:relative;
	top:1px;
}

</style>
