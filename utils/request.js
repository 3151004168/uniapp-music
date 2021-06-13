export default (url, data = {}, method = 'GET') => {
	return new Promise((resolve, reject) => {
		//初始化promise实例的状态为pending
		uni.request({
			url: 'http://localhost:3000' + url, //请求地址
			data: data, //请求参数对象
			method: method, //请求方法
			header: {
				cookie: uni.getStorageSync('cookies') ? uni.getStorageSync('cookies').find(
					item => item
					.indexOf('MUSIC_U') !== -1) : ''
			},
			success: (res) => {
				if (data.isLogin) { //登录请求,将用户cookie存入
					uni.setStorage({
						key: 'cookies',
						data: res.cookies,
					})
				}
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			}
		})
	})
}
