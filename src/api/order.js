import request from '@utils/request';


// 获取订单交易页详情
export const gettradeRequest = function () {
  return request({
    method: 'GET',
    url: '/order/auth/trade',
  });
};

// 提交订单
export const submitOrderRequest = function ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,
}) {
  return request({
    method: 'POST',
    url: '/order/auth/submitOrder',
    params: {
      tradeNo
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    }
  });
};

// 获取订单支付信息
export const getCodeUrlRequest = function (orderId) {
  return request({
    method: 'GET',
    url: `/payment/weixin/createNative/${orderId}`,
  });
};

// 获取订单支付状态
export const getPayStatuslRequest = function (orderId) {
  return request({
    method: 'GET',
    url: `/payment/weixin/queryPayStatus/${orderId}`,
  });
};

// 获取订单列表/api/order/auth/{page}/{limit}
export const getOrderList = function (page, limit) {
  return request({
    method: 'GET',
    url: `/order/auth/${page}/${limit}`
  });
};

