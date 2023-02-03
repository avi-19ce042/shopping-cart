<template>
  <div>
    <h1>Product List</h1>
    <ul>
        <li v-for="product in products" :key="product.id">{{ product.title }} - {{  product.price }}</li>
    </ul>
  </div>
</template>

<script>
// import shop from '@/api/shop';
import store from '@/store/store'

export default {
computed: {
    products() {
        return store.state.products     
    }
},

created () {
    store.dispatch('fetchProducts', {
        product: []
    })
}
}
</script>

<style>

</style>