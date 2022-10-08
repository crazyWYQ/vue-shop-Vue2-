import { reqTradeData,reqUserAddress } from "@/api";
const state = {
    TradeData: {},
    userAddress:[],
}
const actions = {
    async getTradeData({commit}) {
        let result = await reqTradeData();
        if(result.data.code === 200)
            commit("GETTRADEDATA", result.data.data);
    },
    async getUserAddress({commit}) {
        let result = await reqUserAddress();
        if (result.data.code === 200)
            commit("GETUSERADDRESS", result.data.data);
    }
}
const mutations = {
    GETTRADEDATA(state, data) { 
        state.TradeData = data || {};
    },
    GETUSERADDRESS(state,userAddress) {
        state.userAddress = userAddress || [];
    }
}
const getters = {
    detailArrayList(state) {
        return state.TradeData.detailArrayList || [];
    },
    tradeNo() {
        return state.TradeData.tradeNo;
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}