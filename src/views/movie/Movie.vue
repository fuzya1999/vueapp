<template>
    <div>
        <ul>
            <li v-for="(movie,index) in movieList" :key="movie.id" class="movie">
            <router-link :to="{path:'/moviedetail/', query:{ title:movie.title, detail:movie.detail,rate:movie.rate,casts:movie.casts,cover:movie.cover}}" class="movie-aaa">
                <div class="movie-img">
                    <img :src="movie.cover" alt="">
                </div>
                <div class="movie-info">
                    <div class="movie-info-title">{{movie.title}}</div>
                  <div class="movie-info-avsta">
                    <div class="movie-info-av">观众评：<span class="movie-info-ave">{{movie.rate}}</span></div>
                    <div class="movie-info-sta">主演：<span v-for="item in movie.casts" :key="item.id" class="movie-info-star">{{item}}</span></div>
                  </div>
                </div>
            </router-link>
            </li>
        </ul>
        <div class="loading" v-show="isLoading">
            <img src="@/assets/images/loading.gif">
        </div>
        <h1 v-show="isEnd" class="noEnd">没有更多的了</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            movieList:[],
           mov:'',
            isLoading:true,
            isEnd:false,
        }
    },
    methods: {
        getData(){
            // let url = 'https://bird.ioliu.cn/v2?url=https://movie.douban.com/j/new_search_subjects?';
            axios.get("data/movie.json").then(res=>{
                this.isLoading = false;
                //由于接口不能用，不得已采用假分页
                let list = res.data.data.slice(this.movieList.length,this.movieList.length + 5);
                if (list.length < 5){
                    this.isEnd = true;
                };
                this.movieList= this.movieList.concat(list);
            });
        },
    },
    beforeCreate() {
    },
    created() {
        this.$emit('swichTab','movie');
        this.getData();
    },
    beforeMount() {

    },
    mounted() {
        window.onscroll = ()=>{
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        // console.log(scrollTop,clientHeight,scrollHeight);
        if (scrollHeight == scrollTop + clientHeight && !this.isEnd){
            this.isLoading = true;
            this.getData();
        }
        }
    },

}
</script>

<style lang="scss" scoped>
    .movie {
        display: flex;
        width: 100%;
        padding:0.2rem;
        border-bottom:.013333rem #ccc solid;
        &-aaa{
            display: flex;
            width: 100%;
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
    }
    .loading{
        position:fixed;
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        text-align:center;
        bottom:1rem;
        img{
            width:0.5rem;
        }
    }
    .noEnd{
        text-align:center;
        width:100%;
        height:1rem;
        line-height:1.5rem;
        overflow:visible;
    }
</style>
