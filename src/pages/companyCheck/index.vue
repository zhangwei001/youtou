<template>
    <div class="company-check-wrap">
        <div class="header-content-wrap">
            <check-head></check-head>

        </div>
        <div class="company-content-info">
            <div class="company-name company-item">
                <span>公司名称：</span><span>腾讯科技（深圳）有限公司</span>
            </div>
            <div class="company-tel company-item">
                <span>电话：</span><span>0755-86013388</span>
            </div>
            <div class="company-email company-item">
                <span>邮箱：</span><span>landyzhang@tencent.com</span>
            </div>
            <div class="company-location company-item">
                <span>地址：</span><span>深圳市南山区高新区科技中一路腾讯大厦35层</span>
            </div>
        </div>
        <div class="company-details-info">
            <div class="details-head">
                <p>基本信息</p>
                <p>基本信息</p>
                <p>基本信息</p>
                <p>基本信息</p>
                <p>基本信息</p>
                <p>基本信息</p>
                <p>基本信息</p>
            </div>
        </div>


    </div>

</template>

<style lang="scss">
    .company-check-wrap{


        .company-content-info{
            margin: 1em;
            padding: 1em;
            border: 1px solid #ccc;
            background: white;

            .company-item{
                display: inline-block;
                line-height: 2em;
                padding: 0px 1em;
                border-right: 1px solid #ccc;
            }
            .company-item:last-child{border:none}

        }
    }

</style>

<script>
    import checkHead from  "./child/checkHead.vue"


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
        components: {checkHead},
        data() {
            return {}

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
