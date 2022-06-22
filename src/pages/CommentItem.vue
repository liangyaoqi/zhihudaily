<template>
  <div class="item">
    <div class="holder"></div>
    <ul class="commentinside">
      <li class="img">
        <van-image round width="2rem" height="2rem" :src="item.avatar" />
      </li>
      <div class="comment-right">
        <li class="content">
          <div class="box-name">
            <p class="author">
              {{ item.author }}
            </p>
            <small class="more">···</small>
          </div>
          <p class="comment">{{ item.content }}</p>
        </li>
        <ul class="buttom">
          <van-badge :content="item.likes" color="#fff">
            <small class="date">{{ item.time | converter }}</small>
          </van-badge>
          <div class="buttom-right">
            <van-icon class="good" size="20" name="good-job-o" />
            <van-icon class="comment" size="20" name="chat-o" />
          </div>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    item: {
      author: "",
      avatar: "",
      content: "",
      id: null,
      likes: null,
      time: null,
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    // console.log(this.item);
  },
  watch: {},
  methods: {},
  components: {},
  filters: {
    converter(time) {
      var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      // var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes();
      // var s = date.getSeconds();
      // return Y + M + D + h + m + s;
      return M + D + h + m;
    },
  },
};
</script>

<style scoped lang="less">
.item {
  border-bottom: 1px solid #ccc;
}
.commentinside {
  margin-top: 15px;
  display: flex;
}
.box-name {
  display: flex;
  justify-content: space-between;
  width: 83vw;
}
.content {
  margin-left: 10px;
}
.content .comment {
  font-size: 12px;
  font-weight: 300;
}
.content .author {
  margin-bottom: 5px;
  font-weight: 500;
}
/* 评论底部 */
.buttom {
  margin-top: 15px;
  margin-left: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #ccc;
}
.buttom-right .comment {
  padding-left: 30px;
}

/* 点赞徽标样式 */
/deep/ .van-badge--fixed {
  color: #ccc;
  left: 59vw;
  top: 12px;
}
</style>
