<template>
    <div class="all">
        <!-- 没有数据显示，有数据不显示 -->
        <loading v-if=" !items.length  "></loading>
        <ul class="items" >
            <!-- 没有数据显示，有数据不显示 -->
            <li class="item" v-for="(item,index) in items">
                <img  v-lazy="item.author.avatar_url" alt="">
                <div class="tab">
                    <!-- 置顶优先 其次是精华 最后是默认 -->
                    <div class="bj" v-if="item.top">置顶</div>
                    <div class="bj" v-else-if="item.good">精华</div>
                    <div class="mo" v-else>{{tab[item.tab]}}</div>
                </div>
                <!-- <div class="title">{{item.title}}</div> -->
                <router-link :to="'/index/show/'+item.id" tag="div" class="title">{{item.title}}</router-link>
                <div class="time">
                    <!-- <div>{{item.reply_count}}/{{item.visit_count}}</div> -->
                    <div>{{item.author.loginname}}</div>
                </div>
            </li>
        </ul>
        <div id="ding" >返回顶部</div>
    </div>
</template>

<script>
    // 引入Loading组件
    import Loading from "@/components/Loading";

    export default {
        name: "All",
        data() {
            return {
                tab: {
                    weex: "Weex",
                    share: "分享",
                    ask: "问答",
                    job: "招聘",
                    client: "客户端"
                }
            };
        },
        // 加载组件
        components: {
            // 加载
            Loading
        },
        // 接收数据
        props: ["items"]
    };
    //  置顶
    window.onscroll=function(){
		// alert(1);
		// 兼容处理
		var y=document.documentElement.scrollTop||window.pageYOffset;
        // console.log(ding);
		//判断滚动距离
		if(y>240){
            // alert(3)
            // ding.style.display='block';
			ding.style.position='fixed';
			ding.style.top='500px';
            ding.style.right='0px';
        }
        else if(y<240){
            ding.style.position='';
            // ding.display='';
        }
        ding.onclick=function(){
            $('html,body').animate({scrollTop: '0px'}, 500);
        }
    }
</script>

<style scoped lang ="scss">
    /* 引入 基础 样式 */
    @import "../../assets/sass/base.scss";
/* .all{
    width: rem(750px);
    overflow: hidden;
} */
    .items {
        width: rem(750px);
        margin-top: rem(250px);
        .item{
            width: rem(750px);
            display: flex;
            height: rem(80px);
            margin-top: rem(30px);
            border-bottom: 1px solid #ccc;
            /* background: red; */
            img {
                align-self: center;
                display: block;
                margin: 0 rem(15px);
                width: rem(65px);
                height: rem(65px);
                border-radius: rem(10px);
            }
            .tab {
                display: flex;
                width: rem(65px);
                .bj {
                    align-self: center;
                    width: rem(65px);
                    height: rem(40px);
                    background: #509030;
                    color: #fff;
                    text-align: center;
                    line-height: rem(40px);
                    border-radius: rem(8px);
                }
                .mo {
                    align-self: center;
                    width: rem(65px);
                    height: rem(40px);
                    background: #ccc;
                    color: #666;
                    text-align: center;
                    line-height: rem(40px);
                    border-radius: rem(8px);
                }
            }
            .title {
                width: rem(450px);
                font-size: rem(30px);
                color:#333;
                margin-left: rem(10px);
                height: rem(80px);
                line-height: rem(80px);
                /* // 当文本超出容器的时候 处理 */
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .time {
                width: rem(100px);
                line-height: rem(60px);
                text-align: right;
                font-size: rem(12px);
                color: #ccc;
                overflow: hidden;
            }
        }
    }
    div#ding{
        width: rem(40px);
        height: ren(100px);
        border: 1px solid #509030;
        border-radius: rem(10px);
        background: #509030;
        color: #fff;
        text-align: center;
        margin-right: 0;
        z-index:100;
        display: none;
    }
</style>
