<template>
  <div>
    <!-- 顶部 -->
    <div class="topbar">
      <van-icon @click="back" class="return" size="20" name="arrow-left" />
      <div class="number">{{ comment.length }} 条评论</div>
    </div>
    <p class="undertop">{{ comment.length }} 条短评</p>

    <!-- 评论主体 -->
    <ul class="body">
      <li v-for="item in comment" :key="item.id">
        <CommentItem :item="item"></CommentItem>
      </li>
    </ul>
  </div>
</template>

<script>
import CommentItem from "../pages/CommentItem.vue";
import commentApi from "../api/comment";

export default {
  name: "CommentBody",
  props: {},
  data() {
    return {
      comment: [],
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getCommnet();
  },
  watch: {},
  methods: {
    async getCommnet() {
      let commentData = await commentApi.commentData(this.$route.query.id);
      console.log(commentData.data.comments);
      this.comment = commentData.data.comments;
    },
    back() {
      this.$router.go(-1);
    },
  },
  components: {
    CommentItem,
  },
};
</script>

<style scoped lang="css">
.topbar {
  display: flex;
  position: fixed;
  width: 100vw;
  height: 7vh;
  background-color: #fff;
  line-height: 7vh;
  border-bottom: 1px solid #ccc;
}
.body {
  margin-top: 8vh;
}
.return {
  margin-top: 14px;
  margin-left: 10px;
}
.undertop {
  font-size: 14px;
  width: 90vw;
  font-weight: 600;
  /* margin-top: 7vh; */
  position: relative;
  top: 48px;
  left: 10px;
}
.number {
  font-weight: 600;
  font-size: 20px;
  width: 30vw;
  margin: 0 auto;
  height: 7vh;
}
</style>
