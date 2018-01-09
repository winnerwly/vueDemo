/**
 * demo小案例
 */
import request from '../utils/request'
import { demm } from '@/api'

export async function demms (data) {
    return request({
        url: demm.query,
        method: 'get',
        auth: true,
        data
    })
}
