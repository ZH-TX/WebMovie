import axios from 'axios'







export function getCity() {
    return axios({
        url: '/api/cityList',
        params: {

        }
    })

}

export class City {
    constructor(cities) {
        let cityList = [];
        // let hotList=[];


        for (let i = 0; i < cities.length; i++) {
            let firstLet = cities[i].py.slice(0, 1).toUpperCase();

            cityList.push({
                index: firstLet,
                list: [{
                    nm: cities[i].nm,
                    id: cities[i].id,
                    hot: cities[i].hot
                }]
            })
            if (firstLet === cityList.index) {
                cityList[i].list.push({
                    nm: cities[i].nm,
                    id: cities[i].id,
                    hot: cities[i].hot
                });
            }

        }


        // 排序
        cityList.sort((x, y) => x - y);

        return cityList;




        // this.index=cites.index
    }

}

export class City1 {
    constructor(cities, cityList) {
        // let cityList=[];
        // let hotList=[];

        // _this=this;

        for (var i = 0; i < cities.length; i++) {
            var firstLet = cities[i].py.slice(0, 1).toUpperCase();
            // this.index=firstLet;
            // this.nm=cities[i].nm;
            // this.id=cities[i].id;
            // this.hot=cities[i].hot;
            cityList.push({
                index: firstLet,
                list: [{
                    nm: cities[i].nm,
                    id: cities[i].id,
                    hot: cities[i].hot
                }]
            })
            if (firstLet === cityList.index) {
                cityList[i].list.push({
                    nm: cities[i].nm,
                    id: cities[i].id,
                    hot: cities[i].hot
                });
            }


        }

        cityList.sort((x, y) => x - y);

        return cityList;


        // 排序
        // this.sort((x,y)=>x-y);

        // return cityList;




        // this.index=cites.index
    }

}

export class City2 {
    constructor(cities) {
        let cityList = [];
        let hotList=[];

        for (let i=0; i<cities.length;i++){
            if(cities[i].isHot==1){
                hotList.push(cities[i]);
            }
            
        }


        for (let i = 0; i < cities.length; i++) {
            let firstLet = cities[i].py.slice(0, 1).toUpperCase();


            if (toCome(firstLet)) {

                cityList.push({
                    index: firstLet,
                    list: [{
                        nm: cities[i].nm,
                        id: cities[i].id,
                        hot: cities[i].isHot
                    }]
                })
            } else {
                for (let j = 0; j < cityList.length; j++) {
                    if (firstLet === cityList[j].index) {
                        cityList[j].list.push({
                            nm: cities[i].nm,
                            id: cities[i].id,
                            hot: cities[i].isHot
                        });
                    }

                }
            }


            // 排序



        }
        // console.log(cityList);
        cityList.sort((n1, n2) => {
            // console.log(n2.index);
            if (n2.index > n1.index) {
                return -1;
            } else if (n2.index < n1.index) {
                return 1;

            } else {
                return 0;
            }



        });

        console.log(cityList);
        console.log(hotList);
        

        function toCome(firstLet) {
            for (let i = 0; i < cityList.length; i++) {
                if (firstLet === cityList[i].index) {
                    return false;

                }

            }
            return true;

        }



        return {cityList,hotList};

    }
}


function formatCity(cities) {

    let cityList = [];
    // let hotList=[];


    for (let i = 0; i < cities.length; i++) {
        let firstLet = cities[i].py.slice(0, 1).toUpperCase();


        if (toCome(firstLet)) {

            cityList.push({
                index: firstLet,
                list: [{
                    nm: cities[i].nm,
                    id: cities[i].id,
                    hot: cities[i].isHot
                }]
            })
        } else {
            for (let j = 0; j < cityList.length; j++) {
                if (firstLet === cityList[j].index) {
                    cityList[j].list.push({
                        nm: cities[i].nm,
                        id: cities[i].id,
                        hot: cities[i].isHot
                    });
                }

            }
        }


        // 排序



    }
    // console.log(cityList);
    cityList.sort((n1, n2) => {
        // console.log(n2.index);
        if (n2.index > n1.index) {
            return -1;
        } else if (n2.index < n1.index) {
            return 1;

        } else {
            return 0;
        }



    });

    console.log(cityList);

    function toCome(firstLet) {
        for (let i = 0; i < cityList.length; i++) {
            if (firstLet === cityList[i].index) {
                return false;

            }

        }
        return true;

    }





}