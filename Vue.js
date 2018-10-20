const app = new Vue({
  el: '#app',
  data: {
	products: [{
	  id: 0,
	  name: 'Coffee'
	}, {
	  id: 1,
	  name: 'Pizza'
	}]
  },
  methods: {        
	removeLast() {
	  this.products.pop();
	}
  }
})