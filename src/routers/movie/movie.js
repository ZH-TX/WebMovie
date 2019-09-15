export default [
    {
        path:'/movie',
        redirect:'/movie/playing'
    },
    {
        path:'city',
        component:() =>import ('components/content/movie/cityComp')
    },
    {
        path:'playing',
        component:() =>import ('components/content/movie/playComp')
    },
    {
        path:'coming',
        component:() =>import ('components/content/movie/comeComp')
    },
    {
        path:'search',
        component:() =>import ('components/content/movie/searchComp')
    },
   

]