/* eslint-disable unicorn/prevent-abbreviations */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getStoreById, getOrderList, IListParams, getTotalOrder, getOrderDetail } from '../api'
import { IMerchant, IOrderDetail } from '../Order.type'

export const useFetchMerchantById = (id: string) => {
  const { data, isError, isLoading } = useQuery(['order-detail', id], async () => {
    const response: ApiResponse<IMerchant> = await getStoreById(id)
    return response.data.Data
  })

  return {
    data,
    isError,
    isLoading
  }
}

export const useFetchOrderList = (params: IListParams) => {
  const { data, isError, isLoading } = useQuery(['order-list', params], async () => {
    const response: ApiResponse<object[]> = await getOrderList(params)
    return response.data.Data
  })

  return {
    isLoading,
    isError,
    data
  }
}

export const useFetchTotalOrder = () => {
  const { data, isError, isLoading } = useQuery('order-list-total', async () => {
    const response: ApiResponse<{
      all: number
      created: number
      processed: number
      completed: number
      canceled: number
    }> = await getTotalOrder()
    return response.data.Data
  })

  return {
    isLoading,
    isError,
    data
  }
}

export const useFetchOrderDetail = (id: string) => {
  const { data, isError, isLoading } = useQuery(['order-detail', id], async () => {
    const response: ApiResponse<IOrderDetail> = await getOrderDetail(id)
    return response.data.Data
  })

  return {
    isLoading,
    isError,
    data
  }
}

export default useFetchMerchantById
