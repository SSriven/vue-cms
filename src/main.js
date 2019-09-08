
//入口文件
import Vue from "vue";

//导入路由的包
import VueRouter from "vue-router";
//安装路由
Vue.use(VueRouter);
//导入自己的router.js路由模块
import router from './router'

//导入vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource)

//导入App组件
import app from './App.vue';

//按需导入Mint-UI中的组件
import 'mint-ui/lib/style.css'
import { Header ,Swipe, SwipeItem} from 'mint-ui';
Vue.component("my-header", Header);
Vue.component("swipe", Swipe);
Vue.component("swipe-item", SwipeItem);

//导入 MUI 样式
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'





let vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router  //挂载路由对象到vm实例上
});