import VueRooter from 'vue-router';

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue'

let router = new VueRooter({
    routes:[
        {path:"/",redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/search',component:SearchContainer},
        {path:'/cart',component:ShopcartContainer},
        {path:'/member',component:MemberContainer},
    ],
    linkActiveClass:'mui-active'
});

export default router;