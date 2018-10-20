<template>
  <div id="app">
    <h2>My list</h2>
    <product-list :products="products"></product-list>
	<add-product @add-product="onAddProduct"></add-product>	
  </div>
</template>

<script>
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

export default {
  name: 'app',
  components: {
    ProductList,
	AddProduct
  },
  data() {
  return {
    products: [{
      id: 0,
      name: 'Coffee'
	},{
      id: 1,
      name: 'Pizza'
	}],
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
