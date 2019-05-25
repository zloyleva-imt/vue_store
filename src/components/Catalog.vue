<template>
  <b-container class="my-5">
    <b-row>
      <b-col cols="12" v-for="product in products" :key="product.id">
        <b-card :title="product.name" tag="article" class="mb-2">
          <div class="price">${{product.price}}</div>
          <b-card-text>{{product.description}}</b-card-text>

          <b-button href="#" variant="primary">Add to Cart</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Catalog",
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style>
	.price{
		font-weight: bold;
		color: #17a2b8;
	}
</style>
