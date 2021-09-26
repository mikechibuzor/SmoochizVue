import { createStore } from "vuex";
import productsModules from "./modules/products/products.js";
import categoriesModules from "./modules/categories/categories.js";
import latestProductsModules from "./modules/latestproducts/latestproducts.js";
import carouselModules from "./modules/carousel/carousel.js";

const store = createStore({
  modules: {
    products: productsModules,
    categories: categoriesModules,
    latestProducts: latestProductsModules,
    carousel: carouselModules,
  },
});

export default store;
