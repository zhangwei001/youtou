

export default {
    namespaced: true,
    state: {
        isShowUserCenterHomePage:true
    },
    mutations: {
        userCenterNavHandle(state){
             state.isShowUserCenterHomePage = false
        },

    },
    actions: {

    },
    getters: {

    }
}
