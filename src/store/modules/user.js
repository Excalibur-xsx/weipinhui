import {reqRegister} from "../../api/user"

export default {
    state:{},
    actions:{
      async register({ commit }, { phone, password, code }){
           await reqRegister({ phone, password, code })
           console.log(commit)
        }
       
    },
    mutations:{},
    getters:{}
}