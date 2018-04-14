<template>
    <div class="fund-org-item-wrap">
        <div class="org-info-wrap">
            <div class="org-img">
                <img src="../../../../../assets/images/fund-org-img.png" alt="">
            </div>
            <p class="org-name">优投信息</p>
        </div>
        <p class="second">2017-08-25</p>
        <div class="third">
            <p >合作邀约</p>
            <p><span>说明：</span></p>
        </div>
        <div class="four">
            <p class="btn">发布</p>
            <p class="btn">驳回</p>
        </div>



    </div>

</template>

<style lang="scss" scoped>
    .fund-org-item-wrap{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        .org-info-wrap{
            width: 30%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            .org-img{
                width: 86px;
                img{width: 100%}
            }
            .org-name{ margin-left: 1em;font-size: 14px;}
        }
        .second,.third{
            width: 25%
        }
        .four{
            cursor: pointer;
            width: 20%;
            color: rgba(0, 102, 255, 0.75);
            .btn{
                padding: .2em;
            }
        }


    }

</style>

<script>


    export default {
        name: "fundOrg",
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
