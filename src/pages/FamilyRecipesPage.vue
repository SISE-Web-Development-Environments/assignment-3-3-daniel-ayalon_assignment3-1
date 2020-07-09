<template>
 
  <b-container>
    <br>
    <h3 >
     
      <slot></slot>
    </h3>
    <b-col>
      <b-row v-for="r in FamilyRecipes" :key="r.id">
        <RecipeFamilyPreview class="RecipeFamilyPreview" :recipe="r" />
      </b-row>
      <br>
    </b-col>
    
    <br>
  </b-container>
  
</template>


    <script>
       import RecipeFamilyPreview from "../components/RecipeFamilyPreview.vue";
        export default {
            //  name: "FamilyRecipes",
  components: {
    RecipeFamilyPreview
  },
    data(){
        return{ 
           FamilyRecipes: null
    }
    },
 mounted() {
    this.showRecipes();
 },
    
    methods: {
    async showRecipes(){
        try {
        this.axios.defaults.withCredentials=true;
        const response = await this.axios.get(
          "http://localhost:3000/user/myFamilyRecipes"
        );
         const FamRecipes = response.data;
        //  this.FamilyRecipes=[];
        //  var i=0;
        //  while(i<response.length){
      //    let {
      //   recipeName,
      //   aouther,
      //   vegetarian,
      //   timeThatUsed,
      //   products,
      //   image,
      //   Instrutions,
       
      // } = response.data.recipes[i];
      
      
      // let _recipe = {
      //   recipeName,
      //   aouther,
      //   vegetarian,
      //   timeThatUsed,
      //   products,
      //   image,
      //   Instrutions,
      // };

      // this.FamilyRecipes.push(response.data[i])
      // i++
      //    }
        this.FamilyRecipes = [];
        this.FamilyRecipes.push(...FamRecipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>
<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>