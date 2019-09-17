import axios from 'axios'







export function getPlay(cityId){
    return axios({
         url:'/api/movieOnInfoList?',
         params:{
            cityId,

         }
    })
   
}




export class Info{
    constructor(){

    }
}