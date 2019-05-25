import Vue from 'vue'
import Store from './components/Store.vue'

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const store = new Vuex.Store({
	state:{
		cart:[],
		products:[]
	},
	mutations:{
		setProducts(state, products){
			state.products = products;
		},
		addProductToCart(state, product){
			state.cart = [...state.cart, product];
		}
	},
	actions:{

	}
});

const routes = [
	{ path: '/', component: Store },
  ]

Vue.config.productionTip = false

new Vue({
  render: h => h(Store),
  store,
  routes,
}).$mount('#app')
