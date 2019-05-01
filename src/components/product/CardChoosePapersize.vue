<template>
    <div class="form-group">
        <label for="size">Papersize</label>
        <select id="size" class="form-control" v-model="size">
            <option value="a4">A4</option>
            <option value="a5">A5</option>
            <option value="a6">A6</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'CardChoosePapersize',
        props: [],
        data() {
            return {
                size: 'a4'
            }
        },
    }
</script>

<style lang="less" scoped>

</style>