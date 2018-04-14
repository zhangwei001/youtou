<style lang="scss">

    $prefixCls:'daydao_content_app';

    ##{$prefixCls}_wrap{

    }
    ##{$prefixCls}_content{
        position: relative;

    }

</style>

<template>
    <div :id="prefixCls + '_wrap'" class="clearfix">
        <!--右侧数据内容-->
        <div :id="prefixCls + '_content'"  >
            <slot name="content"> </slot>

        </div>

    </div>
</template>

<script type="text/babel">
    import "src/assets/style/fontIcon.css";  //引用公共图标库
    export default {
        name: 'App'
        ,data () {
            return {
                prefixCls:'daydao_content_app'
            }
        }
        ,watch:{

        }
        ,beforeCreate(){

        }
        ,created() {
        }
        ,mounted(){


        }

        ,methods:{

        }
    }
</script>
