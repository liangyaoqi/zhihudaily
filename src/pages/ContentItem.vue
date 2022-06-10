<template>
  <div class="item">
<<<<<<< HEAD
    <link rel="stylesheet" :href="itemContent.css" />
    <div class="top">
      <img :src="itemContent.image" width="100%" />
      <section v-html="itemContent.body"></section>
    </div>
=======
    <link rel="stylesheet" :href="itemContent.css" type="text/css" />
    <div class="top">
      <img :src="itemContent.image" width="100%" />
      <p class="topText">{{ itemContent.title }}</p>
    </div>

    <!-- 底部固定导航栏 -->
    <div class="footer">footer</div>

    <!-- 内容 -->
    <section v-html="itemContent.body"></section>
>>>>>>> eec0c49fc2e4116d82156ce31bdb1ae116f7e8ef
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
  },
  components: {},
};
</script>

<style scoped lang="css">
.item {
  height: 100px;
  width: 100%;
  background-color: #ccc;
}
<<<<<<< HEAD
.headline .img-place-holder {
  height: 0px !important;
}
=======

>>>>>>> eec0c49fc2e4116d82156ce31bdb1ae116f7e8ef
.top {
  height: 400px;
  width: 100%;
  position: absolute;
}
.top .topText {
  position: relative;
  left: 10px;
<<<<<<< HEAD
  bottom: 20px;
=======
  bottom: 60px;
  color: #fff;
  font-size: large;
  margin: 0 20px;
}
/* 底部导航栏 */
.footer {
  z-index: 99;
  width: 100%;
  height: 30px;
  background-color: #ccc;
  position: relative;
  top: 100px;
>>>>>>> eec0c49fc2e4116d82156ce31bdb1ae116f7e8ef
}
</style>
