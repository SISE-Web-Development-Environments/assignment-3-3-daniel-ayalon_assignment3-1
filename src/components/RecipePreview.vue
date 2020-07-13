
<template>
  <div > 
    <b-col class="recipePre"> 
      
     <div :title="recipe.title" class="recipe-title">
      <strong>
        <u>{{ recipe.title }}</u>
      </strong>
    </div>
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="recipe-preview">
      <img :src="recipe.image" class="recipe-image" />
    </router-link>
    
    <li>minutes:{{ recipe.readyInMinutes }}</li>
    <img src="../images/likes.png" alt="Likes:" class="img"> {{ recipe.like }}
    <li>vegetarian:{{recipe.vegetarian}}</li>
    <li>gluten Free: {{recipe.glutenFree}}</li>
    <li>vegan: {{recipe.vegan}}</li>
    <li v-if="$root.store.username">watched: {{ recipe.watched }}</li>
    <li v-if="$root.store.username">saved: {{ recipe.saved }}</li>
    <!-- <button v-if="$root.store.username" @click="addToFavorite()">add to favorite</button> -->
       
     <span v-if="isInFavorite()">
             <button @click="removeFromFavorite()"> remove from favorite</button>
            </span>    
            <span v-else>           
            <button @click="addToFavorite()"> add to favorite</button>    
            </span>  
  <br>
  <br>
  </b-col>
  <br><br>
  </div>
</template>


<script>

export default {
 
  data() {
    return {
     the_recipe:this.recipe
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    async addToFavorite() {
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
          this.$root.store.isInTalbe=true;
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
       
        this.$root.store.isInTalbe=false;        
      } catch (error) {
        console.log(error);
      }

},
  isInFavorite(){
    if( this.$root.store.isInTalbe==true){
      return true;
    }
  else{
    return false;
      }
  }
  }
};
</script>

<style scoped>
.recipe-image {
  width: 200px;
  height: auto;
}
.recipePre{
  margin-top: 50px;
  background-size:100% ;
  height: 400px;
  background-color: rgba(255, 254, 254, 0.849);
}
.recipe-title{
  width: 300px;
  
}
.img{
  width: 20px;
  height: 20px;
}
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

.recipe-preview .recipe-body{
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 200px;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
} */

/* .recipe-preview .recipe-footer { */
  /* width: 100%;
  height: 50%;
  overflow: hidden; */
/* } */

/* .recipe-preview .recipe-footer .recipe-title { */
  /* padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis; */
/* } */

/* .recipe-preview .recipe-footer ul.recipe-overview { */
  /* padding: 5px 10px;
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
  margin-bottom: 0px; */
/* } */

/* .recipe-preview .recipe-footer ul.recipe-overview li { */
  /* -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center; */
/* } */
/* .details {
  text-align: left;
} */
</style>
