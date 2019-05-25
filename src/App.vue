<template>
  <div id="app">
	  <Header/>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  },
  mounted(){
	  setTimeout(() => {
		  console.log("Loading products from API...");
			this.$store.commit('setProducts', []);
	  }, 2000);
  },
  methods:{

  }
}
</script>

<style>

</style>
