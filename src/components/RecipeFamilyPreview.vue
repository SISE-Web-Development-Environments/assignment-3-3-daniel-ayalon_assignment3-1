<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
          <div class="wrapper">
            <div class="wrapped">
                  <div class="mb-3">
                      <li><b><u>Recipe name:</u></b> {{ recipe.recipeName }} </li>
                      <li><b><u>aouther:</u></b>  {{ recipe.aouther }} </li>
                      <li><b><u> vegetarian:</u></b>  {{ recipe.vegetarian }} </li>
                      <li><b><u>Time that used:</u></b>  {{ recipe.timeThatUsed }} </li>             
                  </div>
                  <div>
                      Ingrediants:
                      <ul>
                        <li
                            v-for="(r,index) in recipe.products"
                            :key="index+'_'+r.id"
                         > 
                          {{r}}
                        </li>
                       </ul>
                  </div> 
                  <div class="wrapped">
                      Instructions:
                      <ol>
                        <li
                          v-for="(r,index) in recipe.Instructions"
                          :key="index+'_'+r.id"
                        > 
                        {{r}}
                        </li>
                      </ol>
                  </div>   
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
  width: 98%;
}
/* .recipe-header{

} */
</style>
