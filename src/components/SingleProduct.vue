<template>
    <div class="single-product">
        <div class="row">
            <div class="col-md-12">
                <button class="remove-product-button pull-right"><span class="glyphicon glyphicon-remove-circle"></span></button>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <CardChooseShape />
                <CardChoosePapersize />
                <CardChooseAmount />
                <CardChoosePaperquality />
            </div>
            <div class="col-md-6">
                <CardChooseHeadline />
                <CardChooseMaintext />

                <button class="btn-link pull-right">Clear configuration</button>
            </div>
        </div>
        
    </div>
</template>

<script>
    import CardChooseShape from './product/CardChooseShape'
    import CardChoosePapersize from './product/CardChoosePapersize'
    import CardChooseAmount from './product/CardChooseAmount'
    import CardChoosePaperquality from './product/CardChoosePaperquality'
    import CardChooseHeadline from './product/CardChooseHeadline'
    import CardChooseMaintext from './product/CardChooseMaintext'
    export default {
        name: 'Product',
        components: {
            CardChooseShape,
            CardChoosePapersize,
            CardChooseAmount,
            CardChoosePaperquality,
            CardChooseHeadline,
            CardChooseMaintext,
        },
        props: ['product'],
    }
</script>

<style lang="less" scoped>
.single-product {
    height: 400px;
    padding: 10px 30px 30px 30px;
    border: 1px solid #dcdcdc;
    margin-bottom: 20px;

    .remove-product-button {
        background: none;
        border: none;

        span {
            font-size: 25px;
            color: #aaa;
        }
    }

    .btn-link {
        background: none;
        border: none;
        color: #FF9900;
        text-decoration: underline;
        font-size: 14px;
    }
}
</style>