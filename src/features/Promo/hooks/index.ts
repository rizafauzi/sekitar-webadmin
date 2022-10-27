/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable unicorn/prevent-abbreviations */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { IProduct } from '@features/Merchant/Merchant.type'
import {
  getPromoDetail,
  getPromoList,
  getPromoProducts,
  IPromoListParams,
  IPromoProductsParams
} from '../api'
import { IPromoDetail, IPromoList } from '../Promo.type'

export const useFetchPromoList = (params: IPromoListParams) => {
  const { data, isError, isLoading, refetch } = useQuery(['promo-list', params], async () => {
    const response: ApiResponse<IPromoList[]> = await getPromoList(params)
    return response.data.Data.map((item, index) => ({ ...item, index: index + 1 }))
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}

export const useFetchPromoDetail = (id: string) => {
  const { data, isError, isLoading, refetch } = useQuery(['promo-detail', id], async () => {
    const response: ApiResponse<IPromoDetail> = await getPromoDetail(id)
    return response.data.Data
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}

export const useFetchPromoProducts = (params: IPromoProductsParams) => {
  const { data, isError, isLoading } = useQuery(['promo-products', params], async () => {
    const response: ApiResponse<IProduct[]> = await getPromoProducts(params)
    return response.data.Data
  })

  const optionsProduct =
    data?.map(item => ({
      label: item.name,
      value: item.id
    })) || []

  return {
    isLoading,
    isError,
    data,
    optionsProduct
  }
}
