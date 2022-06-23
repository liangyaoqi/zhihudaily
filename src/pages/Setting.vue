<template>
  <div class="box">
    <div class="topbar">
      <van-icon @click="back" class="return" size="20" name="arrow-left" />
      <h2>设置</h2>
    </div>
    <div class="big-font">
      <ul class="font-ul">
        <li class="top">
          <span>大字号</span
          ><van-switch
            inactive-color="#dcdee0"
            size="20"
            v-model="checked"
            @click="checked = !checked"
          />
        </li>
        <li class="tips"><span>内容页以更大字号显示</span></li>
      </ul>
    </div>
    <div class="safe">
      <van-cell title="账号与安全" is-link />
    </div>
    <div class="comment">
      <van-cell title="去好评" is-link />
      <van-cell title="去吐槽" is-link />
    </div>
    <div class="system">
      <van-cell title="清除缓存" value="19.93M" />
      <van-cell title="隐私中心" is-link />
      <van-cell title="证件中心" is-link />
      <van-cell title="知乎协议" is-link />
    </div>
    <div class="logout">
      <span>退出登陆</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingPage",
  props: {},
  data() {
    return {
      checked: false,
    };
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
.topbar {
  display: flex;
  text-align: center;
  position: sticky;
  top: 0px;
  height: 7vh;
  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid rgb(226, 223, 223);
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
.box {
  width: 100vw;
  height: 100vh;
  background-color: rgb(238, 235, 235);
}
.big-font {
  width: 100vw;
  background-color: #fff;
}
.big-font {
  width: 100vw;
  height: 10vh;
  margin-bottom: 8px;
}
.font-ul {
  margin: 0 auto;
  padding-top: 15px;
  width: 90vw;
}
.top {
  display: flex;
  justify-content: space-between;
}
.top span {
  font-size: 15px;
  font-weight: 350;
}
.tips {
  font-size: 12px;
  color: rgb(185, 182, 182);
}
.safe {
  margin-top: 8px;
}
.system {
  margin-top: 8px;
  margin-bottom: 8px;
}
.logout {
  background-color: #fff;
  width: 100vw;
  height: 8vh;
  text-align: center;
  line-height: 8vh;
}
.logout span {
  color: red;
  font-size: 15px;
}
</style>
