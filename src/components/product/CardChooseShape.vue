<template>
    <div class="form-group">
        <label for="shape">Papershape</label>
        <select id="shape" class="form-control" :value="shape" @change="chosen">
            <option value="rect">Rectangular</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'CardChooseShape',
        model: {
            prop: 'shape',
            event: 'changed'
        },
        props: ['shape'],
        methods: {
            chosen(e) {
                this.$emit('changed', e.target.value)
            },
        },
    }
</script>
