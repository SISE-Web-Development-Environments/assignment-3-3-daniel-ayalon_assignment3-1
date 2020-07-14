<template>
  <div class="container">
    <div v-if="recipe" class="recipe-body">
      <div class="recipe-header mt-3 mb-4">
        <h2 class="title">
          <b>
            <strong>{{ recipe.recipeName }}</strong>
          </b>
        </h2>
        <b-row>
          <b-col>
            <img :src="recipe.image" class="center" />
          </b-col>
          <b-col class="aouther">
            <b>
              <u class="aouther-title">aouther:</u>
            </b>
            {{ recipe.aouther }}
          </b-col>
        </b-row>
      </div>
      <div>
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
            
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
.details {
  padding-top: 50px;
  color: black;
  text-align: center;
  font-weight: normal;
  font-family: "Ultra", sans-serif;
  font-size: 20px;
  line-height: 70px;
  text-transform: uppercase;
  // text-shadow: 0px 8px  rgb(0, 0, 0), 0 0px rgb(177, 116, 25);
  background-position: center;
}
.recipe-body {
  background-color: rgba(155, 155, 155, 0.596);
}
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  width: 350px;
  height: 300px;
  display: block;
  margin-left: 100px;
  // margin-right: auto;
  // width: 65%;
}
/* .recipe-header{

} */
.title {
  padding-top: 20px;
  margin-top: 40px;
  color: #ffffff;
  font-size: 45px;
  margin-bottom: 25px;
  font-family: "Libre Baskerville", serif;
  line-height: 30px;
  text-align: center;
  text-shadow: 0px 5px 4px rgb(0, 0, 0);
}

.aouther{
  // margin-left: 150px;
  font-size: 25px;
  // margin-bottom: 25px;
  font-family: "Libre Baskerville", serif;
  // line-height: 30px;
  text-align: center;
  // text-shadow: 0px 5px 4px rgb(0, 0, 0);
  
}
.aouther-title{
   color: #030303;
  font-size: 35px;
  margin-bottom: 25px;
  font-family: "Libre Baskerville", serif;
  line-height: 30px;
  text-align: center;
  // text-shadow: 0px 5px 4px rgb(0, 0, 0);
}
</style>
