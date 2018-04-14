<template>
    <div class="fund-server-help">
         <!--融资服务-->
        <div class="server-content-wrap">
            <p class="title">选择您需要的服务</p>
            <div class="content-details">
                <p class="btn">项目申报</p>
                <p class="btn">企业治理</p>
                <p class="btn">企业财务规范</p>
                <p class="btn">企业法务规范</p>
                <p class="btn">企业法务规范</p>
                <p class="btn">企业法务规范</p>
                <p class="btn">企业法务规范</p>
                <p class="btn">企业法务规范</p>
            </div>
        </div>
        <!--补充详细信息（选填）-->
        <div class="server-content-wrap">
            <p class="title">补充详细信息</p>
            <div class="content-details">
                <Input v-model="supplementInfo"
                       type="textarea"
                       :rows="9"
                       :autosize="true"
                       placeholder="补充详细信息"
                ></Input>
            </div>
        </div>
        <!--个人信息-->
        <div class="server-content-wrap">
            <p class="title">请留下您的联系方式，以便我们能够及时联系到您</p>
            <div class="content-details">
                <div class="form-item">
                    <p class="title-text">联系人</p>
                    <div>
                        <Input
                               v-model="userName"
                               placeholder="姓名"
                               clearable style="width: 200px"
                               clearable="true"
                        ></Input>
                    </div>
                </div>
                <div class="form-item">
                    <p class="title-text">联系电话</p>
                    <div>
                        <Input
                            v-model="userName"
                            placeholder="联系电话"
                            clearable style="width: 200px"
                            clearable="true"
                        ></Input>
                    </div>
                </div>

            </div>
        </div>

        <div class="btn-wrap">
            <Button type="success">提交</Button>
            <Button @click="consult">咨询客服</Button>


        </div>
    </div>

</template>

<style lang="scss">
    .fund-server-help{
        padding-bottom: 1em;
        .server-content-wrap{
            .title{
                padding: .5em;
                font-size: 16px;
                border-bottom: 1px solid #ccc;
            }
            .content-details{
                display: inline-flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin: 1em 0px;
                width:100%;
                padding: 0px 1em;
                .btn{
                    padding: .3em 1em;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    cursor: pointer;
                    transition: all 0.1s linear;
                    text-align: center;
                     margin: 0.2em .5em;
                    &:hover{
                        border-color: rgba(34, 182, 255, 0.95);
                    }

                }
                .form-item{
                    .title-text{margin-right: 1em}
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding-right: 1em;
                }
            }


        }
        .btn-wrap{
            text-align: center;
            .custom-service-wrap{
                text-decoration: dotted;
                display: inline-block;
                padding-left: 1em;
                cursor: pointer;
            }

        }
    }


</style>

<script>


    export default {
        name: "fundServerHelp",
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
            return {
                supplementInfo:"",
                userName:""
            }

        },
        created() {

        },
        methods: {
            consult(){
                this.$Modal.info({
                    title: "",
                    content: "客服电话：400-888-8888"
                });
            }
        },
        watch: {},
    }
</script>
