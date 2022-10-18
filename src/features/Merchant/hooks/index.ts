/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getProductList, getStoreById, getStoreList, IListParams } from '../api'
import { IMerchant } from '../Merchant.type'

export const useFetchMerchantById = (id: string) => {
  const { data, isError, isLoading, refetch } = useQuery(['merchant-detail', id], async () => {
    const response: ApiResponse<IMerchant> = await getStoreById(id)
    return response.data.Data
  })

  return {
    data,
    isError,
    refetch,
    isLoading
  }
}

export const useFetchMerchantList = (params: IListParams) => {
  const { data, isError, isLoading } = useQuery(['merchant-list', params], async () => {
    const response: ApiResponse<IMerchant[]> = await getStoreList(params)
    return response.data.Data
  })

  const optionsMerchant =
    data?.map(item => ({
      label: item.name,
      value: item.id
    })) || []

  return {
    isLoading,
    isError,
    data,
    optionsMerchant
  }
}

export const useFetchProductList = (params: IListParams, storeId: number) => {
  const { data, isError, isLoading, refetch } = useQuery(
    ['product-list', params, storeId],
    async () => {
      console.info('storeId:', storeId)
      const response: ApiResponse<object[]> = await getProductList(params, storeId)
      return response.data.Data
    }
  )

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}

export default useFetchMerchantById
