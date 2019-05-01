<template>
    <div class="form-group">
        <label for="body">Main text</label>
        <textarea id="body" class="form-control" placeholder="Your text here" v-model="body"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'CardChooseMaintext',
        props: [],
        data() {
            return {
                body: '',
            }
        },
    }
</script>

<style lang="less" scoped>
.form-group {
    margin-bottom: 10px;
}

#body {
    height: 200px;
}
</style>