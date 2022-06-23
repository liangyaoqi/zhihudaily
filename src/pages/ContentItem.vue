<template>
  <div class="item-box">
    <link rel="stylesheet" :href="itemContent.css" type="text/css" />
    <div class="img-box">
      <p class="title">{{ itemContent.title }}</p>
      <div
        v-if="itemContent.imageHue"
        class="bag-box"
        :style="`background-image:linear-gradient(to bottom,transparent,#${itemContent.imageHue.slice(
          2
        )},#${itemContent.imageHue.slice(2)})`"
      ></div>
      <img width="100vw" :src="itemContent.image" />
    </div>
    <section class="body" v-html="itemContent.body"></section>

    <!-- 底部导航栏 -->
    <div class="footer">
      <ul class="nav">
        <li class="return" @click="back">
          <van-icon size="20" name="arrow-left" />
        </li>
        <router-link
          :to="{
            path: '/comment',
            query: {
              id: this.$route.query.id,
            },
          }"
        >
          <van-badge
            class="badge-comment"
            :content="this.extra.comments"
            color="#fff"
          >
            <li class="comment">
              <van-icon size="25" name="comment-o" />
            </li>
          </van-badge>
        </router-link>
        <van-badge
          class="badge-comment"
          color="#fff"
          :content="this.extra.popularity"
        >
          <li class="good" @click="likeChange">
            <van-icon
              v-if="like"
              size="25"
              color="rgb(21, 198, 225)"
              name="good-job"
            />
            <van-icon v-else size="25" name="good-job-o" />
          </li>
        </van-badge>
        <li class="collection" @click="collectionChange">
          <van-icon
            size="25"
            v-if="collection"
            color="rgb(21, 198, 225)"
            name="star"
          />
          <van-icon size="25" v-else name="star-o" />
        </li>
        <li class="share">
          <van-icon size="25" name="share-o" @click="showShare = true" />
          <van-share-sheet
            cancel-text=""
            v-model="showShare"
            :options="options"
          />
        </li>
      </ul>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import itemApi from "../api/item";

export default {
  name: "ContentItem",
  props: {},
  data() {
    return {
      like: false,
      collection: false,
      itemContent: {},
      extra: {},
      //展示弹出层数据
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  computed: {
    ...mapState(["ids"]),
  },
  created() {
    this.getItemData();
    this.getExtra();
    //查看是否收藏过
    this.ids.map((x) => {
      if (x == this.$route.query.id) {
        console.log("collection");
        this.collection = true;
      }
    });
  },
  mounted() {},
  watch: {
    collection: {
      handler(newValue) {
        // 监控是否收藏，取消时将id从ids中剔除
        if (!newValue) {
          this.deleteId(this.$route.query.id);
        }
      },
    },
  },
  methods: {
    ...mapMutations(["addId", "deleteId"]),
    async getItemData() {
      // console.log(this.$route.query.id);
      const id = this.$route.query.id;
      let itemData = await itemApi.itemData(id);
      this.itemContent = itemData.data.story;
    },
    async getExtra() {
      const id = this.$route.query.id;
      let extraData = await itemApi.extra(id);
      this.extra = extraData.data;
    },
    back() {
      this.$router.go(-1);
    },
    likeChange() {
      this.extra.popularity;
      this.like = !this.like;
    },
    collectionChange() {
      this.collection = !this.collection;
      const id = this.$route.query.id;
      this.addId(id);
    },
  },
};
</script>

<style scoped lang="less">
.body {
  margin-top: -30vh;
}
.item {
  margin-top: 5vh;
}
.item-box {
  margin-bottom: 5vh;
}
/* 底部导航栏 */
.footer {
  padding: 0 !important;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 6vh;
  background-color: #fff;
}
.nav {
  margin: 0 auto;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: black;
  width: 90vw;
  margin: 10px auto;
}
.nav .comment {
  color: black;
}
// 徽标样式
/deep/ .van-badge--fixed {
  color: black;
  left: 19px;
  top: -2px;
}
/deep/ .van-badge {
  transform: scale(0.7);
}
.footer .line {
  position: relative;
  width: 1vw;
  height: 3vh;
  top: -7.5vh;
  left: 9vh;
  border-left: 1px solid #ccc;
}
.nav li:nth-child(2) {
  margin-left: 30px;
}
.img-box {
  margin-top: -44vh;
}
.img-box img {
  width: 100vw;
}
.img-box .bag-box {
  width: 100vw;
  height: 30vh;
  position: relative;
  top: 57vh;
}
.img-box .title {
  color: #fff;
  font-size: 18px;
  position: relative;
  top: 83vh;
  z-index: 10;
  display: inline-block;
  width: 87vw;
  left: 6vw;
}
.active {
  color: blue;
}
/deep/ .van-share-sheet__options {
  padding: 23px 20px 16px 29px;
}

ul,
ol {
  padding: 0 !important;
}
</style>
