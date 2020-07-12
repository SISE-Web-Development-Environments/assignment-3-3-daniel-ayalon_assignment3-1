<template>
  <div>
    
      <h3>
        <slot></slot>
      </h3>
      <div class="btn">
      <button  class="randBtn" @click="switchRandom()">New Random Recipes</button>
      </div>
      <b-col>
        <b-row class="recipePre" v-for="r in recipes" :key="r.id">
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
.btn{
  
  margin-left: 25px;
}

.randBtn {
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
	padding:18px 4px;
	text-decoration:none;
}
.randBtn:hover {
	background:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
	background-color:#ccc2a6;
}
.randBtn:active {
	position:relative;
	top:1px;
}
// .recipePre{
//   // width: 50%;
//   background-color: rgba(120, 120, 120, 0.233);
// }
</style>
