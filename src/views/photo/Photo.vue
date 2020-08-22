<template>
    <div class="aa">
        <div class="clearfix">
            <img  v-for="(photoa,index) in getPhoto" :key="index" :src="photoa.src" class="img" @click="big(index)">
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
      big(index) {
      // this.$router.push('/photodetail/');
console.log(index)
      this.$router.push({name:'photodetail',params:{index:index}});}
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
