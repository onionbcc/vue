<template>
    <div class="index">
        <nav class="top">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/index/" tag="a" :class="(resPath == '' || resPath == undefined)?'fontColor':''">
                        全部
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link  to="/index/good" tag="a" :class="resPath=='good'?'fontColor':''">
                        精华
                        </router-link >
                    </div>
                    <!-- {{resPath}} -->
                    <div class="swiper-slide">
                        <router-link  to="/index/share" tag="a" :class="resPath=='share'?'fontColor':''">
                        分享
                        </router-link >
                    </div>

                    <div class="swiper-slide">
                        <router-link  to="/index/ask" tag="a" :class="resPath=='ask'?'fontColor':''">
                        问答
                        </router-link >
                    </div>
                    <div class="swiper-slide">
                        <router-link  to="/index/job" tag="a" :class="resPath=='job'?'fontColor':''">
                        招聘
                        </router-link >
                    </div>
                    <div class="swiper-slide">
                        <router-link  to="/index/client" tag="a" :class="resPath=='client'?'fontColor':''">
                        客户端
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
        
        <!-- 放子组件的容器 -->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
            msg: "Welcome to Your Vue.js App"
            };
        },
        //计算属性
        computed:{
            resPath:function(){
            var arr = this.$route.path.split('/');
            // console.log(arr)
                return arr[2];
            }
        },
        // 钩子函数
        mounted: function () {
            var swiper = new Swiper(".swiper-container", {
                // 显示 slide 的个数
                slidesPerView: 5,
                spaceBetween: 10
            });
        }

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入 基础 样式
@import "../assets/sass/base.scss";
// .index{
//     width: rem(750px);
//     overflow: hidden;
// }
.top {
    position: fixed;
    top: 0;
    left: 0;
    width: rem(750px);
    height: rem(80px);
    line-height: rem(100px);
    margin-top: rem(160px);
    background: #f6f6f6;
    a {
        display: block;
        width: rem(100px);
        height: rem(50px);
        padding:rem(10px);
        text-align: center;
        line-height: rem(60px);
        border-radius: rem(20px);
        color: #8fbc30;
        font-size: rem(30px);
        &.fontColor{
            color:#fff ;
            background: #8fbc30;
        }
    }
}
</style>>


