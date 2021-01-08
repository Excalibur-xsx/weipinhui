import request from "../utils/request"

// 注册请求
export const reqRegister = ({ phone, password, code }) => {
  return request({
    method: "POST",
    url: "/user/passport/register",
    data: {
      phone,
      password,
      code,
    },
  })
}

// 登录请求
export const reqLogin = (phone, password) => {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};
// 退出登录请求
export const reqLogout = () => {
  return request({
    method: "GET",
    url: "/user/passport/logout",
  });
};
