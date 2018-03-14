<template>
   <div class="footer-warp">
       <div class="foot-img-wrap">
           <img src="../../../assets/images/footer.png" alt="">
       </div>
       <div class="foot-content">
           <div class="foot-item">
                <p class="item-title">友情链接</p>
                 <div>
                     <ul>
                         <li>优投信息</li>
                         <li>优投信息</li>
                         <li>优投信息</li>
                         <li>优投信息</li>
                     </ul>
                 </div>

           </div>
           <div class="foot-item">
               <p class="item-title">友情链接</p>
               <div>
                   <ul>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                   </ul>
               </div>

           </div>
           <div class="foot-item">
               <p class="item-title">友情链接</p>
               <div>
                   <ul>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                   </ul>
               </div>

           </div>
           <div class="foot-item">
               <p class="item-title">友情链接</p>
               <div>
                   <ul>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                       <li>优投信息</li>
                   </ul>
               </div>

           </div>


       </div>

   </div>

</template>

<style lang="scss">
    .footer-warp{
        margin-bottom: 3em;
        background-color: gray;
        color: white;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1em;
        .foot-img-wrap{
            width: 200px;
            img{width: 100%}
        }
        .foot-content{
            display: flex;
            margin-left: 2%;
            align-self: flex-start;
            width: 100%;
            .foot-item{
                width: 25%;
                .item-title{font-size: 16px;}
                li{ list-style: none;
                    line-height: 1.5em;
                    height: 1.5em;
                    cursor: pointer;
                  }
            }

        }
    }

</style>

<script>


    export default {
        name: "commFoot",
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
            return{

            }

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
