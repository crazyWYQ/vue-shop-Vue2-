import { reqGoodsInFo, reqAddOrUpdata } from "@/api";
import { getUserId } from "@/utils/uuid_token";
const state = {
    goodsInFo: {},
    uuid_token:getUserId(),
};
const actions = {
    async goodsInFo({commit},skuid) {
        let result = await reqGoodsInFo(skuid);
        if(result.data.code)
        commit("GOODSINFO",result.data.data)
    },
    async addOrUpdata({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdata(skuId, skuNum);
        if (result.data.code==200) return "ok";
        else return Promise.reject(new Error("failed"));
    }
};
const mutations = {
    GOODSINFO(state,data) {
        state.goodsInFo = data;
    }
};
const getters = {
    categoryView(state) {
        return state.goodsInFo.categoryView || {};
    },
    skuInfo() {
        return state.goodsInFo.skuInfo || {};
    },
    spuSaleAttrList() {
        return state.goodsInFo.spuSaleAttrList || [];
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}