<template>
  <div>
    <i class="iconfont one" @click="before()"> &#xe607;</i>
    <router-link to="/photo" :style="{background:'url('+this.getPhoto[this.indexs].src+') no-repeat center/contain #000'}" class="ccc"></router-link>
    <i class="iconfont two" @click = "next()"> &#xe616;</i>
  </div>
</template>

<script>
  import axios from "axios";
  import getPhotos from "../../../public/data/photo.json"
    export default {
      data(){
        return{
          getPhoto:'',
          indexs:'',
        }
      },
      created() {
        this.getPhoto = getPhotos.photoData
        this.indexs = this.$route.params.index


        // this.getSrc = $route.params.src;
      },
      methods:{
        before(){
          if(this.indexs != 0){
            this.indexs--;
          }else {
            this.indexs = this.getPhoto.length - 1;
          }
        },
        next(){
          if (this.indexs != this.getPhoto.length - 1) {
            this.indexs ++;
          } else {
            this.indexs = 0;
          };
        },
      }



    }
</script>

<style lang="scss" scoped>
.ccc{
  width: 100%;
  position: absolute;
  top:1rem;
  bottom: 1rem;
}
  .iconfont{
    position: fixed;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.6rem;
    top: 50%;
    transform: translateY(-0.5rem);
    z-index: 9999;
    color: #36d5c5;
  }
  .two {
    left: 5.82rem;
  }
</style>
