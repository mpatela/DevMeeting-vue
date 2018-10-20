<template>
  <div>
    <ul>
      <li v-for="p in products" v-bind:key="p.id">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">No products!</p>
	<button v-on:click="removeLast()">Remove last item</button>
  </div>  
</template>

<script>

export default {
  name: "ProductList",
  props: {
    products: {
      type: Array
    }
  },
  methods: {
    removeLast() {
      this.products.pop();
	}
  }
}
</script>
