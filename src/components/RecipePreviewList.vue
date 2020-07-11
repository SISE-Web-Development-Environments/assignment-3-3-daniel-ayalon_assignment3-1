<template>
 <div>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
  <br>
  <br>
  
  <button @click="switchRandom()">switch</button>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
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
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      this.axios.defaults.withCredentials = true;
      try {
        const response = await this.axios.get(
          "http://localhost:3000/recipes/randomRecipes"
        );

        // console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        //   console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async switchRandom() {
      this.axios.defaults.withCredentials = true;
      try {
        const response = await this.axios.get(
          "http://localhost:3000/recipes/randomRecipes"
        );

        // console.log(response);
        const newRecipes = response.data; 
        this.recipes = [];
        this.recipes.push(...newRecipes);
        //   console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }

   }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
