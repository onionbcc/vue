<template>
    <div class="wx">
        <div class="content">
            <div class="lis">
                <h1>vue.js入门</h1>
                <hr>
                <h3>《快速入门宝典》</h3>
                <a href="">https://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>
                <h3>《7天学会vue》</h3>
                <a href="">https://github.com/alsotang/node-lessons</a>
            </div>
            <div class="lis">
                <h1>Node.js 资源</h1>
                 <hr>
                <h3>《前端资源教程》</h3>
                <a href="">https://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>
                <h3>《国内的 npm 镜像源》</h3>
                <a href="">https://github.com/alsotang/node-lessons</a>
            </div>
            <div class="lis">
                <h1>Node.js 名人</h1>
                 <hr>
                <h3>《名人堂》</h3>
                <a href="">https://github.com/cnodejs/nodeclub/wiki/名人堂</a>
                <h3>《node123-node.js中文资料导航》</h3>
                <a href="">https://github.com/youyudehexie/node123</a>
            </div>
            <div class="lis">
                <h1>Node.js 服务器</h1>
                 <hr>
                <h3>新手搭建 Node.js 服务器，推荐使用无需备案的 </h3>
                <a href="">DigitalOcean(https://www.digitalocean.com/)</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Wx',
        data () {
            return {
            msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // 引入 基础 样式
    @import "../assets/sass/base.scss";
    .content{
        width: 100%;
        margin-top: rem(160px);
        .lis{
            height: rem(500px);
            margin:0 rem(20px);
            h1{
                line-height: rem(150px);
                margin-left: rem(30px);
                color: #333;
            }
            h3{
                line-height: rem(100px);
                margin:0 rem(20px);
                font-size: rem(35px);
                color: #666
            }
            a{
                display: block;
                margin:0 rem(20px);
                font-size: rem(30px);
                color: #09c;
            }
        }
    }
    
   
</style>
