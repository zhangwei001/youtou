<template>
    <div>
        <div class="user-center-wrap">
            <div class="left-wrap">
                <div class="user-info-wrap" @click="goUserHome">
                    <div class="img-wrap"> <p class="iconfont-financing icons">&#xe678;</p></div>
                    <p class="plate-type">个人中心</p>
                    <p class="plate-name">平台管理</p>
                </div>
                <div class="nav-list"  >
                    <router-link  :to="{name:'authCheck_index'  }" tag="div" class="nav-item" active-class="active-nav-item">资质审核</router-link>
                    <router-link  :to="{ name:'jointTrade_index' }" tag="div" class="nav-item" active-class="active-nav-item">投融对接</router-link>
                    <router-link  :to="{ name:'jointServer_index' }" tag="div" class="nav-item" active-class="active-nav-item">服务对接</router-link>
                    <router-link  :to="{name:'plateServer_index'  }" tag="div" class="nav-item" active-class="active-nav-item">平台服务</router-link>
                    <router-link  :to="{name:'postMessage_index'  }" tag="div" class="nav-item" active-class="active-nav-item">信息发布</router-link>
                    <router-link  :to="{name:'userManager_index'  }" tag="div" class="nav-item" active-class="active-nav-item">用户管理</router-link>
                    <router-link  :to="{name:'adManager_index'  }" tag="div" class="nav-item" active-class="active-nav-item">广告管理</router-link>

                </div>


            </div>
            <div class="right-wrap">
                <router-view ></router-view>

            </div>
        </div>
        <div class="foot-wrap">
            <comm-foot ></comm-foot>
        </div>
    </div>


</template>

<style lang="scss">
    .user-center-wrap{
        display: flex;
        justify-content: space-between;

        .left-wrap{
            width: 200px;
            margin: 1em;
            .user-info-wrap{
                cursor: pointer;
                border: 1px solid #ccc;
                margin: 0px auto;

                background: white;
                display: inline-flex;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                width: inherit;
                align-items: center;
                padding: 1em;

                .img-wrap{
                    width: 80px;
                    height: 80px;
                    text-align: center;
                    display: -ms-inline-flexbox;
                    display: inline-flex;
                    border: 1px solid #ccc;
                    border-radius: 51px;
                    justify-content: center;
                    .icons{
                        font-size: 50px;

                    }
                }
                .plate-type{
                    font-size: 18px;
                    line-height: 2em;
                }
                .plate-name{
                    font-size: 14px;
                    opacity: 0.7;

                }
            }

            .active-nav-item{ background: #ccc;}

            .nav-list{
                border: 1px solid #ccc;
                background: white;
                border: 1em;
                .nav-item{
                    cursor: pointer;
                    font-size: 16px;
                    text-align: center;
                    padding: .4em 2em;
                    margin: .5em 0px;

                }
            }
        }
        .right-wrap{
            flex: 1;
            padding-right: 1em;

        }

    }
</style>

<script>
    import { mapState } from 'Vuex'
    import { mapMutations } from 'vuex'
    import newCheckIn  from "./userCenterChild/newCheckIn/newCheckIn.vue"
    import  commFoot from   "components/commomComponent/commFoot/index.js"
    export default {
        name: "userCenter",
        props: {

        },
        components: {
            newCheckIn,
            commFoot
        },
        data() {
            return {

            }

        },
        watch: {

        },
        computed:{
            ...mapState("common",['isShowUserCenterHomePage'])
        },
        created() {


        },
        methods: {
            goUserHome(){
                this.$router.push({name:"userHome"})
            }

        },
        watch: {},
    }
</script>
