<template>
    <div class="fund-wrap">
        <div class="search-wrap">
            <span class="title">投资机构</span>
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
                          :companyInfo="fundItem"
                      ></company-intro>
                  </div>
        </div>

        <div class="foot-wrap">
            <commFoot ></commFoot>
        </div>

    </div>

</template>

<style lang="scss">
    .fund-wrap{
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

            .company-list-content{
                padding: 1em;
                background: white;
                border: 1px solid #ccc;
            }

        }
    }

</style>

<script>
    import   highSearch   from  "components/commomComponent/highSearch/index.js"
    import  commFoot from   "components/commomComponent/commFoot/index.js"
    import  searchCondition from   "components/commomComponent/searchCondition/index.js"

    import companyIntro   from "components/companyIntro/index.js"

    import { mapState } from 'vuex'
    export default {
        name: "fund",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {
            searchCondition,
            highSearch,
            companyIntro,
            commFoot

        },
        computed:{
            ...mapState("common",['userName']),

        },
        data() {
            return {
                inputWidth:{width:"20em"},
                sPlaceholder:"搜索你要找的企业",
                mainSearchConditionList:[
                    {
                        searchTitile:"融资方式",
                        searchType:"multi", //单选或者多选 multi /single
                        searchItemId:[-1],
                        searchContent:[
                            {name:"全部",number:-1}
//                            {name:"股权融资",value:0},
//                            {name:"整体转让",value:1},
//                            {name:"债权融资",value:2},
//                            {name:"其他",value:3}
                        ],
                        otherAction:{
                            type:"multipleSelect",
                            name:"&#xe6a9;多选",
                            value:1000,
                            isSelect:false

                        }
                    },
                    {
                        searchTitile:"融资阶段",
                        searchType:"single",
                        searchItemId:[-1],
                        searchContent:[
                            {name:"全部",number:-1},
//                            {name:"种子天使轮",value:0},
//                            {name:"Pre-A轮",value:1},
//                            {name:"A轮",value:2},
//                            {name:"B轮",value:3},
//                            {name:"C轮及以后",value:4},
//                            {name:"Pre-IPO",value:5}
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
                        searchItemId:[-1],
                        searchType:"single",
                        searchContent:[
                            {name:"全部",number:-1},
//                            {name:"移动互联",value:0},
//                            {name:"节能环保",value:1},
//                            {name:"文化传媒",value:2},
//                            {name:"新材料",value:3},
//                            {name:"生物医药",value:4},
//                            {name:"消费服务",value:5}
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
                        searchItemId:[-1],
                        searchType:"single",
                        searchContent:[
                            {name:"全部",number:-1},
//                            {name:"北京",value:0},
//                            {name:"上海",value:1},
//                            {name:"广东省",value:2},
//                            {name:"江苏省",value:3},
//                            {name:"山东省",value:4},
//                            {name:"湖北省",value:5}
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
                        fundCompanyImg:"../../assets/images/campany-logo.png",
                        fundCompanyName:"君联资本",
                        fundCompanySubTitle:"投资阶段",
                        fundCompanySubVal:"种子天使轮，pre-A轮" ,
                        fundCompanyMajor:"节能环保，新材料，生物医药",
                        fundCompanyLocation:"深圳"
                    },
                    {
                        fundCompanyImg:"../../assets/images/campany-logo.png",
                        fundCompanyName:"君联资本",
                        fundCompanySubTitle:"投资阶段",
                        fundCompanySubVal:"种子天使轮，pre-A轮" ,
                        fundCompanyMajor:"节能环保，新材料，生物医药",
                        fundCompanyLocation:"深圳"
                    },
                    {
                        fundCompanyImg:"../../assets/images/campany-logo.png",
                        fundCompanyName:"君联资本",
                        fundCompanySubTitle:"投资阶段",
                        fundCompanySubVal:"种子天使轮，pre-A轮" ,
                        fundCompanyMajor:"节能环保，新材料，生物医药",
                        fundCompanyLocation:"深圳"
                    }


                ],
                FundType:[] ,// 融资方式
                FundStage:[]  ,//融资阶段

                Fundndustry:[] ,//投资行业

                FundArea:[] //投资地区
            }

        },
        created() {
            this.init()

        },
        methods: {
            selectedSearchItem(searchItemId,searchContentId){
                console.log( searchItemId+"<<<>>>"+searchContentId)

            },
            init(){
                var that = this;
                $.when(this.getFundType(), this.getFundStage(),this.getFundndustry(),this.getFundArea())
                    .then(function () {
                        that.getFundOrgData()


                })

            },

            //融资方式
            getFundType(){
                var that = this;
                var obj  ={
                    prefix:'/web/api/invoke2/',
                    Suffix:"/i_mode.query",
                    sessionId: this.userName
                };
                $.ajax({
                    type: "POST",
                    url: "http://112.74.85.207:9283/web/PublicInterfaceMethod",
                    data:"data="+JSON.stringify(obj),
                    dataType: "JSON",
                    success: function (data) {
                        console.log("融资方式"+data.info_list);
                       // that.FundType = data.info_list;
                        that.mainSearchConditionList[0].searchContent =
                            that.mainSearchConditionList[0].searchContent.concat(data.info_list);

                    },
                    error: function(err) {
                    }
                });
            },
            //融资阶段
            getFundStage(){
                var  that = this;
                var obj  ={
                    prefix:'/web/api/invoke2/',
                    Suffix:"/i_stage.query",
                    sessionId: this.userName
                };
                $.ajax({
                    type: "POST",
                    url: "http://112.74.85.207:9283/web/PublicInterfaceMethod",
                    data:"data="+JSON.stringify(obj),
                    dataType: "JSON",
                    success: function (data) {
                        console.log("融资阶段"+JSON.stringify(data));

                        that.mainSearchConditionList[1].searchContent =
                            that.mainSearchConditionList[1].searchContent.concat(data.info_list);

                        //that.FundStage = data.info_list;

                    },
                    error: function(err) {
                    }
                });
            },
            //投资行业
            getFundndustry(){
                var that =this;
                var obj  ={
                    prefix:'/web/api/invoke2/',
                    Suffix:"/i_industry.query",
                    sessionId: this.userName
                };
                $.ajax({
                    type: "POST",
                    url: "http://112.74.85.207:9283/web/PublicInterfaceMethod",
                    data:"data="+JSON.stringify(obj),
                    dataType: "JSON",
                    success: function (data) {
                        console.log("投资行业"+JSON.stringify(data));
                       // that.Fundndustry = data.info_list;
                        that.mainSearchConditionList[2].searchContent =
                            that.mainSearchConditionList[2].searchContent.concat(data.info_list);

                    },
                    error: function(err) {
                    }
                });
            },
            //投资地区
            getFundArea(){
                var that =this;
                var obj  ={
                    prefix:'/web/api/invoke2/',
                    Suffix:"/i_area.query",
                    sessionId: this.userName
                };
                $.ajax({
                    type: "POST",
                    url: "http://112.74.85.207:9283/web/PublicInterfaceMethod",
                    data:"data="+JSON.stringify(obj),
                    dataType: "JSON",
                    success: function (data) {
                        console.log("投资地区"+JSON.stringify(data));
                      //  that.FundArea = data.info_list;
                        that.mainSearchConditionList[3].searchContent =
                            that.mainSearchConditionList[3].searchContent.concat(data.info_list);

                    },
                    error: function(err) {
                    }
                });
            },
            //投资机构查询的接口名
            getFundOrgData(){
                var that =this;
                var obj  ={
                    prefix:'/web/api/invoke2/',
                    Suffix:"/i_investment_institution.query",
                    sessionId: this.userName
                };
                $.ajax({
                    type: "POST",
                    url: "http://112.74.85.207:9283/web/PublicInterfaceMethod",
                    data:"data="+JSON.stringify(obj),
                    dataType: "JSON",
                    success: function (data) {
                        console.log("投资地区"+JSON.stringify(data));
                        //  that.FundArea = data.info_list;
                        that.mainSearchConditionList[3].searchContent =
                            that.mainSearchConditionList[3].searchContent.concat(data.info_list);

                    },
                    error: function(err) {
                    }
                });

            }



        },
        watch: {},
    }
</script>
