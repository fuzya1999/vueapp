<template>
    <header class="header" :style="{background:test.bgColor}">
        <span class="header-home" @click="goBack">首页</span>
        <h3 class="header-title">{{test.title?test.title:'电影'}}</h3>
    </header>
</template>

<script>
export default {
    props:['test'],
    methods: {
        goBack(){
            this.$router.push('/');
        }
    },
}
</script>

<style lang="scss" scoped>
    .header{
        position:fixed;
        height: 1rem;
        background-color: #9a1c1b;
        line-height:1rem;
        top:0;
        left:0;
        width:100%;
        color:#fff;
        font-size: 0.4rem;
        z-index: 9999;
        &-title{
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }

        &-home{
            margin-left:0.2rem;
        }
    }

</style>
