/**
 * 首页分页查询
 */
import request from '../utils/request'
import { index } from '@/api'

export async function query (data) {
  return request({
    url: index.query,
    method: 'get',
    auth: true,
    data
  })
}
