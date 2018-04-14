<template>
    <div class="joint-server">
        <div class="head-nav-wrap nav-list">
            <router-link  :to="{name:'demandRelease'  }" tag="div" class="nav-item" active-class="active-nav-item">需求发布</router-link>
            <router-link  :to="{name:'orgTender' }" tag="div" class="nav-item" active-class="active-nav-item">机构竞标</router-link>
        </div>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>

</template>

<style lang="scss">
    .joint-server{
        .head-nav-wrap{
            margin-top: 1em;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border: 1px solid #ccc;
            background: white;
            border: 1em;
            padding: 1em;
            .nav-item{
                cursor: pointer;
                font-size: 16px;
                text-align: center;
                padding: .4em 2em;
                margin: .5em 0px;

            }
            .active-nav-item{background: #ccc;}
        }
        .content-wrap{

        }
    }

</style>

<script>


    export default {
        name: "jointServer",
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
