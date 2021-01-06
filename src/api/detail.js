import axios from "axios"
import request from "../utils/request"

export const getGoodDetail = (skuId)=>{
  return request({
    method: "GET",
    url: `/item/${skuId}`
  })
} 

export const getProvince = ()=>{
  return axios({
    method: "GET",
    url: "/huan/address/address"
  })
} 

export const getAddress = (areaid)=>{
  return axios({
    method: "GET",
    url: `/huan/address/address?areaid=${areaid}`
  })
} 

/* export const getProvince = ()=>{
  return axios({
    method: "GET",
    url: "/huan/getProvince"
  })
}  */

/* export const getCity = (id)=>{
  return axios({
    method: "GET",
    url: `/huan/getCity?provinceId=${id}`
  })
}  */