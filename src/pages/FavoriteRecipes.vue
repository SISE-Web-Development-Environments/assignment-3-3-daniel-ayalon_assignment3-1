<template>
  <b-container>
    <h1 class="title"><b><strong>
      favorite recipes
      <slot></slot></strong></b>
    </h1>
    <b-col>
      <b-row v-for="r in Favoriterecipes" :key="r.id">
        <RecipePreview
          title="Last Viewed Recipes"
          :class="{
                RandomRecipes: true,
                blur: !$root.store.username,
                center: true
              }"
          class="recipePreview"
          :recipe="r"
        />
      </b-row>
    </b-col>
  </b-container>
</template>



    <script>
import RecipePreview from "../components/RecipePreview.vue";
export default {
  name: "FavoriteRecipes",
  components: {
    RecipePreview
  },
  //  props: {
  //   // title: {
  //   //   type: String,
  //   //   required: true
  //   // }
  // },
  data() {
    return {
      Favoriterecipes: []
    };
  },
  mounted() {
    this.showFavoriteRecipes();
  },

  methods: {
    async showFavoriteRecipes() {
      this.axios.defaults.withCredentials = true;
      try {
        const response = await this.axios.get(
          "http://localhost:3000/user/FavoriteRecipes"
        );
        const FavRecipes = response.data;
        this.Favoriterecipes = [];
        this.Favoriterecipes.push(...FavRecipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
   padding-top: 50px;
  color: whitesmoke;
  text-align: center;
	font-weight: normal;
	font-family: 'Ultra', sans-serif;   
	font-size: 36px;
	line-height: 70px;
	text-transform: uppercase;
  text-shadow: 0px 8px  rgb(0, 0, 0), 0 0px rgb(177, 116, 25);
  background-position:center ;
}
</style>