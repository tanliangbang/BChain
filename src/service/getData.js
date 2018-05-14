import http from './http.js'
/**
 * 获取首页行情列表
 */
const base = '/api/v1'
export const getCoinList = () => http.get(base + '/market/ticker', {
})

/**
 * 获取滑动验证的参数
 */
export const getGreetest = () => http.get(base + '/tokens/geeTestInit', {
})

/**
 * 发送验证码
 */
export const sendSMS = (params) => http.post(base + '/tokens/sms', params)

/**
 * 注册
 */
export const regist = (params) => http.post(base + '/tokens/mobiles', params)
