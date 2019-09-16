import axios from 'axios'







export function getSer(kw){
    return axios({
         url:'/api/searchList?cityId=10',
         params:{
             kw,

         }
    })
   
}