import Mock from "mockjs"
import hotSale from "./hotSale.json"

Mock.mock("/mock/hotSale", "get", {
  code: 200,
  "data|5": hotSale,
})
