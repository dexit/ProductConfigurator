<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <SingleProduct v-for="product in products" :key="product.id" v-model="product.config" @product-updated="notifyParent"/>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <AddProduct />
            </div>
        </div>
        
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
        methods: {
            notifyParent() {
                this.$emit('update-price')
            },
        },
    }
</script>

<style lang="less" scoped>

</style>