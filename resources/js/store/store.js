import axios from "axios"

export default {
    state:{
        category:[],
    },

    getters:{
        categoryList(state){
            return state.category;
        }
    },

    actions:{
        getCategoryList(context){
            axios.get('/categoryList').then((response)=>{
                context.commit('categoryList',response.data.categoryList)
            })
        }
    },

    mutations:{
        categoryList(state,responseData){
            return state.category = responseData;
        }
    },

   
}