/* eslint-disable unicorn/prevent-abbreviations */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getStoreById, getStoreList, IListParams } from '../api'
import { IMerchant } from '../Merchant.type'

export const useFetchMerchantById = (id: string) => {
  const { data, isError, isLoading } = useQuery(['merchant-detail', id], async () => {
    const response: ApiResponse<IMerchant> = await getStoreById(id)
    return response.data.Data
  })

  console.info('id:', data)
  return {
    data,
    isError,
    isLoading
  }
}

export const useFetchMerchantList = (params: IListParams) => {
  const { data, isError, isLoading } = useQuery(['merchant-list', params], async () => {
    const response: ApiResponse<object[]> = await getStoreList(params)
    return response.data.Data
  })
  // console.info('data:', data)

  return {
    isLoading,
    isError,
    data
  }
}

export default useFetchMerchantById
