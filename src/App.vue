<template>
  <div>
    <HeaderItem></HeaderItem>
    <router-view></router-view>
    <FooterItem v-show="$route.meta.isShow"></FooterItem>
  </div>
</template>

<script>
import HeaderItem from "@/components/Header/HeaderItem";
import FooterItem from "@/components/Footer/FooterItem";
export default {
  name: 'App',
  components: {
    HeaderItem,
    FooterItem
  },
  mounted(){
    //通知vuex发送请求，并将数据放入仓库
    this.$store.dispatch("home/categoryList")
  }
}
</script>

<style>
</style>
