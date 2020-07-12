<template>
    <div>
    <h1>Search recipes</h1>
    <label for="serach">Enter Search name</label>
    <input type="text" name="serach" id="serach" v-model="searching.NameOfFood" /><br>
    <label for="recipesNumber">Please enter number of recipes</label>
    <!-- <select name="recipesNumber" id="recipesNumber" v-model="searching.NumberOfRecipes">
         <option value="5">5</option>
         <option value="10">10</option>
         <option value="15">15</option>
   </select> -->
    <br>
    
     <b-form-group id="recipesNumber" label-cols-sm="7" label="Please enter number of recipes:" label-for="recipesNumber"> 
    <b-form-select name="recipesNumber" id="recipesNumber" v-model="searching.numberOfRecipes" :options="recipesNum">      
   </b-form-select>
   </b-form-group> 
    
    
    
    
     <b-form-group id="group_by_cuisine" label-cols-sm="7" label="Choose by cuisine:" label-for="chooseCuisine"> 
    <b-form-select name="chooseCuisine" id="chooseCuisine" v-model="select_cuisine" :options="cuisine">      
   </b-form-select>
   </b-form-group> 
    
    <br>
    
     <b-form-group id="group_by_diet" label-cols-sm="7" label="Choose by diet:" label-for="choosediet"> 
    <b-form-select name="choosediet" id="choosediet" v-model="select_diet" :options="diet">        
   </b-form-select>
   </b-form-group>
   
   <br> 

   <b-form-group id="group_by_intolarence" label-cols-sm="7" label="choose by intolarence:" label-for="chooseintolarence"> 
    <b-form-select name="chooseintolarence" id="chooseintolarence" v-model="select_intolarence" :options="intolarence">        
   </b-form-select>
   </b-form-group>
   <br>
   <button @click="sortByTime()">sort by time</button><br>
   <button @click="sortBylikes()">sort by likes</button>
    <br>
    <button @click="search1()">search</button>
    <b-container>
       <span v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </span>
  </b-container>
 <b-alert    
      v-if="!checkIfOk()"
      variant="warning"
      dismissible
      show
    >no recipes found</b-alert>

    


    </div>           
</template>
<script>
import cuisine from "../assets/cuisine";
import diet from "../assets/diet";
import intolarence from "../assets/intolarence";
import RecipePreview from "../components/RecipePreview.vue";
export default {
  name:"search",
  components: {
    RecipePreview
    },
    data(){
        return{
            searching:{
               NameOfFood:null,
               numberOfRecipes:5
            
            },
             recipesNum:[5,10,15],
             select_cuisine: null,
             cuisine: [{ value: null, text: "", }],
             select_diet:null,
             diet:[{ value: null, text: "",  }],
             select_intolarence:null,
             intolarence:[{ value: null, text: "",  }],
             recipes:[],
             isBeenSearched:false,
             
             
        }
    },
     mounted() {
    // console.log("mounted");
    this.cuisine.push(...cuisine);
    this.diet.push(...diet);
    this.intolarence.push(...intolarence);
    // console.log($v);
    
    this.lastSearch();
    
  },
   methods:{
            async search1(){
                try{
               
                this.axios.defaults.withCredentials = true;
                this.isBeenSearched=false;
                let searchParams={};
                if(this.select_cuisine!=null){
                    searchParams["cuisine"]=this.select_cuisine;
                } 
                if(this.select_diet!=null){
                    searchParams["diet"]=this.select_diet;
                } 
                if(this.select_intolarence!=null){
                    searchParams["intolerance"]=this.select_intolarence;
                } 
                
                 console.log(searchParams.query);
                 let response = await this.axios.get(
                    `http://localhost:3000/recipes/search/query/${this.searching.NameOfFood}/amount/${this.searching.numberOfRecipes}`, {
                        
                        params:searchParams
                    }
               );
               console.log(response);

                // console.log(this.searching.numberOfRecipes)
                 const found_recipes=response.data;                 
                 this.recipes=[];
                 this.recipes.push(...found_recipes)
                                             
                //  isFirstTime=false;
                //  this.$root.store.allRecipes=[]
                //  var stoargeRecipes=this.$root.store.allRecipes
                
                    
                        if(this.$root.store.username){
                             this.$root.store.globalRecipes=[];
                             this.$root.store.globalRecipes.push(...this.recipes)
                        }
                 if(this.recipes.length>0){
                    this.isBeenSearched=true;
                 }
                  } catch (error) {
                    console.log(error);
                  }
                       //  for( i;i<recipesSize;i++){
                //      for(j;i<stoargeSize;j++)
                //         if(stoargeRecipes[j]===recipes[i]){
                //             break;
                //      }
                //     else if(j==stoargeRecipes.length-1&&stoargeRecipes[j]!==recipes[i]){
                //         stoargeRecipes.push(recipes[i]);
                //       }                   
                //     }
        },
        sortByTime(){
           return this.recipes.sort((a,b)=>a.readyInMinutes-b.readyInMinutes); 
        },
        sortBylikes(){
            return this.recipes.sort((a,b)=>b.like-a.like);
        
        },
        checkIfOk(){
        if(this.recipes.length==0 && this.isBeenSearched==true){
               return false; 
        } 
        else if(this.isBeenSearched==true){
            return true;
        } 
        },
        lastSearch(){
           if(this.$root.store.username){
            if(this.$root.store.globalRecipes!==undefined){
           this.recipes=this.$root.store.globalRecipes    
              }
           }
        }       
    }
};
</script>
<style>
.recipePreview{
    display: inline-block;
}

b-container{
    height: 100%;
    width: 100%;
}
</style>