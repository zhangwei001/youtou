<template>
    <div class="invest-new-item-content">
        <span class="iconfont-financing icons">&#xe62c;</span> <span class="news-title">{{newsData.title}}</span>
    </div>

</template>

<style lang="scss">
    .invest-new-item-content{
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .3em 0px;
        .news-title{
            font-size: 14px;
        }
        .icons{
            display: inline-block;
            font-size: 12px;
            padding: 0.5em 0px;
            margin-right: .5em;
        }
    }

</style>

<script>


    export default {
        name: " ",
        props: {
            newsData: {
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
