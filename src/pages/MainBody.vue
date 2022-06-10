<template>
  <div>
    <!-- 顶部导航栏 -->

    <div class="topbar">
      <ul>
        <li class="date">
          <h2>9</h2>
          六月
        </li>
        <li class="line"></li>
        <li class="title"><h1>知乎日报</h1></li>
        <li class="img"></li>
      </ul>
    </div>

    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banner.stories" :key="item.id"
          ><img :src="item.images[0]" width="100%" height="100%" class="img" />
          <!-- title标题 -->
          <section class="bannertitle">{{ item.title }}</section>
          <!-- 作者 -->
          <section class="author">作者/{{ item.hint | capitalize }}</section>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- content 内容 -->
    <div class="content" v-for="item in content.dataList" :key="item.id">
      <router-link
        :to="{
          path: '/mainbody/contentitem',
          query: {
            id: item.id,
          },
        }"
        class="link"
      >
        <div class="item">{{ item.title }}</div>
        <div class="contentAuthor">{{ item.hint }}</div>
        <img
          class="contentImg"
          :src="item.images[0]"
          width="20%"
          height="80%"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import bannerApi from "../api/banner";
import contentApi from "../api/content";

// import ContentItem from "../pages/ContentItem.vue";

export default {
  name: "MainBody",
  props: {},
  data() {
    return {
      customIndex: 0,
      banner: {
        stories: [],
      },
      content: {
        dataList: [],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getBannerData();
    this.getContentData();
  },
  watch: {},
  methods: {
    //获取当前日期年月日函数
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = ""; //分隔符
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },

    handleItemChange(index) {
      this.customIndex = index;
    },
    // 获取轮播图信息
    async getBannerData() {
      let date = this.getNowFormatDate();
      let bannerData = await bannerApi.bannerData(date);
      this.banner.stories = bannerData.data.stories;
    },
    //获取内容信息
    async getContentData() {
      let contentData = await contentApi.contentData();
      this.content.dataList = contentData.data.stories;
    },
  },
  components: {},
  filters: {
    capitalize(value) {
      let val = value.split("·", 3);
      return val[0];
    },
  },
};
</script>

<style scoped lang="css">
.topbar {
  background-color: #fff;
}
.topbar ul {
  display: flex;
  width: 100%;
  margin-top: 20px;
  z-index: 10;

  text-align: center;
  position: absolute;
}
.topbar ul li {
  margin-left: 15px;
}
.topbar ul .line {
  border-left: 1px solid #ccc;
}
.topbar ul .img {
  width: 35px;
  height: 35px;
  background-color: #ccc;
  border-radius: 50%;
  position: relative;
  left: 182px;
}
.topbar ul .date {
  font-weight: 500;
}

/* banner轮播图 */
.my-swipe .van-swipe-item {
  height: 400px;
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  background-color: #39a9ed;
  margin-top: 68px;
}
.van-swipe-item {
  color: #ccc;
  font-size: small;
}
.my-swipe .van-swipe-item image {
  width: 100%;
  height: 100%;
}
.bannertitle {
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  /* text-align: left; */
  /* margin-left: 5px; */
  backdrop-filter: blur(5px);
}
.author {
  /* margin-bottom: 5px; */
<<<<<<< HEAD
  width: 100%;
=======
>>>>>>> eec0c49fc2e4116d82156ce31bdb1ae116f7e8ef
  color: #ccc;
  font-size: small;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 15px;
  position: relative;
  bottom: 45px;
  left: 10px;
}

/* 主页内容 */
.content {
  width: 100%;
  height: 100px;
  margin: 20px 15px;
}
.item {
  width: 300px;
  font-weight: 400;
  font-size: large;
  position: absolute;
  margin-top: 15px;
}

.contentAuthor {
  position: relative;
  top: 70px;
}
.contentImg {
  position: relative;
  left: 300px;
  border-radius: 5px;
}
</style>
