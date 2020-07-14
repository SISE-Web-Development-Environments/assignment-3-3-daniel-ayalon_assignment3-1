<template>
<div>
  <b-container>
    <Span v-if="error">
      {{this.error}}
    </Span>
    <h3>
      favorite recipes
      
    </h3>
    <b-col>
       <b-row  v-for="r in Favoriterecipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row >
    </b-col>
  </b-container>
  <!-- <recipefavoritePreview v-on:activateFavorite="showFavoriteRecipes"/>  -->
</div>
</template>




    <script>
import RecipePreview from "../components/RecipePreview.vue";
export default {
  name: "FavoriteRecipes",
  components: {
    RecipePreview
  },
  data() {
    return {
      Favoriterecipes: null,
      error:""
    };
  },
  mounted() {
    this.showFavoriteRecipes();
     this.$root.$on('favoritePage',()=>
     {
      this.showFavoriteRecipes();
    });
    
  },

  methods: {
    async showFavoriteRecipes() {
      this.axios.defaults.withCredentials = true;
      try {
        const response = await this.axios.get(
          "http://localhost:3000/user/FavoriteRecipes"
        );
         console.log(response);
        const FavRecipes = response.data;
        this.Favoriterecipes = [];
        this.Favoriterecipes.push(...FavRecipes);
      //  if(response.data.message== "no favorite recipes to show"){
         
      //  }
       // console.log(this.recipes);
      } catch (error) {
        this.error="there are no recipes to show"
        if(error.response.data.message === 'unauthorized'){
          this.$root.store.logout();
          this.$router.push("/login").catch(() => {
            this.$forceUpdate();
      });
        }
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