<template>
  <div >    
       <span v-for="r in recipe" :key="r.id"> -->
        <h1>{{ r.title }}</h1>
        <img :src="r.image" class="center" />
      
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <li>minutes:{{ r.readyInMinutes }}</li>
              <!-- <li>likes:{{ recipe.like }}</li> -->
              <!-- <li v-if="recipe.watched">watched: {{ recipe.watched }}</li> -->
              <!-- <li v-if="recipe.saved">saved: {{ recipe.saved }}</li> -->
              <li>vegetarian:{{r.vegetarian}}</li>
              <li>glutenFree: {{r.glutenFree}}</li>
              <li>vegan: {{r.vegan}}</li>
            </div>
            Ingredients:
            <ul>
              <li v-for="(k, index) in r.ingredients" :key="index + '_' + k.id">
                {{k}}
               
               
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in r.instructions" :key="s.number">{{ s }}</li>
            </ol>
          </div>
        </div>
      </div>
         
      </span>
    </div> 
</template>

<script>
export default {
  data() {
    return {
      recipe:[]
                
    };
  },
   mounted() {
    this.createPersonal();
  },
  methods:{
  async createPersonal() {
     
    try {
      console.log(this.$route.params.recipeId)
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          `http://localhost:3000/user/PersonalRecipes/recipeID/${this.$route.params.recipeId}`,
         
             //params: { id: this.$route.params.recipeId }
          
        );

        // console.log("response.status", response.status);
        
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
        const personals=response.data;
        console.log(personals)
        this.recipe.push(...personals);
       
        // tmp.push(personals[0]);
        // console.log(tmp)
        // this.recipe=tmp    
        // console.log(this.recipe)

    //   let {       
    //      title,
    //     readyInMinutes,
    //     image,
    //     vegetarian,
    //     glutenFree,
    //     vegan,
    //     instructions,
    //     ingredients
    //   } = response.data;
    //     console.log(glutenFree)
     // let _instructions = analyzedInstructions;

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

    //   let _recipe = {
    //    instructions,
    //     ingredients,
    //     readyInMinutes,
    //     image,
    //     title,
    //     vegan,
    //     glutenFree,
    //     vegetarian
    //   };
    //   console.log(_recipe)
    //   this.recipe = _recipe;
    //    console.log(this.recipe)
    } catch (error) {
      console.log(error);
    }
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