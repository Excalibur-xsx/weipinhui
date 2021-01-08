import mockRequest from "../utils/mockRequest"

export const getForestallBuyList = () => {
  return mockRequest({
    method: "GET",
    url: "/forestallBuyList",
  })
}
