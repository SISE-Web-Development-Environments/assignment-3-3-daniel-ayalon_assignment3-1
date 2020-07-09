<template>
  <div>
  <!-- <div id="app"> -->
    <!-- <div id="nav"> -->
      <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">main</b-nav-item>
        <b-nav-item to="/about" disabled>About</b-nav-item>
        <b-nav-item to="/search" disabled>search</b-nav-item>
      </b-navbar-nav>
        

      <!-- <b-nav-item href='main'>Home</b-nav-item>
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'PersonalRecipes' }">PersonalRecipes</router-link>|
      <router-link :to="{ name: 'MyFavoriteRecipes' }">FavoriteRecipes</router-link>|
      <router-link :to="{ name: 'FamilyRecipesPage' }">FamilyRecipes</router-link>| -->
      <b-navbar-nav class="ml-auto">
      {{ !$root.store.username }}
      <span v-if="!$root.store.username">
        Guest:
         <b-nav-item  to="/register" >Register</b-nav-item>||
        <b-nav-item  to="/login">Login</b-nav-item>|
       
      </span>
      <span v-else>
        {{ $root.store.username }}: <button @click="Logout">Logout</button>|
      </span>
    <b-nav-item-dropdown  right>
            <template v-slot:button-content>
              <em>Personal</em>
            </template>
            <b-dropdown-item to="/MyFavoriteRecipes">My Favorites</b-dropdown-item>
            <b-dropdown-item to="/PersonalRecipes">My Recipes</b-dropdown-item>
            <b-dropdown-item to="/FamilyRecipesPage">My Family Recipes</b-dropdown-item>
          </b-nav-item-dropdown>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
