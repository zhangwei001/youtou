<template>
    <div class="media-news-content">
        <div class="new-img-content">
            <img src="/web/static/src/assets/images/media-news-item.png" alt="">
        </div>
        <div class="new-info-content">

            <div class="new-title">环保产业冉冉升起，优秀企业屡获投资</div>
            <div class="new-details">
                为摸清全国互联网政务服务平台现状，推动提升政务服务质量和实效，
                切实便利企业群众办事创业，经国务院同意，国务院办公厅近期对全国互联网政务服务平台进行了检查。
                现将有关情况通报如下：
            </div>
            <div class="new-other-info">
                <div class="read-num"><span>阅读（</span> <span>789</span> <span> )</span></div>
                <div class="field">环保、专利、融资</div>
                <div class="date">2017-10-30</div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    .media-news-content{
        display: flex;
        justify-content: flex-start;
        padding: 1em;
        .new-img-content{
            margin-right: 1em;
            img{width: 100%}
        }

        .new-info-content{
            flex: 1;
            .new-title{
                font-size: 16px;
                font-weight: 600;
            }
            .new-details{
                margin: .5em 0px;
            }
            .new-other-info{
                display: flex;
                .read-num,.field{margin-right: 3em}
            }
        }



    }

</style>

<script>


    export default {
        name: "mediaNews",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
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
