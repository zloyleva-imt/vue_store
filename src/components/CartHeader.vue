<template>
	<div class="text-light">
		Cart <span class="badge badge-secondary">{{cartCount}}</span>
	</div>
</template>

<script>
export default {
	name: 'CartHeader',
	computed:{
		cartCount(){
			return this.$store.state.cart.length;
		}
	}
}
</script>

<style>

</style>
