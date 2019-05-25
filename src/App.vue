<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import faker from "faker";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    setTimeout(() => {
      console.log("Loading products from API...");
      this.$store.commit("setProducts", this.getProducts());
	}, 2000);
	console.log(this.$router);
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
