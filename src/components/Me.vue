<template>
    <div class="me">
        <div class="content">
            <div class="lis">
                <h1>vue.js入门</h1> 
                <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，
                    我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>社区目前由 @alsotang 在维护，有问题请联系：<a>https://github.com/alsotang</a></p>
                <p>请关注我们的官方微博：<a>http://weibo.com/cnodejs</a></p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "Me",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入 基础 样式
@import "../assets/sass/base.scss";
.content {
  width: 100%;
  margin-top: rem(160px);
  .lis {
    height: rem(500px);
    margin: 0 rem(20px);
    h1 {
      line-height: rem(150px);
      margin-left: rem(30px);
      color: #333;
      border-bottom: 1px solid #ccc;
    }
    p {
      font-size: rem(30px);
      line-height: rem(80px);
      margin-left: rem(20px);
    }
  }
}
</style>
