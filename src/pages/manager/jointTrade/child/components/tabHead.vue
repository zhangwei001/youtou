<template>
    <div class="tab-had-warp">
        <p class="frist">融资企业及投资机构</p>
        <p class="time">补充时间</p>
        <p>匹配度</p>
        <p>补充资料</p>
        <p>操作</p>
    </div>

</template>

<style lang="scss">
    .tab-had-warp{
        display: flex;
        justify-content: space-between;
        background: white;
        margin: .5em 0px;
        padding: 1em;
        text-align: center;
        .frist{
            width: 320px;
        }
        .time{width: 100px}
    }

</style>

<script>


    export default {
        name: "tabHead",
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
