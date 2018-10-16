<template>
    <div class="good">
        <!-- 列表组件 -->
        <topic-list :items="items"></topic-list>
        <infinite-loading @infinite="infiniteHandler" class="box" v-if="isLoadingShow"></infinite-loading>
        <!-- <div class="box"></div> -->
    </div>
</template>

<script>
    //引入栏目的列表组件
    import topicList from "@/components/topics/Topiclist";

    // 引入查询数据的模块
    import { getItemList } from "@/getdata/topic.js";

    // 引入滑动组件
    import InfiniteLoading from "vue-infinite-loading";

    export default {
        name: "Good",
        data() {
            return {
                // 默认列表数据
                items: [],
                // 页码 默认第一页
                page: 1,
                // 加载到最后停止加载
                isLoadingShow : true
            };
        },
        // 加载组件
        components: {
            // 列表
            topicList,
            // 滑动组件
            InfiniteLoading
        },
        
        // 方法
        methods: {
            infiniteHandler($state) {
                setTimeout(() => {
                    // 调用查收数据的函数 tab page必须写，limit有默认
                    getItemList({ tab:'good',limit: 5,page:++this.page}).then(data => {
                        // 把下一页的数据 追加到 items里
                        this.items = this.items.concat(data.data.data)
                        // 判断是不是最后的数据
                        if(data.data.data.length == 0){
                            // 没有数据 隐藏
                            this.isLoadingShow = false;
                        }else{
                            // 还有数据 请求数据
                            $state.loaded();
                        }
                    });    
                }, 1000);
            },
        },
        // 钩子函数
        mounted: function() {
            // 调用查询数据函数 第一次请求
            getItemList({ tab: "good", page: 1, limit: 10 }).then(data => {
                this.items = data.data.data;
            });
        }
    }
    
</script>

<style scoped lang="scss">
    // 引入 基础 样式
    @import "../../assets/sass/base.scss";

    .box {
        margin-bottom: rem(80px);
        // background: red;
    }
</style>
