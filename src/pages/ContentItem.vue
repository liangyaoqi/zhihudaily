<template>
  <div class="item">
    <link rel="stylesheet" :href="itemContent.css" type="text/css" />
    <van-image class="top-img" cover width="100vw" :src="itemContent.image" />
    <section class="body" v-html="itemContent.body"></section>

    <!-- 底部导航栏 -->
    <div class="footer">
      <ul class="nav">
        <li class="return" @click="back">
          <van-icon size="25" name="arrow-left" />
        </li>
        <li class="line"></li>
        <router-link
          :to="{
            path: '/comment',
            query: {
              id: this.$route.query.id,
            },
          }"
        >
          <li class="comment">
            <van-icon size="25" name="comment-o" />
          </li>
        </router-link>
        <li class="good"><van-icon size="25" name="good-job-o" /></li>
        <li class="collection"><van-icon size="25" name="star-o" /></li>
        <li class="share"><van-icon size="25" name="share-o" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import itemApi from "../api/item";

export default {
  name: "ContentItem",
  props: {},
  data() {
    return {
      itemContent: {},
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.itemContent);
    this.getItemData();
  },
  watch: {},
  methods: {
    async getItemData() {
      console.log(this.$route.query.id);
      const id = this.$route.query.id;
      let itemData = await itemApi.itemData(id);
      console.log(itemData.data.story);
      this.itemContent = itemData.data.story;
    },
    back() {
      this.$router.go(-1);
    },
  },
  components: {},
};
</script>

<style scoped lang="css">
.body {
  margin-top: -30vh;
}
/* 底部导航栏 */
.footer {
  position: fixed;
  /* line-height: 7vh; */
  top: 627px;
  /* z-index: 999; */
  background-color: #fff;
  width: 100vw;
  /* height: 7vh; */
  height: 20px;
}
.nav {
  position: relative;
  top: -10px;
  display: flex;
}
.return {
  color: black;
}
.line {
  margin-left: 15px;
  border-left: 1px solid rgb(165, 158, 158);
  color: black;
}
.comment {
  margin-left: 20px;
  color: black;
}
.good {
  margin-left: 14vw;
  color: black;
}
.collection {
  margin-left: 14vw;
  color: black;
}
.share {
  margin-left: 14vw;
  color: black;
}
</style>
