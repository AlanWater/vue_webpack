/**
 * Created by shenyong on 2017/7/2.
 */
import Vue from 'vue';
import Router from 'vue-router';
import test1 from './../templates/test1.vue';
import test2 from './../templates/test2.vue';
Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/test1',
            component: test1
        },
        {
            path: '/test2',
            component: test2
        }
    ]
})