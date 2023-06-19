import request from '@/utils/request'

// 获取作者信息
export const getAuthorInfo = (params: { id: string }) => {
  return request('/cook-recipe/author/info', {
    method: 'GET',
    params
  })
}