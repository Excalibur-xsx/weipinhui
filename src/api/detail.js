import axios from "axios"
import request from "../utils/request"

//获取商品详情数据
export const getGoodDetail = (skuId)=>{
  return request({
    method: "GET",
    url: `/item/${skuId}`
  })
} 

//获取省份数据
export const getProvince = ()=>{
  return axios({
    method: "GET",
    url: "/huan/address/address"
  })
} 

//获取市、县、街道数据
export const getAddress = (areaid)=>{
  return axios({
    method: "GET",
    url: `/huan/address/address?areaid=${areaid}`
  })
} 

//获取北京、上海、天津、重庆
export const getAddress2 = (areaid) => {
  return axios({
    method: "GET",
    url: `/huan/address/address?areaid=${areaid}&newIsBind=0`
  })
}

//加入购物车
export const addToShopcart = (skuId,skuNum)=>{
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`
  })
}

//获取购物车列表（test）
export const getShopcartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList"
  })
}