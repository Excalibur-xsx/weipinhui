import request from "../utils/request"

export function reqGetSearchList(data = {}) {
  return request({
    url: "/list",
    method: "POST",
    data,
  })
}
