<template>
    <div class="user-manager-warp">
        <div class="search-wrap">
            <high-search
                :style-object="inputWidth"
                :sPlaceholder="sPlaceholder"
            ></high-search>
        </div>
        <div class="btn-list-wrap">
            <p class="btn">账户冻结</p>
            <p class="btn">帐户解冻</p>
            <p class="btn">角色调整</p>
            <p class="btn">角色调整</p>
            <p class="btn">修改手机号码</p>
            <p class="btn">修改密码</p>
            <p class="btn">删除</p>
        </div>
        <div class="user-info-list-warp">
            <div class="info-list-title">
                <p class="title-item">用户名</p>
                <p class="title-item">角色</p>
                <p class="title-item">公司名称</p>
                <p class="title-item">姓名</p>
                <p class="title-item">手机号码</p>
            </div>
            <div class="info-list-content">
                <div class="info-list-item">
                    <p class="title-item user-name">zhansan </p>
                    <p class="title-item role">sss</p>
                    <p class="title-item company-name">tentxu</p>
                    <p class="title-item name">zhanliii</p>
                    <p class="title-item phone">16787654566</p>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss">
    .user-manager-warp{
        .search-wrap{
            padding: .7em;
            background: white;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 1em;
        }
        .btn-list-wrap{
            background: white;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 1em;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1em;
            .btn{
                cursor: pointer;
                padding: .5em 1em;
                border-radius: 5px;
                border: 1px solid #ccc;

            }
        }
        .user-info-list-warp{
            margin-top: 1em;
            background: white;
            border-radius: 5px;
            border: 1px solid #ccc;
            .info-list-title,.info-list-item{
                display: flex;
                align-items: center;
                justify-content: space-around;
                border-bottom-color: #ccc;
                border-bottom-style: solid;
                border-bottom-width: 1px;
                height: 3em;
                line-height: 3em;
                .title-item{
                    width: 20%;
                    text-align: center;
                }
            }
        }

    }

</style>

<script>
    import   highSearch   from  "components/commomComponent/highSearch/index.js"

    export default {
        name: "userManager",
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
