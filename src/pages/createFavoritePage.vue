<template>
  <div>
  <b-container>
     <h3>
      favorite recipes
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row> -->
  </b-container> 
  </div>
</template>



    <script>
// import RecipePreview from "../components/RecipePreview.vue";
export default {
  name: "createFavoritePage",
//   components: {
//     RecipePreview
//   },
  data() {
    return {
      
    };
  },
  mounted() {
    this.create();
  },

  methods: {
    async create() {
      this.axios.defaults.withCredentials = true;
      try {
        const response = await this.axios.post(
          "http://localhost:3000/user/FavoriteRecipes",
          {
           recipe_id:this.$route.params.recipeId,
           title:this.$route.params.recipeTitle,
           readyInMinutes:this.$route.params.reipeTime,
           image:this.$route.params.recipeImg,
           aggregateLikes:this.$route.params.recipeLike,
           vegetarian:this.$route.params.recipeVeg,
           glutenFree:this.$route.params.recipeGlut,
           vegan:this.$route.params.recipeVegan
          }
        );
        // console.log(response);
        // this.$router.push({name:"/"});
        // const FavRecipes = response.data;
        // this.FavRecipes = [];
        // this.FavRecipes.push(...FavRecipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
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
</style>