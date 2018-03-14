<template>
    <div class="new-invest-news-warp">
        <div class="invest-img-wrap">
            <img src="../../../assets/images/new-invest-news-img.png" alt="">
        </div>
        <p class="invest-title">IDG投资某室内空气治理技术研究科技研发项目</p>
        <div class="invest-info">
           <div class="info-item"><span class="item-name">投资阶段:</span> <span class="item-value">A轮</span></div>
           <div class="info-item"><span class="item-name">投资金额:</span> <span class="item-value">3000W</span></div>
        </div>
    </div>

</template>

<style lang="scss">
    .new-invest-news-warp{
        width: 200px;
        margin-bottom: .5em;
        cursor: pointer;
        margin: 1em auto;
        border: 1px solid #ccc;
        padding: .5em;
        border-radius: 5px;
        .invest-img-wrap{
            width: 180px;
            img{width: 100%}
        }
        .invest-title{
            font-size: 16px;
            margin: .1em 0px .5em 0px;
        }
        .invest-info{
            .info-item{
                display: flex;
                justify-content: flex-start;
                .item-name{
                    margin-right: 1em;
                }
            }

        }


    }


</style>

<script>


    export default {
        name: " ",
        props: {

        },
        components: {},
        data() {
            return {}

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
