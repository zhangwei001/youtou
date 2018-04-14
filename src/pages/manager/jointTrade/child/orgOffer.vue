<template>
    <div class="org-offer-wrap">
        <div class="offer-wrap-head">
            <tab-head></tab-head>
        </div>
        <div class="content-item-wrap">
            <org-item></org-item>
            <org-item></org-item>
        </div>

    </div>

</template>

<style lang="scss">
    .org-offer-wrap{
        background: white;
    }

</style>

<script>

    import orgItem  from "./components/orgItem.vue";
    import tabHead from "./components/tabHead.vue";

    export default {
        name: "orgOffer",
        props: {
            addListData: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {
            orgItem ,
            tabHead
        },
        data() {
            return {}

        },
        created() {

        },
        methods: {},
        watch: {},
    }
</script>
