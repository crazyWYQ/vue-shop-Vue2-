import { reqShopCartData,reqDeleteCartById,reqIsCheckById } from "@/api"
const state = {
    cartList: [],
}
const actions = {
   async getShopCartData({commit}) {
        let result = await reqShopCartData();
        if (result.data.code === 200) {
            commit('SHOPCARTLIST', result.data.data);
        }
    },
    async deleteCartById({commit},skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.data.code == 200) { 
            return "ok";
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async changeCheckById({ commit }, { skuId, isChecked }) {
        let result = await reqIsCheckById(skuId, isChecked);
        if (result.data.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    deleteChooseCart({dispatch,getters}) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked ? dispatch('deleteCartById', item.skuId) : "";
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    async allChoose({dispatch,getters},isChecked) {
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(item => { 
            let promise = dispatch('changeCheckById', { skuId: item.skuId, isChecked })
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
}
const mutations = {
    SHOPCARTLIST(state,cartList) {
        state.cartList = cartList;
    }
}
const getters = {
    cartList(state) { 
        return state.cartList[0]||{}
    },
}
export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
}