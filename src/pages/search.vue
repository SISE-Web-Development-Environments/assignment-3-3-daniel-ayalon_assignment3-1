<template>
    <div>
    <h1>Search recipes</h1>
    <label for="serach">Enter Search name</label>
    <input type="text" name="name" id="name" v-model="search.NameOfFood" /><br>
    <label for="recipesNumber">Please enter number of recipes</label>
    <select name="recipesNumber" id="recipesNumber" v-model="search.NumberOfRecipes">
         <option value="5">5</option>
         <option value="10">10</option>
         <option value="15">15</option>
   </select>
    <br>
    
      <b-form-group id="group_by_cuisine" label-cols-sm="7" label="Choose by cuisine:" label-for="chooseCuisine"> 
    <b-form-select name="chooseCuisine" id="chooseCuisine" v-model="select_cuisin" :options="cuisine">      
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

    <button @click="search()">search</button>

    </div>           
</template>
<script>
import cuisine from "../assets/cuisine";
import diet from "../assets/diet";
import intolarence from "../assets/intolarence";
export default {
    data(){
        return{
            search:{
               NameOfFood:null,
               numberOfRecipes:5
            
            },
             select_cuisine: null,
             cuisine: [{ value: null, text: "", }],
             select_diet:null,
             diet:[{ value: null, text: "",  }],
             select_intolarence:null,
             intolarence:[{ value: null, text: "",  }],
             recipes:null             
        }
    },
     mounted() {
    // console.log("mounted");
    this.cuisine.push(...cuisine);
    this.diet.push(...diet);
    this.intolarence.push(...intolarence);
    // console.log($v);
  },
   methods:{
            async search(){
                let queryParams={};
                if(this.select_cuisine!=null){
                    queryParams.cuisine=this.select_cuisine;
                } 
                if(this.select_diet!=null){
                    queryParams.diet=this.select_cuisine;
                } 
                if(this.select_intolarence!=null){
                    queryParams.intolarence=this.select_intolarence;
                } 
                 let response = await this.axios.get(
                    `http://localhost:3000/recipes/search/query/${this.NameOfFood}/amount/${this.numberOfRecipes}`, {
                        params: queryParams
                    }
                );
                 const found_recipes=response.data;
                 this.recipes=[];
                 recipes.push(...found_recipes)

        }

    }
};
</script>
<style>

</style>