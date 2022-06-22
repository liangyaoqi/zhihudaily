<template>
  <div class="box">
    <div class="topbar">
      <van-icon @click="back" class="return" size="20" name="arrow-left" />
      <h2>消息</h2>
    </div>
    <span class="hint">还没有消息</span>
    <div class="holder"></div>
  </div>
</template>

<script>
export default {
  name: "MessagePage",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  components: {},
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
</style>
