<template>
    <div id="price">
        Price: &euro; {{ price }}
    </div>
</template>

<script>
    export default {
        name: 'Price',
        props: ['price'],
    }
</script>

<style lang="less" scoped>
    #price {
        font-size: 20px;
        font-weight: bold;
    }
</style>