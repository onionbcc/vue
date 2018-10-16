##目录
	## 项目的目录结构
	-|build/				项目打包相关的配置文件目录
	-|config/				项目开发环境的配置文件目录
	-|node_modules/			项目所依赖模块的目录
	-|src/					项目源码
	-|-|assets/				静态资源库(这里文件会被编译)
	-|-|-|sass/				放 sass 文件
	-|-|-|-|base.scss		基础样式表
	-|-|components/			组件目录
	-|-|-topics/			所有主题相关组件目录
	-|-|getdata/			请求数据的 js 文件目录
	-|-|-|topic.js			请求所有和主题相关数据
	-|-|router/				路由文件目录
	-|-|-|index.js/			路由文件
	-|-|App.vue 			根组件
	-|-|main.js 			项目的入口 js 文件
	-|static 				静态资源库(这里文件不会被编译)
	-|-|js/					js 文件
	-|-|css/				css 文件
	-|-|images/				图片
	-|index.html 			应用 html 文件
	-|package.josn    		项目的配置文件(主要放的,项目的名称\介绍\版本\依赖的模块\命令 ...)

	cmd cd到文件夹
	用cmd装cli指令，脚手架
		npm install vue-cli -g
	用cmd装装webpack，有就不用了
		npm install webpack -g
	生成项目
		vue init webpack project
##安装过程
        C:\Users\simon>vue init webpack testobj
         A newer version of vue-cli is available.
         latest: 2.9.6
         installed: 2.9.3
        ? Project name testobj
        ? Project description 好项目,就是牛逼
        ? Author jack
        ? Vue build runtime
        ? Install vue-router? Yes
        ? Use ESLint to lint your code? No
        ? Set up unit tests No
        ? Setup e2e tests with Nightwatch? No
        ? Should we run `npm install` for you after the project has been created? (recommended) no
         vue-cli · Generated "testobj".
        # Project initialization finished!
        # ========================
        To get started:
         cd testobj
         npm install (or if using yarn: yarn)
         npm run dev
装好后可以用gitbash打开
下载所有依赖
	cnpm install
	（可选）ls 查看所有
		cat package.json 找到start
		npm run dev 执行项目 
		等着最后显示localhost：8080
		打开浏览器 localhost:8080/ 
##淘宝移动布局

	http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js
	放在static下js目录下
	style里
	// 像素转化rem
		@function rem($px){
    		@return $px/75px * 1rem;
    	}
##style lang="scss"
	需要node-sass
	解析scss（需要style-loader/node-sass,下载不成功，使用cnpm下载）
	loader: "style-loader!css-loader!sass-loader"
	cnpm install sass-loader --save-dev
	cnpm install node-sass --save-dev
app里的所有页面都有
# vue 开发 webapp
webapp   html  css  js 完成的 app 

##后台 API
	https://www.vue-js.com/api/
##scss 需要node-sass 
	cnpm install node-sass --save-dev
	cnpm install sass-loader --save-dev
##static静态资源库,不会被编译
	放css js images 等等
	js:flexble.js
	引入flexble.js 下面的就不能用了    
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
##axios 简版ajax
 	#安装 cnpm install axios
	更加小巧
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

	// 引入axios模块(封装的ajax 模块)
	import axios from "axios";
##钩子函数
vue里的函数

mounted: function () {}
##懒加载
	下载	
	cnpm install vue-lazyload -save-dev
	引入
	import VueLazyload from 'vue-lazyload'

	Vue.use(VueLazyload, {
  		preLoad: 1.3,
		//加载失败显示下图
  		error: 'dist/error.png',
		//正在加载显示下面图
  		loading: 'dist/loading.gif',
  		attempt: 1
	})

	<img v-lazy="img.src" >
##滑动
	https://peachscript.github.io/vue-infinite-loading/#!/installation
	下载
	cnpm install vue-infinite-loading --save--dev
	引用
	import InfiniteLoading from 'vue-infinite-loading';

##swiper,移动端用的多
	https://www.swiper.com.cn/
	cnpm install swiper

##淘宝移动布局方案
	<!-- 引入淘宝移动布局方案 -->
    <script src="./static/js/flexble.js"></script>