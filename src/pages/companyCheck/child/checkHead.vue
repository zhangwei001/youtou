<template>
    <div class="header-content">
        <div class="img-wrap">
            <img src="../../../assets/images/company-check.png" alt="">
        </div>
        <p class="title-text">企查查</p>
        <p class="title-text supplement" @click="addMatiral">补充资料</p>
    </div>
</template>

<style lang="scss"  scoped>
    .header-content{
        border: 1px solid #cccccc;
        display: flex;
        align-items: flex-start;
        padding: 1em 5px;
        background: white;
        .title-text{
            font-size:24px;
            height: 40px;
            line-height: 40px;
            color: black;
        }
        .supplement{ margin-left: 1em;cursor: pointer;color: #ccc}
        .img-wrap{
            width: 40px;
            margin-right: .5em;
            img{width: 100%}
        }
    }

</style>

<script>


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
        components: {},
        data() {
            return {}

        },
        created() {

        },
        methods: {
            addMatiral(){
                this.$router.push({name:"addMatiral"})
            }

        },
        watch: {},
    }
</script>
