<template>
    <div class="higth-search-warp">
        <input type="text"
               class="search-input"
               :style="styleObject"
                :placeholder="sPlaceholder">
        <p class="iconfont-financing icons" >&#xe704;</p>
    </div>
</template>

<style lang="scss">
    .higth-search-warp{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #ccc;
        .search-input{
            height: 2.2em;
            border-radius: 5px;
            outline: none;
            border: 1px solid transparent;
            padding: 0.5em;
        }
        .icons{
            width: 2em;
            height: 2em;
            line-height: 2em;
            cursor: pointer;
        }
    }

</style>

<script>


    export default {
        name: "highSearch",
        props: {
            styleObject: {
                type: Object,
                default() {
                    return {
                        width:"10em"
                    }
                }
            },
            sPlaceholder:{
                type:String,
                default(){
                    return "请输入..."
                }
            }


        },

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
