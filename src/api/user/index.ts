import request from '@/utils/request'

// 用户注册
export const register = (data: any) => {
  return request('/cook-recipe/user/register', {
    method: 'POST',
    data
  })
}

// 用户登录
export const login = (data: any) => {
  return request('/cook-recipe/user/login', {
    method: 'POST',
    data
  })
}

// 登出
export const logout = (data: any) => {
  return request('/cook-recipe/user/logout', {
    method: 'PATCH',
    data
  })
}

// 获取当前登录用户信息
export const getUserInfo = (params: { id: string }) => {
  return request('/cook-recipe/user/info', {
    method: 'GET',
    params
  })
}

// 修改当前登录用户信息
export const setUserInfo = (data: any) => {
  return request('/cook-recipe/user/info', {
    method: 'POST',
    data
  })
}