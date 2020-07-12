<template>
<div>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </div>
     </router-link>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title" style="background: white;">
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
       
        <li v-if="$root.store.username">
        <!-- <router-link :to="{name:'createFavoritePage', params: { recipeId: recipe.id,recipeTitle:recipe.title,recipeImg: recipe.image,reipeTime:recipe.readyInMinutes,recipeLike:recipe.like,recipeVeg:recipe.vegetarian,recipeGlut:recipe.glutenFree,recipeVegan:recipe.vegan  }}" class="recipe-preview" > -->
            <span v-if="!this.isInTalbe">
            <button @click="addToFavorite()"> add to favorite</button>
            </span>    
            <span v-else>
             <button @click="removeFromFavorite()"> remove from favorite</button>    
            </span>     
        </li>
      </div>
    
       
</template>

<script>
export default {
 
  data() {
    return {
     the_recipe:this.recipe,
     isInTalbe:false
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
         
           title:this.the_recipe.title,
           readyInMinutes:this.the_recipe.readyInMinutes,
           image:this.the_recipe.image,
           aggregateLikes:this.the_recipe.like,
           vegetarian:this.the_recipe.vegetarian,
           glutenFree:this.the_recipe.glutenFree,
           vegan:this.the_recipe.vegan,
           recipe_id:this.the_recipe.id
        
          });
        if(respone.data.message=="The recipe already marked as favorite"){
          this.isInTalbe=true;
        }
      } catch (error) {
        console.log(error);
      }
       },
       async removeFromFavorite(){
          this.axios.defaults.withCredentials = true;
     
      try {
        const response = await this.axios.post(
          "http://localhost:3000/user/FavoriteRecipeRemove",{         
           
           recipe_id:this.the_recipe.id
        
          });           
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

.recipe-preview .recipe-body{
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
  background: white;
}
.recipe-image{
  width: 300px;
  height: auto;
}

</style>
