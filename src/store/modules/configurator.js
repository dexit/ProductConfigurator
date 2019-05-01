const uuidv4 = require('uuid/v4')
const state = {
    products: [
        {
            id: uuidv4(),
            config: {
                heading: 'A fancy headline',
                body: 'lorem ipsum amit set dolores. Help!',
                amount: 20,
                shape: 'portrait', // other options: 'portrait'/'landscape'
                size: 'a5', // other options: 'a5'/'a6'
                quality: 'extra' // other option 'extra'
            },
        }
    ],
    price: 1.50, // base price
}
const actions = {
    addProduct({commit}) {
        commit('addProductMut')
        commit('updatePriceMut')
    },
    removeProduct({commit}, index) {
        commit('removeProductMut', index)
        commit('updatePriceMut')
    },
    addToCart({commit}) {
        commit('addToCartMut')
    },
    updatePrice({commit}) {
        commit('updatePriceMut')
    },
}
const mutations = {
    addProductMut(state) {
        state.products.push({
            id: uuidv4(),
            config: {
                heading: '',
                body: '',
                amount: 1,
                shape: 'rect',
                size: 'a4',
                quality: 'normal',
            }
        })
    },
    removeProductMut(state, index) {
        state.products.splice(index, 1)
    },
    addToCartMut(state) {
        // reset state?
        console.log('addToCart mutation does nothing')
    },
    updatePriceMut(state) {
        state.price = state.products.reduce((previous, product) => previous + productPrice(product), 0)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
} 

const productPrice = ({config}) => {
    let price = 1.50
    if (config.size === 'a5') {
        price = 1.0
    } else if (config.size === 'a6') {
        price = 0.75
    }
    if (config.quality === 'extra') {
        price *= 1.25
    }
    return price * config.amount
}