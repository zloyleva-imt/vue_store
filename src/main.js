import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vuex from 'vuex';

Vue.use(Vuex);

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
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
