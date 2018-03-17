<template>
    <div>
        <div class="user-center-wrap">
            <div class="left-wrap">
                <div class="user-info-wrap">
                    <div class="img-wrap"> <p class="iconfont-financing icons">&#xe678;</p></div>
                    <p class="plate-type">个人中心</p>
                    <p class="plate-name">平台管理</p>
                </div>
                <div class="nav-list" @click="userCenterNavHandle">
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
                <div class="user-home" v-if="isShowUserCenterHomePage">
                    <div class="main-info">
                        <div class="img-wrap">
                            <img src="../../../src/assets/images/user-center-main.png" alt="">
                        </div>
                        <div class="info-content">
                            <div class="info-item">
                                <div class="item-title">融资企业</div> <div class="item-value">5</div>
                            </div>
                            <div class="line"></div>
                            <div class="info-item  ">
                                <div class="item-title">投资机构</div> <div class="item-value">10</div>
                            </div>
                            <div class="line"></div>
                            <div class="info-item">
                                <div class="item-title">服务机构</div> <div class="item-value">2</div>
                            </div>

                        </div>

                    </div>

                    <div class="new-check-in-wrap">
                        <div class="title">最新入驻</div>
                        <new-check-in></new-check-in>
                        <new-check-in></new-check-in>
                        <new-check-in></new-check-in>
                    </div>

                    <div class="fund-invest-manager-wrap">
                        <div class="fund-manager-wrap">
                            <div class="fund-content-title">
                                <span class="title-text">服务机构管理</span>
                                <span class="more">更多</span>
                            </div>

                            <div class="fund-manager-content">
                                <p class="fund-manger-item">【注册审核】**服务机构</p>
                                <p class="fund-manger-item">【注册审核】**服务机构</p>
                                <p class="fund-manger-item">【注册审核】**服务机构</p>
                                <p class="fund-manger-item">【注册审核】**服务机构</p>
                                <p class="fund-manger-item">【注册审核】**服务机构</p>
                                <p class="fund-manger-item">【注册审核】**服务机构</p>

                            </div>
                        </div>
                        <div class="invest-manager-wrap">
                            <div class="fund-content-title">
                                <span class="title-text">服务机构管理</span>
                                <span class="more">更多</span>
                            </div>
                            <div class="invest-manager-content">
                                <p class="invest-manager-item">【扶持政策】关于全国互联网政务服务企业情况简介</p>
                                <p class="invest-manager-item">【扶持政策】关于全国互联网政务服务企业情况简介</p>
                                <p class="invest-manager-item">【扶持政策】关于全国互联网政务服务企业情况简介</p>
                                <p class="invest-manager-item">【扶持政策】关于全国互联网政务服务企业情况简介</p>
                            </div>

                        </div>
                    </div>

                </div>
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
            .user-home{
                margin-top: 1em;
                .main-info{
                    border: 1px solid #ccc;

                    padding: 1em;
                    -webkit-border-radius:5px;
                    -moz-border-radius:5px;
                    border-radius:5px;
                    background: white;
                    .img-wrap{
                        img{
                            width: 100%;
                        }
                    }
                    .info-content{
                        margin-top: 1em;
                        display: flex;
                        justify-content: space-around;
                        padding: 1em;

                        border-top-color: #ccc;
                        border-top-style: solid;
                        border-top-width: 1px;
                        .info-item{
                            padding: .5em;
                            display: flex;
                            align-items: center;
                            font-size: 18px;
                            cursor: pointer;
                            .item-value{  color: #ea5413 }
                            .item-title{ padding-right: 1em; }
                        }
                        .line{
                            border: 1px solid #ccc;
                        }

                    }
                }

                .new-check-in-wrap{
                    border: 1px solid #ccc;
                    padding: 1em;
                    -webkit-border-radius:5px;
                    -moz-border-radius:5px;
                    border-radius:5px;
                    background: white;
                    .title{
                        font-size: 18px;
                        line-height: 2em;
                        height: 2em;
                        border-bottom-color: #ccc;
                        border-bottom-style: solid;
                        border-bottom-width: 1px;
                    }

                }

                .fund-invest-manager-wrap{
                    display: flex;
                    justify-content: space-between;


                    .fund-manager-wrap{
                        padding: 1em;
                        width: 50%;
                        background: white;
                        margin: 1em 1em 1em 0px;

                        .fund-content-title{
                            display: flex;
                            justify-content: space-between;
                            border-bottom-color: #ccc;
                            border-bottom-style: solid;
                            border-bottom-width: 1px;
                            padding: 1em 0px;
                            .title-text{
                                font-size: 16px;
                            }
                            .more{
                                color: rgba(117, 96, 218, 0.84);
                                cursor: pointer;
                            }
                        }
                        .fund-manager-content{
                            .fund-manger-item{
                                cursor: pointer;
                                margin: .6em 0px;
                                border-bottom-color: #ccc;
                                border-bottom-style: solid;
                                border-bottom-width: 1px;
                                padding: 1em 0px;
                            }
                        }
                    }
                    .invest-manager-wrap{
                        padding: 1em;
                        width: 50%;
                        background: white;
                        margin: 1em 0em 1em 0px;
                        .fund-content-title{
                            display: flex;
                            justify-content: space-between;
                            border-bottom-color: #ccc;
                            border-bottom-style: solid;
                            border-bottom-width: 1px;
                            padding: 1em 0px;
                            .title-text{
                                font-size: 16px;

                            }
                            .more{
                                color: rgba(117, 96, 218, 0.84);
                                cursor: pointer;
                            }
                        }
                        .invest-manager-content{
                            .invest-manager-item{
                                cursor: pointer;
                                margin: .6em 0px;
                                border-bottom-color: #ccc;
                                border-bottom-style: solid;
                                border-bottom-width: 1px;
                                padding: 1em 0px;
                            }
                        }

                    }
                }
            }
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
         ...mapMutations("common",["userCenterNavHandle"]),
        },
        watch: {},
    }
</script>
