<template>
    <div class="aa">
        <div class="clearfix">
            <img  v-for="(photoa,index) in getPhoto" :key="index" :src="photoa.src" class="img" @click="big(photoa.src)">
        </div>
    </div>

</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        getPhoto:[],
        getImg:'',
        // getSrc:'',
      }
    },
    created() {
        this.$emit('swichTab','photo');
        axios.get("data/photo.json").then(res=>{
          this.getPhoto = res.data.photoData;
          // console.log(this.getPhoto);
          // this.getPhoto.push('photoa.src');
        });
    },
    methods:{
      big(src) {
        console.log(toString(src));
        // this.$router.push('/photodetail/');

      this.$router.push({name:'photodetail',params:{src:src}});}
    }
  }
</script>

<style lang="scss" scoped>
.img{
  width: 50%;
  float: left;
}
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
  }
  .aa{
    margin-bottom:1rem!important;
  }

</style>
