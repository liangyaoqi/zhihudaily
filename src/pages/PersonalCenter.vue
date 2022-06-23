<template>
  <div class="box">
    <div class="return" @click="back">
      <van-icon name="arrow-left" size="20" />
    </div>
    <div class="avatar"><img src="../assets/liuyifei.jpeg" alt="" /></div>
    <div class="name">刘亦菲</div>
    <div class="funtion">
      <van-cell @click="toCollection" title="我的收藏" is-link />
      <van-cell @click="toMessage" title="消息中心" is-link />
    </div>
    <div class="mode">
      <ul class="uls">
        <li>
          <img class="moon" src="../assets/moon.png" alt="" /><span
            >夜间模式</span
          >
        </li>
        <li @click="toSetting">
          <img class="setting" src="../assets/setting.png" alt="" /><span
            >设置</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenter",
  data() {
    return {};
  },
  methods: {
    toCollection() {
      this.$router.push("/collection");
    },
    toMessage() {
      this.$router.push("/message");
    },
    back() {
      this.$router.go(-1);
    },
    toSetting() {
      this.$router.push("/setting");
    },
  },
};
</script>

<style scoped lang="less">
.return {
  width: 95vw;
  margin: 0 auto;
  margin-top: 10px;
}
.box .avatar {
  border-radius: 50%;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  background-color: #ccc;
  margin: 0 auto;
}
.box .avatar img {
  width: 25vw;
  height: 32vw;
}
.box .name {
  text-align: center;
  width: 100vw;
  margin-top: 2vh;

  font-size: large;
}
.box .funtion {
  font-weight: 300;
}
/deep/ .van-cell {
  border-top: 1px solid rgb(232, 228, 228);
}
.uls {
  display: flex;
  position: relative;
  top: 48vh;
  justify-content: space-around;
  width: 60vw;
  margin: 0 auto;
}
.uls li {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.moon {
  width: 10vw;
  height: 10vw;
}
.setting {
  width: 10vw;
  height: 10vw;
}
</style>
