/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiRequest } from '@configs/axios'
// import { ICategoryProduct } from '../Categories.type'

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

export const updateCategoryProduct = (idCategory: string, bodyRequest: any) =>
  apiRequest({
    path: `/api/v2/product_categories_lvl_1/${idCategory}`,
    method: 'POST',
    bodyRequest
  })

export const updateSubCategoryProduct = (idCategory: string, bodyRequest: any) =>
  apiRequest({
    path: `/api/v2/product_categories_lvl_2/${idCategory}`,
    method: 'POST',
    bodyRequest
  })
