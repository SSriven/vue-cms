<template>
    <div>
        <!-- 轮播图-->
        <swipe :auto="4000">
            <swipe-item v-for="(item,index) in imgList" :key="index"><img :src="item" ></swipe-item>
        </swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgList:[]
        }
    },
    created(){
      this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            // this.$http.get('http://vue.studyit.io/api/getlunbo').then(res=>{
            //     console.log(res.body);
            // })
            this.imgList.push("http://r.photo.store.qq.com/psb?/V13hSm230CxF6T/.binvpTrJJbgvTTuVq91atjLCnC2i.ZsPwiQxBveJaI!/r/dMMAAAAAAAAA");
            this.imgList.push("http://r.photo.store.qq.com/psb?/V13hSm230CxF6T/efWBysaxvz2izbEEzizJEg8XbjNsDfh5HzmAX01N50A!/r/dD4BAAAAAAAA");
            this.imgList.push("http://r.photo.store.qq.com/psb?/V13hSm230CxF6T/.binvpTrJJbgvTTuVq91atjLCnC2i.ZsPwiQxBveJaI!/r/dMMAAAAAAAAA");
        }
    }
}
</script>

<style scoped>
    .mint-swipe{
        height:200px;
    }
    .mint-swipe img{
        width: 100%;
        height:100%;
    }
    .mint-swipe-item:nth-child(1){
        background-color: red;
    }
    .mint-swipe-item:nth-child(2){
        background-color: green;
    }
    .mint-swipe-item:nth-child(3){
        background-color: blue;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border:none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
    .mui-media-body{
        font-size: 13px !important;
    }
</style>