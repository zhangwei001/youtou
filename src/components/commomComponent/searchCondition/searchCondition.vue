<template>
    <div class="search-condition-item-wrap">
        <div class="search-content-list">
                <div class="search-content-item">
                    <div class="search-title-wrap">
                        <p  class="search-item-title ">{{ searchConditionData.searchTitile }} <span>:</span></p>
                    </div>
                    <template v-for="item in searchConditionData.searchContent">
                        <div class="search-item-content  " @click="selectItemHandle(searchConditionData.searchItemId,item.value)">
                            <p class="search-item-name" :class="{'selected-item': item.value==-1? true:false}">{{ item.name }}</p>
                        </div>
                    </template>
                    <div class="search-item-content" v-if="searchConditionData.otherAction">
                        <p class="iconfont-financing multiple-select" v-if="searchConditionData.otherAction.type == 'multipleSelect'" v-html="searchConditionData.otherAction.name"> </p>
                        <p class="more" v-if="searchConditionData.otherAction.type == 'more'" v-html="searchConditionData.otherAction.name"> </p>

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
                .search-title-wrap{
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0px 1em;
                    .search-item-title{

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
            return {}

        },
        created() {

        },
        methods: {

            selectItemHandle(searchItemId,searchContentId){
                this.$emit("select-search-item", searchItemId , searchContentId )
            }
        },
        watch: {},
    }
</script>
