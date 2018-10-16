<template>
  <div class="loading">
    <img :src="'../../static/image/123.gif'">
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style scoped lang="scss">
  // 引入 基础 样式
  @import '../assets/sass/base.scss';

	img{
		width:100%;
		display:block;
		margin-top:rem(200px);
	}


</style>
