<template>
    <div class="item-rank-content">
        <span class="rank-num" :style="rankStyle">{{rankData.rankNum}}</span><span class="rank-name">{{rankData.name}}</span>
    </div>

</template>

<style lang="scss">
    .item-rank-content{
        margin-bottom: .5em;
        cursor: pointer;
        .rank-num{
            width: 2em;
            height: 2em;
            line-height: 2em;
            text-align: center;
            display: inline-block;
            border: transparent;
            border-radius: 5px;
            color: white;
            font-size: 20px;

        }
        .rank-name{
            display: inline-block;
            padding-left: 1em;
            font-size: 16px;

        }
    }

</style>

<script>


    export default {
        name: "itemRank",
        props: {
            rankData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        computed:{
            rankStyle(){
                if(this.rankData && this.rankData.rankNum){
                    switch ( this.rankData.rankNum){
                        case 1 :
                        case "1":
                           return {"background":"rgb(255, 0, 51)"};
                            break;
                        case 2:
                        case "2":
                            return {"background":"rgb(255, 51, 51)"};
                            break;
                        case "3":
                        case  3:
                            return {"background":"rgb(255, 102, 51)"};
                            break;
                        default:
                            return {"background":"rgb(161, 161, 161)"};
                            break;

                    }
                }else{

                }


            }
        },
        components: {},
        data() {
            return {

            }

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
