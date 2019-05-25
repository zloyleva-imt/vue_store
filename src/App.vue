<template>
  <div id="app">
    <Header/>
    <Catalog/>
  </div>
</template>

<script>
import faker from "faker";
import Header from "./components/Header";
import Catalog from "./components/Catalog";

export default {
  name: "app",
  components: {
    Header,
    Catalog
  },
  mounted() {
    setTimeout(() => {
      console.log("Loading products from API...");
      this.$store.commit("setProducts", this.getProducts());
    }, 2000);
  },
  methods: {
    getProducts() {
      return [...Array(10)].map(() => ({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        description: faker.lorem.sentences()
      }));
    }
  }
};
</script>

<style>
</style>
