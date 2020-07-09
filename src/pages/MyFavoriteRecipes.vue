<template>

  <b-container>
    <h3 >
      favorite recipes
      
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>



    <script>
       import RecipePreview from "../components/RecipePreview.vue";
        export default {
             name: "MyFavoriteRecipes",
  components: {
    RecipePreview
  },
    data(){
        return{ 
            recipes: null
    }
    },
 mounted() {
    this.showRecipes();
 },
    
    methods: {
    async showRecipes(){
        try {
        const response = await this.axios.get(
          "http://localhost:3000/user/FavoriteRecipes"
        );
        // console.log(response);
        const FavoriteRecipes = response.data;
        this.recipes = [];
        this.recipes.push(...FavoriteRecipes);
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