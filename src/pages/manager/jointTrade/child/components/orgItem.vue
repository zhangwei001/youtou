<template>
    <div class="org-item">
        <div class="org-base-info">
            <div class="org-img">
                <img src="../../../../../assets/images/fund-org-img.png" alt="">
            </div>
            <div class=""  >

            </div>
            <div class="org-logo">
                <img src="../../../../../assets/images/fund-org-img.png" alt="">
            </div>

        </div>
        <div class="time">
            <p>2017-08-25</p>
        </div>
        <div class="pecent-num">
            <p>75%</p>
        </div>
        <div class="material-query">
            <p>查询</p>
        </div>
        <div class="operate-btn-wrap">
            <p>投递</p>
            <p>驳回</p>

        </div>

    </div>

</template>

<style lang="scss">
    .org-item{
        display: flex;
        justify-content: space-between;
        background: white;
        align-items: center;
        margin: .5em 0px;
        padding: 1em;
        .org-base-info{
            display: flex;
            justify-content: space-between;
            width: 320px;
        }
        .time{
            width: 80px;
        }
    }

</style>

<script>

    export default {
        name: "orgItem",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {
        },
        data() {
            return {}

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
