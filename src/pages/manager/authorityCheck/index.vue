<template>
    <div class="auth-cheack-wrap">
        <div class="auth-check-title">
            <img src="../../../../src/assets/images/user-center-main.png" alt="">
        </div>

        <div class="auth-check-content">
            <div class="nav-content">
                <p>待审核</p>
                <p>审核通过</p>
            </div>
            <div class="auth-items-content">
                <div class="auth-items-title">
                    <p class="title-name">公司</p>
                    <p class="title-name">公司类型</p>
                    <p class="title-name">时间</p>
                    <p class="title-name">操作</p>
                </div>
                <div class="auth-content-item">
                    <div class="content-item">【资质审核】**企业</div>
                    <div class="content-item">融资企业</div>
                    <div class="content-item">2017-12-11</div>
                    <div class="content-item">
                        <div class="look-in btn">查看</div>
                        <div class="check-in btn">审核</div>
                    </div>
                </div>
                <div class="auth-content-item">
                    <div class="content-item">【资质审核】**企业</div>
                    <div class="content-item">融资企业</div>
                    <div class="content-item">2017-12-11</div>
                    <div class="content-item">
                        <div class="look-in btn">查看</div>
                        <div class="check-in btn">审核</div>
                    </div>
                </div>
                <div class="auth-content-item">
                    <div class="content-item">【资质审核】**企业</div>
                    <div class="content-item">融资企业</div>
                    <div class="content-item">2017-12-11</div>
                    <div class="content-item">
                        <div class="look-in btn">查看</div>
                        <div class="check-in btn">审核</div>
                    </div>
                </div>

            </div>

        </div>
    </div>



</template>

<style lang="scss">
    .auth-cheack-wrap{
        .auth-check-title{
            background: white;
            margin-top: 1em;
            border: 1px solid #ccc;
            -webkit-border-radius:5px;
            -moz-border-radius:5px;
            border-radius:5px;
            padding: .7em;
            img{width: 100%}
        }
        .auth-check-content{
            background: white;
            margin-top: 1em;
            border: 1px solid #ccc;
            -webkit-border-radius:5px;
            -moz-border-radius:5px;
            border-radius:5px;
            padding: 1em;

            .nav-content{
                font-size: 18px;
                cursor: pointer;
                line-height: 3em;
                height: 3em;
                display: flex;
                justify-content: space-around;
                align-items: center
            }
            .auth-items-content{
                background: white;
                margin-top: 1em;
                border: 1px solid #ccc;
                -webkit-border-radius:5px;
                -moz-border-radius:5px;
                border-radius:5px;
                padding: 1em;
                .auth-items-title{
                    display: flex;
                    justify-content: space-around;
                    border-bottom-color: #ccc;
                    border-bottom-style: solid;
                    border-bottom-width: 1px;
                    height: 3em;
                    line-height: 3em;
                    .title-name{
                        width: 25%;
                        text-align: center;
                    }
                }

                .auth-content-item{
                    border-bottom-color: #ccc;
                    border-bottom-style: solid;
                    border-bottom-width: 1px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .content-item{
                        padding: .5em 0px;
                        width: 25%;
                        text-align: center;
                        .btn{
                            margin: 0px auto;
                            border: 1px solid #ccc;
                            padding: .3em .5em;
                            width: 5em;
                            margin-bottom: .3em;
                            cursor: pointer;
                            border-radius: 5px;
                            background:rgb(0, 204, 255) ;
                            color: white;

                        }
                    }
                }
            }
        }
    }

</style>

<script>


    export default {
        name: "authorityCheck",
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
