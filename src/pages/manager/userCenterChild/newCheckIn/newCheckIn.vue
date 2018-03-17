<template>
    <div class="new-check-in-item">
        <div class="item-content company-info ">
            <div class="main-info-content">
                <span>【</span>
                <span>融资企业</span>
                <span>】</span>
                <span>优投信息</span>
            </div>
            <div class="description">所在行业：互联网、医疗健康</div>

        </div>
        <div class="item-content  complete-percent">
            <span class="title">信息完成:</span> <span class="num">80%</span>
        </div>
        <div class=" item-content  date-wrap">
            <p>2017-06-23</p>
        </div>

    </div>

</template>

<style lang="scss">
    .new-check-in-item{
        padding: 1em 0px ;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom-color: #ccc;
        border-bottom-style: solid;
        border-bottom-width: 1px;

        .company-info{

        }
        .item-content{
            width: 33%;
            text-align: center;
            .main-info-content{
                font-size: 16px;
                color: black;
                height: 2em;
            }
            .description{
                opacity: .7;
                font-size: 14px;
            }
        }
        .complete-percent{
            .num{
                color: #ea5413;
                font-size: 16px;
                padding-left: 1em;

            }
        }
    }

</style>

<script>


    export default {
        name: "newCheckIn",
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
