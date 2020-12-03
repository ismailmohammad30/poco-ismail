import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BecomeAcontributer from './components/BecomeAcontributer.vue';
import Home from './components/Home.vue';

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


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');





///////toggleButton//////
let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',(e) =>{
    e.preventDefault();
    navbarLinks.classList.toggle('active')
});