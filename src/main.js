import Vue from 'vue';
import App from './App.vue';
import Catalog from './components/Catalog.vue';
import Cart from './components/Cart.vue';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const store = new Vuex.Store({
	state: {
		cart: [],
		products: []
	},
	mutations: {
		setProducts(state, products) {
			state.products = products;
		},
		addProductToCart(state, product) {
			state.cart = [...state.cart, product];
		}
	},
	actions: {

	}
});

const routes = [
	{ path: '/', name:'catalog', component: Catalog },
	{ path: '/cart', name:'cart', component: Cart },
];

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	store,
	router,
}).$mount('#app')
