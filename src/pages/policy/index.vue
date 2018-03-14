<template>
    <div class="policy-support">
        <div class="search-wrap">
            <span class="title">政策/法规</span>
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

        <div class="policy-support-content">
            <div class="left-wrap">
                <div class="support-item-wrap">
                    <support-item
                    >
                    </support-item>
                </div>
            </div>
            <div class="right-wrap"></div>

        </div>


        <div class="foot-wrap">
            <comm-foot ></comm-foot>
        </div>

    </div>

</template>

<style lang="scss">
    .policy-support{
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

        .policy-support-content{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin: 1em 0px;
            .left-wrap{
                flex: 1;
                padding: .5em;

            }
            .right-wrap{
                padding: .5em;
                width: 250px;

            }

        }
    }

</style>

<script>
    import   highSearch   from  "components/commomComponent/highSearch/index.js"
    import  commFoot from   "components/commomComponent/commFoot/index.js"
    import  searchCondition from   "components/commomComponent/searchCondition/index.js"
    import supportItem  from "./child/supportItem.vue"

    export default {
        name: "policy-index",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {
            highSearch,
            commFoot,
            searchCondition,
            supportItem

        },
        data() {
            return {
                inputWidth:{width:"20em"},
                sPlaceholder:"搜索你要找的企业",
                mainSearchConditionList:[
                    {
                        searchTitile:"政策类型",
                        searchItemId:0,
                        searchContent:[
                            {name:"全部",value:-1},
                            {name:"项目扶持",value:0},
                            {name:"行业政策",value:1},
                            {name:"法律规章",value:2},
                            {name:"法律规章",value:3}
                        ]
                    },
                    {
                        searchTitile:"相关行业",
                        searchItemId:1,
                        searchContent:[
                            {name:"全部",value:-1},
                            {name:"科技行业",value:0},
                            {name:"教育行业",value:1},
                            {name:"生态农业",value:2},
                            {name:"企业转型",value:3},
                            {name:"新能源",value:4},
                            {name:"环保产业",value:5}
                        ],
                        otherAction:{
                            type:"more",
                            name:"更多",
                            value:10000
                        }
                    }
                    ,
                    {
                        searchTitile:"相关区域",
                        searchItemId:2,
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
            }

        },
        created() {

        },
        methods: {
            selectedSearchItem(){

            }
        },
        watch: {},
    }
</script>
