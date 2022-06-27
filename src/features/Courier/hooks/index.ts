/* eslint-disable unicorn/prevent-abbreviations */

import { ApiResponse } from '@configs/axios'
import { useQuery } from 'react-query'
import { getStoreById, getCourierList, IListParams } from '../api'
import { IMerchant } from '../Courier.type'

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

export const useFetchCourierList = (params: IListParams) => {
  const { data, isError, isLoading } = useQuery(['order-list', params], async () => {
    const response: ApiResponse<object[]> = await getCourierList(params)
    return response.data.Data
  })

  return {
    isLoading,
    isError,
    data
  }
}

export const useFetchTotalOrderByStatus = () =>
  // const { data, isError, isLoading } = useQuery(['total-order'], async () => {
  //   const response: ApiResponse<object[]> = await getOrderList()
  //   return response.data.Data
  // })

  // return {
  //   isLoading,
  //   isError,
  //   data
  // }

  ({
    isLoading: false,
    isError: false,
    data: {
      all: 1000,
      created: 123,
      processed: 50,
      completed: 45,
      canceled: 20
    }
  })

export default useFetchMerchantById
