//引入vue-router路由插件
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";

//使用插件
Vue.use(VueRouter);
//引入store
import Home from'@/pages/Home'
import Login from'@/pages/Login'
import Register from'@/pages/Register'
import Search from'@/pages/Search'
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path : '/home',
            component: Home,
            meta: {
                isHideFooter: true
            }
        },
        {
            path : '/login',
            component: Login,
            meta: {
                isHideFooter: false
            }
        },
        {
            path : '/search/:keyword?',
            name:'search',
            component: Search,
            meta: {
                isHideFooter: true
            }
        },
        {
            path : '/register',
            component: Register,
            meta: {
                isHideFooter: false
            }
        }
    ]
})