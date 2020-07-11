<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Main</b-nav-item>
          <b-nav-item to="/register">Register</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/about" >About</b-nav-item>
          <b-nav-item to="/search" >search</b-nav-item>
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
          <b-nav-item v-if="$root.store.username" @click="Logout" to="/">Log out</b-nav-item>
          <!-- <b-nav-item disabled>
            <span v-if="!$root.store.username" class="isConnecting">
              <strong style="color:black">Guest</strong>
            </span>

            <span v-else>
              <strong style="color:black">{{$root.store.username}}</strong>
              <button id="logOutBtn" @click="Logout">
                <Strong>Logout</Strong>
              </button>
            </span>
          </b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
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

#isConnecting {
  color: red;
}
#logOutBtn {
  margin-left: 10px;
  transition-duration: 0.4s;
  background-color: black;
  color: whitesmoke;
  padding: 10px;
  border-radius: 100%;
}
</style>
