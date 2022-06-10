<template>
  <div class="item">
    <link rel="stylesheet" :href="itemContent.css" />
    <div class="top">
      <img :src="itemContent.image" width="100%" />
      <section v-html="itemContent.body"></section>
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
.headline .img-place-holder {
  height: 0px !important;
}
.top {
  height: 400px;
  width: 100%;
  position: absolute;
}
.top .topText {
  position: relative;
  left: 10px;
  bottom: 20px;
}
</style>
