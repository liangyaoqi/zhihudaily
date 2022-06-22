<template>
  <div class="box">
    <div class="topbar">
      <van-icon @click="back" class="return" size="20" name="arrow-left" />
      <h2>我的收藏</h2>
    </div>
    <div class="collection-box">
      <div class="collection" v-for="item in collections" :key="item.id">
        <router-link
          :to="{
            path: '/contentitem',
            query: {
              id: item.id,
            },
          }"
        >
          <div class="collection-content">
            <p class="title">{{ item.title }}</p>
            <img class="img" :src="item.image" alt="" />
          </div>
        </router-link>
      </div>
    </div>
    <span v-if="collections.length == 0" class="hint">还没有收藏</span>
    <div class="holder"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "CollectionPage",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["collections", "ids"]),
  },
  created() {
    this.getCollection();
  },
  mounted() {},
  watch: {},
  methods: {
    ...mapMutations(["getCollection", "clearAll"]),
    back() {
      this.$router.go(-1);
    },
    toContent() {
      this.$router.push("/");
    },
  },
  components: {},
  beforeDestroy() {
    this.clearAll();
  },
};
</script>

<style scoped lang="css">
.box {
  background-color: rgb(248, 246, 246);
}
.holder {
  height: 200vh;
}
.topbar {
  display: flex;
  text-align: center;
  position: sticky;
  top: 0px;
  height: 7vh;
  width: 100vw;
  background-color: #fff;
}
.topbar h2 {
  padding-top: 2vh;
  font-weight: 400;
  width: 80vw;
}
.topbar .return {
  font-weight: 700;
  padding-top: 2vh;
  width: 10vw;
}
/* 无收藏提示 */
.hint {
  color: rgb(214, 209, 209);
  position: relative;
  top: 45vh;
  left: 42%;
}
.collection {
  background-color: #fff;
  border-top: 1px solid rgb(219, 215, 215);
}
/* 收藏的样式 */
.collection-content {
  display: flex;
  width: 90vw;
  margin: 0 auto;
  justify-content: space-between;
  height: 13vh;
  padding-top: 2vh;
}
.collection-content .img {
  width: 17vw;
  height: 16vw;
}
.collection-content .title {
  margin-top: 13px;
  font-size: 15px;
  width: 60vw;
  /* ---- */
  color: rgb(147, 144, 144);
}
</style>
