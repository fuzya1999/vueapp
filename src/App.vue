<template>
  <div id="app">
    <CommonHeader :test="test"></CommonHeader>
    <router-view class="content" @swichTab="swichTab"/>
    <CommonFooter :footerBg='test.bgColor' :menuList="menuList"></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    swichTab(menuName){
      this.menuList.forEach(menu=>{
        if(menu.name === menuName){
          this.test = menu;
        }
      })

    }
  },
  data(){
    return{
      test:{},
      menuList:[
        {
          title:'电影',
          bgColor:'#9a1c1b',
          name:'movie',
          path: '/movie',
        },{
          title:'音乐',
          bgColor:'#438d83',
          name:'music',
          path: '/music',
        },{
          title:'书籍',
          bgColor:'#795548',
          name:'book',
          path: '/book',
        },{
          title:'图片',
          bgColor:'#4d5581',
          name:'photo',
          path: '/photo',
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .content{
    margin-top: 1rem;
    margin-bottom:1.5rem;
    overflow:hidden;
  }
</style>
