<template>
    <div class="ad-manager-wrap">
        <div class="auth-check-title">
            <img src="../../../assets/images/user-center-main.png" alt="">
        </div>
        <div class="auth-content-wrap">
            <div class="search-wrap">
                <high-search
                    :style-object="inputWidth"
                    :sPlaceholder="sPlaceholder"
                ></high-search>
            </div>
            <div class="btn-wrap">
                <Button type="info">查看</Button>
                <Button type="success">处理</Button>
            </div>
        </div>

        <div class="plate-search-content">
            <div class="item-title-wrap">
                <div class="title-item">申请人</div>
                <div class="title-item">申请时间</div>
                <div class="title-item">广告位置</div>
                <div class="title-item">投放预算</div>
                <div class="title-item">投放状态</div>
            </div>
            <div class="search-content-wrap">
                <div class="item-content">
                    <div class="contact-item search-need">需要的服务</div>
                    <div class="contact-item detail-info">详细信息</div>
                    <div class="contact-item contact-person">联系人</div>
                    <div class="contact-item contact-phone">联系电话</div>
                    <div class="contact-item contact-statu">状态</div>
                </div>
                <div class="item-content">
                    <div class="contact-item search-need">需要的服务</div>
                    <div class="contact-item detail-info">详细信息</div>
                    <div class="contact-item contact-person">联系人</div>
                    <div class="contact-item contact-phone">联系电话</div>
                    <div class="contact-item contact-statu">状态</div>
                </div>
                <div class="item-content">
                    <div class="contact-item search-need">需要的服务</div>
                    <div class="contact-item detail-info">详细信息</div>
                    <div class="contact-item contact-person">联系人</div>
                    <div class="contact-item contact-phone">联系电话</div>
                    <div class="contact-item contact-statu">状态</div>
                </div>
            </div>

        </div>

    </div>


</template>

<style lang="scss">
    .ad-manager-wrap{
        .auth-check-title{
            margin-top: 1em;
            background: white;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding: .7em;
            img{
                width: 100%;
            }
        }
        .auth-content-wrap{
            margin-top: 1em;
            background: white;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding: .7em;
            display: flex;
            justify-content: space-between;
            .btn-wrap{
                margin: 1em;
                text-align: right;
            }
            .search-wrap{
                display: inline-flex;
                align-items: center;
            }
        }

        .plate-search-content{
            margin-top: 1em;
            background: white;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding: .7em;
            .item-title-wrap{
                display: flex;
                align-items: center;
                justify-content: space-around;
                border-bottom-color: #ccc;
                border-bottom-style: solid;
                border-bottom-width: 1px;
                height: 4em;
                line-height: 4em;
                background: #bbb5b5;
                color: black;
                font-size: 16px;
                .title-item{
                    width: 20%;
                    text-align: center;
                }

            }

            .search-content-wrap{
                .item-content{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    border-bottom-color: #ccc;
                    border-bottom-style: solid;
                    border-bottom-width: 1px;
                    height: 3em;
                    line-height: 3em;
                    .contact-item{
                        width: 20%;
                        text-align: center;
                    }
                }
            }
        }

    }

</style>

<script>
    import   highSearch   from  "components/commomComponent/highSearch/index.js"

    export default {
        name: "plateServer",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {highSearch},
        data() {
            return {
                inputWidth:{width:"25em"},
                sPlaceholder:"搜索你要找的企业",
            }

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
