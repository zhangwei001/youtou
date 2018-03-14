<template>
    <div class="media-wrap">
        <div class="media-wrap-content">
            <div class="left-wrap">
                <div class="img-content-wrap">
                    <div class="main-imgs-content">
                        <img src="../../assets/images/media-main-img.png" alt="">
                    </div>
                    <div class="imgs-item-wrap">
                        <div class="img-item-content">
                            <img src="../../assets/images/media-img-items.png" alt="">
                        </div>
                        <div class="img-item-content">
                            <img src="../../assets/images/media-img-items.png" alt="">
                        </div>
                        <div class="img-item-content">
                            <img src="../../assets/images/media-img-items.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="new-type-wrap">
                    <media-news></media-news>
                </div>
            </div>
            <div class="right-wrap">
                <div class="img-wrap">
                    <img src="../..//assets/images/media-right-img.png" alt="">
                </div>

                <div class="invest-news">
                    <p class="title">投资快讯</p>
                    <div class="main-news">
                        <div class="news-img-wrap">
                            <img src="../..//assets/images/invest-news.png" alt="">
                        </div>
                        <div class="news-title">关于全国互联网政务服务企业</div>
                    </div>

                    <div class="new-list-wrap">
                        <invest-new
                            v-for="newItem in investDataList"
                            :news-data="newItem"
                         >
                        </invest-new>

                    </div>

                </div>

                <div class="news-click-rank">
                  <div class="title-wrap">
                      <span class="title">新闻点击排行榜</span><span class="more">更多</span>
                  </div>
                    <div class="rank-list-content">
                        <item-rank
                            v-for="focusItem in companyFocusList"
                            :rank-data="focusItem"
                        > </item-rank>
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
    .media-wrap{

        .media-wrap-content{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin: 1em 0px;
            .left-wrap{
                flex: 1;
                padding: .5em;
                .img-content-wrap{
                    .main-imgs-content{
                        img{width: 100%}
                    }
                    .imgs-item-wrap{
                        display: flex;
                        justify-content: space-between;
                    }

                }

            }
            .right-wrap{
                padding: .5em;
                width: 250px;
                .img-wrap{
                    img{width: 100%}
                }
                .invest-news{
                    margin-top: .5em;
                    padding: 1em;
                    background: white;
                    border: 1px solid #ccc;
                    border-radius: 5px;

                    .title{
                        font-size: 18px;
                        line-height: 3em;
                        height: 3em;
                        font-weight: 600;
                    }
                    .main-news{
                        display: flex;
                        justify-content: space-between;
                        .news-img-wrap{
                            img{width: 100%}
                        }

                    }
                    .new-list-wrap{



                    }

                }

                .news-click-rank{
                    background: white;
                    border:1px solid #ccc;
                    border-radius: 5px;
                    margin-top: 1em;
                    padding: 1em;


                    .title-wrap{
                        height: 2em;
                        line-height: 2em;
                        font-size: 18px;
                        display: flex;
                        justify-content: space-between;
                        .more{
                            cursor: pointer;
                            opacity: .7;
                            color: #7C7C7C;
                            font-size: 16px;
                        }
                    }

                }

            }
        }
        .foot-wrap{

        }

    }

</style>

<script>
    import  commFoot from   "components/commomComponent/commFoot/index.js"
    import investNew from "./child/investNew"
    import mediaNews from "./child/mediaNews"
    import itemRank from "components/itemRank/itemRank"


    export default {
        name: "media-index",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {
            investNew,
            commFoot,
            itemRank,
            mediaNews
        },
        data() {
            return {
                investDataList:[
                    {
                        title:"国务院第四次大督查重点聚焦涉企收费"
                    },
                    {
                        title:"国务院第四次大督查重点聚焦涉企收费"
                    },
                    {
                        title:"国务院第四次大督查重点聚焦涉企收费"
                    },
                    {
                        title:"国务院第四次大督查重点聚焦涉企收费"
                    }
                ],
                companyFocusList:[
                    {
                        rankNum:1,
                        name:"环保产业冉冉升起"

                    },
                    {
                        rankNum:2,
                        name:"环保产业冉冉升起"

                    }
                    ,
                    {
                        rankNum:3,
                        name:"环保产业冉冉升起"

                    }
                    ,
                    {
                        rankNum:4,
                        name:"环保产业冉冉升起"

                    }
                    ,
                    {
                        rankNum:5,
                        name:"环保产业冉冉升起"

                    }
                ]
            }

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
