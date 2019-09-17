const state= {
    nm:sessionStorage.getItem("NM")||'北京' ,
    id: sessionStorage.getItem("ID")||1,

}
// const getters={

// },
const mutations= {
    CITY_INFO(state, playload){
        state.nm=playload.nm;
        state.id=playload.id;

    }

}
const actions= {

}
const modules={

}

export default{
    namespaced:true,
    state,
    // getters,
    mutations,
    actions,
    modules,
}

// 注意符号的使用;