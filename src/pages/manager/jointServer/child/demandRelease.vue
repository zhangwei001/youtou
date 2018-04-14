<template>
    <div class="demand-release-wrap">
        <div class="head-wrap">
            <p class="first">融资企业及投资机构</p>
            <p class="secnd">投递时间</p>
            <p class="third">申请服务</p>
            <p class="four">操作</p>
        </div>
        <div class="content-wrap">
            <div class="item-content-wrap">
                <fund-org></fund-org>
                <fund-org></fund-org>
                <fund-org></fund-org>
            </div>

        </div>
    </div>

</template>

<style lang="scss">
    .demand-release-wrap{
        background: white;
        margin-top: 1em;
        .head-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            text-align: center;
            padding: .5em 0px;
            border-bottom: 1px solid #ccc;
            .first{
                width: 30%;
            }
            .secnd,.third{width: 25%}
            .four{width: 20%}

        }
    }
</style>

<script>
    import fundOrg from "./components/fundOrg"



    export default {
        name: "demandRelease",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {fundOrg},
        data() {
            return {}

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
