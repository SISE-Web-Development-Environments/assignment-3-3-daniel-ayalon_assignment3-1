<template>
<div>
  
    <b-container>
    
    <b-col>
    <router-link
    
    :to="{ name: 'recipe', params: { recipeId: recipe.recipe_id } }"
    class="recipe-preview"
  >
    <b-row class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </b-row>
    </router-link>      
    <b-row class="recipe-footer">
      <div id="title" >
        {{ recipe.recipe_name }}
      </div>
      
        <div class="details">
        <li>minutes:{{ recipe.durationTime }} </li>
        <li>likes:{{ recipe.likes }} </li>
        <li>vegetarian:{{recipe.vegetarian}}  </li>
        <li>glutenFree: {{recipe.gluten}} </li>
        <li>vegan: {{recipe.vegan}} </li>     
        </div>
    </b-row>
    </b-col>
        </b-container> 
        


      </div>
   
       
</template>

<script>
export default {
 
  data() {
    return {

    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
     }
    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  },
  methods: {    
           
}
};
</script>

<style scoped>
/* .recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 60%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  margin-left:50%;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center; */

#title{
    text-align: center;
    margin-left:30%;
}
.details{
  text-align: left;
  margin-left:40%;
}


</style>
