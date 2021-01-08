import Mock from "mockjs"
import forestallBuyList from "./forestallBuyList.json"

Mock.mock("/mock/forestallBuyList", "get", {
  code: 200,
  data: forestallBuyList,
})
