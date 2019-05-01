<template>
    <div class="form-group">
        <label for="headline">Headline</label>
        <input id="headline" class="form-control" type="text" placeholder="Your headline" v-model="headline">
    </div>
</template>

<script>
    export default {
        name: 'CardChooseHeadline',
        props: [],
        data() {
            return {
                headline: '',
            }
        },
    }
</script>

<style lang="less" scoped>

</style>