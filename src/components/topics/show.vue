<template>
    <div class="show">
        <div class="text">
            <h2 class="title">{{title}}</h2>
            <p class="author">
                <span>发布于{{send}} &nbsp&nbsp&nbsp&nbsp</span>
                <span>{{visit_count}}次浏览</span><br>
                <span>最后一次编辑是{{last_reply_at}}</span><br>
                <span> 作者 ：{{author}}&nbsp&nbsp</span>
                <span>来自： {{tab[tab1]}} &nbsp&nbsp&nbsp&nbsp</span> 
            </p>
            <img src="avatar_url" alt="">
            <div class="content" v-html="content"></div>
        </div>
    </div>
</template>

<script>
// 引入查询数据的模块
import { getArticle } from "@/getdata/topic.js";

export default {
    name: "show",
    data() {
        return {
        // 文章标题
        title: "",
        //作者
        author: "",
        // 文章内容
        content: "",
        // tab
        tab1:"",
        tab: {
            weex: "Weex",
            share: "分享",
            ask: "问答",
            job: "招聘",
            client: "客户端"
        },
        // 时间
        last_reply_at: "",
        id: "",
        visit_count: "",
        send: ""
        };
  },
  // 钩子函数
  mounted: function() {
        // console.log(this.$route)
        // 通过 $route 变量 获取 用户 文章id
        var id = this.$route.params.id;
        // 请求 文章详情数据
        getArticle(id).then(data => {
        // console.log(data.data.data.tab);
        // console.log(data.data.data.visit_count);
        // console.log(data.data.data.id);

        // 文章标题
        this.title = data.data.data.title;
        // 作者
        this.author = data.data.data.author.loginname;
        // 设置文章内容
        this.content = data.data.data.content;
        // 访问次数
        this.visit_count = data.data.data.visit_count;
        // 发送时间
        this.send = data.data.data.last_reply_at;
        // 分类
        this.tab1 = data.data.data.tab;
        // console.log(this.tab1);
        this.last_reply_at=data.data.data.last_reply_at;

        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 引入 基础 样式 */
@import "../../assets/sass/base.scss";
.show {
  width: rem(750px);
  margin-top: rem(250px);
  overflow-x: hidden;
  .text {
    width: rem(680px);
    margin: 0 auto;
    .author {
      line-height: rem(50px);
      border-bottom: 1px solid #ccc;
      color: #ccc;
      font-size: rem(12px);
      margin-left: rem(15px);
    }
    .content {
      line-height: rem(80px);
      font-size: rem(30px);
    }
  }
}
</style>
