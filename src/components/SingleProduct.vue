<template>
    <div>
        Single product {{ product.id }}
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: ['product'],
    }
</script>

<style lang="less" scoped>

</style>