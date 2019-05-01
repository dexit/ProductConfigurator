<template>
    <div class="form-group">
        <label for="quality">Paperquality</label>
        <div>
            <div class="custom-input inline">
                <input id="normal" type="radio" value="normal" v-model="quality"><label for="normal">Normal</label>
            </div>
            <div class="custom-input inline">
                <input id="extra" type="radio" value="extra" v-model="quality"><label for="extra">Extra</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardChoosePaperquality',
        props: [],
        data () {
            return {
                quality: 'normal'
            }
        },
    }
</script>

<style lang="less" scoped>
input[type=radio] {}

input[type=radio] + label {
    margin-left: 5px;
    margin-right: 20px;
    font-weight: normal;
}
</style>