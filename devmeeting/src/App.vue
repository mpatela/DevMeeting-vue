<template>
  <div id="app">
    <h2>My list</h2>
    <product-list :products="sharedState.products"></product-list>
	<add-product @add-product="onAddProduct"></add-product>	
  </div>
</template>

<script>

import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import store from '../store';

export default {
  name: 'app',
  components: {
    ProductList,
	AddProduct
  },
  created() {
    store.fetchProducts();
  },
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {        
	onAddProduct(product) {
      store.addProduct(product);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
