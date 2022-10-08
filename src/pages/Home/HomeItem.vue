<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <GoodsRank />
    <YouLike />
    <FloorItem v-for="floor in floorList" :key="floor.id" :List="floor" />
    <ListBrand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend/TodayRecommend";
import GoodsRank from "@/pages/Home/GoodsRank/GoodsRank";
import YouLike from "@/pages/Home/YouLike/YouLike";
import FloorItem from "@/pages/Home/Floor/FloorItem";
import ListBrand from "@/pages/Home/ListBrand/ListBrand";
import { mapState } from "vuex";
export default {
  name: "HomeItem",
  components: {
    ListContainer,
    TodayRecommend,
    GoodsRank,
    YouLike,
    FloorItem,
    ListBrand,
  },
  mounted() {
    this.$store.dispatch("home/getFloor");
  },
  computed: {
    ...mapState("home", ["floorList"]),
  },
};
</script>
