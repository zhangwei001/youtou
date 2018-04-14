<template>
    <div class="home-wrap" >
        <div class="carousel-wrap">
            <img src="../../assets/images/lunbo1.png" alt="">
        </div>
        <div class="main-info-warp">
            <div class="search-wrap">
                <div class="home-wrap-title">
                    <p class="text-content iconfont" @click="toCompany">找企业<span> > </span></p>
                    <div class="high-search-content">
                        <high-search
                            :style-object="inputWidth"
                            :sPlaceholder="sPlaceholder"
                        ></high-search>
                    </div>
                </div>
                <div class="search-content">
                    <template v-for="item in findCompany">
                        <p class="search-firm-item"  >{{ item.name}}</p>
                    </template>
                    <div>
                        <p class="search-firm-item more-item" @click="toCompany">更多</p>
                    </div>

                </div>


            </div>
            <div class="money-wrap">
                <p class="find-money text-content" @click="gofundPage">
                    <span>找资金</span>
                    <span class="text iconfont"> > </span>
                </p>

                <div class="corp-apply-warp">
                    <span>已有</span><span class="corp-num"> 1234 </span><span>家企业提交融资申请</span>
                </div>
                <div class="apply-btn-wrap">
                    <p class="apply-btn" @click="gofundPage">立即申请</p>
                </div>

            </div>
        </div>

        <div class="financing-warp">
            <div class="success-financing">
                <div class="financing-title"> <span>最新融资成功的企业</span> <span class="more" @click="gofundPage">查看更多</span></div>
                <div class="financing-content">
                    <Table :columns="columns" :data="financData"></Table>
                </div>

            </div>
            <div class="invest-warp">
                <div class="invest-title">最新投资咨讯</div>
                <div class="invest-content">
                    <div class="invest-item">
                        <div class="item-img">
                            <img src="../../assets/images/new-invest.png" alt="">
                        </div>
                        <div class="item-content">
                            <p class="invest-company-name">IDG资本</p>
                            <p class="invest-news"><span>最近投资：</span><span>彩泥云南菜</span></p>

                        </div>
                    </div>
                    <div class="invest-item">
                        <div class="item-img">
                            <img src="../../assets/images/new-invest.png" alt="">
                        </div>
                        <div class="item-content">
                            <p class="invest-company-name">IDG资本</p>
                            <p class="invest-news"><span>最近投资：</span><span>彩泥云南菜</span></p>

                        </div>
                    </div>
                    <div class="invest-item">
                        <div class="item-img">
                            <img src="../../assets/images/new-invest.png" alt="">
                        </div>
                        <div class="item-content">
                            <p class="invest-company-name">IDG资本</p>
                            <p class="invest-news"><span>最近投资：</span><span>彩泥云南菜</span></p>

                        </div>
                    </div>
                    <div class="invest-item">
                        <div class="item-img">
                            <img src="../../assets/images/new-invest.png" alt="">
                        </div>
                        <div class="item-content">
                            <p class="invest-company-name">IDG资本</p>
                            <p class="invest-news"><span>最近投资：</span><span>彩泥云南菜</span></p>

                        </div>
                    </div>
                    <div class="invest-item">
                        <div class="item-img">
                            <img src="../../assets/images/new-invest.png" alt="">
                        </div>
                        <div class="item-content">
                            <p class="invest-company-name">IDG资本</p>
                            <p class="invest-news"><span>最近投资：</span><span>彩泥云南菜</span></p>

                        </div>
                    </div>

                </div>

            </div>

        </div>
        <div class="advertising-wrap">
            <img src="../..//assets/images/pic2.png" alt="">
        </div>

        <div class="good-investment-warp">
            <div class="title-wrap">
                <span>优质投资机构</span><span class="more" @click="gofundPage">查看更多</span>
            </div>
            <div class="investment-content">
                <div class="invest-item">
                    <div class="invest-pic">
                        <img src="../../assets/images/financing-pic.png" alt="">
                    </div>
                    <div class="invest-info">
                        <p class="invest-name">IDC资本</p>
                        <p class="invest-details">用资金与管理帮助和促进中国创业企业的成长</p>
                        <div class="apply-financing">
                                <p class="btn">申请融资</p>
                        </div>
                    </div>
                </div>

                <div class="invest-item">
                    <div class="invest-pic">
                        <img src="../../assets/images/financing-pic.png" alt="">
                    </div>
                    <div class="invest-info">
                        <p class="invest-name">IDC资本</p>
                        <p class="invest-details">用资金与管理帮用资金与管理帮助和用资金与管理帮助和用资金与管理帮助和助和促进中国创业企业的成长</p>
                        <div class="apply-financing">
                            <p class="btn">申请融资</p>
                        </div>
                    </div>
                </div>

                <div class="invest-item">
                    <div class="invest-pic">
                        <img src="../../assets/images/financing-pic.png" alt="">
                    </div>
                    <div class="invest-info">
                        <p class="invest-name">IDC资本</p>
                        <p class="invest-details">用资金与管理帮用资金与管理帮助和用资金与管理帮助和用资金与管理帮助和助和促进中国创业企业的成长</p>
                        <div class="apply-financing">
                            <p class="btn">申请融资</p>
                        </div>
                    </div>
                </div>
                <div class="invest-item">
                    <div class="invest-pic">
                        <img src="../../assets/images/financing-pic.png" alt="">
                    </div>
                    <div class="invest-info">
                        <p class="invest-name">IDC资本</p>
                        <p class="invest-details">用资金与管理帮用资金与管理帮助和用资金与管理帮助和用资金与管理帮助和助和促进中国创业企业的成长</p>
                        <div class="apply-financing">
                            <p class="btn">申请融资</p>
                        </div>
                    </div>
                </div>
                <div class="invest-item">
                    <div class="invest-pic">
                        <img src="../../assets/images/financing-pic.png" alt="">
                    </div>
                    <div class="invest-info">
                        <p class="invest-name">IDC资本</p>
                        <p class="invest-details">用资金与管理帮用资金与管理帮助和用资金与管理帮助和用资金与管理帮助和助和促进中国创业企业的成长</p>
                        <div class="apply-financing">
                            <p class="btn">申请融资</p>
                        </div>
                    </div>
                </div>
                <div class="invest-item">
                    <div class="invest-pic">
                        <img src="../../assets/images/financing-pic.png" alt="">
                    </div>
                    <div class="invest-info">
                        <p class="invest-name">IDC资本</p>
                        <p class="invest-details">用资金与管理帮用资金与管理帮助和用资金与管理帮助和用资金与管理帮助和助和促进中国创业企业的成长</p>
                        <div class="apply-financing">
                            <p class="btn">申请融资</p>
                        </div>
                    </div>
                </div>
                <div class="invest-item">
                    <div class="invest-pic">
                        <img src="../../assets/images/financing-pic.png" alt="">
                    </div>
                    <div class="invest-info">
                        <p class="invest-name">IDC资本</p>
                        <p class="invest-details">用资金与管理帮用资金与管理帮助和用资金与管理帮助和用资金与管理帮助和助和促进中国创业企业的成长</p>
                        <div class="apply-financing">
                            <p class="btn">申请融资</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="good-invest-wrap">
            <div class="left-wrap">
                <div class="invest-head">
                    <p >优质融资企业</p><p class="more">查看更多</p>
                </div>

                <div class="good-invest-content">
                    <div class="good-invest-item" @click="goInvestCompany">
                        <div class="item-head">
                            <div class="head-img">
                                <img src="../../assets/images/company-icons.png" alt="">
                            </div>
                            <div class="head-info">
                                <p class="company-name">深圳市优投信息技术有限公司</p>
                                <div class="company-detail-info">
                                    <div class="company-location">
                                        <span class="iconfont-financing">&#xe61f;</span><span>广东深圳</span>
                                    </div>
                                    <div class="company-major">
                                        <span class="iconfont-financing">&#xe628;</span><span>信息技术</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-warp">
                            <div class="company-detail">专注投资领域，打造股期权投资领域一站式信息化服务平台</div>
                            <div class="btn-wrap">
                                <p class="btn">查看详情</p>
                            </div>
                        </div>

                    </div>
                    <div class="good-invest-item"  @click="goInvestCompany">
                        <div class="item-head">
                            <div class="head-img">
                                <img src="../../assets/images/company-icons.png" alt="">
                            </div>
                            <div class="head-info">
                                <p class="company-name">深圳市优投信息技术有限公司</p>
                                <div class="company-detail-info">
                                    <div class="company-location">
                                        <span class="iconfont-financing">&#xe61f;</span><span>广东深圳</span>
                                    </div>
                                    <div class="company-major">
                                        <span class="iconfont-financing">&#xe628;</span><span>信息技术</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-warp">
                            <div class="company-detail">专注投资领域，打造股期权投资领域一站式信息化服务平台</div>
                            <div class="btn-wrap">
                                <p class="btn">查看详情</p>
                            </div>
                        </div>

                    </div>
                    <div class="good-invest-item">
                        <div class="item-head">
                            <div class="head-img">
                                <img src="../../assets/images/company-icons.png" alt="">
                            </div>
                            <div class="head-info">
                                <p class="company-name">深圳市优投信息技术有限公司</p>
                                <div class="company-detail-info">
                                    <div class="company-location">
                                        <span class="iconfont-financing">&#xe61f;</span><span>广东深圳</span>
                                    </div>
                                    <div class="company-major">
                                        <span class="iconfont-financing">&#xe628;</span><span>信息技术</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-warp">
                            <div class="company-detail">专注投资领域，打造股期权投资领域一站式信息化服务平台</div>
                            <div class="btn-wrap">
                                <p class="btn">查看详情</p>
                            </div>
                        </div>

                    </div>
                    <div class="good-invest-item">
                        <div class="item-head">
                            <div class="head-img">
                                <img src="../../assets/images/company-icons.png" alt="">
                            </div>
                            <div class="head-info">
                                <p class="company-name">深圳市优投信息技术有限公司</p>
                                <div class="company-detail-info">
                                    <div class="company-location">
                                        <span class="iconfont-financing">&#xe61f;</span><span>广东深圳</span>
                                    </div>
                                    <div class="company-major">
                                        <span class="iconfont-financing">&#xe628;</span><span>信息技术</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-warp">
                            <div class="company-detail">专注投资领域，打造股期权投资领域一站式信息化服务平台</div>
                            <div class="btn-wrap">
                                <p class="btn">查看详情</p>
                            </div>
                        </div>

                    </div>
                    <div class="good-invest-item">
                        <div class="item-head">
                            <div class="head-img">
                                <img src="../../assets/images/company-icons.png" alt="">
                            </div>
                            <div class="head-info">
                                <p class="company-name">深圳市优投信息技术有限公司</p>
                                <div class="company-detail-info">
                                    <div class="company-location">
                                        <span class="iconfont-financing">&#xe61f;</span><span>广东深圳</span>
                                    </div>
                                    <div class="company-major">
                                        <span class="iconfont-financing">&#xe628;</span><span>信息技术</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-warp">
                            <div class="company-detail">专注投资领域，打造股期权投资领域一站式信息化服务平台</div>
                            <div class="btn-wrap">
                                <p class="btn">查看详情</p>
                            </div>
                        </div>

                    </div>
                    <div class="good-invest-item">
                        <div class="item-head">
                            <div class="head-img">
                                <img src="../../assets/images/company-icons.png" alt="">
                            </div>
                            <div class="head-info">
                                <p class="company-name">深圳市优投信息技术有限公司</p>
                                <div class="company-detail-info">
                                    <div class="company-location">
                                        <span class="iconfont-financing">&#xe61f;</span><span>广东深圳</span>
                                    </div>
                                    <div class="company-major">
                                        <span class="iconfont-financing">&#xe628;</span><span>信息技术</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="content-warp">
                            <div class="company-detail">专注投资领域，打造股期权投资领域一站式信息化服务平台</div>
                            <div class="btn-wrap">
                                <p class="btn">查看详情</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="right-warp">
                <div class="img-warp">
                    <img src="../../assets/images/good-invest-img-ad.png" alt="">
                </div>

            </div>

        </div>

        <div class="foot-wrap">
            <comm-foot ></comm-foot>
        </div>

    </div>
</template>

<style lang="scss">
    .home-wrap{
        text-align: center;
        margin: 1.3em 0px;
        .carousel-wrap{
            padding: 0px;
            width: 100%;
            margin-bottom: 1em;
            img{
                width: 100%;
            }
        }
        .search-wrap{
            display: flex;
            justify-content:space-between  ;
            align-items: center;
            width: 70%;
            border-right-style: solid;
            border-right-width: 1px;
            padding-right: 1em;
            border-right-color: #ccc;
            flex-wrap: wrap;
            background: white;


            .home-wrap-title{
                display: flex;
                justify-content:space-between  ;
                align-items: center;
                width: 100%;
            }
            .search-content{
                display: flex;
                justify-content:flex-start  ;
                align-items: flex-start;
                cursor: pointer;


                flex-wrap: wrap;
                width: 100%;
                .search-firm-item{
                    font-size: 16px;
                    padding: 0.5em 2em;
                }
                .more-item{color: rgba(117, 96, 218, 0.84);}
            }

        }
        .main-info-warp{
            display: flex;
            justify-content: space-around;
            align-items: center;

            padding: 1em;
            background: white;
            border: 1px solid #ccc;

            .text-content{
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                cursor: pointer;

            }
            .money-wrap{
                align-self: baseline;
                .corp-apply-warp{
                    line-height: 6em;
                    height: 6em;
                    .corp-num{
                        display: inline-block;
                        padding: 0px 1em ;
                        font-size: 18px;
                    }

                }

                .apply-btn-wrap{

                    .apply-btn{
                        color: white;
                        width: 7em;
                        height: 2em;
                        line-height: 2em;
                        background: orange;
                        border-radius: 5px;
                        margin: 0px auto;
                        cursor: pointer;

                    }
                }
            }
        }
        .financing-warp{
            padding: 3em;


            display: flex;
            justify-content: space-between;

            background: white;
            margin: 1em 0px;

            border: 1px solid #ccc;


            .success-financing{
                font-size: 16px;
                font-weight: 600;
                width: 73%;

                border-right-style: solid;
                border-right-width: 1px;
                padding-right: 1em;
                border-right-color: #ccc;
                .financing-title{
                    text-align: left;
                    display: flex;
                    justify-content: space-between;
                    padding: 1em 0px;
                    .more{
                        color: rgba(117, 96, 218, 0.84);
                        cursor: pointer;
                        font-weight: 500;
                    }
                }
            }
            .invest-warp{
                padding-left: 0.5em;
               .invest-title{
                   padding: 1em;
                   font-size: 16px;
                   font-weight: 600;
                   margin-left: -9em;
               }
                .invest-content{


                    .invest-item{
                        margin-bottom: 0.5em;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1em;
                        .item-img{
                            border: 1px solid #ccc;
                            /*padding: 0.2em;
                            width: 80px;*/
                            img{width: 100%}
                        }
                        .item-content{
                            padding: 0.5em;
                            .invest-company-name{font-size: 16px;
                                font-weight: 600;}

                        }
                    }
                }

            }

        }
        .advertising-wrap{
           // padding: 0px 3em;
            img{width: 100%; }
        }
        .good-investment-warp{
            padding: 2em;
            margin-top: 1em;
            background: white;
            border: 1px solid #ccc;

            .title-wrap{
                font-size: 16px;
                font-weight: 600;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .more{
                    cursor: pointer;
                    color:  rgba(117, 96, 218, 0.84);
                    font-weight: 500;
                }
            }
            .investment-content{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 1em;
                .invest-item{
                    width: 23%;
                    padding: 1em;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin: 0.5em;
                    cursor: pointer;
                    .invest-pic{
                        border: 1px solid #ccc;
                        width: 100%;
                        img{width: inherit;}
                    }
                    .invest-info{
                        .invest-name{
                            text-align: left;
                            font-size: 18px;
                        }
                        .invest-details{text-align: left;
                            text-align: left;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .apply-financing{
                            padding: 0.5em;
                            .btn{
                                text-align: center;
                                border:1px solid #ea5413;
                                border-radius: 5px;
                                padding: 0.5em;
                                width: 7em;
                                color: #ea5413;
                                margin: 0px auto;
                            }

                        }
                    }
                 }
            }


        }
        .good-invest-wrap{
            padding: 1em;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            background: white;
            border: 1px solid #ccc;

            margin: 1em 0px;
            .left-wrap{
                width: 100%;
                padding: 0px 1em;
                .invest-head{ display: flex;justify-content: space-between;
                    font-size: 16px;
                    font-weight: 600;
                    .more{color: rgba(117, 96, 218, 0.84);
                        cursor: pointer;
                        font-weight: 500;}

                }
                .good-invest-content{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    .good-invest-item{
                        width: 32%;
                        padding: 1em;
                        border: 1px solid #ccc;
                        margin: 0.2em;
                        cursor: pointer;
                        .item-head{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .head-img{
                                width: 20%;
                                img{width: 100%}
                            }
                            .head-info{


                                .company-name{
                                    font-size: 18px;
                                    text-align: left;
                                    font-weight: 600;
                                }
                                .company-detail-info{
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    .company-location{ display: flex;
                                        justify-content: space-between;
                                        align-items: center;}
                                    .company-major{ display: flex;
                                        justify-content: space-between;
                                        align-items: center;}
                                }
                            }
                        }
                        .content-warp{

                            text-align: left;
                            .company-detail{
                                text-align: left;
                                padding: 0.5em 0px;
                                width: 100%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            }
                            .btn-wrap{
                                .btn{ text-align: center;
                                    border: 1px solid #ea5413;
                                    border-radius: 5px;
                                    padding: 0.5em;
                                    width: 7em;
                                    color: #ea5413;
                                    margin: 0px auto;
                                cursor: pointer}

                            }
                        }

                    }

                }

            }
            .right-warp{
                width: 230px;
                .img-warp{
                    img{}
                }
            }
        }
    }

</style>

<script>
    import   highSearch   from  "components/commomComponent/highSearch/index.js"
    import  commFoot from   "components/commomComponent/commFoot/index.js"

    import    Ajax from "components/commomComponent/Ajax/index.js"

    import { mapState } from 'vuex'
    export default {
        name: "index",
        props: {

        },
        components: {
            highSearch,commFoot

        },
        data() {
            return{
                inputWidth:{width:"14em"},
                sPlaceholder:"搜索你要找的企业",
                columns:[
                    {
                        title: '时间',
                        key: 'name'
                    },
                    {
                        title: '融资企业',
                        key: 'age'
                    },
                    {
                        title: '轮次',
                        key: 'address'
                    }
                    ,
                    {
                        title: '融资金额',
                        key: 'address'
                    },
                    {
                        title: '投资机构',
                        key: 'address'
                    }
                ],
                financData:[
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                findCompany:[] //找企业
                }
        },
        created() {
            this.init()
        },
        computed:{
            ...mapState("common",['userName']),

        },
        methods: {
            init(){
                this.getAsyncData();
                this.getlatestFundCompany()

            },
            toCompany(){
                this.$router.push({name:"Company_index"})
            },
            gofundPage(){
                this.$router.push({name:"Fund_index"})
            },
            goInvestCompany(){
                this.$router.push({name:"fundOrgDetails",params:{fundId:123}})
            },
            getAsyncData(){
                var that = this;
                that.getIndustryQueryData().then(function( data ){
                    that.findCompany  = data.info_list
                })
            },
            //最新融资成功企业
            getlatestFundCompany(){
                var obj  ={
                    prefix:'/web/api/invoke2/',
                    Suffix:"/user_role.query_by_role",
                    sessionId: this.userName
                };
                $.ajax({
                    type: "POST",
                    url: "http://112.74.85.207:9283/web/PublicInterfaceMethod",
                    data:"data="+JSON.stringify(obj),
                    dataType: "JSON",
                    success: function (data) {
                        console.log("data"+data)

                    },
                    error: function(err) {
                    }
                });
            },
            /*行业查询*/
            getIndustryQueryData(data){
                var obj  ={
                    prefix:'/web/api/invoke2/',
                    Suffix:"/i_industry.query",
                    sessionId: this.userName
                };
                return   $.ajax({
                    type: "POST",
                    url: "http://112.74.85.207:9283/web/PublicInterfaceMethod",
                   // data:"data={'prefix':'/web/api/invoke2/','Suffix':'/i_industry.query','sessionId':'test'}",
                    data:"data="+JSON.stringify(obj),
                    dataType: "JSON",
                    success: function (data) {

                    },
                    error: function(err) {
                    }
                });
             },
        },
        mounted:function () {

        },
        watch: {}
    }
</script>
