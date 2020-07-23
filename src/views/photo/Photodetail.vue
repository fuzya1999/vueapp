<template>
  <div>
    <router-link to="/photo" :style="{background:'url('+$route.params.src+') no-repeat center/contain #000'}" class="ccc"></router-link>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          getSrc:'',
        }
      },
      created() {
        console.log(11);
        // this.getSrc = $route.params.src;
      }
    }
</script>

<style>
.ccc{
  width: 100%;
  position: absolute;
  top:1rem;
  bottom: 0;

}
</style>
