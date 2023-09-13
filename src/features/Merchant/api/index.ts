/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { apiRequest } from '@configs/axios'
import clearEmptyObject from '@utils/object-utils'
import { BanStoreRequest, IMerchant, IProduct } from '../Merchant.type'

export interface IListParams {
  page: number
  limit: number
  keyword?: string
}

export const getStoreById = (id: string) =>
  apiRequest({
    path: `/api/v1/stores/${id}?is_cms=true`,
    method: 'GET'
  })

export const getStoreList = ({ limit, page, keyword }: IListParams) =>
  apiRequest({
    path: keyword === 'undefined' ? '/api/v3/stores' : '/api/dashboard/stores/search',
    method: 'GET',
    params: clearEmptyObject({
      p: String(page),
      c: String(limit),
      k: keyword
    })
  })

export const getProductList = ({ limit, page, keyword }: IListParams, storeId: number) =>
  apiRequest({
    path: `/api/v2/products_category_newest/${storeId}/all/all`,
    method: 'GET',
    params: clearEmptyObject({
      p: String(page),
      c: String(limit),
      k: keyword
    })
  })

export const postEditMerchant = (id: number, bodyRequest: IMerchant) =>
  apiRequest({
    path: `/api/dashboard/stores_update/${id}`,
    method: 'POST',
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    },
    bodyRequest
  })

export const postAddProduct = (merchantId: number, bodyRequest: IProduct | FormData) =>
  apiRequest({
    path: `/api/v2/${merchantId}/products`,
    method: 'POST',
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    },
    bodyRequest
  })

export const patchEditProduct = (
  merchantId: number,
  id: number,
  bodyRequest: IProduct | FormData
) =>
  apiRequest({
    path: `/api/v2/${merchantId}/products/${id}`,
    method: 'PATCH',
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    },
    bodyRequest
  })

export const deleteProduct = (id: number) =>
  apiRequest({
    path: `/api/v1/products/${id}`,
    method: 'DELETE',
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    }
  })

export const getDownloadProduct = (id: number) =>
  apiRequest({
    path: `/api/v1/products/list_csv/${id}`,
    method: 'GET'
  })

export const getCategoryLevel1 = () =>
  apiRequest({
    path: '/api/v2/product_categories_lvl_1',
    method: 'GET'
  })

export const getCategoryLevel2 = (id: number) =>
  apiRequest({
    path: `/api/v2/product_categories_lvl_2/${id}`,
    method: 'GET'
  })

export const postUploadProduct = (fd: any) =>
  apiRequest({
    path: '/api/v1/products_import',
    bodyRequest: fd,
    method: 'POST'
  })

interface IOperationalHourPayload {
  day: number
  open_time: string
  close_time: string
}

export const putUpdateOperationalHour = (id: number, bodyRequest: IOperationalHourPayload[]) =>
  apiRequest({
    path: `/api/dashboard/stores/operation_hour/${id}`,
    bodyRequest: { operational_hours: bodyRequest },
    method: 'PUT',
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    }
  })

export const postBanStore = (bodyRequest: BanStoreRequest) =>
  apiRequest({
    path: '/api/v1/cms/merchant/banned',
    method: 'POST',
    bodyRequest,
    headers: {
      access_token: 'asdasd123qwepoi%^&vmnbweihuf716823'
    }
  })

export default getStoreById
