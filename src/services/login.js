/**
 * 用户登陆验证
 */
import request from '../utils/request'
import { user as userApi } from '@/api'

export async function login (data) {
	console.log('调用request方法',data);
  return request({
    url: userApi.login,
    method: 'get',
    auth: true,
    data
  })
}
