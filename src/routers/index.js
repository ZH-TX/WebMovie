import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import moviechild from './movie/movie'

Vue.use(Router)

const Movie=()=>import ('views/Movie/index')
const Cinema=()=>import ('views/Cinema/index')
const Mine=()=>import ('views/Mine/index')





const routes=[
    {
      path:'/',
      redirect:'/movie'
    },  
    {
      path: '/movie',
      // name: 'movie',
      component: Movie,
      children:moviechild,
    },
    {
      path: '/cinema',
      // name: 'cinema',
     
      component: Cinema,
    },
    {
      path: '/mine',
      // name: 'mine',
     
      component: Mine,
    },
  

]



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
