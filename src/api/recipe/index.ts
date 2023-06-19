import request from '@/utils/request'

// 获取菜谱列表
export const getRecipes = (params: {
  keywords?: string
  author?: string
  labels?: string
  pageNo: number
  pageSize: number
}) => {
  return request('/cook-recipe/recipe/list', {
    method: 'GET',
    params
  })
}

export const getRecipe = (params: { id: string }) => {
  return request('/cook-recipe/recipe/info', {
    method: 'GET',
    params
  })
}