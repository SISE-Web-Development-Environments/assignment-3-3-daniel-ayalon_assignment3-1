<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <li>minutes:{{ recipe.readyInMinutes }}</li>
              <li>likes:{{ recipe.like }}</li>
              <li v-if="recipe.watched">watched: {{ recipe.watched }}</li>
              <li v-if="recipe.saved">saved: {{ recipe.saved }}</li>
              <li>vegetarian:{{recipe.vegetarian}}</li>
              <li>glutenFree: {{recipe.glutenFree}}</li>
              <li>vegan: {{recipe.vegan}}</li>
            </div>Ingredients:
            <ul>
              <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                {{r.name}}:
                {{r.amount}}
                {{r.unit}}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">{{ s.step }}</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      >-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          `http://localhost:3000/recipes/recipepage/recipeID/${this.$route.params.recipeId}`,
          {
            params: { id: this.$route.params.recipeId }
          }
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        like,
        readyInMinutes,
        image,
        title,
        vegan,
        glutenFree,
        vegetarian
      } = response.data;

      let _instructions = analyzedInstructions;

      // .map((fstep) => {
      //   // if(analyzedInstructions!== undefined){
      //   //   console.log("aInst");
      //   //   console.log(response.data.analyzedInstructions);
      //   //   console.log("titele:");
      //   //   console.log(response.data.title);
      //   //    console.log("i am empty");
      //   // }
      //   console.log("fstep");
      //   console.log(fstep);
      //   console.log("fstep.steps");
      //   console.log(fstep.steps);
      //   console.log("fstep.steps[0]");
      //   console.log(fstep.steps[0]);
      //   console.log("all good");
      //   fstep.steps[0].step = fstep.name + fstep.steps[0].step;
      //   return fstep.steps;
      // })
      // .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        like,
        readyInMinutes,
        image,
        title,
        vegan,
        glutenFree,
        vegetarian
      };
      console.log(extendedIngredients);
      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
