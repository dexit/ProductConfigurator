<template>
    <div>
        <ProductList :products="products"/>
        <PriceContainer :price="price"/>
        <ProceedToCheckoutButton />
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import ProductList from './ProductList'
    import PriceContainer from './PriceContainer'
    import ProceedToCheckoutButton from './ProceedToCheckoutButton'
    export default {
        name: 'PostCardConfigurator',
        components: {
            ProductList,
            PriceContainer,
            ProceedToCheckoutButton,
        },
        computed: {
            ...mapState('configurator', {
                products: 'products',
                price: 'price'
            })
        },
        methods: {
            ...mapActions('configurator', [
                'addProduct',
                'removeProduct'
            ])
        },
        mounted() {},
    }
</script>

<style lang="less" scoped>

</style>