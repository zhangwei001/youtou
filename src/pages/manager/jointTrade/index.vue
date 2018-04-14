<template>
    <div class="joint-trade">
         <div class="head-nav-wrap nav-list">
             <router-link  :to="{name:'orgOffer'  }" tag="div" class="nav-item" active-class="active-nav-item">机构邀约</router-link>
             <router-link  :to="{name:'orgDeliver' }" tag="div" class="nav-item" active-class="active-nav-item">企业投递</router-link>
             <router-link  :to="{name:'orgFeedback' }" tag="div" class="nav-item" active-class="active-nav-item">机构反馈</router-link>
             <router-link  :to="{name:'materialAdd'  }" tag="div" class="nav-item" active-class="active-nav-item">资料补充</router-link>
             <router-link  :to="{name:'orgCheck'  }" tag="div" class="nav-item" active-class="active-nav-item">机构审核</router-link>
         </div>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>

</template>

<style lang="scss">
    .joint-trade{
        .head-nav-wrap{
            margin-top: 1em;
            display: flex;
            justify-content: space-between;
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
        name: "jointTrade",
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
