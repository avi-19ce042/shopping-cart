import { createStore } from 'vuex'
import shop from '@/api/shop'
// import vue from 'vue'

// vue.use(Vuex)

const store = createStore({

    state: {
        products: []
    },

    getters: {
        // availableProducts (state, getters){
            
        //     return state.products.filter(product => product.inventory > 0)
            
        // }
    },

    actions: {
        // make a call
        //run setProduct mutation
            fetchProducts({commit}){
                
                shop.getProducts(products => {
                    commit('setProducts', products)
                 })
            }

            // addToCart (context, product) {
            //     if (product.inventory > 0) {
            //          context.commit('pushProductoCrt', product)
            //     } else {

            //     }
            // }
    },

    mutation: {
        //responsible for single state change

        setProducts (state, products) {    
            state.products = products
        }
    }

})

export default store;