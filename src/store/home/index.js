import { reqCateGoryList } from "@/api";
const state = {
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    async categoryList({commit}) {
        let result = await reqCateGoryList();
        if(result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }
        // console.log(result);
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}