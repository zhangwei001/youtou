<template>
    <div class="add-matiral-wrap">
        <div class="header-content-wrap">
            <check-head></check-head>
        </div>
        <div class="add-matiral-content">
            <div class="add-matiral-item">
                <span class="matiral-item-name">纳税情况：</span>
                <div class="input-wrap">
                    <Input v-model="taxes" placeholder=" " style="width: 300px"></Input>
                </div>
            </div>
            <div class="add-matiral-item">
                <span class="matiral-item-name">贷款记录：</span>
                <div class="input-wrap">
                    <Input v-model="loans" placeholder=" " style="width: 300px"></Input>
                </div>
            </div>
            <div class="add-matiral-item">
                <span class="matiral-item-name">征信报告：</span>
                <div class="input-wrap">
                    <Input v-model="credit" placeholder=" " style="width: 300px"></Input>
                </div>
            </div>
            <div class="add-matiral-item">
                <span class="matiral-item-name">动产抵押：</span>
                <div class="input-wrap">
                    <Input v-model="property" placeholder=" " style="width: 300px"></Input>
                </div>
            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
    .add-matiral-wrap{
        .header-content-wrap{

        }
        .add-matiral-content{
            background: white;
            border: 1px solid #ccc;
            padding: 2em;
            .add-matiral-item{
                display: flex;
                margin-bottom: 1em;
                align-items: center;

                .matiral-item-name{

                }
            }

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
            return {
                taxes:"",
                loans:"",
                credit:"",
                property:""
            }

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
