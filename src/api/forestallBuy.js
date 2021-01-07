import mockRequest from "../utils/mockRequest"

export const getHotSaleList = () => {
  return mockRequest({
    method: "GET",
    url: "/hotSale",
  })
}
