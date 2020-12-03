import Vue from 'vue';
import VueRouter from 'vue-router';
import BecomeAcontributer from '../components/BecomeAcontributer.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {
        path:'/',
        component:Home,
        name:'Home'
    },
    {   
         path:'/BecomeAcontributer',
         component:BecomeAcontributer,
         name:'BecomeAcontributer'
    
    }]

    
})
export default router