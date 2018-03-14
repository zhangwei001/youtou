<template>
    <div class="applaction-soft-items">
        <img :src="softInfo.img" alt="">
        <p class="app-name">{{ softInfo.name}}</p>
    </div>

</template>

<style lang="scss">
    .applaction-soft-items{
        width: 13em;
        border-radius: 5px;
        border:1px solid #ccc;
        padding: 1em;
        margin: 0px 0.5em;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;
        background: white;
        img{
            width: 100%;
        }
    }

</style>

<script>


    export default {
        name: "softApp",
        props: {
            softInfo: {
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
