<template>
  <div id="app">
    <h2>My list</h2>
    <product-list :products="products"></product-list>
	<add-product @add-product="onAddProduct"></add-product>	
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

export default {
  name: 'app',
  components: {
    ProductList,
	AddProduct
  },
  async created() {
    this.products = await axios.get('http://localhost:3000/products').then(res => res.data);
  },
  data() {
  return {
      products: [],
	}
  },
  methods: {        
	onAddProduct(product) {
      this.products.push(product);
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
