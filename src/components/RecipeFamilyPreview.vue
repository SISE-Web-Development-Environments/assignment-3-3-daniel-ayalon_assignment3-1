<template>
  <div class="container">
  
    <div v-if="recipe" class="recipe-body">
      <div class="recipe-header mt-3 mb-4">
        <img :src="recipe.image" class="center" />
      </div>
      <div >
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <li>
                <b>
                  <u class="details">Recipe name:</u>
                </b>
                {{ recipe.recipeName }}
              </li>
              <li>
                <b>
                  <u class="details">aouther:</u>
                </b>
                {{ recipe.aouther }}
              </li>
              <li>
                <b>
                  <u class="details">vegetarian:</u>
                </b>
                {{ recipe.vegetarian }}
              </li>
              <li>
                <b>
                  <u class="details">Time that used:</u>
                </b>
                {{ recipe.timeThatUsed }}
              </li>
            </div>Ingrediants:
            <ul>
              <li v-for="(r,index) in recipe.products" :key="index+'_'+r.id">{{r}}</li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="(r,index) in recipe.Instructions" :key="index+'_'+r.id">{{r}}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>

.details{
   padding-top: 50px;
  color: black;
  text-align: center;
	font-weight: normal;
	font-family: 'Ultra', sans-serif;   
	font-size: 20px;
	line-height: 70px;
	text-transform: uppercase;
  // text-shadow: 0px 8px  rgb(0, 0, 0), 0 0px rgb(177, 116, 25);
  background-position:center ;
}
.recipe-body{
  background-color: rgba(200,200,200,0.5);
}
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
  width: 65%;
}
/* .recipe-header{

} */
</style>
