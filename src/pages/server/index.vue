<template>
    <div class="server-wrap">
        <div class="carousel-wrap">
            <img src="../../assets/images/lunbo1.png" alt="">
        </div>

        <div class="search-wrap">
            <span class="title">服务搜索</span>
            <high-search
                :style-object="inputWidth"
                :sPlaceholder="sPlaceholder"
            ></high-search>
        </div>

        <div class="search-result">
            <div class="left-wrap">
                <div class="solt-container item-container">
                    <div class="company-soft item-title">
                        <p>企业</p>
                        <p>应用软件></p>
                        <p>更多</p>
                        <div class="iconfont-financing"></div>
                    </div>
                    <div class="soft-items-wrap">
                        <div class="soft-items">
                            <softApp
                                v-for="softItem in softInfoList"
                                :softInfo="softItem"
                            ></softApp>
                        </div>
                        <div class="more-soft">
                            <div class="text-content">
                                <p><span>软件定制</span><span>软件咨询</span></p>
                                <p><span>软件选择</span><span>配套购买</span></p>

                            </div>
                            <div  class="img-content">
                                <img src="/web/src/assets/images/more-btn.png" alt="">
                            </div>

                        </div>

                    </div>
                </div>

                <div class="fund-server-wrap item-container">
                    <div class="item-title">
                        <p>企业</p>
                        <p>融资服务></p>
                        <p>更多</p>
                        <div class="iconfont-financing"></div>
                    </div>
                    <div class="fund-container">
                        <div class="left-fund-item">
                            <softApp
                                v-for="softItem in softInfoList2"
                                :softInfo="softItem"
                            ></softApp>

                        </div>
                        <div class="right-fund-item">
                            <softApp
                                v-for="softItem in softInfoList3"
                                :softInfo="softItem"
                            ></softApp>

                        </div>

                    </div>

                </div>

            </div>
            <div class="right-wrap">

            </div>

        </div>


        <div class="foot-wrap">
            <commFoot ></commFoot>
        </div>
    </div>

</template>

<style lang="scss">
    .server-wrap{
        margin: 1.3em auto;
        .carousel-wrap{
            img{width: 100%}

        }
        .search-wrap{
            margin: 1em 0px;
            padding: 2em;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: white;
            .title{
                font-size: 18px;
                display: inline-block;
                margin-right: 1em;
            }
        }
        .search-result{
            display: flex;
            justify-content: space-between;
            .left-wrap{
                .item-container{margin: 1em 0px;display: flex;  }
                .solt-container{
                    display: flex;
                    justify-content: space-between;

                    .soft-items-wrap{
                        .soft-items{
                            display: flex;
                            justify-content: space-between;
                        }
                        .more-soft{
                            background: white;
                            cursor: pointer;
                            margin:  0.5em;
                            border-radius: 5px;
                            border: 1px solid #ccc;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            font-size: 18px;
                            .text-content{
                                padding: 1em;
                                p{
                                    line-height: 2em;

                                    span{ display: inline-block;margin-right: 1em}
                                }
                            }
                            .img-content{
                                img:{width:100%}
                            }
                        }
                    }


                }

                .fund-container{
                    margin-left: 0.5em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .right-fund-item{
                        display: flex;
                        .applaction-soft-items{
                            height:23em;

                        }
                    }
                    .left-fund-item{
                        .applaction-soft-items{
                            margin: 0.5em 0px;

                        }
                    }
                }

                .item-title{
                    border-radius: 8px;
                    background-color: #ff3300;
                    color: white;
                    padding: 1em 2em 7em 1em;
                    font-size: 18px;
                    width: 137px;
                }

            }
            .right-wrap{}

        }

    }

</style>

<script>
    import   highSearch   from  "components/commomComponent/highSearch/index.js"
    import  commFoot from   "components/commomComponent/commFoot/index.js"
    import  softApp  from   "./child/softApp.vue"


    export default {
        name: "server-index",
        props: {

        },
        components: {commFoot,highSearch ,softApp},
        data() {
            return {
                inputWidth:{width:"20em"},
                sPlaceholder:"请输入关键字进行搜索",
                softInfoList:[{"img":"../../../assets/images/soft-logo.png",name:"财务管理系统"},{"img":"../../../assets/images/soft-logo.png",name:"财务管理系统"},{"img":"../../../assets/images/soft-logo.png",name:"财务管理系统"}],
                softInfoList2:[{"img":"../../../assets/images/soft-logo.png",name:"财务管理系统"},{"img":"../../../assets/images/soft-logo.png",name:"财务管理系统"}],
                softInfoList3:[{"img":"../../..//assets/images/soft-logo.png",name:"财务管理系统"},{"img":"../../../assets/images/soft-logo.png",name:"财务管理系统"}],

            }

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
