<template>
  <div>
    <div class="movie">
      <div class="movie-aaa">
        <div class="movie-img">
          <img :src="this.$route.query.cover" alt="">
        </div>
        <div class="movie-info">
          <div class="movie-info-title">{{this.$route.query.title}}</div>
          <div class="movie-info-avsta">
            <div class="movie-info-av">观众评：<span class="movie-info-ave">{{this.$route.query.rate}}</span></div>
            <div class="movie-info-sta">主演：<span v-for="item in this.$route.query.casts" class="movie-info-star">{{item}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="details">简介：</h1>
    <p class="movie-details" v-html='det'></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      det:this.$route.query.detail
    }
  }
}
</script>

<style lang="scss" scoped>
  .movie {
    display: flex;
    overflow:hidden;
    border-bottom:.013333rem #ccc solid;
    &-aaa{
      display: flex;
      // height: 2rem;
      width: 90%;
      margin:0.2rem;
    }
    &-img{
      flex: 1;
      width: 0;
      img {
        width:100%;
        height:100%;
      }
    }
    &-info{
      flex: 3;
      width: 0;
      position: relative;
      padding-left:0.2rem;
      padding-right:0.2rem;
      &-title{
        margin-top:0.1rem;
        color:#333;
        font-weight:700;
        font-size:0.34rem;
      }
      &-avsta {
        position: absolute;
        width: 4.3rem;
        bottom: 0.2rem;
        color: #333333;
        &-av{
          margin-top:0.5rem;

          &e{
            font-weight:700;
            color:#faaf00;
          }
        }
        &-sta{
          margin-top:0.1rem;
          &r{
            color:#666;
          }
        }
      }
    }
    &-details {
      font-size: 0.3rem;
      line-height: 0.5rem;
      margin: 0.2rem;
      text-indent: 0.6rem;
      white-space: pre-wrap;
    }
  }
  .details {
    margin: 0.2rem;
    font-size: 0.5rem;
    color: #faaf00;
  }
</style>
