<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="topbar">
      <ul class="nav">
        <li class="date" @click="toTop">
          <p>{{ this.date.slice(6) }}</p>
          {{ this.date.slice(4, 6) | dateConverter }}月
        </li>
        <li class="line"></li>
        <li class="top-title">
          <h2
            v-if="
              (show =
                hour < 10
                  ? '早上好！'
                  : hour < 18
                  ? '好人有好报'
                  : hour < 22
                  ? '晚上好！'
                  : '早点休息~')
            "
          >
            {{ show }}
          </h2>
        </li>
        <li class="top-img" @click="toCenter">
          <img class="avtar" src="../assets/liuyifei.jpeg" alt="" />
        </li>
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
            <van-image cover width="100vw" :src="item.image" />
            <div class="banner-title">
              <p class="banner-font">{{ item.title }}</p>
              <p class="banner-author">{{ item.hint | capitalize }}</p>
            </div>
          </router-link>
          <div
            class="banner-box"
            :style="`background-image:linear-gradient(to bottom,transparent,#${item.image_hue.substr(
              2
            )},#${item.image_hue.substr(2)})`"
          ></div>
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
              path: '/contentitem',
              query: {
                id: item.id,
              },
            }"
            class="link"
          >
            <div class="box-content">
              <div class="box-left">
                <div class="contentTitle">{{ item.title }}</div>
                <div class="contentAuthor">{{ item.hint }}</div>
              </div>
              <div class="box-right">
                <van-image class="contentImg" :src="item.images[0]" />
              </div>
            </div>
          </router-link>
          <!-- 消息线 -->
          <van-divider
            v-if="content.dataList.length > 6 && (index + 1) % 6 == 0"
            content-position="left"
            :style="{
              color: '#b1acac',
              padding: '0 -6px',
            }"
            >{{ lineDate | linefilter }}</van-divider
          >
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
      show: "",
      //时间
      hour: null,
      //底线日期
      lineDate: "",
      lineCount: 1,
      // 日期
      date: "",
      error: false,
      current: 0,
      customIndex: 0,
      banner: {
        stories: [],
        topStories: [],
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
  created() {
    // const date = new Date();
    // const now = date.now();
    this.hour = parseInt(dayjs(Date.now()).hour());
  },
  mounted() {
    this.getBannerData();
    this.getContentData();
    this.lineDate = dayjs().subtract(this.lineCount, "day").format("YYYYMMDD");
  },
  watch: {},
  methods: {
    handleItemChange(index) {
      this.customIndex = index;
    },
    // 获取轮播图信息
    async getBannerData() {
      let bannerData = await bannerApi.bannerData();
      this.banner.stories = bannerData.data.top_stories;
      this.date = bannerData.data.date;
      // console.log(bannerData.data);
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

      //更新底部线条的日期
      this.lineDate = dayjs()
        .subtract(this.lineCount, "day")
        .format("YYYYMMDD");
      this.lineCount += 1;
      this.firstFlash = true;
    },
    toCenter() {
      this.$router.push("/personal");
    },
    toTop() {
      document.documentElement.scrollTop = 0;
    },
  },
  components: {},
  filters: {
    capitalize(value) {
      let val = value.split("·", 3);
      return val[0];
    },
    dateConverter(value) {
      switch (value.toString()) {
        case "01":
          return "一";
        case "02":
          return "二";
        case "03":
          return "三";
        case "04":
          return "四";
        case "05":
          return "五";
        case "06":
          return "六";
        case "07":
          return "七";
        case "08":
          return "八";
        case "09":
          return "九";
        case "10":
          return "十";
        case "11":
          return "十一";
        case "12":
          return "十二";
      }
    },
    linefilter(value) {
      if (value.slice(4, 5 > 0)) {
        // 月份大于9月
        return value.slice(4, 6) + "月" + value.slice(6, 9) + "日";
      } else {
        return value.slice(5, 6) + "月" + value.slice(6, 9) + "日";
      }
    },
  },
};
</script>

<style scoped lang="less">
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
  z-index: 99;
}
.top-img {
  overflow: hidden;
  z-index: 10;
}
.avtar {
  width: 11vw;
  height: 14vw;
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
  margin-top: 0vh;
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
.banner-box {
  position: relative;
  top: -40vh;
  width: 100vw;
  height: 40vh;
}
.banner-title {
  font-size: 20px;
  font-weight: 600;
  width: 100vw;
  margin: 0 auto;
  color: #fff;
  position: relative;
  top: -100px;
  height: 26vw;
  opacity: 0.8;
  z-index: 10;

  /* //超出两行省略号
  overflow: hidden;
  text-overflow: ellipsis;*/

  // background-image: linear-gradient(to bottom, transparent, #4fa569);
}
.banner-font {
  width: 80vw;
  margin: 0 auto;
  z-index: 10;
}
.banner-author {
  width: 80vw;
  margin: 0 auto;
  color: #ccc;
  font-size: 10px;
  margin-top: 10px;
  z-index: 10;
}
/deep/ .van-swipe__indicators {
  left: auto;
  right: 25px;
  transform: none;
  .van-swipe__indicator {
    width: 4px;
    height: 4px;
  }
  .van-swipe__indicator--active {
    width: 18px;
    border-radius: 3px;
  }
}

/* 内容 */
/* 主页内容 */
// .content {
//   /* width: 95vw;
//   height: 100px; */
//   /* margin: 20px 15px; */
//   /* margin: 0 auto; */
// }
.contentTitle {
  /* width: 70vw;
  font-weight: 400;
  position: absolute; */
  font-size: large;
  width: 60vw;
  // height: 5vh;

  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /*设置显示的行数*/
  line-clamp: 2; /*设置显示的行数*/
  -webkit-box-orient: vertical;
}
.box-content {
  width: 90vw;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
}
.box-left {
  margin-top: 10px;
  margin-left: 5px;
}
.box-right {
  overflow: hidden;
  width: 20vw;
  height: 20vw;
  border-radius: 5px;
}
.box-right .contentImg {
  width: 20vw;
  height: 20vw;
}
</style>
