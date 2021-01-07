import {reqGetBaseCategoryList} from "../../api/home"
export default {
    state:{
        categoryList:[]
    },
    actions:{
        async getBaseCategoryList(store){
            const result = await reqGetBaseCategoryList()
            // console.log(result)
            store.commit("GET_BASE_CATEGORYLIST",result)
        }
    },
    mutations:{
        GET_BASE_CATEGORYLIST(state,categoryList){
            state.categoryList = categoryList
        }
    },
    getters:{}
}