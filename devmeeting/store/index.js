import axios from 'axios';

const store = {
  state: {
    products: []
  },
  //6/ And methods to update
  async fetchProducts() {
    this.state.products = await axios.get('http://localhost:3000/products').then(res => res.data);
  },
  addProduct(product) {
    this.state.products.push(product);
  }
};

export default store;