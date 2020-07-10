<template>
<div>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      
        <div class="details">
        <li>minutes:{{ recipe.readyInMinutes }} </li>
        <li>likes:{{ recipe.like }} </li>
        <li> vegetarian:{{recipe.vegetarian}}  </li>
        <li>glutenFree: {{recipe.glutenFree}} </li>
        <li >vegan: {{recipe.vegan}} </li>
        <li v-if="$root.store.username">watched: {{ recipe.watched }}</li> 
        <li v-if="$root.store.username">saved: {{ recipe.saved }}</li> 
        </div>
        </div>
        </router-link>
        <li v-if="$root.store.username">
        <!-- <router-link :to="{name:'createFavoritePage', params: { recipeId: recipe.id,recipeTitle:recipe.title,recipeImg: recipe.image,reipeTime:recipe.readyInMinutes,recipeLike:recipe.like,recipeVeg:recipe.vegetarian,recipeGlut:recipe.glutenFree,recipeVegan:recipe.vegan  }}" class="recipe-preview" > -->
            <button @click="addToFavorite()"> add to favorite</button>    
        <!-- </router-link> -->
        </li>
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
       async addToFavorite(){
          this.axios.defaults.withCredentials = true;
      try {
        const response = await this.axios.post(
          "http://localhost:3000/user/FavoriteRecipes",{
           
          
          recipe_id:recipe.id,
           title:recipe.title,
           readyInMinutes:recipe.readyInMinutes,
           image:recipe.image,
           aggregateLikes:recipe.like,
           vegetarian:recipe.vegetarian,
           glutenFree:recipe.glutenFree,
           vegan:recipe.vegan
          }
        );
        
      } catch (error) {
        console.log(error);
      }
       }
}
};
</script>

<style scoped>
.recipe-preview {
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
  width: 98%;
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
  text-align: center;
}
.details{
  text-align: left;
}


</style>
