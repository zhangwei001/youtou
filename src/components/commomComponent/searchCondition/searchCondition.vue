<template>
    <div class="search-condition-item-wrap">
        <div class="search-content-list">
                <div class="search-content-item">
                    <div class="search-title-wrap">
                        <p  class="search-item-title "><span>{{ conditionData.searchTitile }}</span> <span>：</span></p>
                    </div>
                    <div class="search-details-wrap">
                        <template v-for="item in conditionData.searchContent">
                            <div class="search-item-content  " @click="selectItemHandle(conditionData.searchItemId,item.number)">
                                <p class="search-item-name" :class="{'selected-item': conditionData.searchItemId.includes(item.number) ||  item.number== conditionData.searchItemId ? true:false}">{{ item.name }}</p>
                            </div>
                        </template>
                        <div class="search-item-content" v-if="conditionData.otherAction">
                            <p class="iconfont-financing multiple-select" :class="{'active-multi': conditionData.otherAction.isSelect}" @click="toggleMultSelectHandle" v-if="conditionData.otherAction.type == 'multipleSelect'" v-html="conditionData.otherAction.name"> </p>
                            <p class="more" v-if="conditionData.otherAction.type == 'more'" v-html="conditionData.otherAction.name"> </p>

                        </div>
                    </div>
                </div>
        </div>

    </div>

</template>

<style lang="scss">
    .search-condition-item-wrap{
        height: 3em;
        line-height: 3em;
        margin: 1em 0px;
        font-size: 16px;
        .search-content-list{
            .search-content-item{
                display: flex;
                .search-title-wrap{
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding: 0px 1em;
                    .search-item-title{
                        padding: 0px 5px;
                        border-radius: 5px;
                        text-align: center;
                        width: 7em;
                        display: inline-flex;
                    }
                    .all-item-search{
                        width: 3em;
                        text-align: center;
                        cursor: pointer;

                    }
                }
                .search-item-content{
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin-right: 1em;
                    .search-item-name{
                        padding: 0px 1em;
                        cursor: pointer;
                    }
                    .more{
                        cursor: pointer;
                        opacity: 0.6;

                    }
                    .multiple-select{
                        border: 1px solid #ccc;
                        padding: 0px 1em;
                        height: 2em;
                        line-height: 2em;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    .active-multi{
                        background: rgba(57, 210, 55, 0.95);
                        color: wheat;
                        border-radius: 5px;
                    }
                }
                .selected-item{
                    background: rgba(34, 182, 255, 0.95);
                    color: wheat;
                    border-radius: 5px;
                }

            }

        }

    }

</style>

<script>


    export default {
        name: "searchCondtion",
        props: {
            searchConditionData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {},
        data() {
            return {
                 conditionData:this.searchConditionData
            }

        },
        created() {

        },
        methods: {

            selectItemHandle(searchItemId,searchContentId){
                this.$emit("select-search-item", searchItemId , searchContentId );
                if( this.conditionData.searchType == 'single'){
                    this.conditionData.searchItemId = Array.of(searchContentId);
                }else if(this.conditionData.searchType == 'multi'){
                   if( this.conditionData.otherAction.isSelect ){
                       if(this.conditionData.searchItemId.includes( searchContentId )){
                           this.conditionData.searchItemId.splice( this.conditionData.searchItemId.indexOf(searchContentId),1)
                       }else{
                           this.conditionData.searchItemId =this.conditionData.searchItemId.concat(searchContentId)
                       }
                    }else{
                        this.conditionData.searchItemId = Array.of(searchContentId);
                    }
                }
            },
            toggleMultSelectHandle(){
                this.conditionData.otherAction.isSelect = ! this.conditionData.otherAction.isSelect;

                this.conditionData.searchItemId =  [this.conditionData.searchContent[0].number]
            }
        },
        watch: {},
    }
</script>
