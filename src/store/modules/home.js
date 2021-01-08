import {reqGetBaseCategoryList,reqGetBanners,reqGetFloors} from "../../api/home"
export default {
    state:{
        categoryList:[],
        banners:[],
        floors:[]
    },
    actions:{
        async getBaseCategoryList(store){
            const result = await reqGetBaseCategoryList()
            // console.log(result)
            store.commit("GET_BASE_CATEGORYLIST",result)
        },
        async getBanners(store){
            const result = await reqGetBanners()
            console.log(result)
            store.commit("GET_BANNERS",result)
        },
        async getFloors(store){
            const result = await reqGetFloors()
            console.log(result)
            store.commit("GET_FLOORS",result)
        }
    },
    mutations:{
        GET_BASE_CATEGORYLIST(state,categoryList){
            state.categoryList = categoryList
        },
        GET_BANNERS(state,banners){
            state.banners = banners
        },
        GET_FLOORS(state,floors){
            state.floors =floors
        }
    },
    getters:{}
}