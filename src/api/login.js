import request from '@/utils/request'

// 登录方法
export function login(username, password) {
  const data = {
    username: username,
    password: password
  }
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

export function list() {
  return request({
    url: '/goodsList',
    method: 'get'
  })
}
// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/api/user/get_center_info',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
