<template>
    <div>
        <SingleProduct v-for="product in products" :key="product.id" :product="product"/>
        <AddProduct />
    </div>
</template>

<script>
    import SingleProduct from './SingleProduct'
    import AddProduct from './AddProduct'
    export default {
        name: 'ProductList',
        props: ['products'],
        components: {
            SingleProduct,
            AddProduct,
        },
    }
</script>

<style lang="less" scoped>

</style>