<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  /*谷歌浏览器字体最小字体12px*/
  -webkit-text-size-adjust: 100%; /*100%/none 关闭字体大小自动调整功能*/
  /*a标签及拥有 :active伪类的元素有默认的高亮框*/
  -webkit-tap-hightlight-color: transparent;
  /*禁止文本被选中*/
  -webkit-user-select: none;
}
body {
  font-family: Helvetica;
  overflow-x: hidden;
  /*开启moblie网页快速滚动和回弹的效果*/
  -webkit-overflow-scrolling: touch;
  font-size: 12px;
}
/* 清除默认样式 */
body,
div,
ul,
li,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
select,
p,
dl,
dt,
dd,
a,
img,
button,
form,
table,
th,
tr,
td,
tbody,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  color: #333;
  text-decoration: none;
}
em,
i {
  font-style: normal;
}
ul,
li,
ol {
  list-style-type: none;
}
strong {
  font-weight: normal;
}
a,
img {
  /*阻止长按页面，弹出菜单的方法*/
  -webkit-touch-callout: none;
}
input,
textarea {
  -webkit-appearance: none;
  outline: none;
  border: none;
}
/* 设置HTML5元素为块 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
/* 取消链接高亮  */
body,
div,
ul,
li,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
select,
p,
dl,
dt,
dd,
a,
img,
button,
form,
table,
th,
tr,
td,
tbody,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
/* 移动端点击a链接出现蓝色背景问题解决 */
a:link,
a:active,
a:visited,
a:hover {
  background: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
/* 禁止缩放表单 */
input[type="submit"],
input[type="reset"],
input[type="button"],
input {
  resize: none;
  border: none;
}
</style>
