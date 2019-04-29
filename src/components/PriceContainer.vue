<template>
    <div>
        Price &euro; {{ price }}
    </div>
</template>

<script>
    export default {
        name: 'Price',
        props: ['price'],
    }
</script>

<style lang="less" scoped>

</style>