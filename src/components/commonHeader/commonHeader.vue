<style  lang="scss" scoped >

    .dispaly-flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .common-head{
        @extend .dispaly-flex;
        justify-content: space-between;
        width: 100%;
        height: 120px;
        font-size: 18px;
        background: white;
        padding: 0px 2em;
        border: 1px solid #ccc;
        border-radius: 5px;
        position: relative;

    }

    .common-head .icon-warp{
        @extend .dispaly-flex;

    }
    .common-head .nav-warp{
        @extend .dispaly-flex;

    }
    .nav-warp .nav-item{
        cursor: pointer;
        margin: 0px 0.5em;
        height: 25px;

    }
    .active-nav-item{border-bottom: 2px solid red;}
    .login-warp{
        @extend .dispaly-flex;
        font-size: 16px;
        .btn{
            text-align: center;
            border: 1px solid gray;
            border-radius: 5px;
            padding: 2px 1em;
            cursor: pointer
        }
        .sign-in{margin-right: 1em}
    }
    .qrcode-wrap{
        position: fixed;
        bottom:5px;
        left: 0%;
        z-index: 999;
        width: 120px;
        left: 5px;
        .qrcode-content{
            border: 1px solid #ccc;
            padding: 3px;
            border-radius: 5px;
            .qrcode-img{
                width: 100%;
            }
        }

    }

    .other-title{
        position: absolute;
        right: 65px;
        top: 82px;
        font-size: 14px;
        cursor: pointer;
        .btn{
            border:1px solid #ccc;
            padding: 0.2em .5em;
            -webkit-border-radius:5px;
            -moz-border-radius:5px;
            border-radius:5px;
            color: blue;
        }
    }

</style>

<template>
    <div class="common-head-wrap">
        <div class="common-head">

            <div class="icon-warp">
                <img src="../../assets/images/crop-icons.png" alt="">
            </div>
            <div class="nav-warp"  >
                <router-link  :to="{ name:'Home_index'}" tag="div" class="nav-item" active-class="active-nav-item">首页</router-link>
                <router-link  :to="{ name:'Fund_index'}" tag="div" class="nav-item" active-class="active-nav-item">找资金</router-link>
                <router-link  :to="{ name:'Company_index'}" tag="div" class="nav-item" active-class="active-nav-item">找企业</router-link>
                <router-link  :to="{ name:'Service_index'}" tag="div" class="nav-item" active-class="active-nav-item">找服务</router-link>
                <router-link  :to="{ name:'Policy_index'}" tag="div" class="nav-item" active-class="active-nav-item">政策扶持</router-link>
                <router-link  :to="{ name:'Media_index'}"  tag="div" class="nav-item"  active-class="active-nav-item">媒体资讯</router-link>
            </div>
            <div class="login-warp">
                <router-link :to="{name:'Login'}" tag="div" class="sign-in btn"  active-class="active-nav-item">登陆</router-link>
                <router-link :to="{name:'Register'}" tag="div" class="sign-up btn"  active-class="active-nav-item">注册</router-link>

            </div>

            <div class="other-title">
                <router-link :to="{name:'survey'}" tag="div" class="  btn"  >满意度调查</router-link>
            </div>

        </div>

        <div class="qrcode-wrap">
            <div class="qrcode-content">
                <img src="../../assets/images/qrcode.png" alt="" class="qrcode-img">
            </div>
        </div>
    </div>
</template>

<script>



    export default {
        name: "commonHeader",
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
           return {
               activeNavItem:1 //导航激活编号 从1开始
           }

        },
        created() {

        },
        methods: {

        },
        watch: {},
    }
</script>
