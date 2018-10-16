<template>
	<div id="app">
		<router-view/>
		<!-- 导航 -->
		<nav>
			<div class="top">
				<!-- logo -->
				<div href="" class="logo"></div>
				<!-- 搜索框 -->
				<div class="input"><span class="fdj iconfont icon-search"></span></div>
			</div>
			<!-- 底部 -->
			<ul class="footer">
				<router-link to="/" tag="li" :class="resPath=='index'?'fontColor':''">
					首页
				</router-link>
				<router-link to="/wx" tag="li" :class="resPath=='wx'?'fontColor':''">
					新手入门
				</router-link>
				<router-link to="/me" tag="li" :class="resPath=='me'?'fontColor':''">
					关于我们
				</router-link>

			</ul>
		</nav>
	</div>
</template>

<script>
	export default {

	name: 'App',
		//计算属性
		computed:{
			resPath:function(){
			var arr = this.$route.path.split('/');
			return arr[1];
			}
		},

	}
</script>

<style lang="scss">
	// 引入 基础 样式
	@import './assets/sass/base.scss';
	// #app{
	// 	width: rem(750px);
	// 	overflow: hidden;
	// }
	nav{
		// width: rem(750px);
		.top{
			position: fixed;
			top: 0;
			left: 0;
			width: rem(750px);
			height: rem(160px);
			background: #444444;
			.logo{
				width:rem(250px);
				height: rem(60px);
				margin: rem(20px) auto;
				z-index: 2;
				background:url(../static/image/logo.svg) no-repeat;
			}
			.input{
				width: rem(500px);
				height:rem(50px);
				background: #888;
				border-radius:rem(20px);
				margin:0 auto;
				// text-align: center;
				line-height: rem(50px);
				.fdj{
					margin-left:rem(10px);
				}
			}
		}
		.footer{
			position: fixed;
			bottom: 0;
			left:0;
			width: rem(750px);
			height: rem(80px);
			background:#8fbc30 ;
			display: flex;
			color:#fff;
		li{
			line-height:rem(80px);
			font-size:rem(30px);
			width:33.33%;
			text-align:center;
			&.fontColor{
				color:#315f36 ;
				background: #fff;
			}
		}
		}
	}
</style>
