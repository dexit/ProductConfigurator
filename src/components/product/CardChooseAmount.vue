<template>
    <div class="form-group">
        <label for="amount">Amount</label>
        <input id="amount" class="form-control" type="number" min=100 max=1000 step=100 v-model="amount">
    </div>
</template>

<script>
    export default {
        name: 'CardChooseAmount',
        props: [],
        data() {
            return {
                amount: 100,
            }
        },
    }
</script>

<style lang="less" scoped>

</style>