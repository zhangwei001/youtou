<template>
    <div class="policy-support-item-wrap">
        <div class="left-content">
            <div class="item-main-wrap">
                <div class="img-wrap">
                    <img src="/web/src/assets/images/policy-item-img.png" alt="">
                </div>
                <p class="text">项目扶持</p>
            </div>

        </div>
        <div class="right-item-wrap">
            <div class="item-content-wrap">
                <div class="item-content">
                    <div class="item-img-wrap">
                        <img src="/web/src/assets/images/policy-details-img.png" alt="">
                    </div>
                    <p class="text">成功案例</p>
                </div>
                <div class="item-content">
                    <div class="item-img-wrap">
                        <img src="/web/src/assets/images/policy-details-img.png" alt="">
                    </div>
                    <p class="text">成功案例</p>
                </div>
                <div class="item-content">
                    <div class="item-img-wrap">
                        <img src="/web/src/assets/images/policy-details-img.png" alt="">
                    </div>
                    <p class="text">成功案例</p>
                </div>
                <div class="item-content">
                    <div class="item-img-wrap">
                        <img src="/web/src/assets/images/policy-details-img.png" alt="">
                    </div>
                    <p class="text">成功案例</p>
                </div>


            </div>
        </div>
    </div>

</template>

<style lang="scss">
    .policy-support-item-wrap{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .left-content{
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 1em;
            background: white;
            margin-right: 1em;
            .item-main-wrap{

                .img-wrap{
                    width: 180px;
                    img{width: 100%}
                }
                .text{
                    font-size: 22px;
                    color: black;
                    text-align: center;
                    height: 4em;
                    line-height: 3em;
                }

            }
            .item-content-wrap{
                .item-content{
                    .item-img-wrap{
                        width: 215px;
                        img{width: 100%}
                    }

                }

            }

        }
        .right-item-wrap{
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 1em;
            background: white;
            .item-content-wrap{
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                width: 450px;

                .item-content{
                    cursor: pointer;
                    position: relative;
                    padding: 0px .5em .5em 0px;
                    .text{
                        position: absolute;
                        font-size: 18px;
                        left:50%;
                        top:50%;
                        color: white;
                        transform: translate(-50%,-50%);
                    }
                    .item-img-wrap{
                        width: 215px;
                        height: 105px;
                        padding: .6em;
                        img{
                            width: 100%;
                        }
                    }
                }


            }

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
        methods: {},
        watch: {},
    }
</script>
