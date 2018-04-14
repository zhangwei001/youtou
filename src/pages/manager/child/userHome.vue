<template>
    <div class="user-home"  >
        <div class="main-info">
            <div class="img-wrap">
                <img src="../../../../src/assets/images/user-center-main.png" alt="">
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

</template>

<style lang="scss">
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
</style>

<script>


    export default {
        name: " ",
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
