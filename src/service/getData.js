import http from './http.js'
/**
 * 获取首页行情列表
 */
export const getCoinList = () => http.get('/api/market/ticker', {
})
