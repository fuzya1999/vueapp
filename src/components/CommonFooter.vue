<template>
    <ul class="footer" :style="{background:footerBg}">
        <li  v-for="(menu,index) in menuList" :key="index" class="footer-menu">
            <router-link :to="menu.path">{{menu.title}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props:['menuList','footerBg'],
}
</script>

<style lang="scss" scoped>
    .footer{
        position:fixed;
        display:flex;
        bottom:0;
        width:100%;
        height:1rem;
        line-height:1rem;
        background:#9a1c1b;
        &-menu{
            flex-grow:1;
            text-align:center;
            color:#fff;
            a{
                color:#ccc;
                outline:none;
                &.router-link-active{
                    color:#fff;
                }
            }
        }
    }
</style>
