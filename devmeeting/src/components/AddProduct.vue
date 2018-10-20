<template>
  <div>
	<form @submit.prevent="addItem()">
      <input
        name="product"
        v-model="newProduct.name"
      >
      <button>Add</button>
	</form>
  </div>
</template>

<script>
import uuid from "uuid/v4";

export default {
  data(){
    return {
      newProduct: {
        name: ''
      }
	}
  },
  methods: {
    addItem() {
      this.$emit('add-product', {
		id: uuid(),
		...this.newProduct
      });
      this.newProduct.name = '';
	}
  }
}
</script>