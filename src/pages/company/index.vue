<template>
    <div class="company-wrap">
        <div class="search-wrap">
            <span class="title">融资企业</span>
            <div class="high-search-wrap">
                <high-search
                    :style-object="inputWidth"
                    :sPlaceholder="sPlaceholder"
                ></high-search>
            </div>
        </div>

        <div class="search-condition-wrap">
            <template v-for="searchConditionItem in mainSearchConditionList">
                <search-condition
                    :searchConditionData = 'searchConditionItem'
                    @select-search-item="selectedSearchItem"
                ></search-condition>

            </template>
        </div>

        <div class="company-list-wrap">
            <div class="company-list-content">
                <company-intro
                    v-for="fundItem in fundCompayList"
                    :company-info="fundItem"
                ></company-intro>
            </div>

            <div class="left-content-wrap">
                <div class="business-echart-warp">
                    <div class="title">行业投资金额分布</div>
                    <div class="echart-content">
                        <img src="../../assets/images/business-fund-rank.png" alt="">
                    </div>
                </div>
                <div class="focus-rank-wrap">
                    <div class="title"><span>企业关注排行</span><span class="more">更多</span></div>
                    <div class="focus-content">
                        <item-rank
                            v-for="focusItem in companyFocusList"
                            :rank-data="focusItem"
                        > </item-rank>
                    </div>

                </div>
                <div class="invest-news-wrap">
                    <div class="news-head">
                        <span>最新投资资讯</span><span class="more">更多</span>
                    </div>
                    <div class="news-content-wrap">
                        <invest-news v-for="i in investNews"></invest-news>
                    </div>

                </div>

            </div>
        </div>

        <div class="foot-wrap">
            <commFoot ></commFoot>
        </div>

    </div>

</template>

<style lang="scss">
    .company-wrap{
        .search-wrap{
            display: flex;
            align-items: center;
            padding: 2em;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 1em auto;
            font-size: 18px;
            background: white;
            .title{
                padding-right: 2em;
            }
        }

        .search-condition-wrap{
            border-radius: 5px;
            border:1px solid #ccc;
            padding: 2em;
            margin: 1em auto;
            background: white;
        }

        .company-list-wrap{
            margin-bottom: 1em;
            display: flex;
            justify-content: space-between;
            .company-list-content{
                padding: 1em;
                background: white;
                border: 1px solid #ccc;
                flex: 1;
            }
            .left-content-wrap{
                padding: 0em  0.5em;
                .business-echart-warp{
                    background: white;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 1em;
                    .title{
                        height: 2em;
                        line-height: 2em;
                        font-size: 18px;

                    }

                }
                .focus-rank-wrap{
                    background: white;
                    border:1px solid #ccc;
                    border-radius: 5px;
                    margin-top: 1em;
                    padding: 1em;
                    .title{
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
                    .focus-content{

                    }


                }
                .invest-news-wrap{
                    padding: 1em;
                    margin-top: .5em;
                    background: white;
                    border-radius: 5px;
                    .news-head{
                        height: 2em;
                        line-height: 2em;
                        font-size: 18px;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-pack: justify;
                        justify-content: space-between;
                        .more{
                            cursor: pointer;
                            opacity: .7;
                            color: #7C7C7C;
                            font-size: 16px;
                        }

                    }
                    .news-content-wrap{

                    }

                }

            }

        }
    }


</style>

<script>
    import   highSearch   from  "components/commomComponent/highSearch/index.js"
    import  commFoot from   "components/commomComponent/commFoot/index.js"
    import  searchCondition from   "components/commomComponent/searchCondition/index.js"
    import companyIntro   from "components/companyIntro/index.js"
    import itemRank from "components/itemRank/itemRank"
    import investNews from "./child/investNews.vue"

    export default {
        name: " ",
        props: {

        },
        components: {
            highSearch,
            commFoot,
            searchCondition,
            companyIntro,
            itemRank ,
            investNews
        },
        data() {
            return {
                inputWidth:{width:"20em"},
                sPlaceholder:"搜索你要找的企业",
                mainSearchConditionList:[
                    {
                        searchTitile:"融资方式",
                        searchItemId:0,
                        searchContent:[
                            {name:"全部",value:-1},
                            {name:"股权融资",value:0},
                            {name:"整体转让",value:1},
                            {name:"债权融资",value:2},
                            {name:"其他",value:3}
                        ],
                        otherAction:{
                            type:"multipleSelect",
                            name:"&#xe6a9;多选",
                            value:1000

                        }
                    },
                    {
                        searchTitile:"融资阶段",
                        searchItemId:1,
                        searchContent:[
                            {name:"全部",value:-1},
                            {name:"种子天使轮",value:0},
                            {name:"Pre-A轮",value:1},
                            {name:"A轮",value:2},
                            {name:"B轮",value:3},
                            {name:"C轮及以后",value:4},
                            {name:"Pre-IPO",value:5}
                        ],
                        otherAction:{
                            type:"more",
                            name:"更多",
                            value:10000
                        }
                    }
                    ,
                    {
                        searchTitile:"投资行业",
                        searchItemId:2,
                        searchContent:[
                            {name:"全部",value:-1},
                            {name:"移动互联",value:0},
                            {name:"节能环保",value:1},
                            {name:"文化传媒",value:2},
                            {name:"新材料",value:3},
                            {name:"生物医药",value:4},
                            {name:"消费服务",value:5}
                        ],
                        otherAction:{
                            type:"more",
                            name:"更多",
                            value:10000
                        }
                    }
                    ,
                    {
                        searchTitile:"投资地区",
                        searchItemId:3,
                        searchContent:[
                            {name:"全部",value:-1},
                            {name:"北京",value:0},
                            {name:"上海",value:1},
                            {name:"广东省",value:2},
                            {name:"江苏省",value:3},
                            {name:"山东省",value:4},
                            {name:"湖北省",value:5}
                        ],
                        otherAction:{
                            type:"more",
                            name:"更多",
                            value:10000
                        }
                    }
                ],

                fundCompayList:[
                    {
                        fundCompanyImg:"/web/src/assets/images/campany-logo.png",
                        fundCompanyName:"君联资本",
                        fundCompanySubTitle:"投资阶段",
                        fundCompanySubVal:"种子天使轮，pre-A轮" ,
                        fundCompanyMajor:"节能环保，新材料，生物医药",
                        fundCompanyLocation:"深圳"
                    },
                    {
                        fundCompanyImg:"/web/src/assets/images/campany-logo.png",
                        fundCompanyName:"君联资本",
                        fundCompanySubTitle:"投资阶段",
                        fundCompanySubVal:"种子天使轮，pre-A轮" ,
                        fundCompanyMajor:"节能环保，新材料，生物医药",
                        fundCompanyLocation:"深圳"
                    },
                    {
                        fundCompanyImg:"/web/src/assets/images/campany-logo.png",
                        fundCompanyName:"君联资本",
                        fundCompanySubTitle:"投资阶段",
                        fundCompanySubVal:"种子天使轮，pre-A轮" ,
                        fundCompanyMajor:"节能环保，新材料，生物医药",
                        fundCompanyLocation:"深圳"
                    }


                ],
                companyFocusList:[
                    {
                        rankNum:1,
                        name:"天山客"

                    },
                    {
                        rankNum:2,
                        name:"天山客"

                    }
                    ,
                    {
                        rankNum:3,
                        name:"天山客"

                    }
                    ,
                    {
                        rankNum:4,
                        name:"天山客"

                    }
                    ,
                    {
                        rankNum:5,
                        name:"天山客"

                    }
                ],
                investNews:[1,2,3]
            }

        },
        created() {

        },
        methods: {
            selectedSearchItem(searchItemId,searchContentId){
                console.log( searchItemId+"<<<>>>"+searchContentId)

            },

        },
        watch: {},
    }
</script>
