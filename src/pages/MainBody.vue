<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="topbar">
      <ul class="nav">
        <li class="date">
          <p>10</p>
          六月
        </li>
        <li class="line"></li>
        <li class="top-title"><h2>知乎日报</h2></li>
        <li class="top-img"></li>
      </ul>
    </div>

    <!-- 主题内容 -->
    <div class="body">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banner.stories" :key="item.id">
          <router-link
            :to="{
              path: '/mainbody/contentitem',
              query: {
                id: item.id,
              },
            }"
          >
            <van-image cover width="100vw" :src="item.images[0]" />
            <p class="banner-font">{{ item.title }}</p>
            <p class="banner-author">作者 / {{ item.hint | capitalize }}</p>
          </router-link>
        </van-swipe-item>
      </van-swipe>

      <!-- 内容 -->
      <!-- vant的list组件 -->
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        offset="10"
        :immediate-check="false"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
      >
        <!-- <van-cell
            v-for="item in content.dataList"
            :key="item.id"
            :title="item.title"
          /> -->
        <div
          class="content"
          v-for="(item, index) in content.dataList"
          :key="index"
        >
          <router-link
            :to="{
              path: '/mainbody/contentitem',
              query: {
                id: item.id,
              },
            }"
            class="link"
          >
            <div class="contentTitle">{{ item.title }}</div>
            <div class="contentAuthor">{{ item.hint }}</div>
            <img
              class="contentImg"
              :src="item.images[0]"
              width="25%"
              height="80%"
            />
          </router-link>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import bannerApi from "../api/banner";
import contentApi from "../api/content";
import dayjs from "dayjs";

// import ContentItem from "../pages/ContentItem.vue";

export default {
  name: "MainBody",
  props: {},
  data() {
    return {
      error: false,
      current: 0,
      customIndex: 0,
      banner: {
        stories: [],
      },
      content: {
        dataList: [],
      },
      // list组件
      loading: false,
      finished: false,

      //日期参数计算
      count: 1,
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
      // console.log(bannerData.data.stories);
    },
    //获取内容信息
    async getContentData() {
      let contentData = await contentApi.contentData();
      this.content.dataList = contentData.data.stories;
    },
    bannerChange(index) {
      console.log(index);
    },

    async loadMore() {
      let date = dayjs().subtract(this.count, "day").format("YYYYMMDD");
      let contentData = await contentApi.history(date);
      console.log(contentData.data.stories);
      this.content.dataList = this.content.dataList.concat(
        contentData.data.stories
      );

      // 异步更新数据
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      // this.finished=true
    },
    onLoad() {
      this.loadMore();
      this.count += 1;
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
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.topbar {
  /* display: none; */
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 999;
}
.nav {
  text-align: center;
  position: absolute;
  display: flex;
  width: 100vw;
  height: 8vh;
  background-color: #fff;
}
.topbar .nav .date p {
  font-size: large;
  font-weight: 600;
}
.topbar .nav .date {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 5px;
}
.topbar .nav .line {
  margin-left: 20px;
  border-left: 2px solid #ccc;
  height: 40px;
  margin-top: 10px;
}
.topbar .nav .top-title h2 {
  /* position: relative;
        top: 5px; */
  line-height: 8vh;
  margin-left: 20px;
}
.topbar .nav .top-img {
  margin-top: 8px;
  margin-left: 47vw;
  right: -270px;
  background-color: #ccc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
/* 主题内容 */
.body {
  width: 100vw;
  /* height: 200vh; */
  /* background-color: aqua; */
}
.body::-webkit-scrollbar {
  display: none;
}
/* 轮播图 */
.banner {
  margin-top: 10vh;
}
.van-swipe {
  /* margin-top: 10vh; */
  height: 65vh;
}
.my-swipe .van-swipe-item {
  margin-top: 8vh;
}
.banner-title {
  height: 10vw;
}
.banner-font {
  font-size: 20px;
  font-weight: 600;
  width: 80vw;
  margin: 0 auto;
  color: #fff;
  position: relative;
  top: -100px;
  height: 14vw;

  /* //超出两行省略号 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.banner-author {
  position: relative;
  top: -95px;
  left: 35px;
  color: #ccc;
  font-size: 10px;
}

/* 内容 */
/* 主页内容 */
.content {
  width: 85vw;
  height: 100px;
  margin: 20px 15px;
}
.contentTitle {
  width: 70vw;
  font-weight: 400;
  font-size: large;
  position: absolute;
}
.contentAuthor {
  position: relative;
  top: 70px;
}
.contentImg {
  position: relative;
  left: 70vw;
  top: -2vh;
  border-radius: 5px;
}
</style>
