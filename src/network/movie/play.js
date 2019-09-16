import axios from 'axios'







export function getPlay(){
    return axios({
         url:'/api/movieOnInfoList?cityId=10',
         params:{

         }
    })
   
}




export class Info{
    constructor(){

    }
}