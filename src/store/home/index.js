import {reqCategoryList,reqBanner,reqFloor} from "@/api";
const state={
  categoryList: [],
  bannerList: [],
  floorList:[]
}
const actions={
  async categoryList({commit}){
    let result = await reqCategoryList()
    if (result.data.code===200)
      commit('CATEGORYLIST',result.data.data)
  },
  async BannerList({commit}) {
    let result = await reqBanner()
    if (result.data.code===200)
      commit('BANNERLIST',result.data.data)
  },
  async getFloor({ commit }) {
    let result = await reqFloor()
    if (result.data.code===200)
      commit('FLOORLIST',result.data.data)
  }
}
const mutations={
  CATEGORYLIST(state,value){
    state.categoryList=value
  },
  BANNERLIST(state,value) {
    state.bannerList=value
  },
  FLOORLIST(state,value){
    state.floorList=value
  }
}
const getters={}
export default {
  namespaced:true,
  state,
  actions,
  mutations,
  getters
}