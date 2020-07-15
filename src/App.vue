<template>
  <div class="allPage">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Main</b-nav-item>
          <b-nav-item v-if="!$root.store.username" to="/register">Register</b-nav-item>
          <b-nav-item v-if="!$root.store.username" to="/login">Login</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/search">search</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="$root.store.username" right>
            <template v-slot:button-content>
              <em>Personal</em>
            </template>
            <b-dropdown-item to="/FavoriteRecipes">My Favorites</b-dropdown-item>
            <b-dropdown-item to="/PersonalRecipes">My Recipes</b-dropdown-item>
            <b-dropdown-item to="/myFamilyRecipes">My Family Recipes</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-if="$root.store.username " @click="Logout">Log out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view id="app" />
  </div>
</template>

<script >
import MainPageVue from "./pages/MainPage.vue";
export default {
  name: "App",
  data() {
    return {
      // cookie: false,
      inMain: false
    };
  },
  mounted() {
    // this.checkCookie();
    this.checkMain();
  },
  methods: {
    checkMain() {
      if ("/" == this.$router.currentRoute.path)
        this.inMain = this.$router.currentRoute.path;
    },
    // checkCookie() {
    //   this.cookie = window.$cookies.isKey("session");
      
    // },
    Logout() {
      this.$root.store.logout();
      console.log("app");
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
  color: black;
  min-height: 100vh;
}

.allPage {
  background-image: url("../src/images/cuttingBoard.jpg");
  height: 100%; /* You must set a specified height */
  width: 100%;
  background-repeat: round; /* Do not repeat the image */
}
</style>
