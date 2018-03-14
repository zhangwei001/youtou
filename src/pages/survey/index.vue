<template>
    <div class="survy-wrap">
        <div class="survy-title">客户满意度调查表</div>
        <div class="survy-intrduce-content">
            <p class="survy-name">尊敬的客户：</p>
            <p class="survy-intrduce"> 感谢阁下一如既往对我们公司服务的支持与配合，我们深感荣幸，为了不断提高我们的服务，我们开展了客户满意度调查，恳请阁下给予合理、公正的评价（在阁下认可的"○"内进行选择），并提出阁下的需求或建议，以便我们改进服务及管理工作。</p>
            <p class="survy-intrduce">填写的资料将由本公司妥为保管，用于统计分析和改进服务。谢谢您的配合！</p>
            <p class="survy-last">深圳市正宗智联企业管理咨询有限公司</p>
        </div>
        <div class="survy-intrduce-list">
            <div class="survy-item-wrap">
                <p class="survy-topic"> <span class="iconfont-financing icons">&#xe69b;</span><span>您对我们的服务满意度如何？</span></p>
                <div class="survy-answer-list">
                    <RadioGroup v-model="serverSatisfaction" vertical>
                        <Radio label="1">
                            <Icon  ></Icon>
                            <span>非常满意</span>
                        </Radio>
                        <Radio label="2">
                            <Icon  ></Icon>
                            <span>满意</span>
                        </Radio>
                        <Radio label="3">
                            <Icon  ></Icon>
                            <span>满意</span>
                        </Radio>
                        <Radio label="4">
                            <Icon  ></Icon>
                            <span>不满意</span>
                        </Radio>
                    </RadioGroup>
                </div>
            </div>


            <div class="survy-item-wrap">
                <p class="survy-topic"> <span class="iconfont-financing icons">&#xe69b;</span><span>您对我们的平台页面满意度如何？</span></p>
                <div class="survy-answer-list">
                    <RadioGroup v-model="plateSatisfaction" vertical>
                        <Radio label="1">
                            <Icon  ></Icon>
                            <span>非常满意</span>
                        </Radio>
                        <Radio label="2">
                            <Icon  ></Icon>
                            <span>满意</span>
                        </Radio>
                        <Radio label="3">
                            <Icon  ></Icon>
                            <span>满意</span>
                        </Radio>
                        <Radio label="4">
                            <Icon  ></Icon>
                            <span>不满意</span>
                        </Radio>
                    </RadioGroup>

                </div>
            </div>


            <div class="survy-item-wrap">
            <p class="survy-topic"> <span class="iconfont-financing icons">&#xe69b;</span><span>您对我们的安全及保密程度满意度如何？</span></p>
            <div class="survy-answer-list">
                <RadioGroup v-model="safeSatisfaction" vertical>
                    <Radio label="1">
                        <Icon  ></Icon>
                        <span>非常满意</span>
                    </Radio>
                    <Radio label="2">
                        <Icon  ></Icon>
                        <span>满意</span>
                    </Radio>
                    <Radio label="3">
                        <Icon  ></Icon>
                        <span>满意</span>
                    </Radio>
                    <Radio label="4">
                        <Icon  ></Icon>
                        <span>不满意</span>
                    </Radio>
                </RadioGroup>

            </div>
        </div>

            <div class="survy-item-wrap">
                <p class="survy-topic"> <span class="iconfont-financing icons">&#xe69b;</span><span>您对我们的安全及保密程度满意度如何？</span></p>
                <div class="survy-answer-list">
                    <RadioGroup v-model="overallSatisfaction" vertical>
                        <Radio label="1">
                            <Icon  ></Icon>
                            <span>非常满意</span>
                        </Radio>
                        <Radio label="2">
                            <Icon  ></Icon>
                            <span>满意</span>
                        </Radio>
                        <Radio label="3">
                            <Icon  ></Icon>
                            <span>满意</span>
                        </Radio>
                        <Radio label="4">
                            <Icon  ></Icon>
                            <span>不满意</span>
                        </Radio>
                    </RadioGroup>

                </div>
            </div>

        </div>

    </div>

</template>

<style lang="scss">
    .survy-wrap{
        padding: 2em 3em;
        background: white;
        margin-top: 1em;
        .survy-title{
            text-align: center;
            font-size: 20px;
            line-height: 3em;
        }
        .survy-intrduce-content{
            font-size: 16px;
            .survy-name{

            }
            .survy-intrduce{
                text-indent: 2em;
                line-height:2em;

            }
            .survy-last{
                text-align: right;

            }
        }
        .survy-intrduce-list{
            .survy-item-wrap{
                padding: 1em;
                border: 1px solid #ccc;
                border-radius: 5px;
                margin: 1em 0px;
                .icons{
                    font-size: 12px;
                    transform: scale(0.7);
                    color:#ccc;
                    display: inline-block;
                    padding-right: 1em;
                }
                .survy-answer-list{
                    margin-left: 2em;
                }
            }

        }

    }

</style>

<script>


    export default {
        name: "survey-index",
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
                serverSatisfaction:1,
                plateSatisfaction:1,
                safeSatisfaction:1,
                overallSatisfaction:1

            }

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
