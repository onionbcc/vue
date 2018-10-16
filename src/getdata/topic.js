// 取数据
// 引入 axios 模块( 封装的ajax 模块)
import axios from "axios";

// 基本的配置
var $http = axios.create({
	baseURL: 'https://cnodejs.org/api/v1/',
	// timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' }
});

// 获取栏目列表
function getItemList(options) {
	// 默认的参数
	var newOptions =  Object.assign({
		page:1,
		limit:5,
	}, options)
	return $http({
		// 请求的地址
		url: '/topics',
		// 请求方法
		method: 'get',
		// 参数
		params: newOptions
	});
}
// 获取文章详细信息
function getArticle(id) {
	return $http.get('/topic/'+id);
}


export { getItemList , getArticle}
