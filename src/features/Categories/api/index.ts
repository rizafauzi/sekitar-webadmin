import { apiRequest } from '@configs/axios'

export const getListCategoryProduct = () =>
  apiRequest({
    path: '/api/v2/product_categories_lvl_1',
    method: 'GET'
  })

export const getCategoryProductDetail = (idCategory: string) =>
  apiRequest({
    path: `/api/v2/product_categories_lvl_2/${idCategory}`,
    method: 'GET'
  })
