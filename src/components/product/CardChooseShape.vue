<template>
    <div class="form-group">
        <label for="shape">Papershape</label>
        <select id="shape" class="form-control" v-model="shape">
            <option value="rect">Rectangular</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'CardChooseShape',
        props: [],
        data() {
            return {
                shape: 'rect',
            }
        },
    }
</script>

<style lang="less" scoped>

</style>