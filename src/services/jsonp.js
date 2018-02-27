/**
 * demo小案例
 */
import request from '../utils/request'
import { jsonp } from '@/api'

export async function query (data) {
  return request({
    url: jsonp.query,
    method: 'get',
    auth: true,
    data
  })
}
