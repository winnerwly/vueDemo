/**
 * demo小案例
 */
import request from '../utils/request'
import { demo } from '@/api'

export async function query (data) {
  return request({
    url: demo.query,
    method: 'get',
    auth: true,
    data
  })
}
