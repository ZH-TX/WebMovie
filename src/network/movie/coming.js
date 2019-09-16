import axios from 'axios'







export function getCome(){
    return axios({
         url:'/api/movieComingList?cityId=10',
         params:{

         }
    })
   
}