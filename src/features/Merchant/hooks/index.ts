/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prevent-abbreviations */

import { ApiResponse } from '@configs/axios'
import { UseMutationOptions, useMutation, useQuery } from 'react-query'
import {
  getProductList,
  getStoreById,
  getStoreList,
  getWablasToken,
  IListParams,
  Iwablas,
  postBanStore
} from '../api'
import { BanStoreRequest, IMerchant } from '../Merchant.type'

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

export const useFetchWablas = (storeId: number) => {
  const { data, isError, isLoading, refetch } = useQuery(['wablas-token', storeId], async () => {
    const response: ApiResponse<Iwablas[]> = await getWablasToken(storeId)
    return response.data?.data
  })

  return {
    isLoading,
    isError,
    data,
    refetch
  }
}

export const useToggleBanStore = (options?: UseMutationOptions<unknown, Error, BanStoreRequest>) =>
  useMutation({
    mutationFn: data => postBanStore(data),
    ...options
  })

export default useFetchMerchantById
