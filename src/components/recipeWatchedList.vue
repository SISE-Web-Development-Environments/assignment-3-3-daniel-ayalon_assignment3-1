<template>
  <div>
    
      <b-col class="container">
        <b-row v-for="r in recipes" :key="r.id">
          <div>
            <RecipePreview class="recipePreview" :recipe="r" />
          </div>
        </b-row>
      </b-col>
    
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "recipeWatchedList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.recipesWatched();
  },
  methods: {
    async recipesWatched() {
      this.axios.defaults.withCredentials = true;
      try {
        const response = await this.axios.get(
          "http://localhost:3000/user/ThreeLastRecipes"
        );

        // console.log(response);

        const Watchedrecipes = response.data;
        //console.log(response.data)
        this.recipes = [];
        this.recipes.push(...Watchedrecipes);
        //   console.log(this.recipes);
      } catch (error) {
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
.container {
  // min-height: 400px;
  margin-top: 76px;
}
</style>