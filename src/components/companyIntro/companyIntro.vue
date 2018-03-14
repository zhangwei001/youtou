<template>
    <div class="company-intro-wrap">
        <div class="left-info-wrap">
            <div class="left-img-wrap">
                <img :src="companyInfo.fundCompanyImg" alt="">
            </div>
            <div class="right-info-wrap">
                <p class="company-info-name">{{companyInfo.fundCompanyName}}</p>
                <p class="company-sub-info"> <span>{{companyInfo.fundCompanySubTitle}}</span> <span>{{companyInfo.fundCompanySubVal}}</span></p>
                <div class="company-infro-wrap">
                    <div class="company-infro-major">
                        <p class="iconfont-financing">&#xe628;</p><p>{{companyInfo.fundCompanyMajor}}</p>
                    </div>
                    <div class="company-infro-location">
                        <p class="iconfont-financing">&#xe61f;</p><p>{{companyInfo.fundCompanyLocation}}</p>
                    </div>

                </div>

            </div>

        </div>
        <div class="right-handle-wrap">
            <div class="handle-btns">
                 <p class="check-details  btn">查看详情</p>
                 <p class="get-connection btn">立即沟通</p>
            </div>

        </div>

    </div>

</template>

<style lang="scss">
    .company-intro-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin: 1em 0px;
        .left-info-wrap{
            display: flex;
            .left-img-wrap{
                width: 90px;
                margin-right: 1em;
                img{width: 100%}
            }
            .right-info-wrap{
                .company-info-name{ font-size: 18px;}
                .company-sub-info{opacity: 0.8;font-size: 12px;margin-top: 1em}

                .company-infro-wrap{
                    border-top-width: 2px;
                    border-top-style: dashed;
                    border-top-color: #ccc;
                    .company-infro-major{
                        display: flex;
                        align-items: center;
                    }
                    .company-infro-location{
                        display: flex;
                        align-items: center;
                    }
                }
            }

        }
        .right-handle-wrap{
            .handle-btns{
                .btn{
                    background: #cccccc;
                    border-radius: 5px;
                    border: transparent;
                    padding: 0.5em 0.9em;
                    margin-bottom: 0.5em;
                    cursor: pointer;
                }
                .check-details{

                }
                .get-connection{

                }

            }

        }
    }

</style>

<script>


    export default {
        name: "companyIntro",
        props: {
            companyInfo:{
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
