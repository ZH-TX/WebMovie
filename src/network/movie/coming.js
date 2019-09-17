import axios from 'axios'







export function getCome(cityId){
    return axios({
         url:'/api/movieComingList',
         params:{
            cityId,

         }
    })
   
}