<template>
    <div class="form-group">
        <label for="quality">Paperquality</label>
        <div>
            <div class="custom-input inline">
                <input id="normal" type="radio" value="normal" :checked="quality === 'normal'" @change="chosen"><label for="normal">Normal</label>
            </div>
            <div class="custom-input inline">
                <input id="extra" type="radio" value="extra" :checked="quality === 'extra'" @change="chosen"><label for="extra">Extra</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardChoosePaperquality',
        model: {
            prop: 'quality',
            event: 'chosen'
        },
        props: ['quality'],
        methods: {
            chosen(e) {
                this.$emit('chosen', e.target.value)
            },
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