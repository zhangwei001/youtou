 /*home页面接口数据*/

export default {
    namespaced: true,
    state: {
        industryQueryData:{} ,//行业查询的接口名
    },
    mutations: {
        industryQueryData(state,data){
            state.industryQueryData = data;
        }


    },
    actions: {



    },
    getters: {
        getndustryQueryData(state){
            return  state.industryQueryData
        }

    }
}

