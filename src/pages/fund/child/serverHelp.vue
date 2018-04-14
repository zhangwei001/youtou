<template>
    <div class="server-help">
        <div class="left-wrap">
            <div class="nav-list" >
                <router-link  :to="{name:'orgManagerHelp'  }" tag="div" class="nav-item" active-class="active-nav-item">公司管理</router-link>
                <router-link  :to="{ name:'fundServerHelp' }" tag="div" class="nav-item" active-class="active-nav-item">融资服务</router-link>
            </div>
        </div>
        <div class="right-content-wrap">
            <router-view ></router-view>
        </div>
    </div>

</template>

<style lang="scss">
    .server-help{
        display: flex;
        .left-wrap{
            width: 20em;
            padding:1em;
           /* .active-nav-item{ background: #ccc;}*/
            .nav-list{
                border: 1px solid #ccc;
                background: white;
                padding: 1em;

                .nav-item{
                    cursor: pointer;
                    font-size: 16px;
                    text-align: center;
                    padding: .5em 0px;
                }
                .active-nav-item{ background: #ccc}
            }
        }
        .right-content-wrap{
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 1em 0px;
            background: white;
            flex: 1;

        }

    }


</style>

<script>

    export default {
        name: "serverHelp",
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
        methods: {

        },
        watch: {},
    }
</script>
