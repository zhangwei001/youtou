<template>
    <div class="register-page-warp">
        <div class="login-img">
            <img src="../../assets/images/login-icon.png" alt="">
        </div>
        <div class="name-warp input-item">
            <span class="text">用户名</span>
            <div class="user-name">
                <Input v-model="userName" placeholder="请输入用户名" style="width: 300px"></Input>
            </div>
        </div>
        <div class="phone-wrap input-item">
            <span class="text">手机号</span>
            <div class="phone-verification-wrap">
                <div class="user-phone">
                    <Input v-model="phoneumber" placeholder="请输入手机号" style="width: 200px"></Input>
                </div>
                <div class="get-verification">
                    <Button type="primary" :loading="isGetVerification" @click="toLogin" size="large" >
                        <span v-if="!isGetVerification">获取验证码</span>
                        <span v-else>获取验中</span>
                    </Button>
                </div>
            </div>


        </div>
        <div class="verification-wrap input-item">
            <span class="text">验证码</span>
            <div class="user-verification">
                <Input v-model="verificationCode" placeholder="请输入验证码" style="width: 300px"></Input>
            </div>
        </div>

        <div class="password-wrap input-item">
            <span class="text">密码</span>
            <div class="user-password">
                <Input v-model="password" placeholder="请输入密码" style="width: 300px"></Input>
            </div>
        </div>

        <div class="input-item role-warp">
            <span class="text">角色</span>
            <div class="user-role">
                <RadioGroup v-model="userRole">
                    <Radio label="1">投资者</Radio>
                    <Radio label="2">投资者</Radio>
                    <Radio label="3">服务机构</Radio>
                </RadioGroup>

            </div>

        </div>
        <div class="user-protocol input-item">
            <div class="agree-checkbox">
                <Checkbox v-model="isAgree">
                    <span>同意</span><span class="server-protocol">平台服务协议</span>
                </Checkbox>
            </div>
        </div>


        <div class="btn-wrap">
            <div class="login-wrap">
                <Button type="primary" :loading="isRegister" @click="toLogin" size="large" >
                    <span v-if="!isRegister">注册</span>
                    <span v-else>注册中</span>
                </Button>
            </div>

        </div>

        <div class="has-accout input-item">
            <span>已有账号，去</span> <router-link :to="{name:'Login'}" tag="span" class="sign-in "   >登陆</router-link>
        </div>


    </div>

</template>

<style lang="scss">
    .register-page-warp{
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
        .input-item{padding: 1em 0px;}
        .name-warp{}

        .phone-wrap{
            padding: 0.5em 0px;
            .phone-verification-wrap{
                display: flex;
                justify-content:space-around;
                align-items: center;
            }
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
        .has-accout{
            text-align: center;
            .sign-in{
                cursor: pointer;
                color: #2D8CF0;
            }
        }
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
                isRegister:false,
                isGetVerification:false,//获取验证码
                userName:"",
                phoneumber:"",
                verificationCode:"",
                password:"",
                userRole:"",
                isAgree:false


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
