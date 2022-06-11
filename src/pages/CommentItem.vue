<template>
  <div class="item">
    <ul class="commentinside">
      <li class="img">
        <van-image round width="2rem" height="2rem" :src="item.avatar" />
      </li>
      <li class="content">
        <p class="author">{{ item.author }} <small class="more">···</small></p>
        <p class="comment">{{ item.content }}</p>
      </li>
      <ul class="buttom">
        <small class="date">{{ item.time }}</small>
        <van-icon class="good" size="20" name="good-job-o" />
        <van-icon class="comment" size="20" name="chat-o" />
      </ul>
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
    console.log(this.item);
  },
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="css">
.item {
  /* margin-top: 8vh; */
  width: 100vw;
  height: 17vh;
  /* background-color: aqua; */
  /* position: absolute; */
  border-bottom: 1px solid #ccc;
}

.item .img {
  position: relative;
  top: 10px;
  left: 10px;
}
.commentinside {
  display: flex;
  width: 80vw;
}
.buttom {
  width: 3vh !important;
}
.content {
  margin-left: 6vw;
  margin-top: 2vw;
}
.content .author {
  font-weight: 600;
  margin-bottom: 1vh;
}
.content .comment {
  width: 80vw;
  font-weight: 200;
}
.content .more {
  color: #ccc;
  position: relative;
  left: 260px;
}
.content .buttom {
  width: 80vw;
  background-color: blueviolet;
}
.buttom {
  text-align: center;
  display: flex;
  color: #ccc;
  width: 80vh;
  position: relative;
  top: 80px;
  left: -302px;
}
.buttom .date {
  height: 3vh;
}
.buttom .good {
  position: relative;
  left: 160px;
  height: 3vh;
}
.buttom .comment {
  position: relative;
  left: 195px;
  height: 3vh;
}
</style>
