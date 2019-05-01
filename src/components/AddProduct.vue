<template>
    <div id="add-cart">
        <button class="btn btn-secondary">+ Add another card</button>
    </div>
</template>

<script>
    export default {
        name: 'addProduct',
    }
</script>

<style lang="less" scoped>
#add-cart {
    position: relative;
    height: 200px;
    border: 1px dashed #dcdcdc;
    margin-bottom: 20px;
}

.btn-secondary {
    position: relative;
    display: block;
    background: #6AA84F;
    border: 1px solid #578b41;
    width: 180px;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    margin-top: -17px;
    color: white;
    font-weight: bold;
}
</style>