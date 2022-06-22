<template>
  <div class="box">
    <!-- 顶部 -->
    <div class="topbar">
      <van-icon @click="back" class="return" size="20" name="arrow-left" />
      <div class="number">{{ comment.length + longComment.length }} 条评论</div>
    </div>

    <!-- 占位盒子 -->
    <div class="holder"></div>
    <div class="comment-box">
      <div class="long-comment" v-show="longComment.length != 0">
        <p class="long-total">{{ longComment.length }}条长评</p>
        <ul class="long-body">
          <li v-for="item in longComment" :key="item.key">
            <CommentItem :item="item"></CommentItem>
          </li>
        </ul>
      </div>
      <!-- 短评 -->
      <div class="shot-comment">
        <p class="undertop">{{ comment.length }} 条短评</p>

        <!-- 评论主体 -->
        <ul class="body">
          <li v-for="item in comment" :key="item.id">
            <CommentItem :item="item"></CommentItem>
          </li>
        </ul>
      </div>
      <!-- 评论输入区 -->
    </div>
    <div class="input">
      <ul class="input-box">
        <li><img src="" alt="" /></li>
        <li>说说你的看法...</li>
      </ul>
    </div>
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
      longComment: [],
    };
  },
  computed: {},
  created() {
    this.getCommnet();
    this.getLongComment();
  },
  mounted() {},
  watch: {},
  methods: {
    async getCommnet() {
      let commentData = await commentApi.commentData(this.$route.query.id);
      console.log("短评", commentData.data.comments);
      this.comment = commentData.data.comments;
    },
    async getLongComment() {
      let longCommentData = await commentApi.longCommentData(
        this.$route.query.id
      );
      this.longComment = longCommentData.data.comments;
      console.log("长评", longCommentData.data.comments);
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
.box {
  margin-bottom: 12vh;
}
.topbar {
  display: flex;
  position: fixed;
  width: 100vw;
  height: 7vh;
  background-color: #fff;
  line-height: 7vh;
  border-bottom: 1px solid #ccc;
  z-index: 10;
}
.holder {
  height: 7vh;
}
.long-total {
  font-size: 14px;
  width: 95vw;
  font-weight: 400;
  margin: 10px auto;
}
.comment-box {
  margin: 0 auto;
  width: 95vw;
}
.return {
  margin-top: 14px;
  margin-left: 10px;
}
.undertop {
  font-size: 14px;
  width: 95vw;
  font-weight: 400;
  margin: 10px auto;
}
.number {
  font-weight: 600;
  font-size: 20px;
  width: 30vw;
  margin: 0 auto;
  height: 7vh;
}
.shot-comment {
  margin-top: 10px;
}
.input {
  background-color: rgb(240, 240, 240);
  margin-left: -1px;
  position: fixed;
  bottom: 0px;
  height: 10vh;
  width: 100vw;
}
.input .input-box {
  margin: 15px auto;
  display: flex;
  width: 90vw;
}
.input-box li:nth-child(2) {
  color: #ccc;
}
</style>
