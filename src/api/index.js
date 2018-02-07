const NODE_ENV = process.env.NODE_ENV
// let url = 'http://127.0.0.1/'
let url = 'http://api.wangliuyin.top/'


// 用户信息
export const user = {
  login: url + 'getUserInfo.php'
}

export const demo = {
	query: url + 'getIndex.php'
}

export const index = {
	query: url + 'getIndexInfo.php'
}

export const demm = {
	query: '/api/demo'
}

export const jsonp = {
	query: 'http://1x8i140303.iask.in/weixin/getCode.do?callback=jsonp1'
}