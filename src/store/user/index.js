import { setToken,getToken,removeToken } from "@/utils/token";
import { reqGetCode, reqRegister, reqUserLogin, reqUserInfo, reqUserLogout } from "@/api"
const state = {
    code: "",
    token: getToken(),
    UserInfo:{},
}
const actions = {
    async getCode({commit},phone) {
        let result = await reqGetCode(phone);
        if (result.data.code == 200) {
            commit('GETCODE',result.data.data)
            return "ok"
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async registerHandle({commit},data) {
        let result =await reqRegister(data);
        if (result.data.code === 200)
            return "ok"
        else
            return Promise.reject(new Error('faile'));
    },
    async UserLogin({commit},data) {
        let result = await reqUserLogin(data);
        if (result.data.code === 200) {
            commit("USERTOKEN", result.data.data.token)
            setToken(result.data.data.token);
            return "ok"
        }
        else
            return Promise.reject(new Error("faile"));
    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo();
        if (result.data.code === 200) {
            commit('GETUSERINFO', result.data.data);
            return "ok"
        }
        else
            return Promise.reject(new Error('faile'));
    },
    async UserLogout({commit}) {
        let result = await reqUserLogout();
        if (result.data.code === 200) {
            commit('USERLOGOUT');
            return "ok";
        } else
            return Promise.reject(new Error('faile'));
    }
}
const mutations = {
    GETCODE(state,code) {
        state.code = code;
    },
    USERTOKEN(state,token) {
        state.token = token;
    },
    GETUSERINFO(state,UserInfo) {
        state.UserInfo = UserInfo;
    },
    USERLOGOUT(state) {
        state.token = '';
        state.UserInfo = {};
        removeToken();
    }
}
const getters = {
    loginName(state) {
        return state.UserInfo.loginName;
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}