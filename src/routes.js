import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/user/FavoriteRecipes",
    name: "MyFavoriteRecipes",
    component: () => import("./pages/MyFavoriteRecipes"),
  },
  {
    path: "/user/PersonalRecipes",
    name: "PersonalRecipes",
    component: () => import("./pages/PersonalRecipes"),
  },
  {
    path: "/user/myFamilyRecipes",
    name: "FamilyRecipesPage",
    component: () => import("./pages/FamilyRecipesPage"),
  },


  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },


  {
    path: "/About",
    name: "About",
    component: ()=> import("./pages/About"),
  }
];

export default routes;
