<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">VueStore</b-navbar-brand>

      <CartHeader/>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link" :to="{name: 'catalog'}">Catalog</router-link>
          <router-link class="nav-link" :to="{name: 'cart'}">Cart</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import CartHeader from "./CartHeader";
export default {
  name: "Header",
  components: {
    CartHeader
  }
};
</script>

<style>
</style>
