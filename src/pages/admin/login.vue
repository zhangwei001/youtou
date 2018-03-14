<template>
    <div class="login-page-warp">
        <div class="login-img">
            <img src="../../assets/images/login-icon.png" alt="">
        </div>
        <div class="name-warp">
            <span class="text">用户名</span>
            <div class="user-name">
                <Input v-model="userName" placeholder="请输入用户名" style="width: 300px"></Input>
            </div>
        </div>
        <div class="passWord-wrap">
            <span class="text">密码</span>
            <div class="user-name">
                <Input v-model="passWord" placeholder="请输入密码" style="width: 300px"></Input>
            </div>
        </div>
        <div class="btn-wrap">
            <div class="login-wrap">
                <Button type="primary" :loading="isLogin" @click="toLogin" size="large" >
                    <span v-if="!isLogin">登陆</span>
                    <span v-else>登陆中</span>
                </Button>
            </div>
            <div class="register">
                <Button type="primary" :loading="loading" @click="toRegister" size="large" >注册</Button>
            </div>
        </div>

    </div>

</template>

<style lang="scss">
    .login-page-warp{
        width: 390px;
        margin: 1em auto;
        padding: 2em 3em;
        border:1px solid #ccc;
        -webkit-border-radius:5px;
        -moz-border-radius:5px;
        border-radius:5px;
        background: white;

        .login-img{
            width: 300px;
            text-align: center;
            img{
                width: 60%;
            }
        }
        .name-warp{
            padding: 1em 0px;

        }
        .passWord-wrap{
            padding: 1em 0px;
        }
        .btn-wrap{
            display: flex;
            justify-content: space-around;
            align-self:center;
            width:60%;
            margin: 0px auto;
        }
        .text{font-size: 16px;}
    }

</style>

<script>


    export default {
        name: " ",
        props: {

        },
        components: {},
        data() {
            return {
                isLogin:false

            }

        },
        created() {

        },
        methods: {
            toRegister(){

            },
            toLogin(){
                this.isLogin = true;

            }
        },
        watch: {},
    }
</script>
